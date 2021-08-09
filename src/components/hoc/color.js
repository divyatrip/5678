import React from 'react';

const color = (WrappedComponent) =>{
    return(props)=>{
        return(
            <div className="text-success">
                <WrappedComponent {...props} />
            </div>
        )
    }
}


export default color;