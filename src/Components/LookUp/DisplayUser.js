import Styles from './Display.module.css'
const DisplayUser = ({user})=>{
    const date = new Date(user.dob.toString())
    return <div className={Styles.wrapper}>
        <div className='flex justify-content margin-bottom'><div>Name</div><div className='justify-self'>{user.name}</div></div>
        <div className='flex justify-content margin-bottom'><div>Email</div><div>{user.email}</div></div>
        <div className='flex justify-content margin-bottom'><div>Number</div><div>{user.number}</div></div>
        <div className='flex justify-content margin-bottom'><div>Course Level</div><div>{user.course}</div></div>
        <div className='flex justify-content margin-bottom'><div>Country Preference</div>
        <div className='flex'>
        {user.country.map((element)=>{
            return <div>{element.label} &nbsp;</div>
        })}
        </div>
        </div>
        <div className='flex justify-content margin-bottom'><div>Dob</div><div>{date.toDateString()}</div></div>


        
    </div>
}

export default DisplayUser