import styled from "styled-components";
import { deviceSize } from "../../../constants";

export const EmptyCartContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100% - 34px - 40px);

    @media (max-width: ${deviceSize.mobile}) {
        height: calc(100% - 42px - 24px);
    }
`;


export const EmptyCartImg = styled.img`
    width: 239px;
    height: 200px;
    padding-bottom: 24px;

    @media (max-width: ${deviceSize.mobile}) {
        width: 168px;
        height: 140px;
        padding-bottom: 16px;
    }
`;


export const EmptyCartText = styled.span`
    font-family: Assistant;
    font-size: 1rem;
    text-align: center;
    color: #000;

    @media (max-width: ${deviceSize.mobile}) {
        font-size: 0.875rem;
    }
`;