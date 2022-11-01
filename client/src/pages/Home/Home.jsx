import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../utils/context";
import {Link} from "react-router-dom";
import ellipse from '../../assets/icons/ellipse.png';
import infinity from '../../assets/icons/infinity.png';
import QuestionIcon from "../../components/icons/QuestionIcon/QuestionIcon";
import P2PIcon from "../../components/icons/P2PIcon/P2PIcon";
import ArrowIcon from "../../components/icons/ArrowIcon/ArrowIcon";
import TelegramIcon from "../../components/icons/TelegramIcon/TelegramIcon";
import LockIcon from "../../components/icons/LockIcon/LockIcon";
import {observer} from "mobx-react-lite";
import {toJS} from "mobx";
import Popup from "../../components/ui/ModalUI/Popup/Popup";
import Dragger from "../../components/ui/ModalUI/Dragger/Dragger";
import ModalHeader from "../../components/ui/ModalUI/ModalHeader/ModalHeader";
import ModalText from "../../components/ui/ModalUI/ModalText/ModalText";
import {LINK_CALCULATOR, LINK_REFERAL, LINK_TRAININGS} from "../../router";
import useModal from "../../hooks/useModal";
import useTimeout from "../../hooks/useTimeout";
import useLoading from "../../hooks/useLoad";
import Page from "../../components/wrappers/Page/Page";
import SectionHeader from "../../components/ui/GlobalUI/SectionHeader/SectionHeader";
import Loader from "../../components/ui/GlobalUI/Loader/Loader";
import HomeInner from "../../components/wrappers/HomeInner/HomeInner";
import Text from "../../components/ui/GlobalUI/Text/Text";
import Avatar from "../../components/ui/GlobalUI/Avatar/Avatar";
import Wrapper from "../../components/wrappers/Wrapper/Wrapper";
import LinkTG from "../../components/ui/GlobalUI/LinkTG/LinkTG";
import ButtonList from "../../components/ui/HomeUI/ButtonList/ButtonList";
import Header from "../../components/ui/GlobalUI/Header/Header";
import HeaderHome from "../../components/ui/HomeUI/HeaderHome/HeaderHome";
import Subscribtion from "../../components/ui/HomeUI/Subscribtion/Subscribtion";
import Footer from "../../components/ui/GlobalUI/Footer/Footer";
import FooterHome from "../../components/ui/HomeUI/FooterHome/FooterHome";
import PopupHome from "../../components/ui/HomeUI/PopupHome/PopupHome";

const Home = () => {
    const {User} = useContext(Context);

    const {modalActive, modalHide, modalShow} = useModal()
    const {subscribtion, isSubscribtionStarter, subscribeTimer} = useTimeout()
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            await User.getUserInfo()
            subscribeTimer(User.subscribe_expire_datetime, User.subscription_name);
            setLoading(false)
        }
        fetchData()
    }, [])

    return (
        <Page>
            <Loader
                isLoading={isLoading}
            />

            <PopupHome
                modalActive={modalActive}
                modalHide={modalHide}
            />

            <HomeInner>
                <HeaderHome/>

                <ButtonList
                    modalShow={modalShow}
                />

                <Subscribtion
                    isSubscribtionStarter={isSubscribtionStarter}
                    subscribtion={subscribtion}
                />

                <FooterHome/>
            </HomeInner>
        </Page>
    );
};

export default observer(Home);