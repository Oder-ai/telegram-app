import React from 'react';
import Dragger from "../../ModalUI/Dragger/Dragger";
import Text from "../../GlobalUI/Text/Text";
import ModalHeader from "../../ModalUI/ModalHeader/ModalHeader";
import LockIcon from "../../../icons/LockIcon/LockIcon";
import ModalText from "../../ModalUI/ModalText/ModalText";
import {Link} from "react-router-dom";
import Modal from "../../ModalUI/Modal/Modal";
import {useContext} from "react";
import {Context} from "../../../../utils/context";

const ModalHome = ({modalActive, modalHide}) => {
    const {User} = useContext(Context);

    return (
        <Modal isActive={modalActive} modalHide={modalHide}>
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
        </Modal>
    );
};

export default ModalHome;