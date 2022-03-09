import { useState } from 'react';

export default function useForm(setIsLoading, validateForm) {
  // const [isLoading, setIsLoading] = useState(false);
  const [inputs, setInputs] = useState({
    emailPhone: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  // SUBMIT
  async function handleSubmit(e) {
    e.preventDefault();
    setErrors(validateForm(inputs));

    if (Object.keys(errors).length !== 0) return;
    const config = {
      method: 'PATCH',
      headers: {
        body: {
          email: inputs.emailPhone,
          password: inputs.password
        }
      }
    };
    setIsLoading(true);
    const res = await fetch('https://my-json-server.typicode.com/kidsloop-test/accounts/sign-in', config);
    const data = await res.json();
    setIsLoading(false);
    console.log(`Welcome, ${data.name}`);
  }

  return { handleChange, handleSubmit, inputs, errors };
}

// 19:45
