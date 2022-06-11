import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';
import { RootFormValues } from 'types/RootFormValues';
import { useRootForm } from 'hooks/useRootForm';
import { Header } from 'organisms/Header';
import { RootForm } from 'organisms/RootForm';

type ComponentProps = {
  handleMiniteChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSecondChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleStartButtonClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  handleStopButtonClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  isStartButtonDisabled: boolean;
  isStopButtonDisabled: boolean;
  minite: RootFormValues['minite'];
  second: RootFormValues['second'];
} & BoxProps;

const Component: React.FC<ComponentProps> = ({
  handleMiniteChange,
  handleSecondChange,
  handleStartButtonClick,
  handleStopButtonClick,
  isStartButtonDisabled,
  isStopButtonDisabled,
  minite,
  second,
  ...boxProps
}) => {
  return (
    <Box {...boxProps}>
      <Header as="h1" mb={16} size="xl" />
      <RootForm
        handleMiniteChange={handleMiniteChange}
        handleSecondChange={handleSecondChange}
        handleStartButtonClick={handleStartButtonClick}
        handleStopButtonClick={handleStopButtonClick}
        isStartButtonDisabled={isStartButtonDisabled}
        isStopButtonDisabled={isStopButtonDisabled}
        minite={minite}
        second={second}
      />
    </Box>
  );
};

export const Root: React.FC<BoxProps> = (boxProps) => {
  const initialValues: RootFormValues = { minite: 20, second: 0 };
  const {
    handleMiniteChange,
    handleSecondChange,
    handleStartButtonClick,
    handleStopButtonClick,
    isStartButtonDisabled,
    isStopButtonDisabled,
    minite,
    second,
  } = useRootForm(initialValues);

  return (
    <Component
      handleMiniteChange={handleMiniteChange}
      handleSecondChange={handleSecondChange}
      handleStartButtonClick={handleStartButtonClick}
      handleStopButtonClick={handleStopButtonClick}
      isStartButtonDisabled={isStartButtonDisabled}
      isStopButtonDisabled={isStopButtonDisabled}
      minite={minite}
      second={second}
      {...boxProps}
    />
  );
};
