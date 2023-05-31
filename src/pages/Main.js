import React from 'react'
import { useNavigate } from 'react-router-dom'

function Main() {
  const navigate = useNavigate();

  return (
    <div>
      <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <div>
        <h1 style={{marginTop:"30px",color:"orange"}}>MI Note </h1>
        </div>
        <div style={{display:"flex",marginTop:"10px",marginLeft:"10px",cursor:"pointer"}}>
          <h6 onClick={()=>{
            navigate('/login')
          }}><u>Login/</u></h6>
          <h6 onClick={()=>{
            navigate('/signup')
          }}><u>Signup</u></h6>
        </div>
      </div>
      <hr style={{height:"2px",color:"orange",backgroundColor:"black"}}></hr>
      <div>
        <div style={{display:"flex",justifyContent:"center"}}>
          <form style={{border:"1px solid black",width:"300px",height:"300px",borderRadius:"10px"}}>
            <div style={{marginTop:"20px"}} class="form-group">
              <label for="exampleInputEmail1">Title</label>
              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter title" required="true"/>
            </div>

            <div style={{marginTop:"40px"}} class="form-group">
              <label for="exampleInputPassword1">Description</label>
              <textarea class="form-control" id="exampleInputPassword1" placeholder="Enter description" required="true" rows="3"/>
            </div>

            
            <button style={{marginTop:"14px"}} type="submit" class="btn btn-primary" onClick={()=>{
              navigate('/login')
            }}>Add</button>
          </form>
        </div>
      </div>




    </div>
  )
}

export default Main
