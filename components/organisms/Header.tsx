import React from 'react';
import { Heading, HeadingProps } from '@chakra-ui/react';

type Props = {
  as: HeadingProps['as'];
  mb: HeadingProps['mb'];
  size: HeadingProps['size'];
};

const Component: React.FC<Props> = ({ as, mb, size }) => {
  return (
    <Heading as={as} mb={mb} size={size} textAlign="center">
      StudyTimeRecorder
    </Heading>
  );
};

export const Header: React.FC<Props> = (props) => {
  return <Component {...props} />;
};
