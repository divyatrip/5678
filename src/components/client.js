import React from 'react';


const Client =  (props)=> {
    const{ name,email,phone} =props;
    return(
        <div>
            <h3> Client's Details</h3>
            <p>Name:{name}</p>
            <p>Email:{email}</p>
            <p>Phone:{phone}</p>
        </div>
    )
}

export default Client;