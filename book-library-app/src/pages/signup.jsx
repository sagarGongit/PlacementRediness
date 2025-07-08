import "./signup.css";
import { Box, Button, Input, Text, VStack } from "@chakra-ui/react";
import { userRegister } from "../reduxfiles/action";
import { useDispatch } from "react-redux";
import { Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { Toaster } from "../components/ui/toaster";

const SignUp = () => {
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
        userRegister(`${import.meta.env.VITE_BASE_URL}/api/auth/register`, userdetail)
      );
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Box className="signup">
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
                  If already have a account login{" "}
                  <Link to={"/login"}>here</Link>
                </Text>
                <Button type="submit">Sign-Up</Button>
              </VStack>
            </Form>
          </Formik>
        </Box>
      </Box>
      <Toaster />
    </>
  );
};

export default SignUp;
