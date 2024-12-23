
import { useState } from 'react'
import './App.css'
import Logout from './components/Logout';
import LoginBtn from './components/LoginBtn';

function App() {
  const [isLoggedIn, setLoggedIn]=useState(true);

 if(!isLoggedIn){
  return (
    <LoginBtn/>
  )
 }
  

 return(
  <div>
    <h1>Welcome Everyone to Codehelp course</h1>
    <div>
      {isLoggedIn && <Logout/>}
    </div>
  </div>
 )



  // 2nd method
  // return(
  //   <div>
  //     {isLoggedIn ? <Logout/> :<LoginBtn/> }
  //   </div>
  // )


  //1st method 
  // if(isLoggedIn){
  //   return(
  //     <Logout/>
  //   )
  // }else{
  //   return(
  //     <LoginBtn/>
  //   )
  // }
  
 
}

export default App
