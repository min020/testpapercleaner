import React from "react";
import { Background, LoadingText } from "./Styles";
import Spinner from "./spinner.gif"

export const Loading = () => {
    return (
        <Background>
            <LoadingText>변환 중입니다. 잠시만 기다려 주세요.</LoadingText>
            <img src={Spinner} alt="로딩중" />
        </Background>
    );
};

export default Loading;