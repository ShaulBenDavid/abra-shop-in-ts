import styled from "styled-components";
import { deviceSize } from "../../../constants";

export const ProductListContainer = styled.div`
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    row-gap: 48px;
    column-gap: 24px;

    @media (max-width: ${deviceSize.mobile}) {
        row-gap: 18px;
        column-gap: 20px;
    }
`;