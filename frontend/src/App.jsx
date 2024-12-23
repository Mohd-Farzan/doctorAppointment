import Authlayout from "./Component/auth/layout";
import CheckRoute from "./Component/Common/checkroute";
import Cookies from "js-cookie";
import HomeLayout from "./Component/home/layout";
import Welcome from "./pages/home/welcome";
import AuthLogin from "./pages/auth/login";
import React,{ useEffect } from "react";
import AuthSignup from "./pages/auth/signup"
import { Routes,Route } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { checkRoute } from "./store/auth-slice";
import Dashboard from "./pages/admin/dashboard";
import AdminLayout from "./Component/admin/layout";
import ForgotPassword from "./pages/auth/forgotPassword";
import ProfileUpdate from "./pages/home/profile";


function App() {
  const dispatch = useDispatch();
  const { isAuthenticated, user,  } = useSelector(state => state.auth);
  
  useEffect(() => {
    if (Cookies.get("token")) { 
      console.log(Cookies.get('token'))// Check if authToken cookie exists
        dispatch(checkRoute());
    }
       
    }, [dispatch]);
     
  return( 
  <div className='flex  h-screen bg-zinc-700'>
  <Routes>
        <Route path='/auth'element={<CheckRoute isAuthenticated={isAuthenticated} user={user}>
          <Authlayout/> 
        </CheckRoute>}>
          <Route path='signup' element={<AuthSignup/>}/>
          <Route path='login' element={<AuthLogin/>}/>
          <Route path='forgotPassword' element={<ForgotPassword/>}/>

        </Route>

        <Route path='/home'element={<CheckRoute isAuthenticated={isAuthenticated} user={user}>
          <HomeLayout/>
        </CheckRoute>}>
          <Route path='welcome' element={<Welcome/>}/>
          <Route path='profile' element={<ProfileUpdate/>}/>

        </Route>

        <Route path='/admin' element={<CheckRoute isAuthenticated={isAuthenticated} user={user}>
          <AdminLayout />
        </CheckRoute>}>
          <Route path='dashboard' element={<Dashboard/>} />
        </Route>
    </Routes>
        
  </div>  
  );
};

export default App
