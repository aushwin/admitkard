import Styles from './RightPane.module.css'
import {NavBar,SignUp,LookUp} from '../'
import { Routes, Route } from "react-router-dom";
const RightPane = ()=>{
    return <div className={Styles.wrapper}>
        <NavBar />
        <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/lookup" element={<LookUp />} />
      </Routes>
    </div>
}


export default RightPane