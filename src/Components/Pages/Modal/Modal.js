import React from 'react';
import { useSelector } from 'react-redux';

const Modal = ({ modalOpen, setModalOpen }) => {
    const { formData } = useSelector((state) => state.form);
    console.log(formData);
    return (
        <div className="fixed w-full h-full top-0 left-0 flex items-center justify-center z-50">
            <div
                onClick={() => setModalOpen(!modalOpen)}
                className="absolute w-full h-full opacity-60 bg-blend-overlay bg-black">
            </div>
            <div className="bg-bgColor w-11/12 md:max-w-md mx-auto rounded z-50 overflow-y-auto p-4">
                <div className="flex justify-between items-center pb-3 px-6">
                    <p className="text-2xl font-semibold font-barlow tracking-wide">Your Details</p>
                    <div className="modal-close cursor-pointer z-50">
                        <button className='w-8 h-8 border flex justify-center items-center rounded-full border-gray-400 hover:bg-red/50 duration-200' onClick={() => setModalOpen(!modalOpen)}>
                            <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 18">
                                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div>
                    {
                        formData?.isStudying === "true" &&
                        <div>
                            Poralekha kori Bhai.
                        </div>
                    }
                    {
                        formData?.isStudying === "false" &&
                        <div>
                            Poralekha korina Bhai.
                        </div>
                    }
                </div>
            </div>
        </div>

    );
};

export default Modal;