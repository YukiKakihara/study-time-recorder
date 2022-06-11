import React from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';

type Props = {
  children: ButtonProps['children'];
  isDisabled: ButtonProps['isDisabled'];
  onClick: ButtonProps['onClick'];
};

const Component: React.FC<Props> = ({ children, isDisabled, onClick }) => {
  return (
    <Button
      colorScheme="blue"
      isDisabled={isDisabled}
      onClick={onClick}
      variant="solid"
    >
      {children}
    </Button>
  );
};

export const PrimaryButton: React.FC<Props> = (props) => {
  return <Component {...props} />;
};
