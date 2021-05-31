export const validateEmail = (value: string) =>
  value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) ||
  'El email no es válido';

export const validatePassword = (value: string) =>
  value.length >= 8 || 'La contraseña debe tener 8 o más caracteres';
