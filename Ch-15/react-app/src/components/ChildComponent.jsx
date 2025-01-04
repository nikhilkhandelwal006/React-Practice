import React from 'react'

const ChildComponent = React.memo((props) => {
    console.log("child component re-render again")
  return (
    <div>
      <button onClick={props.handleClick}>{props.buttonName}</button>
    </div>
  )
})

export default ChildComponent
//React.memo k andar wrap krdete h components ko toh component tbhi re-render hoga jb props change honge, nii toh re-render ni hoga.


//if u r sending a function, then react.memo won't be able to save you from re-rendering.But why? because re-render hone se function ka by-default refrence bhi change hojata h jis wajah se child-component ko lga ki ye different function h uss wajah se child component wapis re-render hogy