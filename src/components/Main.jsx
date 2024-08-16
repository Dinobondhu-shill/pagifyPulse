import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";


const Main = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/public/product.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);
  console.log(data)
  return (
    <div className="px-20 py-5">
      <ProductCard></ProductCard>
    </div>
  );
};

export default Main;