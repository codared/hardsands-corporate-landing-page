import { storefrontApiJsonFetch } from "modules/api"
import { Product } from "../types"

class ProductsApi {
    // async fetchFreeTrials({
    //   offers,
    //   currency = 'USD',
    //   subscriptionDiscountKeys,
    // }: {
    //   offers: string[]
    //   currency?: string
    //   subscriptionDiscountKeys?: string[]
    // }): Promise<OfferFreeTrialsMap> {
    //   const params = `currency=${currency}&offers=${offers.join(',')}${
    //     subscriptionDiscountKeys
    //       ? `&subscriptionDiscountKeys=${subscriptionDiscountKeys.join(',')}`
    //       : ''
    //   }`
    //   const resp = await storefrontApiJsonFetch<OfferFreeTrialsMap>(
    //     `/api/free-trials?${params}`
    //   )
  
    //   if (resp.isError) {
    //     throw new Error(`Error fetching free trials cart item:`)
    //   }
  
    //   return resp.result
    // }
  
    async getAllProducts(
      currency = 'USD',
      ids?: number[],
      countryCode?: string,
      subscriptionDiscountKeys?: string[]
    ): Promise<Product[]> {
      const params = `currency=${currency}${ids ? `&ids=${ids.join(',')}` : ''}${
        countryCode ? `&countryCode=${countryCode}` : ''
      }${
        subscriptionDiscountKeys
          ? `&subscriptionDiscountKeys=${subscriptionDiscountKeys.join(',')}`
          : ''
      }`
      const resp = await storefrontApiJsonFetch<Product[]>(
        `/api/products?${params}`
      )
  
      if (resp.isError) {
        throw new Error(resp.message)
      }
  
      const result = resp.result
      return result
    }
  
    // async fetchSubscriptionProducts(
    //   currency = 'USD',
    //   ids?: number[]
    // ): Promise<SubscriptionProductResponse> {
    //   const params = `currency=${currency}`
    //   const data: GetSubscriptionProductsBody = {
    //     product_option_value_ids: ids,
    //   }
  
    //   const resp = ((await brandServicesApiFetch(
    //     `/api/products/subscription-products?${params}`,
    //     {
    //       method: 'POST',
    //       body: JSON.stringify(data),
    //     }
    //   )) as unknown) as SubscriptionProductResponse
  
    //   return resp
    // }
  
    async getSingleProduct(
      slugOrId: string | number,
      currency = 'USD',
      countryCode?: string,
      subscriptionDiscountKeys?: string[]
    ): Promise<Product> {
      const params = `currency=${currency}${
        countryCode ? `&countryCode=${countryCode}` : ''
      }${
        subscriptionDiscountKeys
          ? `&subscriptionDiscountKeys=${subscriptionDiscountKeys.join(',')}`
          : ''
      }`
  
      const resp = await storefrontApiJsonFetch<Product>(
        `/api/products/${slugOrId}?${params}`
      )
  
      if (resp.isError) {
        throw new Error(resp.message)
      }
  
      return resp.result
    }
  
    // async getProductDetails(slugOrId: string | number): Promise<ProductContent> {
    //   const resp = await storefrontApiJsonFetch<ProductContent>(
    //     `/api/products/${slugOrId}/content`
    //   )
  
    //   if (resp.isError) {
    //     throw new Error(resp.message)
    //   }
  
    //   return resp.result
    // }
  }
  
  export const productsApi = new ProductsApi();