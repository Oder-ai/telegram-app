import React from 'react';

const Wrapper = ({children, ...props}) => {
    return (
        <div {...props}>
            {children}
        </div>
    );
};

export default Wrapper;