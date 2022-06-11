import React from 'react';
import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
} from '@chakra-ui/react';
import { RootFormValues } from 'types/RootFormValues';

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
        <HStack>
          <Input
            id="minite"
            onChange={handleMiniteChange}
            sx={inputStyle}
            type="number"
            value={minite}
          />
          <FormLabel htmlFor="minite" sx={labelStyle}>
            分
          </FormLabel>
        </HStack>
        <HStack>
          <Input
            id="second"
            onChange={handleSecondChange}
            sx={inputStyle}
            type="number"
            value={second}
          />
          <FormLabel htmlFor="second" sx={labelStyle}>
            秒
          </FormLabel>
        </HStack>
      </HStack>
      <HStack justifyContent="center" spacing={8}>
        <Button
          colorScheme="blue"
          isDisabled={isStartButtonDisabled}
          onClick={handleStartButtonClick}
          variant="solid"
        >
          スタート
        </Button>
        <Button
          colorScheme="blue"
          isDisabled={isStopButtonDisabled}
          onClick={handleStopButtonClick}
          variant="outline"
        >
          一時停止
        </Button>
      </HStack>
    </FormControl>
  );
};

const labelStyle = {
  padding: '8px 0',
};

const inputStyle = {
  width: 200,
};

export const RootForm: React.FC<Props> = (props) => {
  return <Component {...props} />;
};
