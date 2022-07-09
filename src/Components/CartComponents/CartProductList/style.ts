import styled from "styled-components";
import { deviceSize } from "../../../constants";

export const ProductCartListWrapper = styled.div`
    overflow: hidden;
    height: calc(100vh - 370px);

    @media (max-width: ${deviceSize.mobile}) {
        margin-top: 17px;
        height: fit-content;
    }
`;

export const CartProductContainer = styled.div`
    overflow: auto;
    display: flex;
    height: 100%;
    flex-direction: column;
    row-gap: 24px;

    @media (max-width: ${deviceSize.mobile}) {
        flex-direction: row;
        gap: 0 18px;
        overflow-x: auto;
    }
`;
