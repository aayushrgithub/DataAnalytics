import React from 'react'

function Newsletter() {
    return (
        <div className='bg-black w-full text-white py-24 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <div className='flex flex-col pb-10'>
                    <p className='text-3xl'>Want tips and tricks to optimize your flow?</p>
                    <p>Sign to our newsletter and stay upto date</p>
                </div>

                <div className='flex flex-col'>
                    <div className='flex'>
                        <input className='w-[70%] rounded-md' type='text' placeholder=' Enter your email' />
                        <button className='rounded-md bg-[#00df9a] text-black px-6 ml-4'>Notify Me</button>
                    </div>
                    <div>We care about the protection of your data. Read our</div>
                    <div className='underline text-[#00df9a]'>Privacy Policy</div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter