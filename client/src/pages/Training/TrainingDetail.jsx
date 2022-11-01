import React from 'react';
import {useParams} from "react-router-dom";
import Navigation from "../../components/ui/GlobalUI/Navigation/Navigation";
import Loader from "../../components/ui/GlobalUI/Loader/Loader";
import {useContext, useEffect, useState} from "react";
import {Context} from "../../utils/context";
import useModal from "../../hooks/useModal";
import Wrapper from "../../components/wrappers/Wrapper/Wrapper";
import Text from "../../components/ui/GlobalUI/Text/Text";
import Player from "../../components/ui/GlobalUI/Player/Player";

const TrainingDetail = () => {
    const id = useParams()
    const {Trainings} = useContext(Context);
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            await Trainings.getOneTraining(id)
            setLoading(false)
        }
        fetchData()
    }, [])

    return (
        <div className="wrapper">
            <Loader
                isLoading={isLoading}
            />

            <Navigation>
                Обучение
            </Navigation>

            <Wrapper className="article">
                <h1 className="button-header article_button-header" id="article-title">
                    {Trainings.training.title}
                </h1>
                <Wrapper className="training-image-wrap article_image-wrap">
                    {Trainings.training.image_url &&
                         <img
                            className="training-image" id="article-image"
                            src={Trainings.training.image_url}
                            rel="preload"
                            alt=""
                        />
                    }

                    {Trainings.training.video_url &&
                        <Player video={Trainings.training.video_url}/>
                    }
                </Wrapper>
                <Wrapper className="article-content">
                    <Text type="medium" overrideClass="article_medium" id="article-bold">
                        {Trainings.training.bold_text}
                    </Text>
                    <Text type="medium" overrideClass="text article_text" id="article-content">
                        {Trainings.training.main_text}
                    </Text>
                </Wrapper>
            </Wrapper>
        </div>
    );
};

export default TrainingDetail;