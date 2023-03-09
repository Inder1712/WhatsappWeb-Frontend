import axios from "axios"
const url="http://localhost:8000/add"
export const addUser=async(data)=>
{
 try {
   await axios.post(url,data)
    
 } catch (error) {
    console.log(error);
    
 }
}
export const getUser=async()=>{
  try {
    const userData= await axios.get("http://localhost:8000/users")
    return userData.data;

  } catch (error) {
    console.log("Error in api.js");
  }
}
export const setConversation=async(data)=>{
  try {
    await axios.post("http://localhost:8000/conversation/add",data)
    
  } catch (error) {
    console.log("Error in setConversation in api.js");
    
  }
}
 
export const getConversation=async(data)=>{
  try {
    let res= await axios.post("http://localhost:8000/conversation/get",data)
    return res.data
  } catch (error) {
    console.log("Error from getConversation in api.js")
    
  }
}
export const newMessage=async(data)=>{
  try {
    await axios.post("http://localhost:8000/message/add",data)
  } catch (error) {
    console.log("Error from newMessage from api.js")
  }
}
export const getMessage=async(id)=>{
  try {
    const res=await axios.get(`http://localhost:8000/message/get/${id}`)
    console.log(id);
    return res.data
  } catch (error) {
    console.log("Error in getMessage in api.js",error.message);
    
  }
}
export const uploadFile=async(data)=>{
  try {
   return await axios.post("http://localhost:8000/file/upload",data)
    
  } catch (error) {
    console.log("Error in uploadFile in api.js");
    
  }
} 