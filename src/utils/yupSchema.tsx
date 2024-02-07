import * as yup from 'yup';

export const initialValues: FormValues = {
  input: 1,
  shoppingList: [
    // {
    //   description: '',
    //   price: 1,
    //   discountPrice: 1,
    // },
    // {
    //   description: '',
    //   price: 1,
    //   discountPrice: 1,
    // },
    // {
    //   description: '',
    //   price: 1,
    //   discountPrice: 1,
    // },
  ],
};

export const validationSchema = yup.object().shape({
  input: yup.number().required('it is required'),
  shoppingList: yup.array().of(
    yup.object().shape({
      product: yup.string().required('it is required'),
      price: yup.number().required('it is required'),
      discountPrice: yup.number().required('it is required'),
    }),
  ),
});
export type FormValues = yup.InferType<typeof validationSchema>;
