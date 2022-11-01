import React from 'react';
import Text from "../../GlobalUI/Text/Text";
import Wrapper from "../../../wrappers/Wrapper/Wrapper";

const ReferalDescription = ({header, children}) => {
    return (
        <Wrapper className="description">
            <Text type="medium" overrideClass="referal_medium">
                {header}
            </Text>
            <Text>
                {children}
            </Text>
        </Wrapper>
    );
};

export default ReferalDescription;