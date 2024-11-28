import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useCurrentProduct = (id) => {
  const [product, setProduct] = useState(null);

  const { items, status } = useSelector((state) => state.items);

  useEffect(() => {
    if (items) {
      const product = items.filter((product) => product.id == id);
      setProduct(product[0]);
    }
  }, [status]);
  return product;
};
