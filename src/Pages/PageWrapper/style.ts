import styled from "styled-components";
import { deviceSize } from '../../constants';

export const ContentWrapper = styled.div`
    display: flex;

    @media (max-width: ${deviceSize.mobile}) {
        flex-direction: column-reverse;
    }
`;