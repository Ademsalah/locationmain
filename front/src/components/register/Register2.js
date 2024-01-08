import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { postauthUser } from '../../api/authuser'
import Popup from 'reactjs-popup';
import './register2.css'

const Register2 = () => {
    const [name,setName]=useState('')
    const [lastName,setLastName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [isPopupOpen, setPopupOpen] = useState(false);
    const navigate = useNavigate()
 
  
    const login = async (value) => {
      try {
        console.log('Login payload:', value); 
        await postauthUser(value);
        await  console.log("hani zidit")
    navigate('/login')
      } catch (error) {
        console.error('Login error:', error);
        setPopupOpen(true);
      }
    };
    
    const closePopup = () => {
      setPopupOpen(false);
    };
  return (
    <div  className='bodyR'>
<div className="container">
  <div className="text">sejel ro7ik Form</div>
  <form action="#">
    <div className="form-row">
      <div className="input-data">
        <input type="text" id="username" tabIndex={0} value={name} onChange={(e=>setName(e.target.value))} />
        <div className="underline" />
        <label htmlFor="">First Name</label>
      </div>
      <div className="input-data">
      <input type="text" id="username" value={lastName} onChange={(e=>setLastName(e.target.value))}  tabIndex={0}  />        <div className="underline" />
        <label htmlFor="">Last Name</label>
      </div>
    </div>
    <div className="form-row">
      <div className="input-data">
      <input type="email" id="email" tabIndex={0}  value={email} onChange={(e=>setEmail(e.target.value))}/>
        <div className="underline" />
        <label htmlFor="">Email Address</label>
      </div>
      <div className="input-data">
      <input type="password" id="password"  value={password} onChange={(e=>setPassword(e.target.value))}/>        <div className="underline" />
        <label htmlFor="">Password</label>
      </div>
    </div>
    <div className="form-row">
      <div className="input-data textarea">
        <div className="underline" />
        <div className="form-row submit-btn">
          <div className="input-data">
            <div className="inner" />
            <input type="button" onClick={()=>navigate('/app/privateRoute')} defaultValue="a3mel tala " />
          </div>
          <div className="input-data">
            <div className="inner" />
            <input type="button" onClick={()=>login({name,lastName,email,password})} defaultValue="logi" />
          </div>

        </div>
      </div>
    </div>
  </form>
</div>
</div>
  )
}

export default Register2
