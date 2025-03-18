import React,{useState} from "react";
import { Form, Input, Button } from "@heroui/react";
import './Login.css'
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import { ChangeEvent, FormEvent } from "react";

export default function Login() {
  const [action] = React.useState('');
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login] = useMutation(LOGIN_USER);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    setFormState({
      email: '',
      password: '',
    });
  };


  return (
    <Form 
      className="e"
      validationBehavior="native"
      onSubmit={handleFormSubmit}
    >

      <Input id="email"
        isRequired
        errorMessage="Please enter a valid email"
        labelPlacement="outside"
        name="email"
        placeholder="Enter your email"
        type="email"
        onChange={handleChange}
      />

      <Input id="password"
        isRequired
        errorMessage="Please enter a valid password"
        labelPlacement="outside"
        name="password"
        placeholder="Enter your password"
        type="password"
        onChange={handleChange}
      />
      <div className="flex gap-2" id="login">
        <Button color="primary" type="submit" id="login">
          Login
        </Button>

      </div>
      {action && (
        <div className="text-small text-default-500">
          Action: <code>{action}</code>
        </div>


      )}

    </Form>
  );
}

// const Login = () => {

//     return (
//       <main>
//         <h1>Login</h1>
//       </main>
//     );
//   };
  
//   export default Login;
  