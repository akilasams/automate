import * as yup from 'yup';

export const shopItemRegisterSchema = yup.object().shape({
  itemName: yup.string('Enter an Item Name').required('Item Name is required'),
  unitPrice: yup.string('Enter Unit Price').required('Unit Price is required'),
  modelNo: yup.string('Enter Model No.').required('Model No. required'),
  quantity: yup.string('Enter the Quantity').required('Quantity required'),
  condition: yup
    .string('Select the Condition')
    .required('Condition is required'),
  description: yup
    .string('Enter Item Decription')
    .required('Item Decription is required'),
  category: yup.string('Select the Category').required('Category is required'),
  year: yup
    .string('Enter Manufactured Year')
    .required('Manufactured Year is required'),
  country: yup
    .string('Enter Manufactured Country')
    .required('Manufactured Country is required'),
});
