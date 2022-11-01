import React from 'react';

const HomeInner = ({children}) => {
    return (
        <main className="main">
            <div className="main-inner">
                {children}
            </div>
        </main>
    );
};

export default HomeInner;