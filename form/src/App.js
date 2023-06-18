import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const password = useRef({});
  password.current = watch('password', '');

  const onSubmit = (data) => {
    console.log('Valid');
    console.log(data);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Registration Form</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                {...register('name', { required: 'This field is required' })}
                type="text"
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                id="name"
                placeholder="Enter your name"
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name.message}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                {...register('email', {
                  required: 'This field is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Invalid email address',
                  },
                })}
                type="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                id="email"
                placeholder="Enter your email"
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email.message}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                {...register('password', {
                  required: 'This field is required',
                  minLength: {
                    value: 6,
                    message: 'Password must have at least 6 characters',
                  },
                })}
                type="password"
                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                id="password"
                placeholder="Enter your password"
              />
              {errors.password && (
                <div className="invalid-feedback">
                  {errors.password.message}
                </div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                {...register('confirmPassword', {
                  required: 'This field is required',
                  validate: (value) =>
                    value === password.current || 'Passwords do not match',
                })}
                type="password"
                className={`form-control ${
                  errors.confirmPassword ? 'is-invalid' : ''
                }`}
                id="confirmPassword"
                placeholder="Confirm your password"
              />
              {errors.confirmPassword && (
                <div className="invalid-feedback">
                  {errors.confirmPassword.message}
                </div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="dob" className="form-label">
                Date of Birth
              </label>
              <input
                {...register('dob', { required: 'This field is required' })}
                type="date"
                className={`form-control ${errors.dob ? 'is-invalid' : ''}`}
                id="dob"
              />
              {errors.dob && (
                <div className="invalid-feedback">{errors.dob.message}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="gender" className="form-label">
                Gender
              </label>
              <select
                {...register('gender', { required: 'This field is required' })}
                className={`form-select ${errors.gender ? 'is-invalid' : ''}`}
                id="gender"
              >
                <option value="">Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && (
                <div className="invalid-feedback">{errors.gender.message}</div>
              )}
            </div>

            <div className="mb-3 form-check">
              <input
                {...register('terms', {
                  required: 'You must accept the terms and conditions',
                })}
                type="checkbox"
                className={`form-check-input ${
                  errors.terms ? 'is-invalid' : ''
                }`}
                id="terms"
              />
              <label className="form-check-label" htmlFor="terms">
                I agree to the terms and conditions
              </label>
              {errors.terms && (
                <div className="invalid-feedback">{errors.terms.message}</div>
              )}
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
