import React from "react";
import * as S from "./style";
// import WhiteLogo from "../../Assets/logo.png";
// import UserIcon from "../../Assets/account-circle.png";
import Menu from "../Common/Menu";

const WhiteLogo = require('../../Assets/logo.png') as string;
const UserIcon = require('../../Assets/account-circle.png') as string;

type DefaultMenuConfigProps = {
  id: number;
  name: string;
  path: string;
}

const defaultMenuConfig: DefaultMenuConfigProps[] = [
  { id: 10, name: "Best Sellers", path: "/" },
  { id: 20, name: "Clothing", path: "/clothing" },
  { id: 30, name: "Home", path: "/home" },
  { id: 40, name: "Office", path: "/office" },
  { id: 50, name: "Sports", path: "/sports" },
];

const Header = () => {
  const humburgerResolution: number = 800;
  return (
    <S.StyledHeader>
      <S.StyledLogo src={WhiteLogo} />
      <Menu menuItems={defaultMenuConfig} humburgerResolution={humburgerResolution} />
      <S.StyledIcon src={UserIcon} />
    </S.StyledHeader>
  );
};

export default Header;
