import React from 'react';
import { Box, BoxProps, FormControl, FormLabel, Input } from '@chakra-ui/react';

const Component: React.FC<BoxProps> = (props) => {
  return (
    <Box {...props}>
      <Box fontSize={40} mb={16} textAlign="center">
        StudyTimeRecorder
      </Box>
      <FormControl>
        {/* <div>○分勉強したことを記録しました</div> */}
        <Box display="flex" justifyContent="center">
          <Input id="minite" sx={inputStyle} type="minite" />
          <FormLabel htmlFor="minite" sx={labelStyle}>
            分
          </FormLabel>
          <Input id="second" sx={inputStyle} type="second" />
          <FormLabel htmlFor="second" sx={labelStyle}>
            秒
          </FormLabel>
        </Box>
        <div>スタート</div>
        <div>一時停止</div>
      </FormControl>
    </Box>
  );
};

const labelStyle = {
  padding: '8px',
};

const inputStyle = {
  width: 200,
};

export const Root: React.FC<BoxProps> = (props) => {
  return <Component {...props} />;
};
