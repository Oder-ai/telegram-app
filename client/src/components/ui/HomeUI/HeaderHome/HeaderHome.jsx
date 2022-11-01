import React from 'react';
import Wrapper from "../../../wrappers/Wrapper/Wrapper";
import Text from "../../GlobalUI/Text/Text";
import Avatar from "../../GlobalUI/Avatar/Avatar";
import LinkTG from "../../GlobalUI/LinkTG/LinkTG";
import QuestionIcon from "../../../icons/QuestionIcon/QuestionIcon";
import Header from "../../GlobalUI/Header/Header";
import {useContext} from "react";
import {Context} from "../../../../utils/context";

const HeaderHome = () => {
    const {User} = useContext(Context);

    return (
        <Header>
            <Wrapper className="user-info">
                <Text type="medium" id="username">Username</Text>
                <Avatar source={User.avatar}/>
            </Wrapper>
            <LinkTG source={User.technical_support_link} id="settings-bubble">
                <QuestionIcon/>
            </LinkTG>
        </Header>
    );
};

export default HeaderHome;