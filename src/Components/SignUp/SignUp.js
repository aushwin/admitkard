import Styles from './SignUp.module.css'
import {Form} from '../'
const SignUp = ()=>{
    return <div className={Styles.wrapper}>
        <div className={Styles.messageWrapper}>
            <div className={Styles.textMessage}>welcome</div>
            <div className={Styles.highlightMessage}>Fill the form<br /> to become <br /> part of<br /> team</div>
        </div>
        <div className={Styles.formWrapper}>
            <Form />
        </div>
    </div>
}
export default SignUp