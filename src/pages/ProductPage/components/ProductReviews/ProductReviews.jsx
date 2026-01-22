import styles from "./ProductReviews.module.css";

const ProductReviews = ({ product }) => {
  const { reviews, rating } = product;

  return (
    <div className={styles.productReviewContainer}>
      <div className={styles.testimonialsArea}>
        <h4>TESTIMONIALS</h4>
        <h2>Take a Look at What Our Amazing Clients Have Said</h2>
        <div className={styles.ratingArea}>
          <i className="fa-solid fa-star" />
          <h2>{rating}</h2>
          <i className="fa-solid fa-star" />
        </div>
      </div>
      <div className={styles.reviewArea}>
        {reviews.map((review, i) => {
          const date = new Date(review.date).toLocaleDateString("en-CA");
          return (
            <div className={styles.reviewCard} key={i}>
              <div className={styles.reviewComment}>
                <div>{review.comment}</div>
                <div className={styles.date}>{date}</div>
                <i className="fa-solid fa-circle-user" />
              </div>
              <div className={styles.reviewUser}>
                <div>{review.reviewerName}</div>
                <div>{review.reviewerEmail}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ProductReviews;
