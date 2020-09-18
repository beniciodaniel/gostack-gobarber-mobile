import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string; // garantindo que pode ser receber quaisquer chaves e valores contanto que sejam string
}

export default function getValidationErrors(error: ValidationError): Errors {
  const validationErrors: Errors = {};

  error.inner.forEach(err => {
    validationErrors[err.path] = err.message;
  });

  return validationErrors;
}
