import React, {
  createContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";

import { getProductData } from "../Services/API/Api";

// Types
type CartProviderProps = {
  children: ReactNode;
};

type CartItemsProps = {
  id: number;
  quantity: number;
  cartQuantity: number;
  price: number;
  name: string;
  image: string;
  catagories: string[];
};

type ProductsProps = {
  id: number;
  quantity: number;
  cartQuantity: number;
  price: number;
  name: string;
  image: string;
  catagories: string[];
};

type CartContextProps = {
  cartItems: CartItemsProps[];
  storeItems: ProductsProps[];
  addItemsToCart: (arg0: ProductsProps) => void;
  removeItemsToCart: (arg0: ProductsProps) => void;
  deleteItemsToCart: (arg0: ProductsProps) => void;
  checkoutCartItems: () => void;
};

// Adding item to cart
const addCartItems = (
  cartItems: CartItemsProps[],
  products: ProductsProps[],
  itemToAdd: ProductsProps
) => {
  // To check if item all ready exist
  const storeItem: ProductsProps | undefined = products.find(
    (product) => product.id === itemToAdd.id
  );
  const itemExisting = cartItems.find(
    (cartItem) => cartItem.id === itemToAdd.id
  );

  // If is exist to change quantity
  if (itemExisting) {
    // Will not give you to add item that is out of stock
    if (storeItem?.quantity === itemExisting.cartQuantity) return cartItems;

    return cartItems.map((cartItem) =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, cartQuantity: cartItem.cartQuantity + 1 }
        : cartItem
    );
  }

  // Default when the cart empty
  return [...cartItems, { ...itemToAdd, cartQuantity: 1 }];
};

// removeItem from cart

const removeCartItem = (
  cartItems: CartItemsProps[],
  itemToRemove: ProductsProps
) => {
  const itemExisting: CartItemsProps | undefined = cartItems.find(
    (cartItem) => cartItem.id === itemToRemove.id
  );

  if (itemExisting?.cartQuantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === itemToRemove.id
      ? { ...cartItem, cartQuantity: cartItem.cartQuantity - 1 }
      : cartItem
  );
};

// Delete item from cart
const deleteCartItem = (
  cartItems: CartItemsProps[],
  itemToDelete: ProductsProps
) => {
  return cartItems.filter((cartItem) => cartItem.id !== itemToDelete.id);
};

export const CartContext = createContext({
  cartItems: [],
  storeItems: [],
  addItemsToCart: () => {},
  removeItemsToCart: () => {},
  deleteItemsToCart: () => {},
  checkoutCartItems: () => {},
} as CartContextProps);

// Provider ......

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItemsProps[]>([]);
  const [products, setProducts] = useState<ProductsProps[]>(() => []);

  // Update products
  const storeItems = useMemo(() => {
    return products.map((item) => {
      const newItem = { ...item };
      const cartItem = cartItems.find((item) => item.id === newItem.id);

      if (cartItem) {
        newItem.quantity -= cartItem.cartQuantity;
      }

      return newItem;
    });
  }, [cartItems, products]);

  // Get products
  const getData = async () => {
    try {
      const data = await getProductData();
      setProducts(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Increase item quantity
  const addItemsToCart = (itemToAdd: ProductsProps) => {
    setCartItems(addCartItems(cartItems, products, itemToAdd));
  };

  // Decrease item quantity
  const removeItemsToCart = (itemToRemove: ProductsProps) => {
    setCartItems(removeCartItem(cartItems, itemToRemove));
  };

  // Delete item from cart
  const deleteItemsToCart = (itemToDelete: ProductsProps) => {
    setCartItems(deleteCartItem(cartItems, itemToDelete));
  };

  // Checkout
  const checkoutCartItems = () => {
    const updateProducts = products.map((product) => {
      const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === product.id
      );
      const newProduct = { ...product };

      if (existingCartItem) {
        newProduct.quantity -= existingCartItem.cartQuantity;
      }
      return newProduct;
    });

    setProducts(updateProducts);
    setCartItems([]);
  };

  const value = {
    cartItems,
    storeItems,
    addItemsToCart,
    removeItemsToCart,
    deleteItemsToCart,
    checkoutCartItems,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
