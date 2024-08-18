import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { IoIosEye, IoIosEyeOff  } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../firebase/FirebaseProvider";



const Login = () => {
  const {signIn} = useContext(AuthContext)
const {googleLogIn} = useContext(AuthContext)
const [showPassword, setShowPassword] = useState(false);
const [login, setLogin] = useState('')
const [loginErr, setLoginErr] = useState('')
const navigate = useNavigate();
const location = useLocation();


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


 
  const onSubmit = (data) => {
    const {Email, Password} = data;

    signIn(Email, Password)
    .then(result=>{
      toast.success('Log in success')
      setLogin('Log in Successfully')
      navigate(location?.state || '/')
    })
      .catch(error=>{
        console.log(error)
        setLoginErr('Email or Password is not correct')
      })
  }
  const handleSocialLogin = socialProvider =>{
    socialProvider()
    .then((result)=>{
      navigate(location?.state || '/')
    })
  }

  return (
    <div>
    <h2 className="text-center font-semibold text-5xl my-4">Welcome Back, Please Log in!</h2>
<div className="w-fit border p-12 rounded-lg mb-10 mx-auto">
<form onSubmit={handleSubmit(onSubmit)}
className=" flex flex-col gap-3">
<label data-aos="fade-down" data-os-duration="1000" className="input input-bordered flex items-center gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
  <input  {...register("Email", { required: true })}
  type="text" className="grow" placeholder="Email" />
</label>
{errors.Email && <span className="text-red-700 font-bold">You must enter your Email</span>}
<ToastContainer></ToastContainer>

<label data-aos="fade-down" data-os-duration="1100" className="input input-bordered flex items-center gap-2 relative">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
  <input {...register("Password", { required: true })}
   type={showPassword? "text": "password"} className="grow" placeholder="Password" />
   <span className="cursor-pointer absolute top-[13px] text-[20px] z-10 right-4" onClick={()=> setShowPassword(!showPassword)}>
          {
          showPassword ? <IoIosEyeOff/> :<IoIosEye/>
        }
          </span>
</label>
{errors.Password && <span className="text-red-700 font-bold">You must enter your Email</span>}

<button  data-aos="zoom-in" type="submit" className="bg-[#3e9daeb1] text-white py-3 rounded-xl font-bold hover:bg-[#64204db1]">Log In</button>
</form>
{
  login && <span className="text-bold text-green-600 mt-5">{login}</span>
}
{
  loginErr && <span className="text-bold text-red-600 mt-5">{loginErr}</span>
}
<p data-aos="fade-left" className="mt-4 text-[16px] pb-4">Don't have an account? <Link to={'/register'} className="underline  text-[#a456a4]">Register</Link></p> <hr />
<h2 data-aos="fade-right" className="font-bold mt-4">Or Continue With:</h2>
<div className="flex gap-4 mt-4 justify-center">
<button onClick={()=> handleSocialLogin(googleLogIn)}
 className="text-5xl border-2 rounded-full p-2 hover:bg-cyan-300"> <FcGoogle /> </button>

</div>
    </div> <hr />
    </div>
    
  );
};

export default Login;