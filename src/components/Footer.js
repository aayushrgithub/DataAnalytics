import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa';

function Footer() {
    return (
        <div className='bg-black w-full text-white py-6 px-4'>
            <div className='max-w-[1024px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='flex flex-col'>
                    <p className='text-green-400 text-2xl font-bold pb-4'>REACT</p>
                    <p className='pb-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
                    <div className='flex justify-between'>
                        <div><FaInstagram size={35} /></div>
                        <div><FaGithubSquare size={35} /></div>
                        <div><FaTwitterSquare size={35} /></div>
                        <div><FaDribbbleSquare size={35} /></div>
                        <div><FaFacebookSquare size={35} /></div>
                    </div>
                </div>

                <div className='md:col-span-2 flex justify-between'>
                    <ul className='flex flex-col'>
                        <div className='font-bold text-lg pb-4 text-green-400'>Solutions</div>
                        <li className='text-sm pb-2'>Analytics</li>
                        <li className='text-sm pb-2'>Marketing</li>
                        <li className='text-sm pb-2'>Commerce</li>
                        <li className='text-sm pb-2'>Insights</li>
                    </ul>


                    <ul className='flex flex-col'>
                        <div className='font-bold text-lg pb-4 text-green-400'>Support</div>
                        <li className='text-sm pb-2'>Analytics</li>
                        <li className='text-sm pb-2'>Marketing</li>
                        <li className='text-sm pb-2'>Commerce</li>
                        <li className='text-sm pb-2'>Insights</li>
                    </ul>


                    <ul className='flex flex-col'>
                        <div className='font-bold text-lg pb-4 text-green-400'>Company</div>
                        <li className='text-sm pb-2'>Analytics</li>
                        <li className='text-sm pb-2'>Marketing</li>
                        <li className='text-sm pb-2'>Commerce</li>
                        <li className='text-sm pb-2'>Insights</li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Footer