import axios from "axios";
import { useState } from "react";
import {Spinner,DisplayUser} from '../'
import Styles from "./LookUp.module.css";
const LookUp = () => {
  const errorColor = "#ff595e";
  const validColor = "#76c893";
  const [email, setEmail] = useState("");
  const [user,setUser] = useState(null)
  const [loading,setLoading] = useState(false)
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

  const onSubmitHandler = async(e) => {
    e.preventDefault();
    setUser(null)
    setLoading(true)
    try{
    const response = await axios.get('https://admitkard-api-aushwin.herokuapp.com/users/',{params:{email}})
    console.log(response.data)
    setUser(response.data.user)

    }catch(e){
      console.log(e)
    }
    setLoading(false)
  };

  return (
    <div className={Styles.wrapper}>
      <div className={Styles.searchDiv}>
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
          <button disabled={!emailValid} className={Styles.button}>
            Search
          </button>
        </form>
      </div>
      <div className={Styles.alert}>
        {loading &&<Spinner />}
        {user && <DisplayUser user={user} />}
      </div>
    </div>
  );
};

export default LookUp;
