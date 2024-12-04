import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
    // const name = "abhisheknar421@mail.com";
    // const password = 12345678999;
    const [isTrue,setIsTrue]=useState(false);
    
    const handleClick = () => {
        setIsTrue(true)
    }
    console.log('state=',isTrue);
    return (
        <div className='flex justify-center' style={{marginTop:90}} >
        <div className='h-3/ w-2/4  bg-gray-700 border-2 rounded-xl my-4 '>
            <h1 className='my-5  text-green-700 text-2xl font-bold'>Login form for VidyaGXP</h1>
            <div>
                <label className='ml-5 text-white font-bold'>Email</label>
                <input type="email" placeholder='Enter Email' className="p-2 m-5 my-5 rounded-2xl bg-white border-2 placeholder:text-blue-500 border-black" ></input>
            </div>
            <div>
                <label className='text-white font-bold'>Password</label>
                <input type="password" placeholder='Enter Password' className="p-2 my-5 m-2 rounded-2xl bg-white border-2 placeholder:text-blue-500 border-black"></input>
            </div>
            <div>
                <span ><Link to="/forgot-password" className='text-white font-bold'>Forgot Password</Link></span>
            </div>
            
            <button onClick={handleClick }  className="px-5 py-2 my-5 m-2 rounded-2xl bg-white border-2 placeholder:text-blue-500 border-black">Login</button>
        </div>
        </div>
    )
}