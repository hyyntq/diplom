import FooterBanner from "@/components/homePage/banner-footer/banner-footer";
import Category from "@/components/homePage/categorySection/Category";
import Discount from "@/components/homePage/discount-section/discount";
import HeroBanner from "@/components/homePage/heroBanner/HeroBanner";
import PopularProducts from "@/components/homePage/popularProduct/popular-banner";
import ProductSection from "@/components/homePage/productPage/product-section";
import PromoGrid from "@/components/homePage/promoGrid/PromoGrid";

export default async function Home() {
  return (
    <>
      <HeroBanner />
      <PromoGrid />
      <Category />
      <ProductSection />
      <PopularProducts />
      <Discount />
      <FooterBanner/>
    </>
  );
}
