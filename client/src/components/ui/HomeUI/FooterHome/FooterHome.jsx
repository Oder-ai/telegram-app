import React from 'react';
import Text from "../../GlobalUI/Text/Text";
import LinkTG from "../../GlobalUI/LinkTG/LinkTG";
import Wrapper from "../../../wrappers/Wrapper/Wrapper";
import TelegramIcon from "../../../icons/TelegramIcon/TelegramIcon";
import Footer from "../../GlobalUI/Footer/Footer";
import {useContext} from "react";
import {Context} from "../../../../utils/context";

const FooterHome = () => {
    const {User} = useContext(Context);

    return (
        <Footer>
            <Text>
                Если в&nbsp;приложении что-то не&nbsp;работает
                или у&nbsp;вас есть предложения &mdash;
            </Text>
            <Text className="contact">
                <LinkTG
                    source={User.user.course_support_link}
                    id="telegram"
                >
                    Напишите нам
                </LinkTG>
                <Wrapper className="telegram-icon-wrap">
                    <TelegramIcon/>
                </Wrapper>
            </Text>
        </Footer>
    );
};

export default FooterHome;