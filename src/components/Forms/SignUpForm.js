import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../store/Slices/authSlice.js";
import { Formik, Form } from "formik";
import TextField from "./TextField.js";
import * as Yup from "yup";
import SignInFormSucces from "./SignUpFormSucces.js";

// Styles
import {
  Wrapper,
  FormWrapper,
  FormHeader,
  FormContent,
  FromGroup,
} from "./Form.style.js";

const SignUpFormik = ({ setFormIsSubmitted }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.auth.users);

  const validate = Yup.object({
    name: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Name is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(4, "Password must be at least 4 characters ")
      .required("Password is required"),
  });
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={validate}
      onSubmit={(values, { setFieldError }) => {
        if (users[values.email]) {
          setFieldError("email", "A user with this email already exists");
        } else {
          dispatch(signup(values));
          setFormIsSubmitted(true);
        }
      }}
    >
      {(errors, touched) => (
        <Wrapper>
          <FormWrapper>
            <FormHeader>
              <h3>Personal details</h3>
              <p>Fill up the form for registration</p>
            </FormHeader>
            <FormContent>
              <Form>
                <TextField
                  name="name"
                  type="text"
                  placeholder="Enter your name..."
                  errors={errors}
                  touched={touched}
                />
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
                  <button type="submit">Registration</button>
                </FromGroup>
              </Form>
            </FormContent>
          </FormWrapper>
        </Wrapper>
      )}
    </Formik>
  );
};

const SignUpForm = () => {
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  return (
    <>
      {!formIsSubmitted ? (
        <SignUpFormik setFormIsSubmitted={setFormIsSubmitted} />
      ) : (
        <SignInFormSucces />
      )}
    </>
  );
};

export default SignUpForm;
