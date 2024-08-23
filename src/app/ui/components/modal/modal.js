"use client"

import { useState } from 'react';


export default function Modal ({ children, icon, outlineButton, textButton, setClassButton, setClassModal,idbutton = 'default-id-button', buttonCloseModal = 'close-modal' }){

    const [show, setShow] = useState(false);
    const CloseModal = () => setShow(false);
    const ShowModal = () => setShow(true);
    
  
    return (
      <>
        {outlineButton ? (
          
        <button id={idbutton} className={`${icon && 'flex justify-between items-center'} rounded-full w-full py-2 px-4 border ${setClassButton ? `${setClassButton}`: 'border-blue-crea-500 text-blue-crea-500 hover:bg-blue-crea-500 hover:text-white hover:border-transparent'} hover:translate-x-1 transition-all`} onClick={ShowModal}>
          {textButton}
          {icon}
        </button>

        ):(

        <button id={idbutton} className={`${icon && 'flex justify-between items-center'} px-4 py-2 w-full rounded-full ${setClassButton ? `${setClassButton}`: 'border border-blue-crea-500 hover:bg-blue-crea-400 group-hover:bg-blue-crea-400 bg-blue-crea-500 text-white group-hover:text-white'} hover:translate-x-1 right-5 bottom-5 transition-all`} onClick={ShowModal}>
          {textButton}
          {icon}
        </button>
        )}

        {show &&
          <>
            {/* Overlay */}
            <div id={buttonCloseModal} className='fixed bottom-0 left-0 z-50 w-full h-full bg-black/20' onClick={CloseModal}>

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