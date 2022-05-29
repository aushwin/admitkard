import { useState } from "react";
import Styles from "./LookUp.module.css";
const LookUp = () => {
  const errorColor = "#ff595e";
  const validColor = "#76c893";
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState("");
  const emailValidationRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const onEmailChangeHandler = (e) => {
    setEmail(e.target.value);
    setEmailValid(emailValidationRegex.test(e.target.value));
  };


  const styleError = (valid) => {
    return valid !== ""
      ? valid
        ? { borderColor: validColor }
        : { borderColor: errorColor }
      : undefined;
  };

  const onSubmitHandler = (e)=>{
    e.preventDefault()
    
  }


  return (
    <div className={Styles.wrapper}>
      <div className={Styles.message}>Find Users</div>
      <form className={Styles.form} onSubmit={onSubmitHandler}>
        <input
          style={styleError(emailValid)}
          type="email"
          placeholder="Email"
          value={email}
          onChange={onEmailChangeHandler}
          required
        />
        <button disabled={!emailValid}  className={Styles.button}>
        Search
      </button>
      </form>
    </div>
  );
};

export default LookUp;
