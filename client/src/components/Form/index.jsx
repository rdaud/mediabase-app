import React from 'react';


export const FormItem = ({children}) => {
    return (
        <>
        <div>
            {children}
        </div>
        </>
    )
}

export const FormGroup = ({children}) => {
    return (
        <div>
            { children } 
        </div>
    )
}