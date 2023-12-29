import { notFound } from "next/navigation";

const ProductReview = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  const { productId, reviewId } = params;
  if (parseInt(reviewId) > 1000) {
    notFound();
  }
  return (
    <>
      <h1>
        Review {reviewId} for Product {productId}
      </h1>
    </>
  );
};

export default ProductReview;
