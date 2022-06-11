import React from 'react';
import { RootFormValues } from 'types/RootFormValues';

export const useRootForm = (
  initialValues: RootFormValues
): {
  handleMiniteChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSecondChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleStartButtonClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  handleStopButtonClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  isStartButtonDisabled: boolean;
  isStopButtonDisabled: boolean;
  minite: RootFormValues['minite'];
  second: RootFormValues['second'];
} => {
  const [values, setValues] = React.useState<RootFormValues>(initialValues);
  const [isCounting, setIsCounting] = React.useState<boolean>(false);

  const { minite, second } = values;
  const isStartButtonDisabled = isCounting;
  const isStopButtonDisabled = !isCounting;

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

  const handleStartButtonClick = (
    _e?: React.MouseEvent<HTMLButtonElement>
  ): void => {
    setIsCounting(true);
  };

  const handleStopButtonClick = (
    _e?: React.MouseEvent<HTMLButtonElement>
  ): void => {
    setIsCounting(false);
  };

  return {
    handleMiniteChange,
    handleSecondChange,
    handleStartButtonClick,
    handleStopButtonClick,
    isStartButtonDisabled,
    isStopButtonDisabled,
    minite,
    second,
  };
};
