import React from 'react'
import single from '../assets/single.png'
import double from '../assets/double.png'
import triple from '../assets/triple.png'


function Cards() {
    return (
        <div className='bg-white w-full py-24 px-7'>
            <div className='max-w-[1024px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='flex flex-col rounded-md shadow-md shadow-slate-400 items-center p-4 hover:scale-105 duration-300'>
                    <img className='w-20' src={single} />
                    <p className='font-extrabold py-6'>Single User</p>
                    <p className='font-bold text-3xl pb-6'>Rs 149</p>
                    <p className='font-bold border-b border-t pb-4 pt-4'>500 GB Storage</p>
                    <p className='font-bold border-b pb-4 pt-4'>1 User Allowed</p>
                    <p className='font-bold border-b pb-4 pt-4'>Send up to 2 GB</p>
                    <button className='rounded-md bg-green-400 text-black px-10 py-1 font-bold'>Start Trial</button>
                </div>

                <div className='flex flex-col rounded-md shadow-md shadow-slate-400 items-center p-4 hover:scale-105 duration-300'>
                    <img className='w-20' src={double} />
                    <p className='font-extrabold py-6'>Single User</p>
                    <p className='font-bold text-3xl pb-6'>Rs 149</p>
                    <p className='font-bold border-b border-t pb-4 pt-4'>500 GB Storage</p>
                    <p className='font-bold border-b pb-4 pt-4'>1 User Allowed</p>
                    <p className='font-bold border-b pb-4 pt-4'>Send up to 2 GB</p>
                    <button className='rounded-md bg-green-400 text-black px-10 py-1 font-bold'>Start Trial</button>
                </div>

                <div className='flex flex-col rounded-md shadow-md shadow-slate-400 items-center p-4 hover:scale-105 duration-300'>
                    <img className='w-16' src={triple} />
                    <p className='font-extrabold py-6'>Single User</p>
                    <p className='font-bold text-3xl pb-6'>Rs 149</p>
                    <p className='font-bold border-b border-t pb-4 pt-4'>500 GB Storage</p>
                    <p className='font-bold border-b pb-4 pt-4'>1 User Allowed</p>
                    <p className='font-bold border-b pb-4 pt-4'>Send up to 2 GB</p>
                    <button className='rounded-md bg-green-400 text-black px-10 py-1 font-bold'>Start Trial</button>
                </div>
            </div>
        </div>
    )
}

export default Cards