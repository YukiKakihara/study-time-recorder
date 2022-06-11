import React from 'react';
import { FormControl, FormLabel, HStack, Input } from '@chakra-ui/react';
import { RootFormValues } from 'types/RootFormValues';
import { NumberField } from 'molecules/NumberField';
import { PrimaryButton } from 'molecules/PrimaryButton';
import { SecondaryButton } from 'molecules/SecondaryButton';

type Props = {
  handleMiniteChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSecondChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleStartButtonClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  handleStopButtonClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  isStartButtonDisabled: boolean;
  isStopButtonDisabled: boolean;
  minite: RootFormValues['minite'];
  second: RootFormValues['second'];
};

const Component: React.FC<Props> = ({
  handleMiniteChange,
  handleSecondChange,
  handleStartButtonClick,
  handleStopButtonClick,
  isStartButtonDisabled,
  isStopButtonDisabled,
  minite,
  second,
}) => {
  return (
    <FormControl>
      <HStack justifyContent="center" mb={8} spacing={8}>
        <NumberField
          id="minite"
          onChange={handleMiniteChange}
          label="分"
          value={minite}
        />
        <NumberField
          id="second"
          onChange={handleSecondChange}
          label="秒"
          value={second}
        />
      </HStack>
      <HStack justifyContent="center" spacing={8}>
        <PrimaryButton
          isDisabled={isStartButtonDisabled}
          onClick={handleStartButtonClick}
        >
          スタート
        </PrimaryButton>
        <SecondaryButton
          isDisabled={isStopButtonDisabled}
          onClick={handleStopButtonClick}
        >
          一時停止
        </SecondaryButton>
      </HStack>
    </FormControl>
  );
};

export const RootForm: React.FC<Props> = (props) => {
  return <Component {...props} />;
};
