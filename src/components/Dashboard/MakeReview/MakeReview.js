import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeReview = () => {
    const { user } = useAuth()
    //successful message set
    const [reviewSuccess, setReviewSuccess] = useState(false)
    //initial store data 
    const initialInfo = { displayName: user.displayName, email: user.email, reviewAmount: '', message: '', photoURL: user.photoURL }
    //save data in state
    const [reviewInfo, setReviewInfo] = useState(initialInfo)
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newReviewData = { ...reviewInfo };
        newReviewData[field] = value;
        setReviewInfo(newReviewData)



    }
    //send review data to the DB
    const reviewSubmit = e => {
        const newReview = { ...reviewInfo }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
            .then(response => response.json())
            .then(data => {
                if (data.insertedId) {
                    setReviewSuccess(true)
                    e.target.reset()

                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <section className="text-gray-600 body-font h-full">
                <div className="container px-5  mx-auto ">
                    <div className="flex flex-col text-center w-full">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Make Review</h1>
                        {reviewSuccess === true &&
                            <button type="button" className="bg-rose-600 text-green-500" disabled>
                                <svg className="animate-spin h-5 w-5 mr-3 " viewBox="0 0 24 24">

                                </svg>
                                Submitted Review Successfully
                            </button>
                        }
                    </div>
                    <form onSubmit={reviewSubmit}>
                        <div className="lg:w-1/2 md:w-2/3 mx-auto">
                            <div className="flex flex-wrap -m-2">
                                <div className="p-2 w-1/2">
                                    <div className="">
                                        <label className="leading-7 text-sm text-gray-600">Name</label>
                                        <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            defaultValue={user.displayName} disabled
                                        />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="">
                                        <label className="leading-7 text-sm text-gray-600">Email</label>
                                        <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            defaultValue={user.email} disabled
                                        />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="w-full">
                                        <label className="leading-7 text-sm text-gray-600">Review in 1 to 5</label>
                                        <input type="text" name="reviewAmount" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            onBlur={handleOnBlur}
                                        />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="">
                                        <label className="leading-7 text-sm text-gray-600">Message</label>
                                        <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                            onBlur={handleOnBlur}
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" type="submit">Button</button>
                                </div>

                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default MakeReview;