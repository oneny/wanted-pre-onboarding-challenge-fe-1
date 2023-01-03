import React, { useCallback, useState, ChangeEvent } from 'react';

type TUseInput = [
  string,
  (e: ChangeEvent<HTMLInputElement>) => void,
  React.Dispatch<React.SetStateAction<string>>,
];

export const useInput = (initValue: string): TUseInput => {
  const [value, setValue] = useState(initValue);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  }, []);

  return [value, onChange, setValue];
};
