import { ReactNode } from "react";
import * as S from "./style";
import * as ReactDOM from "react-dom";

type DrawerProps = {
  children: ReactNode;
}

const Drawer = ({ children }: DrawerProps) => {
  return ReactDOM.createPortal(
    <S.StyledPageWarrper>
      <S.StyledDrawer>{children}</S.StyledDrawer>
    </S.StyledPageWarrper>,
    document.body
  );
};

export default Drawer;
