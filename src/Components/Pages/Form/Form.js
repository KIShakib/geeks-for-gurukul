import React, { useState } from 'react';
import studying from "../../../Assets/studying.png";
import notStudying from "../../../Assets/not-studying.png";
import school from "../../../Assets/school.png";
import college from "../../../Assets/college.png";
import lookingJob from "../../../Assets/looking-job.png";
import working from "../../../Assets/working.png";
import { getFormData } from "../../../features/form/formSlice";
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import Modal from '../Modal/Modal';

const Form = () => {
    const [isStudying, setIsStudying] = useState(null);
    const [schoolOrCollege, setSchoolOrCollege] = useState(null);
    const [isWorking, setIsWorking] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const dispatch = useDispatch();

    // console.log(state);

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        // console.log("From onSubmit");
        dispatch(getFormData(data));
        setModalOpen(!modalOpen)
    };

    return (
        <div className='py-20'>
            <h3 className='text-center text-2xl font-barlow font-medium text-primary'>Hi Stranger! Welcome back to Geeks for Gurukul</h3>


            <form className='mt-5' onSubmit={handleSubmit(onSubmit)}>

                {/* Studying Status Start */}
                <div>
                    <h3 className='text-center text-xl'>Are you currently studying?</h3>
                    <div className='flex flex-row gap-x-10 gap-y-5 justify-center mt-2'>

                        <label className="relative cursor-pointer">
                            <input
                                {...register("isStudying", { required: true })}
                                onClick={() => { setIsStudying(true); setIsWorking(null) }}
                                type="radio"
                                value={true}
                                className="peer sr-only"
                                name="isStudying"
                            />
                            <div className={`flex cursor-pointer rounded overflow-hidden ring ring-transparent transition-all active:scale-95 ${isStudying === true ? "bg-secondary ring-primary" : "bg-white ring-secondary"}`}>
                                <div className="p-2 h-24 w-20 text-center flex flex-col justify-between items-center gap-0 gap-x-5">
                                    <img src={studying} alt="" />
                                    <h5 className="font-semibold text-[#1d5da8] text-xs mt-1">Yes. I'm studying</h5>
                                </div>
                            </div>
                        </label>

                        <label className="relative cursor-pointer">
                            <input
                                {...register("isStudying", { required: true })}
                                onClick={() => { setIsStudying(false); setSchoolOrCollege(null) }}
                                type="radio"
                                value={false}
                                className="peer sr-only"
                                name="isStudying"
                            />
                            <div className={`flex cursor-pointer rounded overflow-hidden ring ring-transparent transition-all active:scale-95 ${isStudying === false ? "bg-secondary ring-primary" : "bg-white ring-secondary"}`}>
                                <div className="p-2 h-24 w-20 text-center flex flex-col justify-between items-center gap-0 gap-x-5">
                                    <img src={notStudying} alt="" />
                                    <div className="">
                                        <h2 className="font-semibold text-[#1d5da8] text-xs mt-1">No. I'm not studying</h2>
                                    </div>
                                </div>
                            </div>
                        </label>

                    </div>
                </div>
                {/* Studying Status End */}



                {/* Studying True Start*/}

                {/* School or College Start */}
                {
                    isStudying === true
                    &&
                    <div className='mt-5'>
                        <h3 className='text-center text-xl'>Are you currently?</h3>
                        <div className='flex flex-row gap-x-10 gap-y-5 justify-center mt-2'>

                            <label className="relative cursor-pointer">
                                <input
                                    {...register("schoolOrCollege", { required: true })}
                                    onClick={() => setSchoolOrCollege("school")}
                                    type="radio"
                                    value="school"
                                    className="sr-only"
                                    name="schoolOrCollege"
                                />
                                <div className={`flex cursor-pointer rounded overflow-hidden ring ring-transparent transition-all active:scale-95 ${schoolOrCollege === "school" ? "bg-secondary ring-primary" : "bg-white ring-secondary"}`}>
                                    <div className="p-2 h-24 w-20 text-center flex flex-col justify-between items-center gap-0 gap-x-5">
                                        <img src={school} alt="" />
                                        <h5 className="font-semibold text-[#1d5da8] text-xs mt-1">In school</h5>
                                    </div>
                                </div>
                            </label>

                            <label className="relative cursor-pointer">
                                <input
                                    {...register("schoolOrCollege", { required: true })}
                                    onClick={() => setSchoolOrCollege("college")}
                                    type="radio"
                                    value="college"
                                    className="peer sr-only"
                                    name="schoolOrCollege"
                                />
                                <div className={`flex cursor-pointer rounded overflow-hidden  ring ring-transparent transition-all active:scale-95 ${schoolOrCollege === "college" ? "bg-secondary ring-primary" : "bg-white ring-secondary"}`}>
                                    <div className="p-2 h-24 w-20 text-center flex flex-col justify-between items-center gap-0 gap-x-5">
                                        <img src={college} alt="" />
                                        <div className="">
                                            <h2 className="font-semibold text-[#1d5da8] text-xs mt-1">In college</h2>
                                        </div>
                                    </div>
                                </div>
                            </label>

                        </div>
                    </div>
                }
                {/* School or College End */}

                {/* School Info Start */}
                {
                    (schoolOrCollege === "school" && isStudying === true) &&
                    <div className='mt-5'>
                        <label
                            className='w-[200px] mx-auto flex justify-center flex-col'
                            htmlFor="schoolName">
                            <h5 className='text-lg'>School Name</h5>
                            <input
                                {...register("schoolName", { required: true })}
                                type="text"
                                id='schoolName'
                                className='py-0.5 outline outline-secondary focus:outline-4 border-none'
                                name='schoolName'
                                required
                            />
                        </label>
                        <label
                            className='w-[200px] mx-auto flex justify-center flex-col'
                            htmlFor="schoolGrade">
                            <h5 className='text-lg'>Select your grade</h5>
                            <select
                                {...register("schoolGrade", { required: true })}
                                name="schoolGrade"
                                id="schoolGrade"
                                className='py-0.5 outline outline-secondary focus:outline-4 border-none'
                                required={true}
                            >
                                <option hidden>Grade?</option>
                                <option value="Six">Six</option>
                                <option value="Seven">Seven</option>
                                <option value="Eight">Eight</option>
                                <option value="Nine">Nine</option>
                                <option value="Ten">Ten</option>
                                <option value="Eleven">Eleven</option>
                                <option value="Twelve">Twelve</option>
                            </select>
                        </label>
                    </div>
                }
                {/* School Info End */}

                {/* College Info Start */}
                {
                    (schoolOrCollege === "college" && isStudying === true) &&
                    <div className='mt-5'>
                        <label
                            className='w-[200px] mx-auto flex justify-center flex-col'
                            htmlFor="collegeName">
                            <h5 className='text-lg'>College Name</h5>
                            <input
                                {...register("collegeName", { required: true })}
                                type="text"
                                id='collegeName'
                                className='py-0.5 outline outline-secondary focus:outline-4 border-none'
                                name='collegeName'
                                required
                            />
                        </label>
                        <label
                            className='w-[200px] mx-auto flex justify-center flex-col'
                            htmlFor="collegeDegree">
                            <h5 className='text-lg'>Select your latest degree</h5>
                            <select
                                {...register("collegeDegree", { required: true })}
                                name="collegeDegree"
                                id="collegeDegree"
                                className='py-0.5 outline outline-secondary focus:outline-4 border-none'
                                required
                            >
                                <option hidden>Latest degree?</option>
                                <option value="BTech">BTech</option>
                                <option value="BSC">BSC</option>
                                <option value="MSC">MSC</option>
                                <option value="BBA">BBA</option>
                                <option value="MBA">MBA</option>
                            </select>
                        </label>
                        <label
                            className='w-[200px] mx-auto flex justify-center flex-col'
                            htmlFor="graduationYear">
                            <h5 className='text-lg'>Select your graduation year</h5>
                            <select
                                {...register("graduationYear", { required: true })}
                                name="graduationYear"
                                id="graduationYear"
                                className='py-0.5 outline outline-secondary focus:outline-4 border-none'
                                required
                            >
                                <option hidden>Graduation year?</option>
                                <option value="2023">2023</option>
                                <option value="2022">2022</option>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                                <option value="2017">2017</option>
                                <option value="2016">2016</option>
                                <option value="2015">2015</option>
                                <option value="2014">2014</option>
                                <option value="2013">2013</option>
                                <option value="2012">2012</option>
                                <option value="2011">2011</option>
                                <option value="2010">2010</option>
                            </select>
                        </label>
                    </div>
                }
                {/* College Info End */}

                {/* Studying True End*/}



                {/* Studying False Start */}


                {/* Looking Job or Currently Working Start */}
                {
                    isStudying === false &&
                    <div className='mt-5'>
                        <h3 className='text-center text-xl'>Are you currently?</h3>
                        <div className='flex flex-row gap-x-10 gap-y-5 justify-center mt-2'>

                            <label className="relative cursor-pointer">
                                <input
                                    {...register("jobOrWorking", { required: true })}
                                    onClick={() => setIsWorking("Looking for a job")}
                                    type="radio"
                                    value="Looking for a job"
                                    className="peer sr-only"
                                    name="jobOrWorking"
                                />
                                <div className={`flex cursor-pointer rounded overflow-hidden  ring ring-transparent transition-all active:scale-95 ${isWorking === "Looking for a job" ? "bg-secondary ring-primary" : "bg-white ring-secondary"}`}>
                                    <div className="p-2 h-28 w-24 text-center flex flex-col justify-between items-center gap-0 gap-x-5">
                                        <img src={lookingJob} alt="" />
                                        <h5 className="font-semibold text-[#1d5da8] text-xs mt-1">Looking for a job</h5>
                                    </div>
                                </div>
                            </label>

                            <label className="relative cursor-pointer">
                                <input
                                    {...register("jobOrWorking", { required: true })}
                                    onClick={() => setIsWorking("Currently working")}
                                    type="radio"
                                    value="Currently working"
                                    className="peer sr-only"
                                    name="jobOrWorking"
                                />
                                <div className={`flex cursor-pointer rounded overflow-hidden  ring ring-transparent transition-all active:scale-95 ${isWorking === "Currently working" ? "bg-secondary ring-primary" : "bg-white ring-secondary"}`}>
                                    <div className="p-2 h-28 w-24 text-center flex flex-col justify-between items-center gap-0 gap-x-5">
                                        <img src={working} alt="" />
                                        <div className="">
                                            <h2 className="font-semibold text-[#1d5da8] text-xs mt-1">Currently working</h2>
                                        </div>
                                    </div>
                                </div>
                            </label>

                        </div>
                    </div>
                }
                {/* Looking Job or Currently Working Start */}

                {/* Looking For A Job  Start */}
                {
                    (isWorking === "Looking for a job" && isStudying === false) &&
                    <div className='mt-5'>
                        <label
                            className='w-[200px] mx-auto flex justify-center flex-col'
                            htmlFor="collegeName">
                            <h5 className='text-lg'>College Name</h5>
                            <input
                                {...register("collegeName", { required: true })}
                                type="text"
                                id='collegeName'
                                className='py-0.5 outline outline-secondary focus:outline-4 border-none'
                                name='collegeName'
                                required
                            />
                        </label>
                        <label
                            className='w-[200px] mx-auto flex justify-center flex-col'
                            htmlFor="collegeDegree">
                            <h5 className='text-lg'>Select your latest degree</h5>
                            <select
                                {...register("collegeDegree", { required: true })}
                                name="collegeDegree"
                                id="collegeDegree"
                                className='py-0.5 outline outline-secondary focus:outline-4 border-none'
                                required
                            >
                                <option hidden>Latest degree?</option>
                                <option value="bTech">BTech</option>
                                <option value="bsc">BSC</option>
                                <option value="msc">MSC</option>
                                <option value="bba">BBA</option>
                                <option value="mba">MBA</option>
                            </select>
                        </label>
                        <label
                            className='w-[200px] mx-auto flex justify-center flex-col'
                            htmlFor="graduationYear">
                            <h5 className='text-lg'>Select your graduation year</h5>
                            <select
                                {...register("graduationYear", { required: true })}
                                name="graduationYear"
                                id="graduationYear"
                                className='py-0.5 outline outline-secondary focus:outline-4 border-none'
                                required
                            >
                                <option hidden>Graduation year?</option>
                                <option value="2023">2023</option>
                                <option value="2022">2022</option>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                                <option value="2017">2017</option>
                                <option value="2016">2016</option>
                                <option value="2015">2015</option>
                                <option value="2014">2014</option>
                                <option value="2013">2013</option>
                                <option value="2012">2012</option>
                                <option value="2011">2011</option>
                                <option value="2010">2010</option>
                            </select>
                        </label>
                    </div>
                }
                {/* Looking For A Job  End */}

                {/* Currently Working Start */}
                {
                    (isWorking === "Currently working" && isStudying === false) &&
                    <div className='mt-5'>
                        <label
                            className='w-[200px] mx-auto flex justify-center flex-col'
                            htmlFor="companyName">
                            <h5 className='text-lg'>Company Name</h5>
                            <input
                                {...register("companyName", { required: true })}
                                type="text"
                                id='companyName'
                                className='py-0.5 outline outline-secondary focus:outline-4 border-none'
                                name='companyName'
                                required
                            />
                        </label>
                        <label
                            className='w-[200px] mx-auto flex justify-center flex-col'
                            htmlFor="workingExperience">
                            <h5 className='text-lg'>Select your experience</h5>
                            <select
                                {...register("workingExperience", { required: true })}
                                name="workingExperience"
                                id="workingExperience"
                                className='py-0.5 outline outline-secondary focus:outline-4 border-none'
                                required
                            >
                                <option hidden>Total experience?</option>
                                <option value="1year">1year</option>
                                <option value="2year">2year</option>
                                <option value="3year">3year</option>
                                <option value="4year">4year</option>
                                <option value="5year">5year</option>
                                <option value="6year">6year</option>
                                <option value="7year">7year</option>
                                <option value="8year">8year</option>
                                <option value="9year">9year</option>
                                <option value="10year">10year</option>
                                <option value="10+year">10+year</option>
                            </select>
                        </label>
                        <label
                            className='w-[200px] mx-auto flex justify-center flex-col'
                            htmlFor="jobTitle">
                            <h5 className='text-lg'>Select your job title</h5>
                            <select
                                {...register("jobTitle", { required: true })}
                                name="jobTitle"
                                id="jobTitle"
                                className='py-0.5 outline outline-secondary focus:outline-4 border-none'
                                required
                            >
                                <option hidden>Your job title?</option>
                                <option value="Junior Developer">Junior Developer</option>
                                <option value="Sr. Developer">Sr. Developer</option>
                                <option value="Front End Developer">Front End Developer</option>
                                <option value="Back End Developer">Back End Developer</option>
                                <option value="Full Stack Developer">Full Stack Developer</option>
                            </select>
                        </label>
                    </div>
                }
                {/* Currently Working End */}



                {/* Studying False End */}


                <button
                    type='submit'
                    className='bg-primary w-[204px] mx-auto flex justify-center flex-col items-center py-1 mt-5 text-secondary hover:bg-primary/80 active:bg-secondary duration-300'
                >
                    Submit
                </button>
            </form>
            {
                modalOpen && <Modal
                    modalOpen={modalOpen}
                    setModalOpen={setModalOpen}
                />
            }
        </div>
    );
};

export default Form;