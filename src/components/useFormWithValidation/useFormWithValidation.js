import React, {useState} from 'react';

export function useFormWithValidation(valuesInit) {

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    name: '',
  });

  const [values, setValues] = useState(valuesInit);
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({...values, [name]: value});

    if (name === 'name') {
      if (target.validationMessage.length !== 0) {
        setErrors({...errors, [name]: "Поле может содержать только латиницу, кириллицу, пробел или дефис. Длина от 2 до 30 симв."});
      } else {
        setErrors({...errors, [name]: target.validationMessage});
      }
    } else {
      setErrors({...errors, [name]: target.validationMessage});
    }

    setIsValid(target.closest("form").checkValidity());
  };

  return {values, handleChange, errors, isValid};
}
