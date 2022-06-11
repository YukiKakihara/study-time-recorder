import React from 'react';
import { RootFormValues } from 'types/RootFormValues';

export const useRootForm = (
  initialValues: RootFormValues
): {
  handleMiniteChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSecondChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  minite: RootFormValues['minite'];
  second: RootFormValues['second'];
} => {
  const [values, setValues] = React.useState<RootFormValues>(initialValues);
  const { minite, second } = values;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    keyOfRootFormValues: keyof RootFormValues
  ): void => {
    setValues({ ...values, [keyOfRootFormValues]: Number(e.target.value) });
  };
  const handleMiniteChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    handleChange(e, 'minite');
  };
  const handleSecondChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    handleChange(e, 'second');
  };

  return { handleMiniteChange, handleSecondChange, minite, second };
};
