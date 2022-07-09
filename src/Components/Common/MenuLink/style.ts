import styled, { css } from 'styled-components';

interface MenuItemStyledProps {
    typeLink: string;
    active: boolean;
}
export const MenuItem = styled.span`
    font-size: 1.25rem;
    font-weight: 500;
    font-family: Assistant;
    color: #fff;
    position: relative;
    text-decoration: none;
    cursor: pointer;
    

    ${(props: MenuItemStyledProps) => props.typeLink === "drawer" && css`
        font-weight: 600;
        color: #1a223e;
        flex-grow: 0;
    `}

    ${(props: MenuItemStyledProps) => props.active === true && css`
        padding-left: ${(props: MenuItemStyledProps) => props.typeLink === "drawer" ? "4px" : "0"};
        font-weight: 700;

        &::before {
            content: '';
            position: absolute;
            left: ${(props) => props.typeLink === "drawer" ? "0" : "50%"};
            top: ${(props) => props.typeLink === "drawer" ? "50%" : "40px"};
            transform: ${(props) => props.typeLink === "drawer" ? "translateY(-50%)" : "translate(-50%, 0)"};
            width: ${(props) => props.typeLink === "drawer" ? "2px" : "80%"};
            height: ${(props) => props.typeLink === "drawer" ? "24px" : "2px"};
            background-color: ${(props) => props.typeLink === "drawer" ? "#1a223e" : "#fff"};
        }
    `}
`;

