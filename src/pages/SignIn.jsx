import React, { use } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase.init';
import signInLottie from '../assets/Lotties/signin.json'
import Lottie from 'lottie-react';
const SignIn = () => {
    const { signInUser, setUser } = use(AuthContext)
    const navigate = useNavigate()
    const handleSubmit = e => {
        e.preventDefault()

        const form = e.target
        const formData = new FormData(form)
        const { email, password, } = Object.fromEntries(formData.entries())
        signInUser(email, password)
            .then(result => {
                const currentUser = result.user
                // console.log(currentUser)
                // console.log(result)
                setUser(currentUser)
                navigate('/')
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: "success",
                    title: "Signed in successfully"
                });

            })
            .catch(error => {
                console.log(error.message)
            })

        // google sign in 

    }
    const handleGoogleSubmit = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then(result => {
                setUser(result.user);
                navigate('/');
            })
            .catch(error => {
                console.log('Google login error:', error.message);
            });
    };

    return (
        <div className="[font-family:'Poppins',sans-serif] hero min-h-screen mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <Lottie style={{ width: '300px' }} animationData={signInLottie} loop={true}></Lottie>

                </div>
                <div className="mx-auto my-20 w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800">
                    <h1 className="text-5xl font-bold">Sign In now!</h1>
                    <form onSubmit={handleSubmit} >
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />
                            <label className="label" >Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </form>
                    <div className="flex justify-center space-x-4">
                     
                        <button  onClick={() => handleGoogleSubmit()} className="btn bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>


                    </div>
                    <p className="text-xs text-center sm:px-6 text-gray-600">Don't have an account?
                        <NavLink to='/signup' rel="noopener noreferrer" href="#" className="underline text-blue-600">Sign up</NavLink>
                    </p>

                </div>

            </div>
        </div>
    );
};

export default SignIn;