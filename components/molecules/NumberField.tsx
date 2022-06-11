import React from 'react';
import {
  FormLabel,
  FormLabelProps,
  HStack,
  Input,
  InputProps,
} from '@chakra-ui/react';

type Props = {
  id: InputProps['id'];
  label: FormLabelProps['children'];
  onChange: InputProps['onChange'];
  value: InputProps['value'];
};

const Component: React.FC<Props> = ({ id, onChange, label, value }) => {
  return (
    <HStack>
      <Input
        id={id}
        onChange={onChange}
        sx={inputStyle}
        type="number"
        value={value}
      />
      <FormLabel htmlFor={id} sx={labelStyle}>
        {label}
      </FormLabel>
    </HStack>
  );
};

const labelStyle = {
  padding: '8px 0',
};

const inputStyle = {
  width: 200,
};

export const NumberField: React.FC<Props> = (props) => {
  return <Component {...props} />;
};
