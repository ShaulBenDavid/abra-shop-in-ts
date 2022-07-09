import styled from "styled-components";
import { deviceSize } from "../../constants";

export const ContentPageWrapper = styled.div`
    padding: 64px 24px;
    overflow: auto;
    width: 100%;
    height: calc(100vh - 78px);


    @media (max-width: ${deviceSize.mobile}) {
     h1 {
        text-align: center;
        font-size: 1.5rem;
     }
     padding: 36px 18px;
     height: calc(100vh - 64px - 393px);
    }

`;
