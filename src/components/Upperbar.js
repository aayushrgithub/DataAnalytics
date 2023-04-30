import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

function Upperbar() {

    const [operation, setOperation] = useState(false);

    function handleEvent() {
        setOperation(!operation)
    }

    return (
        <div className='text-white flex justify-between items-center px-4 h-24'>
            <div className='text-3xl text-green-400 font-bold'>REACT</div>
            <ul className='md:flex hidden'>
                <li className='p-7'>Home</li>
                <li className='p-7'>Account</li>
                <li className='p-7'>Sign In</li>
                <button className='px-2 my-5 bg-white text-black rounded-lg'>Get Started</button>
            </ul>

            <div onClick={handleEvent} className='md:hidden'>{!operation ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}</div>

            <div className={!operation ? 'max-w-[60%] left-0 top-0 fixed bg-slate-900 h-screen w-full ease-in-out duration-500' : 'fixed left-[-100%] ease-in-out'}>
                <ul className='text-green-400 text-2xl uppercase my-24'>
                    <li className='p-7 border-b'>Home</li>
                    <li className='p-7 border-b'>Account</li>
                    <li className='p-7 border-b'>Sign In</li>
                    <li className='p-7'>Get Started</li>
                </ul>
            </div>
        </div>
    )
}

export default Upperbar