import React, { use, useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';
import { GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';
import { auth } from '../firebase.init';
import registerLottie from '../assets/Lotties/signin.json'
import Lottie from 'lottie-react';


const Signup = () => {
    const [errorMsg, setErrorMsg] = useState('')
    const { setUser, createUser } = use(AuthContext)
    const navigate = useNavigate()
    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const { email, password, username, photourl } = Object.fromEntries(formData.entries());

        const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/
        if (passwordRegex.test(password) === false) {
            setErrorMsg(<ul className="list-disc pl-5 text-red-500">
                <li>Must have an Uppercase letter in the password</li>
                <li>Must have a Lowercase letter in the password  </li>
                <li>Password must be more than 6 characters</li>
            </ul>)
            return
        }
        // auth using firebase 
        createUser(email, password)
            .then(async result => {
                console.log(result)
                // update profile 
                // const profile={
                //     displayName:username,
                //     photoURL:photourl
                // }
                await updateProfile(auth.currentUser, {
                    displayName: username,
                    photoURL: photourl
                })
                    .then(() => {
                        console.log('User Profile Updated')
                    })

                    .catch(error => console.log(error))

                const userProfile = {
                    email,
                    username,
                    photourl
                };



                // save in the database 
                fetch('https://assignment-10-server-sigma.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userProfile)

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.insertedId) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Your Account Is Created",
                                showConfirmButton: false,
                                timer: 3500
                            });
                            navigate('/')
                        }
                    })
            })
            .catch((error) => {
                console.log(error.message);
                setErrorMsg(error.message);
            });

    }

    const handleGoogleSubmit = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then(result => {
                setUser(result.user);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Logged in with Google successfully!",
                    showConfirmButton: false,
                    timer: 3000
                });
                navigate('/');
            })
            .catch(error => {
                console.log('Google login error:', error.message);
            });
    };


    return (
        <div className="[font-family:'Poppins',sans-serif] hero min-h-screen mx-auto">
            <div className='hero-content flex-col lg:flex-row-reverse'>
                <div className="text-center lg:text-left">
                    <Lottie style={{ width: '400px' }} animationData={registerLottie} loop={true}></Lottie>

                </div>
                <div className='mx-auto my-20 w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800'>
                    <h1 className="text-5xl font-bold text-center text-blue-500">Sign Up!</h1>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-1 text-sm">
                            <label htmlFor="username" className="block text-gray-600">Username</label>
                            <input type="text" name="username" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-orange-600" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="email" className="block text-gray-600">Email</label>
                            <input type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-orange-600" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="photourl" className="block text-gray-600">Photo Url</label>
                            <input type="text" name="photourl" id="photoUrl" placeholder="Photo URL" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-orange-600" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="password" className="block text-gray-600">Password</label>
                            <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-orange-600" />

                        </div>
                        <button type='submit' className="cursor-pointer block w-full p-3 text-center rounded-sm bg-blue-500 text-white hover:text-blue-50 hover:bg-blue-300">Sign Up</button>
                    </form>

                    <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
                        <p className="px-3 text-sm text-gray-600">Sign up with social accounts</p>
                        <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
                    </div>
                    <div className="flex justify-center space-x-4">
            <button  onClick={() => handleGoogleSubmit()} className="btn hover:bg-blue-300 bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>
                   
                    </div>
                    <p className="text-xs text-center sm:px-6 text-gray-600">Alreadey have an account?
                        <NavLink to="/signin" rel="noopener noreferrer" href="#" className="underline text-blue-800">Sign in</NavLink>
                    </p>

                    {
                        errorMsg && <p className='text-red-400'>{errorMsg}</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Signup;