import React, { useState } from "react";
import { Link } from "react-router-dom";

import image1 from '../../assets/images/LoginSigin/logo.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
const SignUpForm = () => {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ email: '', password: '', fullName: '' });


    // Validation is here 
    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            setErrors(prevErrors => ({ ...prevErrors, email: 'Email is required' }));
        } else if (!emailRegex.test(email)) {
            setErrors(prevErrors => ({ ...prevErrors, email: 'Invalid email address' }));
        } else {
            setErrors(prevErrors => ({ ...prevErrors, email: '' }));
        }
    };

    const validatePassword = () => {
        if (!password) {
            setErrors(prevErrors => ({ ...prevErrors, password: 'Password is required' }));
        } else {
            setErrors(prevErrors => ({ ...prevErrors, password: '' }));
        }
    };

    const validateFullName = () => {
        const fullNameRegex = /^[a-zA-Z\s]+$/;
        if (!fullName) {
            setErrors(prevErrors => ({ ...prevErrors, fullName: 'Full name is required' }));
        } else if (!fullNameRegex.test(fullName)) {
            setErrors(prevErrors => ({ ...prevErrors, fullName: 'Invalid characters in full name' }));
        } else {
            setErrors(prevErrors => ({ ...prevErrors, fullName: '' }));
        }
    };
    const handleSubmit = e => {
        e.preventDefault();
        validateEmail();
        validatePassword();
        validateFullName();


        // perform logic

        if (fullName && email && password) {
            console.log('Full Name:', fullName);
            console.log('Email:', email);
            console.log('Password:', password);
        } else {
            console.error('Error: Please fill in all required fields.');
        }
    };
    return (
        <>
            <div className="flex flex-col items-center  pt-20 pb-16 px-10" >

                <div style={{ background: '#EFEFEA', boxShadow: '0px 4px 4px 3px rgba(0, 0, 0, 0.25)', borderRadius: 15 }} className="max-w-md w-full px-8 py-6  ">

                    <form onSubmit={handleSubmit} className="space-y-4 flex flex-col items-center ">

                        <div className='flex items-center'>
                            <img src={image1} className='w-24' alt="" />
                            <div className='w-[1px] h-28  bg-neutral-500 mx-2'></div> {/* Adjust the height and margin as needed */}
                            <div>
                                <div className='text-black text-1xl md:text-2xl font-bold'><span className='text-blue-700 text-2xl font-bold'>N</span>eura</div>
                                <div className='text-black text-1xl md:text-2xl font-bold'><span className='text-blue-700 text-2xl font-bold'>L</span>earn</div>
                                <div className='text-black text-1xl md:text-2xl font-bold'><span className='text-blue-700 text-2xl font-bold'>A</span>cademy</div>

                            </div>
                        </div>

                        <div>
                            <label htmlFor="fullName" className="block mb-1 text-neutral-600 text-base font-semibold">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                className={`w-full pl-2 py-2 border ${errors.fullName ? 'border-red-500' : 'border-gray-300'}  md:w-80`}
                                value={fullName}
                                onChange={e => setFullName(e.target.value)}
                                onBlur={validateFullName}
                            />
                            {errors.fullName && <p className="text-red-600 text-sm mt-1">{errors.fullName}</p>}
                        </div>

                        <div>
                            <label htmlFor="email" className="block mb-1 text-neutral-600 text-base font-semibold">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className={`w-full pl-2 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'}  md:w-80`}
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                onBlur={validateEmail}
                            />
                            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                        </div>

                        <div>
                            <label htmlFor="password" className="block mb-1 text-neutral-600 text-base font-semibold">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className={`w-full pl-2 mb-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'}  md:w-80`}
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                onBlur={validatePassword}
                            />
                            {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password}</p>}
                        </div>

                        <button type="submit" className=" w-5/6 py-3 text-white text-xl font-semibold   bg-blue-700 hover:bg-blue-600">
                            Sign in
                        </button>



                        <h2 className="text-black text-base font-semibold tracking-wide">Sign in another way</h2>


                        {/* start social media icon */}
                        <div className='flex space-x-12 '>
                            <Link>
                                <div style={{ backgroundColor: '#DB4437', padding: '10px', borderRadius: '50%' }}>
                                    <FontAwesomeIcon icon={faGoogle} style={{ color: 'white' }} />
                                </div>
                            </Link>
                            <Link >
                                <div style={{ backgroundColor: '#0077B5', padding: '10px', borderRadius: '50%' }}>
                                    <FontAwesomeIcon icon={faLinkedin} style={{ color: 'white' }} />
                                </div>
                            </Link>
                            <Link>
                                <div style={{ backgroundColor: 'blue', padding: '10px', borderRadius: '50%' }}>
                                    <FontAwesomeIcon icon={faFacebook} style={{ color: 'white' }} />
                                </div>
                            </Link>


                        </div>
                        {/* end social media icon */}

                        <div className='text-neutral-600 text-lg font-bold '>Already have an account?
                            <Link><span className='text-blue-700 text-lg font-bold  underline'> Log in</span></Link>
                        </div>
                    </form>
                </div >


            </div >



            {/* Links */}
            <div div className="flex flex-wrap mx-2 md:ml-20 md:my-14 lg:w-1/2" >
                <Link
                    to="#"
                    className="px-2 text-sm font-bold border-r border-black md:text-xl md:px-4 text-neutral-700"
                >
                    Home
                </Link>

                <Link
                    to="#"
                    className="px-2 text-sm font-bold border-r border-black md:text-xl md:px-4 text-neutral-700"
                >
                    Content
                </Link>
                <Link
                    to="#"
                    className="px-2 text-sm font-bold border-r border-black md:text-xl md:px-4 text-neutral-700"
                >
                    Terms Of Use
                </Link>
                <Link
                    to="#"
                    className="px-2 text-sm font-bold border-r border-black md:text-xl md:px-4 text-neutral-700"
                >
                    Privacy Policy
                </Link>
            </div >

            <div className="flex justify-center m-4 text-sm font-bold text-neutral-700">
                <div>
                    Copyright © 2024 President & Fellows of College. All rights reserved.
                </div>
            </div>
        </>

    );
};

export default SignUpForm;