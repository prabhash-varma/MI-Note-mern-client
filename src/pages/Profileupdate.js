import React,{useState,useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import {store} from '../App.js'
import Axios from 'axios'


function Profileupdate() {
  const navigate = useNavigate();
  const {userdata,setUserdata} = useContext(store);
  const [firstName,setFirstName] = useState(userdata.firstName)
  const [lastName,setLastName] = useState(userdata.lastName)
  const [country,setCountry] = useState(userdata.country)
  


  const updateHandler = (e) => {
    e.preventDefault();

    Axios.post("https://mi-note-mern-server.vercel.app/updateprofile",{  
      firstName:firstName,
      lastName:lastName,
      country:country,
      email:userdata.email
    },{headers:{"authorization":`bearer ${localStorage.getItem("token")}`}}).then((response) => {

      if(response.data.auth==true){
        console.log(response.data);
        setUserdata(response.data.users[0]);
        alert("Profile updated successfully")
        navigate('/profile')
      }
      else{
        navigate('/login');
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
          <h6 onClick={()=>{
            navigate('/home')
          }}><u>Home/</u></h6>
          <h6 onClick={()=>{
            navigate('/profileupdate')
          }}><u>Update</u></h6>
        </div>
      </div>
      <hr style={{height:"2px",color:"orange",backgroundColor:"black"}}></hr>
      <h5>Update your profile</h5>

        
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <form onSubmit={updateHandler} style={{ border: "1px solid black", width: "400px", height: "300px", borderRadius: "10px" }}>
            <div class="row">
              <div style={{ marginTop: "20px" }} class="col">
                <label>First Name</label>
                <input style={{marginTop:"5px"}} type="text" class="form-control" placeholder="New First Name" onChange={(e)=>{
                  setFirstName(e.target.value);
                }}/>
              </div>
              <div style={{ marginTop: "20px" }} class="col">
              <label>Last Name</label>
                <input style={{marginTop:"5px"}} type="text" class="form-control" placeholder="New Last Name" onChange={(e)=>{
                  setLastName(e.target.value);
                }}/>
              </div>
            </div>


            <div style={{ marginTop: "10px" }} class="row">
              <div  style={{ marginTop: "20px" }} class="col">
              <label>Email</label>
                <input style={{marginTop:"5px"}} type="email" class="form-control" value={userdata.email} disabled="true"/>
              </div>
              <div style={{ marginTop: "20px" }} class="col">
              <label>Country</label>
                <input style={{marginTop:"5px"}} type="text" class="form-control" placeholder="New Country Name" onChange={(e)=>{
                  setCountry(e.target.value);
                }} />
              </div>
            </div>

            


            <button style={{ marginTop: "30px" }} type="submit" className="btn btn-primary" >Save changes</button>
          </form>
        </div>
            

            
     
    </div>
    </div>
  )
}

export default Profileupdate
