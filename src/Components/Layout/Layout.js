import {RightPane} from '../'
import styles from './Layout.module.css'
import backgroundImage from '../../assets/bg.jpg'
const Layout = ()=>{
    return <div className={styles.wrapper}>
        <div className={styles.leftPane}>
            <img src={backgroundImage} />
        </div>
        <div className={styles.rightPane}><RightPane/></div>
    </div>
}

export default Layout