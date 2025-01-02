
import { useState } from 'react'
import './App.css'
import ChildA from './components/ChildA';
import { createContext } from 'react';

//step:1 - create Context
const UserContext=createContext();
//step:2 - wrap all the child inside a provider
//step:3 - pass value
//step:4 - consumer k andar jaake consume karlo by using "useContext()"

const ThemeContext=createContext();


function App() {
 const [user,setUser]= useState({name:"Love"});
 const [theme, setTheme]=useState('light')

  return (
    <UserContext.Provider value={user}>
   <ThemeContext.Provider value={{theme,setTheme}}>
 
    <div id='container' style={{backgroundColor:theme==="light"?"beige":'black'}}>
    <ChildA/>
    </div>

   </ThemeContext.Provider>
   </UserContext.Provider>
  


  //   <>
  //  <UserContext.Provider value={user}>
  //   <ChildA/>
  //   </UserContext.Provider>
    
  //   </>
  )
}

export default App
export {UserContext}
export {ThemeContext}