import React from "react";
import { useResolvedPath, useMatch } from "react-router-dom";

import { MenuItem } from "./style";

type MenuLinkItemProps = {
  name: string;
  path: string;
  otherprops?: any;
  onClick?: () => any;
}

const MenuLink: React.FC<{item:MenuLinkItemProps}> = ({ item , ...otherprops }) => {
  const { name, path } = item;

  const resolvePath = useResolvedPath(path);
  const isActive: {} | null = useMatch({ path: resolvePath.pathname, end: true });

  return (
    <MenuItem active={isActive ? true : false} {...otherprops}>
      {name}
    </MenuItem>
  );
};

export default MenuLink;
