import { useInput } from '@/hooks/useInput';
import { useEffect } from 'react';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SigninForm = () => {
  const navigate = useNavigate();
  const [email, onChangeEmail, setEmail] = useInput('');
  const [validEmail, setValidEmail] = useState<boolean>(false);
  const [password, onChangePassword, setPassword] = useInput('');
  const [validPassword, setValidPassword] = useState<boolean>(false);
  const [errMsg, setErrMsg] = useState<string>('')
  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (emailRef.current) emailRef.current.focus();
  }, []);

  return (
    <div>SignForm</div>
  )
}
