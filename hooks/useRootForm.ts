import { useEffect } from 'react';
import { RootFormValues } from 'types/RootFormValues';
import { Minite } from 'types/Minite';
import { Second } from 'types/Second';
import { useCountDown } from 'hooks/useCountDown';
import { formatDate } from 'utils/formatDate';

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
  const { minite: isSetMinite, second: isSetSecond } = initialValues;
  const {
    countStart,
    countStop,
    isCounting,
    minite,
    second,
    setMinite,
    setSecond,
  } = useCountDown(isSetMinite, isSetSecond);

  useEffect(() => {
    if (!isCounting && minite === 0 && second === 0) {
      const apiPath = '/api/add_memo';
      const date = formatDate(new Date());
      const title = `${isSetMinite}分${isSetSecond}秒勉強した`;
      const body = JSON.stringify({
        date,
        title,
      });
      const method = 'POST';

      fetch(apiPath, {
        body,
        method,
      });
    }
  }, [isCounting, minite, second, isSetMinite, isSetSecond]);

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
