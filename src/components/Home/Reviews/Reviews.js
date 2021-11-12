import React from 'react';
import reviewer from '../../../images/body/default.png'
import ReactStars from "react-rating-stars-component";
import './Reviews.css'
const Reviews = ({ reviews }) => {

    return (
        < >

            <section className="review-bg mx-auto">
                <h2 className="text-4xl font-bold text-center text-white uppercase font-customBold">
                    Reviews
                </h2>
                <div className="w-full h-5/6  flex items-center justify-center gap-4 ">
                    <div className="flex flex-wrap gap-4 px-3">

                        {reviews.map((review) => (
                            <div className="relative w-96 h-auto bg-gray-400 rounded-md pt-24 pb-8 px-4 shadow-md hover:shadow-lg transition flex flex-col items-center mb-5 mt-10" key={review._id}>
                                <div className="absolute rounded-full bg-gray-100 w-28 h-28 p-2 z-10 -top-8 shadow-lg hover:shadow-xl transition">
                                    <div className="rounded-full bg-black w-full h-full overflow-auto">
                                        {review.photoURL ?
                                            <img src={review.photoURL} alt="" />

                                            :
                                            <img src={reviewer} alt="" />
                                        }
                                    </div>
                                </div>
                                <label className="font-bold text-gray-100 text-lg">
                                    {review.displayName}
                                </label>
                                <p className="text-center text-gray-200 mt-2 leading-relaxed">
                                    {review.message}
                                </p>

                                <ReactStars
                                    count={5}
                                    value={review.reviewAmount}
                                    size={24}
                                    activeColor="#ffd700"
                                    edit={false}
                                />,


                            </div>

                        ))}

                    </div>
                </div>
            </section>
        </>
    );
};

export default Reviews;