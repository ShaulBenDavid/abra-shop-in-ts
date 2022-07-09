import styled from 'styled-components';
import { deviceSize } from '../../constants';

export const StyledHeader = styled.header`
    background-color: #1a223e;
    display: flex;
    padding: 21px 0px;
    padding-left: 64px;
    align-items: flex-end;
    width: 100%;

    @media (max-width: ${deviceSize.mobile}) {
        padding: 16px 0px;
        padding-left: 18px;
    }
`;


export const StyledLogo = styled.img`
    margin-right: 98px;
    align-self: center;
    width: 178px;
    height: 30px;

    @media (max-width: ${deviceSize.mobile}) {
        width: 142.4px;
        height: 24px;
        margin: 0 auto;
    }
`;

export const StyledIcon = styled.img`
    align-self: center;
    margin-left: auto;
    padding-right: 24px;

    @media (max-width: ${deviceSize.mobile}) {
        margin-right: 18px;
        padding: 0;
        height: 32px;
        width: 32px;
    }
`;