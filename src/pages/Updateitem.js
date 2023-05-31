import React,{useEffect, useState,useContext} from 'react'
import {store} from '../App'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Updateitem() {
    const navigate = useNavigate();
    const {itemlist,setItemlist} = useContext(store);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const UpdateHandler = (e) => {
        e.preventDefault();
        const itemid = localStorage.getItem("itemid");

        if(title.length < 10 && description.length ==0){
          alert("Description should not be empty");
          return;
        }

        for(let i=0;i<itemlist.length;i++){
          if(itemlist[i].title==title && itemlist[i].description!=description){
            alert("Title already exists, please try another title");
            return;
          }
        }


        Axios.post("http://localhost:3001/updateitem",{
            itemid:itemid,
            title:title,
            description:description
        },{headers:{"authorization":`bearer ${localStorage.getItem("token")}`}}).then((response) => {

          if(response.data.auth==true){
            console.log(response.data.itemslist);
            setItemlist(response.data.itemslist);
            navigate("/home");
            alert("Item updated successfully")
          }
          else{

              alert("Something went wrong");
              navigate("/login");
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
            navigate('/updateitem')
          }}><u>Item</u></h6>
        </div>
      </div>
      <hr style={{height:"2px",color:"orange",backgroundColor:"black"}}></hr>
       <div style={{  display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
       <form onSubmit={UpdateHandler} style={{border:"1px solid black",width:"300px",height:"300px",borderRadius:"10px"}}>
              <div style={{marginTop:"20px"}} class="form-group">
                <label for="exampleInputEmail1">New Title*</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter title" required="true" onChange={(e)=>{
                  setTitle(e.target.value);
                }}/>
              </div>

              <div style={{marginTop:"20px"}} class="form-group">
                <label for="exampleInputPassword1">New Description</label>
                <textarea class="form-control" id="exampleInputPassword1" placeholder="Enter description"  onChange={(e)=>{
                  setDescription(e.target.value);
                }}/>
              </div>


              <button type="submit" style={{marginTop:"20px"}} class="btn btn-primary" >Update</button>
            </form>
        </div>
    </div>
  )
}

export default Updateitem
