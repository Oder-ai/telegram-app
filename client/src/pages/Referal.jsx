import React from 'react';
import Page from "../components/wrappers/Page/Page";
import Navigation from "../components/ui/GlobalUI/Navigation/Navigation";
import {useContext, useEffect, useState} from "react";
import {Context} from "../utils/context";
import useModal from "../hooks/useModal";
import {useNavigate} from "react-router-dom";
import {toJS} from "mobx";
import lines from '../assets/images/lines.png';
import CopyIcon from "../components/icons/CopyIcon/CopyIcon";
import {CopyToClipboard} from "react-copy-to-clipboard/src";
import Copied from "../components/ui/ReferalUI/Copied/Copied";
import CopyButton from "../components/ui/ReferalUI/CopyButton/CopyButton";
import ReferalInner from "../components/wrappers/ReferalInner/ReferalInner";
import ReferalBalance from "../components/ui/ReferalUI/ReferalBalance/ReferalBalance";
import Wrapper from "../components/wrappers/Wrapper/Wrapper";
import ReferalDescription from "../components/ui/ReferalUI/ReferalDescription/ReferalDescription";
import Text from "../components/ui/GlobalUI/Text/Text";
import Button from "../components/ui/GlobalUI/Button/Button";
import {useCopy} from "../hooks/useCopy";
import Loader from "../components/ui/GlobalUI/Loader/Loader";

const Referal = () => {

    const {Referal} = useContext(Context);

    const {modalActive, modalHide, modalShow} = useModal()
    const {copied, onCopyHandler} = useCopy()
    const navigate = useNavigate()

    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            await Referal.getReferalInfo()
            setLoading(false)
        }
        fetchData()
    }, [])

    return (
        <Page>
            <Loader
                isLoading={isLoading}
            />

            <Navigation>
                Обучение
            </Navigation>

            <ReferalInner>
                <Wrapper className="content">
                    <ReferalBalance
                        balance={Referal.referalBalance}
                        title="Баланс"
                    />
                    <ReferalDescription
                        header="Это ваша реферальная ссылка"
                    >
                        Реферальная ссылка&nbsp;&mdash; специальный URL,
                        с&nbsp;помощью которого участник партнёрской
                        программы рекламирует продукт
                        и&nbsp;получает за&nbsp;это вознаграждение
                    </ReferalDescription>
                </Wrapper>
                <Wrapper className="share-wrap">
                    <CopyButton onCopy={onCopyHandler} text={Referal.referalLink}>
                        <Copied isCopied={copied}>Скопировано</Copied>

                        <Text type="medium" id="referal-link">
                            {Referal.referalLink}
                        </Text>

                        <CopyIcon/>
                    </CopyButton>
                    <Button id="share-button">
                        <span className="share-system">
                            Поделиться ссылкой
                        </span>
                    </Button>
                </Wrapper>
            </ReferalInner>
        </Page>
    );
};

export default Referal;