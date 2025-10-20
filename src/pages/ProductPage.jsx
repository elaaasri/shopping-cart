import { useParams, useOutletContext } from "react-router";

const ProductPage = () => {
  const { products } = useOutletContext();
  const { title } = useParams();

  const filteredProduct = getProductByTitle(products, title);
  console.log(filteredProduct);

  return (
    <div className="product">
      {filteredProduct.map(({ title, price, description, images, id }) => {
        return (
          <div className="product" key={id}>
            <img src={images[0]} alt="" style={{ width: "250px" }} />
            <div>{title}</div>
            <div>{price}</div>
            <div>{description}</div>
            <h2>image length : {images.length}</h2>
          </div>
        );
      })}
    </div>
  );
};
export default ProductPage;

// fitlers products by category name :
const getProductByTitle = (products, productTitle) => {
  return products.filter(({ title }) => {
    return title === productTitle;
  });
};

// fix image styles
// adding appropriate product infos
