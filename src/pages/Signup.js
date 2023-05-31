import React,{useState} from 'react'
import Axios from 'axios'
import {useNavigate} from 'react-router-dom'



function Signup() {
  const navigate = useNavigate();
  const [firstName,setFirstName] = useState("")
  const [lastName,setLastName] = useState("")
  const [email,setEmail] = useState("")
  const [country,setCountry] = useState("")
  const [password,setPassword] = useState("")
  const [confirmPassword,setConfirmPassword] = useState("");


  const submitHandler = (e) => {
    e.preventDefault();
    if(password === confirmPassword){
      Axios.post("https://mi-note-mern-server.vercel.app/signup",{
        firstName:firstName,
        lastName:lastName,
        email:email,
        country:country,
        password:password
      }).then((response) => {

        if(response.data.auth){
          console.log(response.data);
          alert("Registration Successful")
          navigate('/login')
        }
        else{
          alert("User already exists");
        }
        
      });
    }else{
      alert("Password and Confirm Password do not match");
    }
  };



  return (
    <div>

<div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <div>
        <h1 style={{marginTop:"30px",color:"orange"}}>MI Note </h1>
        </div>
        <div style={{display:"flex",marginTop:"10px",marginLeft:"10px",cursor:"pointer"}}>
         
        </div>
      </div>
      <hr style={{height:"2px",color:"orange",backgroundColor:"black"}}></hr>
      <h5>Register here</h5>

      <div>
        <div style={{display:"flex",justifyContent: "center"}}>
          <form onSubmit={submitHandler} style={{border:"1px solid black",width:"400px",height:"300px",borderRadius:"10px"}}>
            <div class="row">
              <div style={{marginTop:"20px"}} class="col">
                <input  type="text" class="form-control" placeholder="First name*" required="true" onChange={(e)=>{
                  setFirstName(e.target.value);
                }}/>
              </div>
              <div style={{marginTop:"20px"}}  class="col">
                <input type="text" class="form-control" placeholder="Last name*" required="true" onChange={(e)=>{
                  setLastName(e.target.value);
                }}/>
              </div>
            </div>


            <div style={{marginTop:"10px"}} class="row">
              <div style={{marginTop:"20px"}}  class="col">
                <input type="email" class="form-control" placeholder="Email*" required="true" onChange={(e)=>{
                  setEmail(e.target.value);
                }}/>
              </div>
              <div style={{marginTop:"20px"}}  class="col">
                <input type="text" class="form-control" placeholder="Country*" required="true" onChange={(e)=>{
                  setCountry(e.target.value);
                }}/>
              </div>
            </div>

            <div style={{marginTop:"10px"}} class="row">
              <div style={{marginTop:"20px"}}  class="col">
                <input type="password" class="form-control" placeholder="Password*" required="true" onChange={(e)=>{
                  setPassword(e.target.value);
                }}/>
              </div>
              <div style={{marginTop:"20px"}}  class="col">
                <input type="password" class="form-control" placeholder="Confirm Password*" required="true" onChange={(e)=>{
                  setConfirmPassword(e.target.value);
                }}/>
              </div>
            </div>

            <button style={{marginTop:"30px"}} class="btn btn-primary" type="submit">Signup</button>
          </form>
        </div>

        <p>Already have an Account?</p>
        <p style={{cursor:"pointer"}} onClick={()=>{
            navigate('/login')
          }}> <u>Login here</u></p>
      </div>
    </div>
  )
}

export default Signup
