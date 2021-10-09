import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "./TextField";
import { signin } from "../../store/Slices/authSlice";
import { useHistory } from "react-router-dom";

// Styles
import {
  Wrapper,
  FormWrapper,
  FormHeader,
  FormContent,
  FromGroup,
} from "./Form.style";

const SignInForm = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.auth.users);
  const history = useHistory();

  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(4, "Password must be at least 4 characters ")
      .required("Password is required"),
  });
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validate}
      onSubmit={(values, { setFieldError }) => {
        if (!users[values.email]) {
          setFieldError("email", "There is no user with such an email");
        } else if (users[values.email].password !== values.password) {
          setFieldError("password", "The password is not correct");
        } else {
          dispatch(signin(values));
          history.push("/");
        }
      }}
    >
      {(errors, touched) => (
        <Wrapper>
          <FormWrapper>
            <FormHeader>
              <h3>Sign in</h3>
              <p>Login using your username and password</p>
            </FormHeader>
            <FormContent>
              <Form>
                <TextField
                  name="email"
                  type="email"
                  placeholder="Enter your email..."
                  errors={errors}
                  touched={touched}
                />
                <TextField
                  name="password"
                  type="password"
                  placeholder="Enter your password..."
                  errors={errors}
                  touched={touched}
                />
                <FromGroup>
                  <button type="submit">Login</button>
                </FromGroup>
              </Form>
            </FormContent>
          </FormWrapper>
        </Wrapper>
      )}
    </Formik>
  );
};

export default SignInForm;
