import React, { useState } from 'react';
import { FormValues, initialValues, validationSchema } from '../utils/yupSchema';
import { useFormik } from 'formik';
import { Box, Button } from '@chakra-ui/react';
import { CustomInput } from './CustomInput';

import { createNewList } from '../redux/shoppingListSlice';
import { useDispatch } from 'react-redux';

export const AddList = () => {
  const dispatch = useDispatch();
  const formik = useFormik<FormValues>({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: () => {
      console.log('formik.values', formik.values);

      // dispatch(createNewList(formik.values));
    },
  });
  return (
    <>
      <Box>
        <form onSubmit={formik.handleSubmit}>
          <CustomInput<FormValues> accessor='input' type='number' formik={formik} name='input' />
          <Button type='submit'>create form</Button>
          {Array.from(Array(formik.values.input)).map((el, index) => {
            return (
              <Box key={index}>
                <CustomInput<FormValues>
                  //Type '`shoppingList.${number}.description`' is not assignable to type '"input" | "shoppingList"'.ts(2322)
                  accessor={`shoppingList.${index}.description`}
                  type='text'
                  formik={formik}
                  name={`shoppingList.${index}.description`}
                />

                <CustomInput<FormValues>
                  //Type '`shoppingList.${number}.description`' is not assignable to type '"input" | "shoppingList"'.ts(2322)
                  accessor={`shoppingList.${index}.price`}
                  type='number'
                  formik={formik}
                  name={`shoppingList.${index}.price`}
                />
                <CustomInput<FormValues>
                  //Type '`shoppingList.${number}.description`' is not assignable to type '"input" | "shoppingList"'.ts(2322)
                  accessor={`shoppingList.${index}.price`}
                  type='number'
                  formik={formik}
                  name={`shoppingList.${index}.price`}
                />
              </Box>
            );
          })}
          <Button type='submit'>add list</Button>
        </form>
      </Box>
    </>
  );
};
