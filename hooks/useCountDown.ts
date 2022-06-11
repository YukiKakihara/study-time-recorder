import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Minite } from 'types/Minite';
import { Second } from 'types/Second';

export const useCountDown = (
  defaultMinite?: Minite,
  defaultSecond?: Second
): {
  countStart: () => void;
  countStop: () => void;
  isCounting: boolean;
  minite: Minite;
  second: Second;
  setMinite: Dispatch<SetStateAction<Minite>>;
  setSecond: Dispatch<SetStateAction<Second>>;
} => {
  const [isCounting, setIsCounting] = useState<boolean>(false);
  const [minite, setMinite] = useState<Minite>(defaultMinite || 0);
  const [second, setSecond] = useState<Second>(defaultSecond || 0);

  useEffect(() => {
    if (!isCounting) return;

    if (second === 0) {
      if (minite === 0) {
        countStop();
      } else {
        setTimeout(() => {
          setMinite((prevState: Minite) => (prevState - 1) as Minite);
          setSecond(59);
        }, 1000);
      }
      return;
    }

    setTimeout(
      () => setSecond((prevState: Second) => (prevState - 1) as Second),
      1000
    );
  }, [isCounting, minite, second]);

  const countStart = (): void => {
    setIsCounting(true);
  };

  const countStop = (): void => {
    setIsCounting(false);
  };

  return {
    countStart,
    countStop,
    isCounting,
    minite,
    second,
    setMinite,
    setSecond,
  };
};
