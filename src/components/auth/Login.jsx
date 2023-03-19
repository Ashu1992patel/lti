import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const count = useSelector((state) => state.count);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handleLoginFormSubmit = (event) => {
    event.preventDefault();
    console.log("handleLoginFormSubmit", email, password);
    validateLogin();
  };

  const validateLogin = async () => {
    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      if (!response.ok) {
        console.log(response.json());
        const data = await response.json();
        setErrorMessage(data.message);
      } else {
        console.log("success: ", response);
        // Handle successful login
      }
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again.");
    }
  };
  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <Form onSubmit={handleLoginFormSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            {errorMessage && <div className="error">{errorMessage}</div>}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </>
  );
}

export default Login;
