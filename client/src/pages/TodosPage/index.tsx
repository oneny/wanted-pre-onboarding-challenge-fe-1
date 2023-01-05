import { useEffect } from 'react';
import { getTodosRequest } from '@/api/todos';

export const TodosPage = () => {
  useEffect(() => {
    const getTodos = async () => {
      const data = await getTodosRequest();
      console.log(data);
    }
    getTodos();
  }, []);

  return (
    <div>TodosPage</div>
  )
}
