import React from "react";

const Product = ({ elem }) => {
  console.log(elem);

  return (
    <div className="lg:w-[45%] w-full p-[20px] flex justify-center items-center gap-y-[30px] gap-x-[65px] flex-wrap">
      <h3>title : {elem.title} </h3>
      <h3>description : {elem.description} </h3>
      <h3>category : {elem.category} </h3>
      <h3>price : {elem.price} </h3>
      <div>
        <h3>tags : {elem.tags.join("-")}</h3>
      </div>
      <div>
        <h3>dimensions width :{elem.dimensions.width}</h3>
        <h3>dimensions height :{elem.dimensions.height}</h3>
        <h3>dimensions : depth{elem.dimensions.depth}</h3>
      </div>
      <h3>warrantyInformation : {elem.warrantyInformation} </h3>
      <div className="flex justify-center items-center gap-x-[30px]">
        {elem.reviews.map((item,index) => {
          return (
            <div key={index}>
              <h3>rating : {item.rating}  </h3>
              <h3>comment : {item.comment} </h3>
              <h3>Data : {item.date} </h3>
            </div>
          );
        })}
      </div>
      <img className="w-[400px]" src={elem.images} alt="" />
    </div>
  );
};

export default Product;
