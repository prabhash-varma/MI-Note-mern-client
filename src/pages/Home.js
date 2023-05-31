import React,{useState,useContext,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import { store } from '../App';
import Item from '../components/Item'
import { useNavigate } from 'react-router-dom';
import Accordion from "react-bootstrap/Accordion";

function Home() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const {userdata,setUserdata,itemlist,setItemlist} = useContext(store);
  
  const ItemHandler = (e) => {
    e.preventDefault();

    if(title.length < 10 && description.length ==0){
      alert("Description should not be empty");
      return;
    }

     Axios.post("https://mi-note-mern-server.vercel.app/additem",{
      title:title,
      description:description,
      email: userdata.email
    },{headers:{"authorization":`bearer ${localStorage.getItem("token")}`}}).then((response) => {

      if(response.data.auth==true){
        console.log(response.data.itemslist);
        setItemlist(response.data.itemslist);
        alert("Item added successfully")
      }
      else{

        if(response.data.message=="Item already exists"){
          alert("Title already exists, please try another title");
        }
        else{
          alert("Something went wrong");
          navigate("/login");
        }
        
      }
      
    });
  };


useEffect(() => {
  Axios.get(`https://mi-note-mern-server.vercel.app/getitems?email=${userdata.email}`,{headers:{"authorization":`bearer ${localStorage.getItem("token")}`}}).then((response) => {
    
    if(response.data.auth){
      setItemlist(response.data.itemslist);
      console.log(response.data.itemslist);
    }
    else{
      navigate("/login");
    }
  });

}, [])





  

  return (
    <div>
      <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <div>
        <h1 style={{marginTop:"30px",color:"orange"}}>MI Note </h1>
        </div>
        <div style={{display:"flex",marginTop:"10px",marginLeft:"10px",cursor:"pointer"}}>
          <h6 onClick={()=>{
            navigate('/profile')
          }}><u>Profile/</u></h6>
          <h6 onClick={()=>{
            navigate('/login')
            localStorage.removeItem("token");
          }}><u>Logout</u></h6>
        </div>
      </div>
      <hr style={{height:"2px",color:"orange",backgroundColor:"black"}}></hr>
      
    

      <div>
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <form onSubmit={ItemHandler} style={{border:"1px solid black",width:"300px",height:"300px",borderRadius:"10px"}}>
              <div style={{marginTop:"20px"}} class="form-group">
                <label for="exampleInputEmail1">Title</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter title" required="true" onChange={(e)=>{
                  setTitle(e.target.value);
                }}/>
              </div>

              <div style={{marginTop:"20px"}} class="form-group">
                <label for="exampleInputPassword1">Description</label>
                <textarea class="form-control" id="exampleInputPassword1" placeholder="Enter description"  rows="3" onChange={(e)=>{
                  setDescription(e.target.value);
                }}/>
              </div>


              <button style={{marginTop:"14px"}} type="submit" class="btn btn-primary" >Add</button>
            </form>
          </div>


            
          <div>
            <div>
              <hr style={{color:"black",height:"10px"}}></hr>
              <h3>{itemlist.length==0 ? "No":""} MI Note Items {itemlist.length==0 ? "🙁":""}</h3>
            </div>
            <div>
              {itemlist.length>0 && itemlist.map((item) => {
              
                return(

                    <Item title={item.title} description={item.description} itemid={item._id.valueOf()} />
                  
                )
                
              })}
            </div>
            


              <div>
                <hr style={{color:"black",height:"10px",marginBottom:"30px"}}></hr>
              </div>
          </div>



        </div>




      </div>
    </div>
  )
}

export default Home
