import { MdStars } from "react-icons/md";
import ProductCard from "../product/ProductCard";
import ProductSection from "./ProductSection";

const FeaturedProducts = () => {
  return (
    <ProductSection
      eyebrow="Curated for you"
      eyebrowIcon={MdStars}
      title="Featured products"
      titleId="featured-products-title"
      query="tag=featured&limit=4"
      link={{ to: "/shop?sort=featured", label: "View all" }}
      renderCard={(product) => <ProductCard product={product} />}
    />
  );
};

export default FeaturedProducts;
