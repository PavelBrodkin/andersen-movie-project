import React from "react";
import { ErrorMessage, useField } from "formik";
import { FromGroup } from "./Form.style";

const TextField = ({ placeholder, ...props }) => {
  const [field] = useField(props);

  return (
    <FromGroup>
      <ErrorMessage
        component="div"
        style={{ color: "red" }}
        name={field.name}
      />
      <input
        {...field}
        {...props}
        placeholder={placeholder}
        autoComplete="off"
      ></input>
    </FromGroup>
  );
};

export default TextField;
