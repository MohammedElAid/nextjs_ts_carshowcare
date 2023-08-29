'use client'
import React, {useState, Fragment} from 'react'
import Image from 'next/image'
import { Transition } from '@headlessui/react'


export default function Apiproblem() {
    const [showModal, setShowModal] = useState(true)
  return (
    <main className='flex justify-center items-center'>
        { showModal && (
                
<div className=' bg-red-500 mt-6 border-red-500  gap-3 mx-16  rounded-xl items-center w-fit gap-3 xl:w-[500px]  ' >
    <div className='relative py-6' >
        <button 
            className='absolute top-0 right-0 rounded-full m-2 mr-2 ' 
            onClick={()=> setShowModal(false)}>
                <Image src='closev2.svg' alt='close' width={30} height={30}  />
        </button>
        <h1 className='text-white text-[22px] m-2 font-extrabold whitespace-nowrap ml-4'> Error !!!</h1>
        <div className=' flex  justify-center '>
            <Image src='warning.svg' alt="warning" width={40} height={40} className='ml-3' />
            <h1 className='text-white text-[20px] m-2 font-extrabold whitespace-nowrap mr-6' > API image not accessible </h1>
        </div>
    </div>
       
        </div>
         )}
    </main>
            
  )
}
