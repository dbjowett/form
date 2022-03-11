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

  // SUBMIT SIGNIN
  async function handleSubmitSignIn(e) {
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
    if (Object.keys(errors).length > 0) {
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

  // SUBMIT CREATE ACCOUNT
  async function handleSubmitCreate(e) {
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
    if (Object.keys(errors).length > 0) {
      return;
    } else {
      setIsLoading(true);
      console.log(Object.keys(errors).length);
      const res = await fetch('https://my-json-server.typicode.com/kidsloop-test/accounts/sign-up', config);
      const data = await res.json();
      setIsLoading(false);
      toast({ title: `Welcome, new user`, description: 'your account has been created.', status: 'success', duration: 2000, isClosable: true });
      setInputs({
        emailPhone: '',
        password: '',
        password2: ''
      });
      console.log(`ID: ${data.id}`);
    }
  }

  // SUBMIT FORGOT
  async function handleSubmitForgot(e) {
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
    if (Object.keys(errors).length > 0) {
      return;
    } else {
      setIsLoading(true);
      console.log(Object.keys(errors).length);
      const res = await fetch('https://my-json-server.typicode.com/kidsloop-test/accounts/reset-password', config);
      const data = await res.json();
      setIsLoading(false);
      toast({ title: `Password Reset`, description: 'your password has been reset', status: 'success', duration: 2000, isClosable: true });
      setInputs({
        emailPhone: '',
        password: ''
      });
      console.log(`Action Completed: ${data.id}`);
    }
  }

  return { handleChange, handleSubmitSignIn, handleSubmitCreate, handleSubmitForgot, inputs, errors };
}
