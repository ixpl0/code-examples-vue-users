import store from '@/store';

const notEmpty = (value) => (value ? null : 'должно быть заполнено');

const phone = (value) => {
  const isValid = /^\+?\d[\d-]*\d$/.test(value);

  return isValid ? null : 'может начинаться с «+», может содержать только цифры и «-»';
};

const rules = {
  notEmpty,
  phone,
};

export default (config) => {
  const validationErrors = config
    .map(({ fieldName, value, rule }) => {
      const validator = rules[rule];
      const validationResult = validator(value);

      return validationResult ? { title: fieldName, message: validationResult } : null;
    })
    .filter((el) => el);

  validationErrors.forEach((errorText) => (store.commit('addError', errorText)));

  return !validationErrors.length;
};
