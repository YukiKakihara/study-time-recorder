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

type Values = {
  minite: number;
  second: number;
};

type ComponentProps = {
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    valueKey: keyof Values
  ) => void;
  values: Values;
} & BoxProps;

const Component: React.FC<ComponentProps> = ({
  handleChange,
  values,
  ...boxProps
}) => {
  const { minite, second } = values;

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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(e, 'minite')
              }
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(e, 'second')
              }
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
  const initialValues: Values = { minite: 0, second: 0 };
  const [values, setValues] = React.useState<Values>(initialValues);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    valueKey: keyof Values
  ): void => {
    setValues({ ...values, [valueKey]: Number(e.target.value) });
  };

  return (
    <Component handleChange={handleChange} values={values} {...boxProps} />
  );
};
