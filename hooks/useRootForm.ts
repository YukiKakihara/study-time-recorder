import { RootFormValues } from 'types/RootFormValues';
import { Minite } from 'types/Minite';
import { Second } from 'types/Second';
import { useCountDown } from 'hooks/useCountDown';

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
  const {
    countStart,
    countStop,
    isCounting,
    minite,
    second,
    setMinite,
    setSecond,
  } = useCountDown(initialValues.minite, initialValues.second);
  const isStartButtonDisabled = isCounting;
  const isStopButtonDisabled = !isCounting;

  const handleMiniteChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setMinite(Number(e.target.value) as Minite);
  };

  const handleSecondChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSecond(Number(e.target.value) as Second);
  };

  const handleStartButtonClick = (
    _e?: React.MouseEvent<HTMLButtonElement>
  ): void => {
    countStart();
  };

  const handleStopButtonClick = (
    _e?: React.MouseEvent<HTMLButtonElement>
  ): void => {
    countStop();
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
