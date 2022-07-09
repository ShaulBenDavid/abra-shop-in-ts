import styled from "styled-components";
import { deviceSize } from "../../../constants";

export const ProductCartWrapper = styled.div`
    display: flex;
    position: relative;

    @media (max-width: ${deviceSize.mobile}) {
        flex-direction: column;
    }
`;

export const ImgProductCart = styled.img`
    width: 100px;
    height: 100px;

    @media (max-width: ${deviceSize.mobile}) {
        width: 125px;
        height: 125px;
    }
`;

export const DeleteButtonProductCart = styled.img`
    position: absolute;
    right: 0;
    bottom: 0;
    width: 24px;
    height: 24px;
    cursor: pointer;

    @media (max-width: ${deviceSize.mobile}) {
        right: 8px;
        top: 8px;
    }
`;

export const ContentContainerProductCart = styled.div`
    margin-left: 11px;

    @media (max-width: ${deviceSize.mobile}) {
        margin: 0;
    }
`;

export const NameProductCart = styled.span`
    display: block;
    font-family: Assistant;
    font-size: 1.25rem;
    line-height: 1;
    color: #000;
    margin-bottom: 8px;

    @media (max-width: ${deviceSize.mobile}) {
        font-size: 1rem;
        margin-top: 12px;
    }
`;

export const PriceProductCart = styled.span`
    font-family: Assistant;
    font-size: 1.25rem;
    line-height: 1;
    color: #808285;

    @media (max-width: ${deviceSize.mobile}) {
        font-size: 0.875rem;
    }
`;

export const QuantityContainerProductCart = styled.div`
    margin-top: 30px;
    width: 42px;
    font-family: Assistant;
    font-size: 1.25;
    line-height: 1;
    color: #808285;

    @media (max-width: ${deviceSize.mobile}) {
        font-size: 1rem;
        margin-top: 12px;
    }
`;

export const QuantityProductCart = styled.span`
    margin: 0 6px;
`;

export const QuantityButtonProductCart = styled.span`
    cursor: pointer;
`;

