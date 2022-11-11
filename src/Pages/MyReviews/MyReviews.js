import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewRow from './ReviewRow';

const MyReviews = () => {

    const { user } = useContext(AuthContext);
    console.log('done',user);
    const [ myReviews, setMyReviews ] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`,{
            header:{
                authorization:`Bearer ${localStorage.getItem('food-token')}`
            }

        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setMyReviews(data)
       
           
            })
          

    }, [user?.email])

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure want to cancel this review') ;
 
        if(proceed){
         fetch(`http://localhost:5000/reviews/${id}`,{
             method:'DELETE'
 
         })
         .then(res=>res.json())
         .then(data=>{
             console.log(data);
             if(data.deletedCount > 0){
                alert('deleted successfully')
                const remaining = myReviews.filter(rev=>rev._id !== id);
                setMyReviews(remaining);
             }
         })

        }
 
     }
     const handleStatusUpdate = id =>{
        fetch(`http://localhost:5000/reviews/${id}`,{
            method: 'PATCH',
            headers:{
                'content-type': 'application/jason'
            },
            body: JSON.stringify({status: 'Approved'})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount > 0){
                const remaining = myReviews.filter(rev =>rev._id !== id)
                const approving = myReviews.find(rev => rev._id === id);

                approving.status = 'Approving'

                const newReviews = [...approving, remaining];
                setMyReviews(newReviews);

            }
        })

     }




    return (
        <div className=''>
            
           
                       
                     
            <h2 className='text-3xl font-bold'>Total reviews:{myReviews.length}</h2>
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
                            <th>Item Name</th>
                            <th>your comment</th>
                            <th>Update status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        
         
                        {
                            myReviews.map(review => <ReviewRow 
                                key={review._id}
                                review={review}
                                handleDelete={handleDelete}
                                handleStatusUpdate={handleStatusUpdate}
                            ></ReviewRow>)
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