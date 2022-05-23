import React from 'react';
import { Box, FormControl, FormLabel, Input } from '@chakra-ui/react';

type Props = {
  className?: string;
};

export const Component: React.FC<Props> = ({ className }) => {
  return (
    <Box>
      <FormControl>
        <div>StudyTimeRecorder</div>
        <div>○分勉強したことを記録しました</div>
        <FormLabel htmlFor="minite">分</FormLabel>
        <Input id="minite" type="minite" />
        <FormLabel htmlFor="second">秒</FormLabel>
        <Input id="second" type="second" />
        <div>スタート</div>
        <div>一時停止</div>
      </FormControl>
    </Box>
  );
};

export const Root: React.FC<Props> = (props) => {
  return <Component {...props} />;
};
