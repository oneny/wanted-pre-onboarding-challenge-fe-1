import { signin } from '@/api/auth';
import axios from '@/api/axios';
import { useInput } from '@/hooks/useInput';
import { AxiosError } from 'axios';
import { FormEvent, useEffect } from 'react';
import { useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { SigninInput } from '../SigninInput';

const EMAIL_REGEX =
  /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
// 하나 이상의 문자와 하나 이상의 숫자
const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export const SigninForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, onChangeEmail, setEmail] = useInput('');
  const [validEmail, setValidEmail] = useState<boolean>(false);
  const [password, onChangePassword, setPassword] = useInput('');
  const [validPassword, setValidPassword] = useState<boolean>(false);
  const [errMsg, setErrMsg] = useState<string>('');
  const emailRef = useRef<HTMLInputElement>(null);

  const from = location?.state?.from?.pathname || '/todos';
  console.log(validEmail, validPassword)
  const canSinin = validEmail && validPassword;

  useEffect(() => {
    if (emailRef.current) emailRef.current.focus();
  }, []);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = PASSWORD_REGEX.test(password);
    setValidPassword(result);
  }, [password]);

  useEffect(() => {
    setErrMsg('');
  }, [email, password]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    if (!canSinin) return;
    e.preventDefault();
    try {
      const {
        data: { token },
      } = await axios.post('/users/login', {
        email,
        password,
      });
      localStorage.setItem(token, JSON.stringify(token));
      setEmail('');
      setPassword('');
      navigate(from);
    } catch (err: unknown) {
      if (err instanceof AxiosError<{ details: string }>) {
        setErrMsg(err.response?.data.details);
      }
    }
  };

  return (
    <section>
      <h2>SIGNIN</h2>
      <form onSubmit={handleSubmit}>
        <SigninInput
          ref={emailRef}
          id='email'
          type='email'
          placeholder='Email'
          onChange={onChangeEmail}
        />
        <SigninInput
          id='password'
          type='password'
          placeholder='Password'
          onChange={onChangePassword}
        />
        <button disabled={!canSinin}>로그인</button>
      </form>
      {errMsg && <p>{errMsg}</p>}
    </section>
  );
};
