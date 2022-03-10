import { useState } from 'react';
import { useToast } from '@chakra-ui/react';

export default function useForm(setIsLoading, validateForm) {
  const toast = useToast();
  const [inputs, setInputs] = useState({
    emailPhone: '',
    password: '',
    password2: ''
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

    const config = {
      method: 'PATCH',
      headers: {
        body: {
          email: inputs.emailPhone,
          password: inputs.password
        }
      }
    };
    if (Object.keys(errors).length !== 0) {
      return;
    } else {
      console.log(Object.keys(errors).length);
      setIsLoading(true);
      const res = await fetch('https://my-json-server.typicode.com/kidsloop-test/accounts/sign-in', config);
      const data = await res.json();
      setIsLoading(false);
      toast({ title: `Welcome, ${data.name}`, description: 'You are now signed in.', status: 'success', duration: 2000, isClosable: true });
      setInputs({
        emailPhone: '',
        password: '',
        password2: ''
      });
      console.log(`Welcome, ${data.name}`);
    }
  }

  return { handleChange, handleSubmit, inputs, errors };
}
