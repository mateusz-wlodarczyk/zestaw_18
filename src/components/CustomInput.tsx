import { Flex, FormControl, FormHelperText, FormLabel, Input } from '@chakra-ui/react';
import { FormikProps } from 'formik';
import React from 'react';

export const CustomInput = <T,>({
  type,
  accessor,
  formik,
  name,
}: {
  type: string;
  name: string;
  accessor: keyof T & string;
  formik: FormikProps<T>;
}) => {
  //do dyskusji:
  const typeOfValue = type === 'string' ? 'string' : 3;
  return (
    <FormControl>
      <Flex>
        <FormLabel sx={{ w: '150px' }}>{accessor}</FormLabel>
        <Input
          type={type}
          id={accessor}
          name={name}
          value={formik.values[accessor] as typeof typeOfValue}
          onChange={formik.handleChange}
        />
      </Flex>
      <FormHelperText>
        {formik.touched[accessor] && formik.errors[accessor]
          ? (formik.errors[accessor] as string) || ''
          : ''}
      </FormHelperText>
    </FormControl>
  );
};
