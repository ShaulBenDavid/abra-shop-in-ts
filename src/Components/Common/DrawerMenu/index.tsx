import React from "react";

import MenuLink from "../MenuLink";
import * as S from "./style";

const BlueLogo = require("../../../Assets/logo2.png") as string;
const closeIcon = require("../../../Assets/closeB.svg").default  as string;
const logoutIcon = require("../../../Assets/logout.svg").default as string;

type DrawerMenuItemsProps = {
  path: string;
  id: number;
  name: string;
};

type DrawerMenuProps = {
  menuItems: DrawerMenuItemsProps[];
  onClose: () => void;
  handleNavigate: (arg0: DrawerMenuItemsProps) => void;
};

const DrawerMenu = ({ onClose, menuItems, handleNavigate }: DrawerMenuProps) => {
  const handleClick = (item: DrawerMenuItemsProps) => {
    handleNavigate(item);
    onClose();
  };

  return (
    <S.DrawerContainer>
      <S.StyledDrawerMenuWrapper>
        <S.StyledBlueLogo src={BlueLogo} alt="Opened nav bar logo" />
        <S.StyledCloseButton
          src={closeIcon}
          alt="Navbar close button"
          onClick={onClose}
        />
      </S.StyledDrawerMenuWrapper>

      <S.StyledDrawerNav>
        {menuItems.map((item) => {
          return (
            <MenuLink
              key={item.id}
              onClick={() => handleClick(item)}
              item={item}
              typeLink="drawer"
            />
          );
        })}
      </S.StyledDrawerNav>

      <S.LogOutContainer>
        <img src={logoutIcon} alt="logout icon" />
        <S.LogOutButton>Log out</S.LogOutButton>
      </S.LogOutContainer>
    </S.DrawerContainer>
  );
};

export default DrawerMenu;
