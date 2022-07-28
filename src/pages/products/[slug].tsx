import { Flex, Spinner } from "@chakra-ui/react";
import ProductSkeleton from "components/ProductCard/ProductSkeleton";
import WithLayout from "components/WithLayout";
import { useProduct } from "modules/products/hooks";
import ProductDetailSection from "modules/products/PDPElements/ProductDetailSection";
import productRoutes from "modules/products/routes";
import { ProductColors } from "modules/shared/constants";
import { NextPage, NextPageContext } from "next";
import nextCookies from "next-cookies";
import { useRouter } from "next/router";
import { isSupportedCurrency } from "utils/functions";
import { isServerRequest } from "utils/nextjs";
import { Product } from "utils/types";

const ProductPage = ({ product: initialProduct }: { product?: Product }) => {
  const router = useRouter();
  const {
    query: { slug, color },
  } = router;

  const { product, productDetails } = useProduct(
    initialProduct,
    slug as string
  );
  // if (!product) {
  //   // no product represents a loading state
  //   // return <PDPLoadingSkeleton />
  //   return (
  //     <Flex flex={1} w={"full"} height={"full"}>
  //       <ProductSkeleton />
  //     </Flex>
  //   );
  // } else if (!productDetails) {
  //   // if there is a product but no details, this is an error, redirect to products list
  //   // TODO report
  //   router.replace(productRoutes.products());
  //   return null;
  // }
  return (
    <ProductDetailSection
      key={product?.slug}
      product={product}
      productDetails={productDetails}
      productColor={color as ProductColors}
    />
  );
};

// export async function getServerSideProps(ctx: NextPageContext) {
//   // dont handle async data fetches because the component's useProduct hook handles this
//   if (!isServerRequest(ctx)) {
//     return { props: {} }
//   }
//   const {
//     query: { slug, currency },
//     res,
//   } = ctx
//   const redirectToProducts = (url: string) => {
//     if (res) {
//       res.setHeader('location', url)
//       res.statusCode = 302
//       res.end()
//     }
//   }
//   const { selected_currency: cookieCurrency } = nextCookies(ctx)
//   const queryCurrency = currency as string
//   const currencyToUse = isSupportedCurrency(queryCurrency)
//     ? queryCurrency
//     : cookieCurrency

//   try {
//     // const product = await productsApi.getSingleProduct(
//     //   slug as string,
//     //   currencyToUse
//     // )
//     const product = {};
//     return { props: { product } }
//   } catch (e) {
//     redirectToProducts(productRoutes.products())
//     return { props: {} }
//   }
// }

const ProductPagemain: NextPage<{ product?: Product }> = ({ product }) => {
  return (
    <WithLayout pageTitle=" - Product">
      <ProductPage product={product} />
    </WithLayout>
  );
};

export default ProductPagemain;
