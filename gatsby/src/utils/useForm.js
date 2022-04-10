import React from 'react';

const useForm = (defaults) => {
  const [values, setValues] = React.useState(defaults);

  function updateValue(e) {
    let {value} = e.target;
    if (e.target.type === "number") {
      value = parseInt(value)
    }
    setValues({
      ...values,
      [e.target.name]: value
    })
  }

  return {
    values,
    updateValue
  };
};

export default useForm;
