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

const Component: React.FC<BoxProps> = (props) => {
  return (
    <Box {...props}>
      <Heading as="h1" mb={16} size="xl" textAlign="center">
        StudyTimeRecorder
      </Heading>
      <FormControl>
        {/* <div>○分勉強したことを記録しました</div> */}
        <HStack justifyContent="center" spacing={8}>
          <HStack>
            <Input id="minite" sx={inputStyle} type="minite" />
            <FormLabel htmlFor="minite" sx={labelStyle}>
              分
            </FormLabel>
          </HStack>
          <HStack>
            <Input id="second" sx={inputStyle} type="second" />
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

export const Root: React.FC<BoxProps> = (props) => {
  return <Component {...props} />;
};
