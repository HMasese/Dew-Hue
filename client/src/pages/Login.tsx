import React from "react";
import { Form, Input, Button } from "@heroui/react";
import { useNavigate } from "react-router-dom";
import './Login.css'


export default function Login() {
  const [action, setAction] = React.useState('');
  const navigate = useNavigate();

  return (
    <Form
      className="e"
      validationBehavior="native"
      onSubmit={async (e) => {
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.currentTarget));
        try {
          const response = await fetch("/api/patient/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
          const result = await response.json();
          console.log(result);

          if (response.ok) {
            localStorage.setItem("token", result.token); // Store the token
            setAction(result.message || "Success");

            if (result.redirect) {
              navigate(result.redirect); // Redirect to User page
            }
          } else {
            setAction(result.message || "Login failed");
          }
        } catch (error) {
          console.error("Error:", error);
          setAction("Error submitting form");
        }
      }}
    >

      <Input id="email"
        isRequired
        errorMessage="Please enter a valid email"
        labelPlacement="outside"
        name="email"
        placeholder="Enter your email"
        type="email"
      />

      <Input id="password"
        isRequired
        errorMessage="Please enter a valid password"
        labelPlacement="outside"
        name="password"
        placeholder="Enter your password"
        type="password"
      />
      <div className="flex gap-2" id="login">
        <Button color="primary" type="submit" id="login">
          Login
        </Button>

      </div>
      {/* {action && (
        <div className="text-small text-default-500">
          Action: <code>{action}</code>
        </div>


      )} */}

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
  