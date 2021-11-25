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

export const FormGroup = ({children, ...rest}) => {
    return (
        <form {...rest}>
            { children } 
        </form>
    )
}