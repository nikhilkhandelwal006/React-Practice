
import './App.css'

function App() {
 
 function handleClick(){
  alert("Welcome")
 }

 function handleMouseOver(){
  alert("Welcome again")
 }

 function handleInputchange(e){
  console.log("value till now", e.target.value)
 }

 function handleSubmit(e){
  e.preventDefault()
  // I am writing my custom behaviour down
  alert("form submit krdu ky")
 }


  return (
    <>
 
 <button onClick={()=>alert("button click hue ky")}> 
  click me 
 </button>

   {/* <button onClick={alert("button click hue ky")}> 
    click me 
  //  </button> */} 
  {/* Note:// aise krna glt h kyuki vo immediate invoke   hojata h , ise apn fat-arrow m krenege */}

   
  


  {/* <form onSubmit={handleSubmit}>
    <input type="text" onChange={handleInputchange} />
    <button type='submit'>Submit</button>
  </form> */}
  

     {/* <p onMouseOver={handleMouseOver}>I am a para</p> */}


     {/* <button onClick={handleClick}>
      click me
     </button> */}

    </>
  )
}

export default App
