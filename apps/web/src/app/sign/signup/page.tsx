'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Icon16View, Icon16ViewOutline } from '@vkontakte/icons';
import { CheckStatus } from 'components';
import Link from 'next/link';

export default function Signup() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => setPasswordShown(!passwordShown);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data: any) => data;

  return (
    <div className="sign sign__wrapper">
      <div className="sign__block">
        <div className="form">
          <div className="form__header">
            <h2>Sign Up</h2>
          </div>
          <form className="sign__form" onSubmit={handleSubmit(onSubmit)}>
            <div className="input__block">
              <label htmlFor="email">Email</label>
              <input
                className="form__input input__default"
                type="text"
                placeholder="Email address"
                {...register('email', {
                  required: 'Email is required',
                  validate: {
                    matchPattern: (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
                      .test(v)
                      || 'Email address must be a valid address',
                  },
                })}
              />
            </div>
            <div className="input__block input__block_password">
              <label htmlFor="password">Password</label>
              <input
                className="form__input input__default"
                type={passwordShown ? 'text' : 'password'}
                placeholder="Enter password"
                {...register('password', {
                  required: 'Password is required',
                  maxLength: {
                    value: 255,
                    message: 'Password exceeds maximum length',
                  },
                  minLength: {
                    value: 8,
                    message: 'Password must be at least 8 characters',
                  },
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i,
                    message:
                      'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character',
                  },
                })}
              />
              <span
                className="input__block_password--icon"
                onClick={togglePassword}
                role="button"
                tabIndex={0}
              >
                {passwordShown
                  ? <Icon16View color="#2B77EB" width={17} />
                  : <Icon16ViewOutline color="#A3A3A3" width={17} />}
              </span>
            </div>
            {errors.password && (
              <>
                {errors.password.type === 'required' && (
                  <CheckStatus title={errors.password?.message} />
                )}
                {errors.password.type === 'maxLength' && (
                  <CheckStatus title={errors.password?.message} />
                )}
                {errors.password.type === 'minLength' && (
                  <CheckStatus title={errors.password?.message} />
                )}
                {errors.password.type === 'pattern' && (
                  <CheckStatus title={errors.password?.message} />
                )}
              </>
            )}
            <button className="button button__default" type="submit">
              Create Account
            </button>
          </form>
          <div className="form__footer">
            <span>Have an account?</span>
            <Link href="/signin">
              <span>Sign In</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="sign__preview">
        <Image
          src="/images/shopy_preview.png"
          alt="shopy_preview"
          width={590}
          height={890}
          priority
        />
      </div>
    </div>
  );
}
