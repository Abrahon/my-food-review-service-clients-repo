import React from 'react';

const Contact = () => {
  return (
    <div>
       <div classNam='w-full text-center mx-auto'>
             <input type="text" placeholder="Type here" className="input input-bordered input-error w-full mx-auto" />
           <div className='m-5'>
           <button className="btn btn-outline btn-warning">Subscribe</button>
           </div>

        </div>
     </div>
    
  );
};

export default Contact;