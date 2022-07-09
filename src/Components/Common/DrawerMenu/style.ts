import styled from 'styled-components';

export const DrawerContainer = styled.div`
    padding-left: 18px;
    position: relative;
    height: 100%;
`;

export const StyledDrawerMenuWrapper = styled.div`
    padding-top: 20px;
    padding-bottom: 51px;
    display: flex;
`;

export const StyledBlueLogo = styled.img`
`;

export const StyledCloseButton = styled.img`
    margin-left: auto;
    padding-right: 16px;
    cursor: pointer;
`;

export const StyledDrawerNav = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 26px;
`;

export const LogOutContainer = styled.div`
    position: absolute;
    bottom: 0;
    margin-bottom: 42px;

    display: flex;
    justify-content: center;
`



export const LogOutButton = styled.a`
  font-family: Assistant;
  font-size: 1rem;
  font-weight: 500;
  color: #808285;
  cursor: pointer;
  align-self: center;
`;

