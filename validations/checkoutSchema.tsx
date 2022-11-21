import * as yup from 'yup';

export const checkoutSchema = yup.object({
  firstName: yup.string().required('First Name is Required'),
  lastName: yup.string().required('Second Name is Required'),
  email: yup.string().email().required('Email is Required'),
  address: yup.string().required('Address is Required'),
  postalCode: yup.number().required('Postal Code is Required'),
  city: yup.string().required('City is Required'),
});
