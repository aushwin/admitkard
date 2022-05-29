import {RightPane} from '../'
import styles from './Layout.module.css'
const Layout = ()=>{
    return <div className={styles.wrapper}>
        <div className={styles.leftPane}></div>
        <div className={styles.rightPane}><RightPane/></div>
    </div>
}

export default Layout