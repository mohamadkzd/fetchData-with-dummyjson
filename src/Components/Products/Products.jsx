import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  let [data, setData] = useState();

  const fetchData = async () => {
    let res = await axios("https://dummyjson.com/products");
    setData(res.data.products);
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);

  return (
    <div className="w-full flex flex-wrap gap-y-[40px] justify-center">
      {data?.map((elem) => {
        return (
          <>
            <Product elem={elem} />
          </>
        );
      })}
    </div>
  );
};

export default Products;
