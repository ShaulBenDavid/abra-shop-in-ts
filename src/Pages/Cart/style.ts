import styled from "styled-components";
import Button from "../../Components/Common/Button";
import { deviceSize } from "../../constants";

export const StyledCartWrapper = styled.div`
    box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2);
    background-color: #fff;
    flex-basis: 316px;
    min-width: 316px;
    padding: 40px 24px;
    position: relative;

    @media (max-width: ${deviceSize.mobile}){
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.16);
        flex-basis: 393px;
        width: 100%;
        height: 393px;
        padding: 24px 18px;
    }
`;

export const CartTitle = styled.h2`
    font-family: Assistant;
    font-size: 2.5rem;
    font-weight: bold;
    color: #1a223e;

    @media (max-width: ${deviceSize.mobile}) {
        text-align: center;
        font-size: 1.5rem;
    }
    
`;

export const CartButton = styled(Button)`
    width: calc(316px - 48px);
    position: absolute;
    bottom: 40px;
    
    @media (max-width: ${deviceSize.mobile}) {
        bottom: 24px;
        width: calc(100% - 32px);
        height: 42px;
        font-size: 1.125rem;
    }
`;


export const ProductCartContent = styled.p`
    font-family: Assistant;
    font-size: 1rem;
    line-height: 1;
    color: #000;
    margin-bottom: 34px;
    margin-top: 9px;

    @media (max-width: ${deviceSize.mobile}) {
        display: none;
    }
`;

export const ProductCartTotal = styled.div`
    position: absolute;
    bottom: 106px;
    width: calc(100% - 48px);
    font-family: Assistant;
    font-size: 1.25rem;
    line-height: 1;
    color: #000;
    display: flex;
    justify-content: space-between;

    @media (max-width: ${deviceSize.mobile}) {
        width: calc(100% - 32px);
        bottom: 74px;
        font-size: 1rem;
    }
`;

