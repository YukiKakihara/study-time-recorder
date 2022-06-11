import React from 'react';
import {
  Box,
  BoxProps,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
} from '@chakra-ui/react';
import { RootFormValues } from 'types/RootFormValues';
import { useRootForm } from 'hooks/useRootForm';

type ComponentProps = {
  handleMiniteChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSecondChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  minite: RootFormValues['minite'];
  second: RootFormValues['second'];
} & BoxProps;

const Component: React.FC<ComponentProps> = ({
  handleMiniteChange,
  handleSecondChange,
  minite,
  second,
  ...boxProps
}) => {
  return (
    <Box {...boxProps}>
      <Heading as="h1" mb={16} size="xl" textAlign="center">
        StudyTimeRecorder
      </Heading>
      <FormControl>
        {/* <div>○分勉強したことを記録しました</div> */}
        <HStack justifyContent="center" spacing={8}>
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
        <div>スタート</div>
        <div>一時停止</div>
      </FormControl>
    </Box>
  );
};

const labelStyle = {
  padding: '8px 0',
};

const inputStyle = {
  width: 200,
};

export const Root: React.FC<BoxProps> = (boxProps) => {
  const initialValues: RootFormValues = { minite: 0, second: 0 };
  const { handleMiniteChange, handleSecondChange, minite, second } =
    useRootForm(initialValues);

  return (
    <Component
      handleMiniteChange={handleMiniteChange}
      handleSecondChange={handleSecondChange}
      minite={minite}
      second={second}
      {...boxProps}
    />
  );
};
