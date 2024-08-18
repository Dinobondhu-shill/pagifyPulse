import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../firebase/FirebaseProvider";
import { useForm } from "react-hook-form";
import { IoIosEye, IoIosEyeOff  } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [registerError, setRegisterError] = useState('');
  const [successRegister, setSuccessRegister] = useState('')
  const navigate = useNavigate();
  const {register,handleSubmit,formState: { errors },watch, } = useForm();

 
  const password = watch("Password");
  const onSubmit = (data) => {
    createUser(data.Email, data.Password)
    
    .then(() => {
      setSuccessRegister('User Created Successfully')
      toast.success('Register Successful')
      updateUserProfile(data.fullName, data.photoURL)
        .then(()=>{
          navigate('/')
          
      })
      
      
    })
    .catch((error)=>{
      setRegisterError("Something went wrong")
    })
  };
  

  return (
    <div className="flex w-full flex-col my-5 items-center">
      <h2 className="text-center font-semibold text-5xl mb-4">Join our Community and feel Better... </h2>

      <form data-aos="zoom-in"
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-xl border rounded-xl px-20 py-5"
      >
        <div className="mb-2">
          <h5 className="font-bold text-lg pl-2">Your Name:</h5>
          <input
            {...register("fullName", { required: true })}
            type="text"
            placeholder="Enter Your Name"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        {errors.fullName && (
          <span className="text-red-700 font-bold">
            You must enter your name
          </span>
        )}

        <div className="mb-2">
          <h5 className="font-bold text-lg pl-2">Photo Url:</h5>
          <input
            {...register("photoURL")}
            type="text"
            placeholder="Enter Your Photo Url"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="mb-2">
          <h5 className="font-bold text-lg pl-2">Email:</h5>
          <input
            {...register("Email", { required: true })}
            type="text"
            placeholder="Enter Your Email Address"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        {errors.Email && (
          <span className="text-red-700 font-bold">
            You must enter your Email
          </span>
        )}
        <div className="mb-2">
          <h5 className="font-bold text-lg pl-2">Password:</h5>
          <div className="relative">
          <input
            {...register("Password", {
              required: true,
              pattern: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
             
            })}
            type={showPassword? "text": "password"}
            placeholder="Enter Your Password"
            className="input input-bordered w-full max-w-xs"
          />
         <span className="cursor-pointer absolute top-[13px] text-[20px] z-10 right-4" onClick={()=> setShowPassword(!showPassword)}>
          {
          showPassword ? <IoIosEyeOff/> :<IoIosEye/>
        }
          </span>
          </div>
          {errors.Password && errors.Password.type === "pattern" && (
            <span className="text-red-700  font-bold max-w-[300px]">
             Password should be uppercase, <br />lowercase and 6 character long
            </span>
          )}
          <ToastContainer></ToastContainer>
        </div>
        <div className="mb-2 ">
          <h5 className="font-bold text-lg pl-2">Confirm Password:</h5>
          <input
            {...register("confirmPassword", {
              validate: (value) => value === password || "Passwords do not match",
            })}
            type="password"
            placeholder="Confirm Your Password"
            className="input input-bordered w-full max-w-xs"
          />
          {errors.confirmPassword && (
            <span className="text-red-700 block font-bold">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>
        <button
          type="submit"
          className="bg-[#50bbd1b1] mt-5 text-white py-3 rounded-xl font-bold hover:bg-[#6ec1c7b1] p-32"
        >
          Register
        </button>
        {
          registerError && (
            <span className="block text-red-600">{registerError}</span>
          )
        }
        {
          successRegister && (
            <span className="block text-green-600">{successRegister}</span>
          )
        }
        <p className="mt-4 text-[16px]">
          Already have an account?{" "}
          <Link to={"/login"} className="underline text-[#49c5db]">
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
