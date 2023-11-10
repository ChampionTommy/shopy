'use client';

import { InputProps } from '@types';
import { ChangeEvent, forwardRef, useEffect } from 'react';

export const Input: React.FC<InputProps> = forwardRef<
HTMLInputElement,
InputProps
>((props, ref) => {
  const { label, title, id, name, register, ...rest } = props;

  useEffect(() => {
    register(name, { required: true, pattern: /^\S+@\S+$/i });
  }, [name, register]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => e.target.value;

  return (
    <fieldset className="input__block">
      <label htmlFor={id}>{label}</label>
      <input
        ref={ref}
        id={id}
        name={name}
        placeholder={title}
        {...rest} // Перемещение rest на самый низ
        onChange={handleChange}
        className="input__default"
      />
    </fieldset>
  );
});
