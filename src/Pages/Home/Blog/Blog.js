import React from 'react';

const Blog = () => {
    return (
        <div className='p-5'>
            <div>
            <h1 className='text-3xl font-bold text-orange-600 m-5'>Difference between SQL and NoSQL</h1>
            <p>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
           
            </div>

            <div>
                <h1 className='text-3xl font-bold text-orange-600 m-5'>What is JWT, and how does it work?</h1>
                <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.<br/> JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
            </div>
           
        </div>
    )
       
};

export default Blog;