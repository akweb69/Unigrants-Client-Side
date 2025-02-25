import axios from 'axios';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import { useEffect } from 'react';
import { useState } from 'react';
import { IoLocation } from "react-icons/io5";
import useReviews from '../Hooks/useReviews';


const S_Details = () => {
    const { id } = useParams();
    const axiosPublic = useAxiosPublic();
    const [data, setData] = useState({})
    const [reviewData, setReviewData] = useState([])

    const { _id, universityImage, universityLogo, universityName, universityCity, universityCountry, scholarshipName, universityWorldRank, subjectCategory, applicationDeadline, scholarshipCategory, scholarshipDescription, scholarshipPostDate, serviceCharge, applicationFees, tuitionFees } = data


    const { reviews, refetch, isPending } = useReviews()
    useEffect(() => {

        const review = reviews.filter(dd => dd.scholarship_id === _id)
        setReviewData(review)

        axiosPublic.get(`singleScholarship/${id}`)
            .then(res => {
                const data = res.data
                setData(data)
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [reviews, _id])


    return (
        <div className='w-11/12 mx-auto pb-14' >
            <div className="w-full h-[300px] md:h-[500px]">
                <img className='w-full h-full object-cover' src={universityImage} alt="" />
            </div>
            <div className="pt-5 border py-2 flex flex-col md:flex-row justify-between items-center gap-5">
                <div className="flex  items-center gap-2">
                    <img className="w-14 h-14 rounded-full" src={universityLogo} alt="" />
                    <div className="flex-1">
                        <p className="text-2xl font-bold font-logoFont">{universityName}</p>
                        <p className="font-logoFont text-sm flex items-center gap-1"> <IoLocation className='text-orange-500'></IoLocation> {universityCity} , {universityCountry}</p>
                    </div>
                </div>
                <div className="font-logoFont text-white p-4  bg-orange-500 text-xl ">
                    <span className=''> World Rank:</span>{universityWorldRank}
                </div>
            </div>
            <p className="text-xl md:text-4xl py-4 font-bold font-logoFont text-transparent bg-gradient-to-tr from-orange-500 to-fuchsia-500 bg-clip-text w-fit ">{scholarshipName}</p>
            <div className="md:flex justify-between gap-3 items-center font-logoFont md:text-lg font-semibold">
                <div className="">
                    <p className="">
                        Scholarship Category: {scholarshipCategory}
                    </p>
                    <p className="">
                        Subject Category: {subjectCategory}
                    </p>
                    <p className="">
                        Deadline: {applicationDeadline}
                    </p>
                </div>

                <div className="">
                    <p className="">
                        Service Charge: ${serviceCharge}
                    </p>
                    <p className="">
                        Application Fees: ${applicationFees}
                    </p>
                    <p className="">
                        Tution Fees: ${tuitionFees}
                    </p>
                </div>
            </div>
            <p className="text-justify font-logoFont">
                <b className="text-lg font-logoFont font-semibold ">Description:</b> {scholarshipDescription}
            </p>
            <p className="my-5 text-xs md:text-sm bg-orange-200 w-fit rounded-full p-1 font-logoFont px-4 ">
                Posted Date : {scholarshipPostDate}
            </p>

            <div className="w-full flex justify-end">
                <Link to={`/payment/${_id}`}
                    className="btn bg-orange-500 text-white btn-error">Apply Scholarship</Link>
            </div>

            {/* comments */}
            <div className="w-full border p-4 bg-white mt-10">
                <h1 className="text-2xl md:text-4xl font-logoFont">Reviews</h1>
                {
                    reviewData.length > 0 ? reviewData.map((re, idx) => <div className="border font-logoFont p-2 py-4">
                        <div className="flex gap-3 items-center">
                            <div className="w-14 h-14 rounded-full">
                                <img className='w-full h-full rounded-full' referrerPolicy='no-referrer' src={re?.user_photo_url} alt="" />
                            </div>
                            <div className="">
                                <p className="text-lg md:text-xl font-bold">{re?.user_name}</p>
                                <p className="text-xs md:text-sm">{re?.user_email}</p>
                            </div>
                        </div>
                        <div className="">
                            <p className="text-lg font-bold text-orange-800">Rate: {re?.rating} / 5.0</p>
                            <p className="text-xs">Date:{re?.review_date}</p>
                        </div>
                        <p className="">Review: {re?.comment}</p>
                    </div>)
                        : "No reviews available"
                }
            </div>
        </div>
    );
};

export default S_Details;