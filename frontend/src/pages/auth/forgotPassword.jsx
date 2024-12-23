import CommonForm from '@/Component/Common/form';
import {forgotpswrd } from '@/config'; // Adjust the path as needed
import { forgotPassword } from '@/store/auth-slice';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
    const [formData, setFormData] = useState({});
    const dispatch = useDispatch();
    const { message, error } = useSelector(state => state.auth);
    const navigate=useNavigate() // Assuming auth slice contains response messages

   function requestOtp(data){
    console.log(data,'data')
    if(data?.payload?.success){
      dispatch(forgotPassword())
    }
   }

    return (
        <>
            <div>Forgot Password</div>
            <div className='flex justify-center items-center'>
                <CommonForm
                    formControls={forgotpswrd}
                    formData={formData}
                    setFormData={setFormData}
                    buttonText='Send'
                    requestOtp={requestOtp}
                />
                
            </div>
            {message && <p>{message}</p>}
            {error && <p className="error">{error}</p>}
        </>
    );
}

export default ForgotPassword;
