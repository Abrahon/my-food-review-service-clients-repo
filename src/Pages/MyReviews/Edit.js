
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';


const Edit = () => {
    const loadReview = useLoaderData();
    console.log(loadReview)

    const { user } = useContext(AuthContext)
    const handleUpdateReview = event => {
        event.preventDefault();
        const form = event.target;
        const email = user?.email || 'unregistered';
        const message = form.message.value;
        const review = { email, message }
        console.log(review)


        fetch(`https://y-ochre-five.vercel.app/review/${loadReview._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('updated successfully')
                    form.reset();
                    
                }
            })
    }

    return (
        <div>
            <form onSubmit={handleUpdateReview} className="w-96 mx-auto mt-5">
                <div className="mt-5 mb-5">
                    <h1 className='text-3xl text-center'>Edit review</h1>
                    <div className="mx-auto mt-5">

                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">

                                    <input name="email" type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-ghost " />

                                </div>
                                <textarea name="message" className="textarea textarea-bordered h-24 w-full" defaultValue={loadReview.message} placeholder="text your message" ></textarea>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Update review </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default Edit;
