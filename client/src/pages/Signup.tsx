import React,{useState} from "react";
import { Form, Input, Button } from "@heroui/react";
import './Signup.css'
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import { ChangeEvent, FormEvent } from "react";

export default function Signup() {
  const [action] = React.useState('');
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser] = useMutation(ADD_USER);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { input: { ...formState } },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Form
      className="w-full max-w-xs flex flex-col gap-4" id="signup-form"
      validationBehavior="native"
      onSubmit= {handleFormSubmit}
    >
      <Input id="username"
        isRequired
        errorMessage="Please enter a valid username"
        labelPlacement="outside"
        name="username"
        placeholder="Enter your username"
        type="text"
        onChange={handleChange}
      />

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
      <div className="flex gap-2" id="signup">
        <Button color="primary" type="submit" id="signup">
          Signup
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

// const Signup = () => {

//     return (
//       <main>
//         <h1>Sign Up</h1>
//       </main>
//     );
//   };
  
//   export default Signup;
  