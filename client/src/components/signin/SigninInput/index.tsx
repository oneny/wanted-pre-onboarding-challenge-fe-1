import { ChangeEvent, forwardRef } from 'react';

type SigninInputProps = {
  id: string;
  type: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SigninInput = forwardRef<HTMLInputElement, SigninInputProps>((props, ref) => {
  return (
    <div>
      <label htmlFor={props.id}>{props.id}</label>
      <input ref={ref} {...props} />
    </div>
  )
});
