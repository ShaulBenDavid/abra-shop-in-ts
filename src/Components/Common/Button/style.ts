import styled, { css } from "styled-components";
import { deviceSize } from '../../../constants';

interface StyledButtonProps {
  type: string;
}

export const StyledButton = styled.button`
  font-family: Assistant;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0.72px;
  color: #000;

  height: 42px;
  width: 100%;
  border: solid 1px #000;
  background-color: #fff;
  transition: ease-in .3s;
  text-transform: uppercase;

  
    &:hover {
      background-color: #000;
      color: #fff;
    }
    

    ${(props: StyledButtonProps) => props.type === 'inverted' && css`
        background-color: #000;
        color: #fff;
    
      &:hover {
        background-color: #fff;
        color: #000;
      }
    `};

    &:disabled, &[disabled] {
        background-color: #808080;
        color: #fff;
        border: solid 1px #808080;
    }

    @media (max-width: ${deviceSize.mobile}) {
        font-size: 0.875rem;
        height: 34px;
    }

`;