import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import ProductList from "../../Components/Items/ProductList/ProductList";
import * as S from "./style";

type ContentPageProps = {
  pageName: string,
  pageCategorie: string,
}

type FilterdProductsProps = {
  id: number;
  quantity: number;
  cartQuantity: number;
  price: number;
  name: string;
  image: string;
  catagories: string[];
}


const ContentPage: React.FC<ContentPageProps> = ({ pageName, pageCategorie }) => {
  const [filteredProducts, setFilteredProducts] = useState < FilterdProductsProps[]>([]);

  const { storeItems } = useContext(CartContext);

  useEffect(() => {
    const filtered = storeItems.filter((product) =>
      product.catagories.includes(pageCategorie)
    );

    setFilteredProducts(filtered);
  }, [pageCategorie, storeItems]);

  return (
    <S.ContentPageWrapper>
      <h1>{pageName}</h1>
      <ProductList productsData={filteredProducts} />
    </S.ContentPageWrapper>
  );
};

export default ContentPage;
