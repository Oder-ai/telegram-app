import React from 'react';

const LockIcon = ({color, overrideClass = ""}) => {
    return (
        <div id="calc-lock">
            <svg className={overrideClass ? overrideClass : "lock-wrap"} xmlns="http://www.w3.org/2000/svg" width="17" height="25" viewBox="0 0 17 25"
                 fill={color}>
                <path
                    d="M2.49512 24.3911H14.1162C15.6909 24.3911 16.46 23.6098 16.46 21.9008V12.9409C16.46 11.4028 15.8252 10.6093 14.519 10.475V7.39886C14.519 2.79681 11.5039 0.575134 8.30566 0.575134C5.10742 0.575134 2.09229 2.79681 2.09229 7.39886V10.5361C0.895996 10.7192 0.151367 11.5004 0.151367 12.9409V21.9008C0.151367 23.6098 0.92041 24.3911 2.49512 24.3911ZM4.05762 7.14252C4.05762 4.07855 6.02295 2.45502 8.30566 2.45502C10.5884 2.45502 12.5537 4.07855 12.5537 7.14252V10.4628L4.05762 10.475V7.14252Z"
                    />
            </svg>
        </div>
    );
};

export default LockIcon;