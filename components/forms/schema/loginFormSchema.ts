import * as yup from 'yup';

export const loginFormSchema = yup.object({
  email: yup
    .string()
    .email('Invalid email format')
    .required('Mail is required'),
  password: yup
    .string()
    .min(5, 'The password must contain more than 5 characters')
    .required('Password is required'),
});
