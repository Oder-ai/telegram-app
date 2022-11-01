import React from 'react';
import Dragger from "../../ModalUI/Dragger/Dragger";
import Text from "../../GlobalUI/Text/Text";
import ModalHeader from "../../ModalUI/ModalHeader/ModalHeader";
import LockIcon from "../../../icons/LockIcon/LockIcon";
import ModalText from "../../ModalUI/ModalText/ModalText";
import {Link} from "react-router-dom";
import Popup from "../../ModalUI/Popup/Popup";
import {useContext} from "react";
import {Context} from "../../../../utils/context";

const PopupHome = ({modalActive, modalHide}) => {
    const {User} = useContext(Context);

    return (
        <Popup isActive={modalActive} modalHide={modalHide}>
            <Dragger/>
            <Text type="medium" className="modal-header-wrap">
                <ModalHeader>
                    Ошибка
                </ModalHeader>
                <LockIcon color="#000"/>
            </Text>
            <ModalText>
                {User.checkAccess.comment}
            </ModalText>
            <Link
                to={User.checkAccess.link}
                className="button-reusable modal-button"
            >
                Перейти к оплате
            </Link>
        </Popup>
    );
};

export default PopupHome;