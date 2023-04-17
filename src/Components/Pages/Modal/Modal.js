import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../../../features/form/formSlice';

const Modal = () => {
    const { formData, modalOpen } = useSelector((state) => state.form);
    const dispatch = useDispatch();
    console.log(formData);
    return (
        <div className="fixed w-full h-full top-0 left-0 flex items-center justify-center z-50">
            <div
                onClick={() => dispatch(toggleModal(!modalOpen))}
                className="absolute w-full h-full opacity-60 bg-blend-overlay bg-black">
            </div>
            <div className="bg-bgColor w-11/12 md:max-w-md mx-auto rounded z-50 overflow-y-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <p className="text-2xl font-semibold font-barlow tracking-wide">Your Details</p>
                    <div className="modal-close cursor-pointer z-50">
                        <button className='w-8 h-8 border flex justify-center items-center rounded-full border-gray-400 hover:bg-red/50 duration-200'
                            onClick={() => dispatch(toggleModal(!modalOpen))}
                        >
                            <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 18">
                                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className='mt-5'>


                    {/* isStudying True Start */}
                    {
                        formData?.isStudying === "true" &&
                        <div className='flex flex-col gap-y-2'>
                            <div className='flex gap-x-5'>
                                <h5>Study status:</h5>
                                <span className='bg-secondary px-2 text-sm flex items-center justify-center font-medium rounded'>{formData?.isStudying === "true" && "Studying"}</span>
                            </div>
                            {
                                formData?.schoolOrCollege === "school" &&
                                <div className='flex flex-col gap-y-2'>
                                    <div className='flex gap-x-5'>
                                        <h5>Level:</h5>
                                        <span className='bg-secondary px-2 text-sm flex items-center justify-center font-medium rounded'>{formData?.schoolOrCollege === "school" && "School"}</span>
                                    </div>
                                    <div className='flex gap-x-5'>
                                        <h5>Grade:</h5>
                                        <span className='bg-secondary px-2 text-sm flex items-center justify-center font-medium rounded'>{formData?.schoolGrade}</span>
                                    </div>
                                    <div className='flex gap-x-5'>
                                        <h5>School:</h5>
                                        <span className='bg-secondary px-2 text-sm flex items-center justify-center font-medium rounded'>{formData?.schoolName}</span>
                                    </div>
                                </div>
                            }
                            {
                                formData?.schoolOrCollege === "college" &&
                                <div className='flex flex-col gap-y-2'>
                                    <div className='flex gap-x-5'>
                                        <h5>Level:</h5>
                                        <span className='bg-secondary px-2 text-sm flex items-center justify-center font-medium rounded'>{formData?.schoolOrCollege === "college" && "College"}</span>
                                    </div>
                                    <div className='flex gap-x-5'>
                                        <h5>Degree:</h5>
                                        <span className='bg-secondary px-2 text-sm flex items-center justify-center font-medium rounded'>{formData?.collegeDegree}</span>
                                    </div>
                                    <div className='flex gap-x-5'>
                                        <h5>Graduation year:</h5>
                                        <span className='bg-secondary px-2 text-sm flex items-center justify-center font-medium rounded'>{formData?.graduationYear}</span>
                                    </div>
                                    <div className='flex gap-x-5'>
                                        <h5>College:</h5>
                                        <span className='bg-secondary px-2 text-sm flex items-center justify-center font-medium rounded'>{formData?.collegeName}</span>
                                    </div>
                                </div>
                            }
                        </div>
                    }
                    {/* isStudying True End */}


                    {/* isStudying False Start */}
                    {
                        formData?.isStudying === "false" &&
                        <div>
                            <div className='flex flex-col gap-y-2'>
                                <div className='flex gap-x-5'>
                                    <h5>Study status:</h5>
                                    <span className='bg-secondary px-2 text-sm flex items-center justify-center font-medium rounded'>{formData?.isStudying === "false" && "Graduated"}</span>
                                </div>
                                {
                                    formData?.jobOrWorking === "Looking for a job" &&
                                    <div className='flex flex-col gap-y-2'>
                                        <div className='flex gap-x-5'>
                                            <h5>Job status:</h5>
                                            <span className='bg-secondary px-2 text-sm flex items-center justify-center font-medium rounded'>{formData?.jobOrWorking}</span>
                                        </div>
                                        <div className='flex gap-x-5'>
                                            <h5>Degree:</h5>
                                            <span className='bg-secondary px-2 text-sm flex items-center justify-center font-medium rounded uppercase'>{formData?.collegeDegree}</span>
                                        </div>
                                        <div className='flex gap-x-5'>
                                            <h5>Graduation year:</h5>
                                            <span className='bg-secondary px-2 text-sm flex items-center justify-center font-medium rounded'>{formData?.graduationYear}</span>
                                        </div>
                                        <div className='flex gap-x-5'>
                                            <h5>College:</h5>
                                            <span className='bg-secondary px-2 text-sm flex items-center justify-center font-medium rounded'>{formData?.collegeName}</span>
                                        </div>
                                    </div>
                                }
                                {
                                    formData?.jobOrWorking === "Currently working" &&
                                    <div className='flex flex-col gap-y-2'>
                                        <div className='flex gap-x-5'>
                                            <h5>Job status:</h5>
                                            <span className='bg-secondary px-2 text-sm flex items-center justify-center font-medium rounded'>{formData?.jobOrWorking}</span>
                                        </div>
                                        <div className='flex gap-x-5'>
                                            <h5>Company:</h5>
                                            <span className='bg-secondary px-2 text-sm flex items-center justify-center font-medium rounded'>{formData?.companyName}</span>
                                        </div>
                                        <div className='flex gap-x-5'>
                                            <h5>Experience:</h5>
                                            <span className='bg-secondary px-2 text-sm flex items-center justify-center font-medium rounded'>{formData?.workingExperience}</span>
                                        </div>
                                        <div className='flex gap-x-5'>
                                            <h5>Job title:</h5>
                                            <span className='bg-secondary px-2 text-sm flex items-center justify-center font-medium rounded'>{formData?.jobTitle}</span>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    }
                    {/* isStudying False Start */}
                </div>
            </div>
        </div>

    );
};

export default Modal;