"use client"

import { useState } from 'react';


export default function Modal_link ({ children, textLink, setClassModal}){

    const [show, setShow] = useState(false);
    const CloseModal = () => setShow(false);
    const ShowModal = () => setShow(true);
    
  
    return (
      <>
        <span className={`text-blue-crea-400 transition-all cursor-pointer`} onClick={ShowModal}>
          {textLink}
        </span>

        {show &&
          <>
            {/* Overlay */}
            <div className='fixed bottom-0 left-0 z-50 w-full h-full bg-black/20' onClick={CloseModal}>

            </div>

            {/* Modal */}
            <div className={`fixed inset-0 z-50 mx-auto w-11/12 lg:w-7/12 h-min max-h-[90%] my-auto overflow-y-auto bg-white p-5 md:p-10 rounded-lg animate-fade-up animate-duration-300 ${setClassModal}`}>
              <main className='relative'>
                  <button onClick={CloseModal} className=' absolute top-0 right-0'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 hover:opacity-50 transition-all">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  {children}

              </main>
            </div>
          </>
        }
      </>
    )
}