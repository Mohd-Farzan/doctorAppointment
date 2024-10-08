import CommonForm from '@/Component/Common/form'
import { loginFormControls} from '@/config'
import { loginUser } from '@/store/auth-slice'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link,useNavigate } from 'react-router-dom';

const initialState = {
    email: '',
    password: '',
  };
function AuthLogin() {
    const[FormData,setFormData]=useState(initialState);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    function onSubmit(event){
        event.preventDefault()
        dispatch(loginUser(FormData)).then((data) => {
            if (data?.payload?.success) {
             
              alert("successfully logged in")
              setTimeout(() => navigate('../../home/welcome'), 1000);
            } else {
              alert("failed to signup")
              setTimeout(()=>navigate('/auth/signup'),800)
            }
          });
    }
  return (
    <div className="mx-auto w-full max-w-md space-y-6">
    <div className="text-center">
      <h1 className="text-3xl font-bold tracking-tight text-foreground text-black">Login</h1>
    </div>
    <CommonForm
      formControls={loginFormControls}
      buttonText={'Login'}
      formData={FormData}
      setFormData={setFormData}
      onSubmit={onSubmit}
    />
    <p>
      Don't have an Account?
      <Link className="font-medium text-primary hover:underline" to="/auth/login">
        Signup
      </Link>
    </p>
  </div>
  )
}

export default AuthLogin