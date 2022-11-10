// import React, { useContext, useEffect, useState } from 'react';
// import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
// import ReviewRow from './ReviewRow';

// const MyReviews = () => {

//     const { user } = useContext(AuthContext);
//     const { myReviews, setMyReviews } = useState([])

//     useEffect(() => {
//         fetch(`http://localhost:5000/reviews?email=${user?.email}`)
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//                 setMyReviews(data)
//             });

//     }, [user?.email])




//     return (

//         <div>
//             {/* <h2 className='text-5xl'>You have {myReviews.length}</h2> */}
//             <div className="overflow-x-auto w-full">

//                 <table className="table w-full">

//                     <thead>
//                         <tr>
//                             <th>
//                                 <label>
//                                     <input type="checkbox" className="checkbox" />
//                                 </label>
//                             </th>
//                             <th>Name</th>
//                             <th>Job</th>
//                             <th>Favorite Color</th>
//                             <th></th>
//                         </tr>
//                     </thead>
//                     <tbody>

//                         {
//                             myReviews.map(review => <ReviewRow 
//                                 key={review._id}
//                                 review={review}
//                             ></ReviewRow>)
//                         }

//                     </tbody>




//                 </table>
//             </div>
//         </div>
//     );
// };

// export default MyReviews;