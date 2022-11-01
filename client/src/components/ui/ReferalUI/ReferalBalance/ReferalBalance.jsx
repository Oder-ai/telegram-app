import React from 'react';
import lines from "../../../../assets/images/lines.png";
import BalanceTitle from "../BalanceTitle/BalanceTitle";
import SectionHeader from "../../GlobalUI/SectionHeader/SectionHeader";
import Wrapper from "../../../wrappers/Wrapper/Wrapper";

const ReferalBalance = ({balance, title}) => {
    return (
        <Wrapper className="balance-wrap">
            <BalanceTitle>
                {title}
            </BalanceTitle>
            <SectionHeader id="balance" className="button-header button-header_balance">
                {balance}
            </SectionHeader>
            <img src={lines} alt="lines" className="lines"/>
        </Wrapper>
    );
};

export default ReferalBalance;