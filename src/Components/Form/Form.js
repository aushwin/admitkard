import Styles from "./Form.module.css";
import Select from "react-select";
import axios from "axios";
import {Spinner} from '../'
import { colourStyles,colourStylesValid, options } from "./multi-select-config";
import { useEffect, useRef, useState } from "react";
const Form = () => {
  const errorColor = '#ff595e'
  const validColor = '#76c893'
  const [numberFlag,setNumberFlag] = useState(0)
  const [formValid,setFormValid] = useState(false)
  const formRef = useRef()
  //Name 
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [number,setNumber] = useState('')
  const [course,setCourse] = useState('')
  const [country,setCountry] = useState('')
  const [dob,setDob] = useState(' ')
  const [alert,setAlert] = useState(null)
  const [loading,setLoading] = useState(false)
  const [nameValid,setNameValid] = useState('')
  const [emailValid,setEmailValid] = useState('')
  const [numberValid,setNumberValid] = useState('')
  const [courseValid,setCourseValid] = useState('')
  const [countryValid,setCountryValid] = useState('')
  const [dobValid,setDobValid] = useState(' ')
  const onNameChangeHandler = (e)=>{
      setName(e.target.value)
      if (name.length>=3){
          setNameValid(true)
      }else{
          setNameValid(false)
      }
  }
  useEffect(()=>{
    if(dob==='')
     setDobValid(false)
    else if(dob===' '){

    }else{
      setDobValid(true)
    }
    if(country.length<1) setCountryValid(false)
    else setCountryValid(true)
},[dob,country,setCountryValid])

useEffect(()=>{
    if (nameValid===true &&emailValid ===true &&numberValid===true &&courseValid===true && countryValid===true )
        setFormValid(true)
    else 
        setFormValid(false)
}, [nameValid, emailValid, numberValid, courseValid, countryValid])

  const emailValidationRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const onEmailChangeHandler = (e)=>{
    setEmail(e.target.value)
    setEmailValid(emailValidationRegex.test(e.target.value))
  }

  const onNumberChangeHandler = (e)=>{

      if (!isNaN(e.target.value)){
       setNumber(e.target.value)
      }else{
          setNumberValid(false)
      }

      if(!isNaN(e.target.value) && e.target.value.length===10) {
        setNumberFlag(1)
        setNumberValid(true)
      }
      else if (e.target.value.length<10 && numberFlag===1){
          setNumberFlag(0)
          setNumberValid(false)
      }
  }

  const onCourseChangeHandler = (e)=>{
      setCourse(e.target.value)
      setCourseValid(true)
  }

  const onCountryChangeHandler = (e)=>{
    if(country.length<1){
        setCountryValid(false)
    }
    setCountry(e)
    setCountryValid(true)
  }

  const onDobChangeHandler = (e)=>{
      setDob(e.target.value)
  }

  const clearState = ()=>{
    setNumberFlag(0)
    setFormValid(false)
    setName('')
    setEmail('')
    setNumber('')
    setCourse('')
    setCountry('')
    setDob('')
    setNameValid('')
    setEmailValid('')
    setNumberValid('')
    setCourseValid('')
    setCountryValid('')
    setDobValid(' ')
  }

  const onFormSubmit = async(e)=>{
      e.preventDefault()
      setLoading(true)
      const user = {
          name,
          email,
          number,
          course,
          country,
          dob
      }
      console.log(user)
      try{
        const response = await axios.post('http://localhost:4000/users/',user)
        setAlert(response.data.status)
        setTimeout(()=>{
          setAlert(null)
          clearState()
        },5000)
      }catch(e){
        console.log(e)
      }
      setLoading(false)
      
  }

  const styleError = (valid)=>{
      return valid!=='' ? valid?{borderColor:validColor}:{borderColor:errorColor}:undefined
  }

  return (
    <form className={Styles.wrapper} onSubmit={onFormSubmit} ref={formRef} >
      <input style={styleError(nameValid)} type="text" value={name} placeholder="Name" onChange={onNameChangeHandler} required />
      {!nameValid&&nameValid!==''&&<p className={Styles.errorMessage}>minimum 3 character</p>}
      <input style={styleError(emailValid)} type="email" placeholder="Email" value={email} onChange={onEmailChangeHandler} required/>
      {!emailValid&&emailValid!==''&&<p className={Styles.errorMessage}>email is not valid</p>}
      <input style={styleError(numberValid)} type="tel" placeholder="Mobile No" value={number} onChange={onNumberChangeHandler} minLength='10' maxLength='10' required />
      {!numberValid&&numberValid!==''&&<p className={Styles.errorMessage}>not valid character or number less than 10 digits</p>}

      <select style={styleError(courseValid)} name="course" id="course" placeholder="Course Level" required  onChange={onCourseChangeHandler}>
        <option disabled selected>
          Course Level
        </option>
        <option value="Ug">Ug</option>
        <option value="Pg">Pg</option>
      </select>
      <Select
        styles={countryValid!==''?countryValid? colourStylesValid:colourStyles:colourStyles}
        placeholder="Country Preferences"
        closeMenuOnSelect={false}
        isMulti
        options={options}
        required
        value={country}
        onChange={onCountryChangeHandler}
      />
      <input style={dobValid!==" " ? dobValid?{borderColor:validColor}:{borderColor:errorColor}:undefined} type="date" placeholder="DOB" value={dob} onChange={onDobChangeHandler} />

      <button disabled={!formValid} className={Styles.button}>Add</button>
      <div className={`${Styles.alert} ${alert==='updated'&&Styles.alertUpdated} ${alert==='new' && Styles.alertSuccess}`}>
        {loading && <Spinner/>}
        {alert==='updated' && 'User updated successfully'}
        {alert==='new' && 'User added successfully'}
      </div>
    </form>
  );
};

export default Form;
