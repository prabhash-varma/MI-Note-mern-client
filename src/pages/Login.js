import React,{useState,useContext} from 'react'
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { store } from '../App';


function Login() {
  const {userdata,setUserdata} = useContext(store);
  const navigate = useNavigate();
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const loginHandler = async (e) => {
    e.preventDefault();
    console.log(email);
    Axios.post("https://mi-note-mern-server.vercel.app/login",{
      email:email,
      password:password
    }).then((response) => {
      console.log(response.data);
      if(response.data.auth){
        setUserdata(response.data.users[0]);
        localStorage.setItem("token",response.data.token);
        localStorage.setItem("userdata",JSON.stringify(response.data.users[0]));
        alert("Login successful")
        navigate('/home');
      }else{
        alert("Invalid Credentials");
      }
    });
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
      <h5>Login Here</h5>

      <div>
        <div style={{display:"flex",justifyContent:"center",}}>
          <form onSubmit={loginHandler} style={{border:"1px solid black",width:"300px",height:"300px",borderRadius:"10px"}}>
            <div style={{marginTop:"20px"}} class="form-group">
              <label for="exampleInputEmail1">Email</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required="true" onChange={(e)=>{
                setEmail(e.target.value);
              }}/>
            </div>

            <div style={{marginTop:"20px"}} class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required="true" onChange={(e)=>{
                setPassword(e.target.value);
              }} />
            </div>

            <div class="form-check">
              {/* <input type="checkbox" class="form-check-input" id="exampleCheck1" /> */}
            </div>
            <button type="submit" class="btn btn-primary" >Login</button>

          </form>

          
        </div>

        <p>Don't have an Account?</p>
        <p style={{cursor:"pointer"}} onClick={()=>{
            navigate('/signup')
          }}> <u>Signup here</u></p>
        
      </div>
    </div>
  )
}

export default Login
