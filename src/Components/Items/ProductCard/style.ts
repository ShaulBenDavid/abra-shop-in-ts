import styled from "styled-components";
import { deviceSize } from "../../../constants";

export const ProductCardContainer = styled.div`
    max-width: 292px;

    @media (max-width: ${deviceSize.mobile}) {
        width: 160px;

        img {
            width: 160px;
            height: 160px;
        }
    }
`;

export const ProductCardName = styled.div`
    display: block;
    text-align: center;
    margin-top: 16px;
    margin-bottom: 8px;
    font-family: Assistant;
    font-size: 1.250rem;
    line-height: 1;
    color: #000;

    @media (max-width: ${deviceSize.mobile}) {
        font-size: 1rem;
    }
`;

export const ProductCardPrice = styled.div`
    display: block;
    text-align: center;
    margin-bottom: 16px;
    font-family: Assistant;
    font-size: 1.250rem;
    line-height: 1;
    color: #808285;

    @media (max-width: ${deviceSize.mobile}) {
        font-size: 0.875rem;
    }
`;

