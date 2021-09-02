import * as yup from 'yup';

export const userLoginSchema = yup.object().shape({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export const userRegisterSchema = yup.object().shape({
  fullName: yup
    .string('Enter your full name')
    .required('Full Name is required'),
  mobileNumber: yup
    .string('Enter your mobile number')
    // .phone('LK', true)
    .required('Mobile numer is required'),
  address: yup.string('Enter your address').required('Address is rerquired'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export const shopRegisterSchema = yup.object().shape({
  fullName: yup
    .string('Enter your full name')
    .required('Full Name is required'),
  shopName: yup
    .string('Enter your shop name')
    .required('Shop Name is required'),
  mobileNumber: yup
    .string('Enter your mobile number')
    // .phone('LK', true)
    .required('Mobile numer is required'),
  shopAddress: yup
    .string('Enter your address')
    .required('Address is rerquired'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});
