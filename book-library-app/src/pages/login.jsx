import "./login.css";
import { userLogin } from "../reduxfiles/action";
import { Box, Button, Input, Text, VStack } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Toaster } from "../components/ui/toaster";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userdetail = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    try {
      await dispatch(
        userLogin(`${import.meta.env.VITE_BASE_URL}/api/auth/login`, userdetail)
      );
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Box className="login">
        <Box shadow={"md"}>
          <Formik>
            <Form onSubmit={handleSubmit}>
              <VStack spaceY={5}>
                <Input
                  type="email"
                  placeholder="Email..."
                  id="email"
                  required
                />
                <Input
                  type="password"
                  placeholder="Password..."
                  id="password"
                  required
                />
                <Text>
                  If you have not any account register{" "}
                  <Link to={"/register"}>here</Link>
                </Text>
                <Button type="submit">Login</Button>
              </VStack>
            </Form>
          </Formik>
        </Box>
      </Box>
      <Toaster />
    </>
  );
};

export default Login;
