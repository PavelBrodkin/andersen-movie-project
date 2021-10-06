import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Wrapper, SignInFormSuccesWrapper, FormWrapper } from "./Form.style";

const SignInFormSucces = () => {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push("/signin");
    }, 1500);
  });

  return (
    <Wrapper>
      <FormWrapper>
        <SignInFormSuccesWrapper>
          <h1>Your account successfully created</h1>
        </SignInFormSuccesWrapper>
      </FormWrapper>
    </Wrapper>
  );
};

export default SignInFormSucces;
