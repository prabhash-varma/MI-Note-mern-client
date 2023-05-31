import React, { useContext } from 'react'
import { store } from '../App.js'
import { useNavigate } from 'react-router-dom';

function Profile() {
  const { userdata, setUserdata } = useContext(store);
  const navigate = useNavigate();
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div>
          <h1 style={{ marginTop: "30px",color:"orange" }}>MI Note </h1>
        </div>
        <div style={{ display: "flex", marginTop: "10px", marginLeft: "10px", cursor: "pointer" }}>
          <h6 onClick={() => {
            navigate('/home')
          }}><u>Home/</u></h6>
          <h6 onClick={() => {
            navigate('/profile')
          }}><u>Profile</u></h6>
        </div>
      </div>
      <hr style={{ height: "2px", color:"orange", backgroundColor: "black" }}></hr>
      <h5>My Profile 🙂</h5>

      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <form  style={{ border: "1px solid black", width: "400px", height: "300px", borderRadius: "10px" }}>
            <div class="row">
              <div style={{ marginTop: "20px" }} class="col">
                <label>First Name</label>
                <input style={{marginTop:"5px"}} type="text" class="form-control" value={userdata.firstName} disabled="true" />
              </div>
              <div style={{ marginTop: "20px" }} class="col">
              <label>Last Name</label>
                <input style={{marginTop:"5px"}} type="text" class="form-control" value={userdata.lastName} />
              </div>
            </div>


            <div style={{ marginTop: "10px" }} class="row">
              <div style={{ marginTop: "20px" }} class="col">
              <label>Email</label>
                <input style={{marginTop:"5px"}} type="email" class="form-control" value={userdata.email} />
              </div>
              <div style={{ marginTop: "20px" }} class="col">
              <label>Country</label>
                <input style={{marginTop:"5px"}} type="text" class="form-control" value={userdata.country} />
              </div>
            </div>

            


            <button style={{ marginTop: "30px" }} className="btn btn-primary" onClick={() => {
              navigate("/profileupdate");
            }
            }>Update profile</button>
          </form>
        </div>




      </div>

    </div>
      )
}

      export default Profile
