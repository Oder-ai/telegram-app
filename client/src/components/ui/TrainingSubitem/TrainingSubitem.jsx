import React from 'react';
import LockIcon from "../../icons/LockIcon/LockIcon";
import {toJS} from "mobx";
import CheckIcon from "../../icons/CheckIcon/CheckIcon";

const TrainingSubitem = ({subitemInfo, active = false, ...props}) => {
    const subitemClasses = ["training-lesson"]

    if(active) {
        subitemClasses.push("active")
    }

    return (
        <a
            className={subitemClasses.join(' ')}
            {...props}
        >
            {subitemInfo.title}

            {subitemInfo.allowed_viewing
                ? ""
                : <LockIcon color="#AAB2BD" overrideClass="subtheme-lock-ic"/>
            }

            {subitemInfo.viewed
                ? <CheckIcon/>
                : ""
            }
        </a>
    );
};

export default TrainingSubitem;