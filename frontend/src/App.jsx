import Authlayout from "./Component/auth/layout";
import CheckRoute from "./Component/Common/checkroute";
import HomeLayout from "./Component/home/layout";
import Welcome from "./pages/auth/home/welcome";
import AuthLogin from "./pages/auth/login";
import { useEffect } from "react";
import AuthSignup from "./pages/auth/signup"
import { Routes,Route } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { checkRoute } from "./store/auth-slice";
import Dashboard from "./pages/admin/dashboard";
import AdminLayout from "./Component/admin/layout";


function App() {
  const dispatch = useDispatch();
  const { isAuthenticated, user,  } = useSelector(state => state.auth);
  useEffect(() => {
        dispatch(checkRoute());
    }, [dispatch]);
     
  return( 
  <div className='flex overflow-hidden h-screen bg-zinc-700'>
  <Routes>
        <Route path='/auth'element={<CheckRoute isAuthenticated={isAuthenticated} user={user}>
          <Authlayout/> 
        </CheckRoute>}>
          <Route path='signup' element={<AuthSignup/>}/>
          <Route path='login' element={<AuthLogin/>}/>

        </Route>

        <Route path='/home'element={<CheckRoute isAuthenticated={isAuthenticated} user={user}>
          <HomeLayout/>
        </CheckRoute>}>
          <Route path='welcome' element={<Welcome/>}/>
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
