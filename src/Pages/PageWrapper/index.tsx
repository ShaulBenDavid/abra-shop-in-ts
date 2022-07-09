import React from "react";

import ContentPage from "../ContentPage/ContentPage";
import Cart from "../Cart/Cart";
import * as S from "./style";

type PageWrapperProps = {
  pageName: string;
  pageCategorie: string;
}

const PageWrapper = ({ pageName, pageCategorie }: PageWrapperProps) => {
  return (
    <S.ContentWrapper>
      <ContentPage pageName={pageName} pageCategorie={pageCategorie} />
      <Cart />
    </S.ContentWrapper>
  );
};

export default PageWrapper;
