import styled from "styled-components";



export const Wrapper = styled.div`
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #eee;
  position: relative;


  input {
    width: 100%;
    padding-bottom: 12px;
    display: block;
    font-family: "Abel", sans-serif;
    font-size: 16px;
    color: var(--white);
    background: none;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.25);
    transition: border linear 0.2s;
    margin-top: 10px;

    :focus {
      outline: none;
      border-bottom: 1px solid rgba(255, 255, 255, 1);
    }
  }

  button {
    display: block;
    width: 100%;
    font-family: "Abel", sans-serif;
    font-size: 18px;
    color: var(--white);
    line-height: 1.1;
    font-weight: 700;
    text-align: center;
    position: relative;
    z-index: 1;
    overflow: hidden;
    padding: 15px 45px;
    text-decoration: none;
    background: var(--medGray);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s;

    :hover {
      opacity: 0.8;
    }
  }
`;

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: var(--darkGray);
  border-radius: 10px;
  overflow: hidden;
  position: absolute;
  top: 10%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
`;

export const FormHeader = styled.div`
  background-color: var(--medGray);
  padding: 20px 30px;

  h3 {
    margin-bottom: 5px;
    font-size: 30px;
    line-height: 1.6;
    font-weight: 900;
    color: var(--white);
    text-transform: uppercase;
  }

  p {
    display: block;
    font-size: 16px;
    color: var(--white);
  }
`;

export const FormContent = styled.div`
  padding: 30px;
`;

export const FromGroup = styled.div`
  margin-bottom: 25px;
  position: relative;
`;

export const SignInFormSuccesWrapper = styled.div`
  text-align: center;
`;
