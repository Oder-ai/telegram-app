import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {LINK_CALCULATOR, LINK_REFERAL, LINK_TRAININGS} from "../../../../router";
import Wrapper from "../../../wrappers/Wrapper/Wrapper";
import P2PIcon from "../../../icons/P2PIcon/P2PIcon";
import SectionHeader from "../../GlobalUI/SectionHeader/SectionHeader";
import Text from "../../GlobalUI/Text/Text";
import ArrowIcon from "../../../icons/ArrowIcon/ArrowIcon";
import LockIcon from "../../../icons/LockIcon/LockIcon";
import {Context} from "../../../../utils/context";

const ButtonList = ({modalShow}) => {
    const {User} = useContext(Context);

    return (
        <Wrapper className="button-group">
            <Link
                to={User.user.allowed_training ? LINK_TRAININGS : ''}
                onClick={User.user.allowed_training && modalShow}
                className="button"
                id="training"
            >
                <Wrapper className="training-wrap main_training-wrap">
                    <P2PIcon/>
                    <SectionHeader className="button-header button-header_training">
                        Обучение
                    </SectionHeader>
                </Wrapper>
                <Text type="medium" className="training-content">
                    {User.user.training_description}
                </Text>

                <Wrapper className="calculator-bg"/>
            </Link>
            <Link
                to={User.user.allowed_calculator ? LINK_CALCULATOR : ''}
                onClick={!User.user.allowed_calculator ? modalShow : {}}
                className="button"
                id="calculator"
            >
                <SectionHeader className="button-header button-header_calculator">
                    Калькулятор

                    {User.user.allowed_calculator
                        ? <ArrowIcon color="#fff"/>
                        : <LockIcon color="#fff"/>
                    }
                </SectionHeader>
            </Link>
            <Link to={LINK_REFERAL} className="button" id="ref">
                Реферальная система
                <Wrapper className="bubble-wrap bubble-wrap_main arrow-wrap">
                    <ArrowIcon/>
                </Wrapper>
            </Link>
        </Wrapper>
    );
};

export default ButtonList;