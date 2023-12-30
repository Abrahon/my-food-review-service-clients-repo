import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import {useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewRow from './ReviewRow';

const MyReviews = () => {
    const navigate = useNavigate();

    const { user } = useContext(AuthContext);
    console.log('done', user);
    const [myReviews, setMyReviews] = useState([])
    // const [updateReview,setMyReviews] = useState()

    useEffect(() => {
        fetch(`https://y-ochre-five.vercel.app/reviews?email=${user?.email}`, {
            header: {
                authorization: `Bearer ${localStorage.getItem('food-token')}`
            }

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMyReviews(data)

            })

    }, [user?.email])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure want to cancel this review');
        if (proceed) {
            fetch(`https://y-ochre-five.vercel.app/reviews/${id}`, {
                method: 'DELETE'

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success('deleted successfully')
                        const remaining = myReviews.filter(rev => rev._id !== id);
                        setMyReviews(remaining);
                    }
                })

        }

    }


    return (
        <div className=''>

            <h2 className='text-3xl font-bold m-5'>Total reviews:{myReviews.length}</h2>
            <div>
                <div className="overflow-x-auto w-full">

                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>

                                <th className=''>Item Name</th>
                                <th className=''>your Review</th>
                                <th className=''>Edit</th>
                                <th></th>

                            </tr>
                        </thead>
                        <tbody >
                            {
                                myReviews.map(review => <ReviewRow
                                    key={review._id}
                                    review={review}
                                    handleDelete={handleDelete}
                                    // handleUpdateReview={""}
                                >
                                </ReviewRow>)
                            }

                        </tbody>

                    </table>
                    {/* <link to='/logIn'>Login</link> */}
                </div>
            </div>


        </div>
    );
};

export default MyReviews;