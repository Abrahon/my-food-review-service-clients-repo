import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ReviewRow = ({review, handleDelete, handleStatusUpdate}) => {
    const {_id, serviceName, message,service,status} = review;
    const [myReviewsService, setMyReviewsService] = useState([])



    useEffect(()=>{
        fetch(`http://localhost:5000/services/${service}`)
        .then(res=>res.json())
        .then(data=>setMyReviewsService(data));

    }, [service])

  
    return (
        <tr>
            <th>
                <label>
                    <button onClick={()=>handleDelete(_id)} className='btn btn-ghost'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-24 h-24">
                            {
                                myReviewsService?.img &&
                             <img src={myReviewsService.img} alt="Avatar Tailwind CSS Component" />

                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{serviceName}</div>
                    </div>
                </div>
            </td>
            <td>
                {message}
            </td>
            <th>
                <Link to='/login'>
                <button
                onClick={()=> handleStatusUpdate(_id)}
                className="btn btn-ghost btn-xs">{status ? status: 'edit review'}
                </button>
                </Link>
                
            </th>
        </tr>
    );
};

export default ReviewRow;