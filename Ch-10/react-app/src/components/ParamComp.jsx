import React from 'react'
import { useParams } from 'react-router-dom'

//useParams

const ParamComp = () => {
    const {id}=useParams();

  return (
    <div>
    Params: {id}  
    </div>
  )
}

export default ParamComp
