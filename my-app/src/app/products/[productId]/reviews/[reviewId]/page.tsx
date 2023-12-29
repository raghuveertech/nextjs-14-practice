const ProductReview = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  const { productId, reviewId } = params;
  return (
    <>
      <h1>
        Review {reviewId} for Product {params.productId}
      </h1>
    </>
  );
};

export default ProductReview;
