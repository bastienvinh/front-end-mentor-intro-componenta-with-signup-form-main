import "./Form.scss"

import { useForm , useField } from "react-form"


function validateNotEmpty(name: any, instance: any) {
  if (!name) {
    return "First Name cannot be empty"
  }

  return false
}

function validateEmail(email: string, instance: any) {
  console.log(instance)

  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  if (!emailRegex.test(email)) {
    return "Look like this is not an email"
  }

  return false
}

function FirstNameField() {
  const {
    meta: { error, isTouched, isValidating },
    getInputProps
  } = useField("firstname", {
    validate: validateNotEmpty
  });

  return (
    <div className={`row ${error ? "error" : ""}`}>
      <input {...getInputProps()} placeholder="First Name" />{" "}
      {isValidating ? (
        <div className="waiting-feedback">validating ...</div>
      ) : isTouched && error ? (
        <div className="invalid-feedback">{error}</div>
      ) : null}
    </div>
  );
}

function LastNameField() {
  const {
    meta: { error, isTouched, isValidating },
    getInputProps
  } = useField("lastname", {
    validate: validateNotEmpty
  });

  return (
    <div className={`row ${error ? "error" : ""}`}>
      <input {...getInputProps()} placeholder="Last Name" />{" "}
      {isValidating ? (
        <div className="waiting-feedback">validating ...</div>
      ) : isTouched && error ? (
        <div className="invalid-feedback">{error}</div>
      ) : null}
    </div>
  );
}

function EmailField() {
  const {
    meta: { error, isTouched, isValidating },
    getInputProps
  } = useField("email", {
    validate: validateEmail
  });

  return (
    <div className={`row ${error ? "error" : ""}`}>
      <input {...getInputProps()} type="email" placeholder="Email" />{" "}
      {isValidating ? (
        <div className="waiting-feedback">validating ...</div>
      ) : isTouched && error ? (
        <div className="invalid-feedback">{error}</div>
      ) : null}
    </div>
  );
}

function PassswordField() {
  const {
    meta: { error, isTouched, isValidating },
    getInputProps
  } = useField("password", {
    validate: validateNotEmpty
  });

  return (
    <div className={`row ${error ? "error" : ""}`}>
      <input {...getInputProps()} type="password" placeholder="Password" />{" "}
      {isValidating ? (
        <div className="waiting-feedback">validating ...</div>
      ) : isTouched && error ? (
        <div className="invalid-feedback">{error}</div>
      ) : null}
    </div>
  );
}

const Form = () => {

  const {
    Form,
    meta: { isSubmitting, canSubmit }
  } = useForm({
    onSubmit: async (values: any, instance: any) => {
      console.log(values)
      console.log("Huzzah!");
    },
    debugForm: false
  });

  return (
    // 540 / 560
    <Form>
      <FirstNameField />
      <LastNameField />
      <EmailField />
      <PassswordField />
      <div className="bottom-form">
        <button type="submit">CLAIM YOUR FREE TRIAL</button>
        <p className="agreement-text">By clicking the button, you are agreeing to our <a href="#">Terms and Services</a></p>
      </div>
    </Form>
  )
}

export default Form