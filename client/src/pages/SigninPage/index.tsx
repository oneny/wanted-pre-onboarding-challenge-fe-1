import { SigninForm } from '@/components';
import { useTitle } from '@/hooks/useTItle';

export const SigninPage = () => {
  useTitle('LOGIN - TODOS');
  
  return (
    <SigninForm />
  );
};
