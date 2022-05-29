import Styles from './NavBar.module.css'
const NavBar = ()=>{
    return <ul className={Styles.wrapper} >
       <li className={Styles.signUp}>SignUp</li>
       <li className={Styles.lookUp}>LookUp</li>
    </ul>
}

export default NavBar