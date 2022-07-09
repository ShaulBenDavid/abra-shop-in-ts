import styled from 'styled-components';

export const MenuWrapper = styled.nav`
    display: flex;
    font-family: Assistant;
    gap: 26px;
    @media(max-width: 880px) {
        padding-right: 66px;
        order: -1;
    }

`;

export const Hamburger = styled.img`
    cursor: pointer;
`;
