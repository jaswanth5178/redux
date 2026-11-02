import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {AddData} from '../../features/User/userSlice'

const index = () => {
    const[value,setValue] = useState({name:"",email:""})
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleChange(e){
        setValue({...value,[e.target.name]:e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(AddData(value))
        setValue({name:"",email:""})
        navigate('/')
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input name='name' onChange={handleChange} type="text" placeholder='Enter Name' />
            <input name='email' onChange={handleChange} type="email" placeholder='Enter Email' />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default index