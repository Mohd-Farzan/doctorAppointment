import CommonForm from '@/Component/Common/form'
import { profileFormControls } from '@/config'
import { updateprofile } from '@/store/auth-slice'

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function ProfileUpdate() {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const {user}=useSelector((state)=>state.auth)
  const initialState={
    email:user?.email || '',
    password:'',
    userName:user?.userName || '',
  }
  const [formData,setFormData]=useState(initialState)
  function onSubmit(event) {
    event.preventDefault();
    console.log("user",user)
     
    dispatch(updateprofile({id:user?.id, formData}))
    
        .then((data) => {
            if (data?.payload?.success) {
                alert("Profile Updated");
                setTimeout(() => navigate("../../home/welcome"), 1000);
               
            } else {
                alert("Failed to update profile");
            }
          
        })
        .catch((err) => console.error("Error in profile update:", err));
}

  return <div className='flex justify-center items-center'>
    <CommonForm
    formData={formData}
    setFormData={setFormData}
    formControls={profileFormControls}
    buttonText='Update'
    
    onSubmit={onSubmit}
    />


  </div>
}

export default ProfileUpdate