import buildRoutes from '../shared/buildRoutes'

const productRoutes = buildRoutes('products', {
  products: ({ filter }: { filter?: string } = {}) => {
    if (!filter) {
      return ''
    }
    return `?filter=${filter}`
  },
  detail: ({ slug, color }: { slug?: string, color?: string } = {}) => {
    if(!slug) {
      return ''
    }
    const base = `${slug}`
    if (!color) {
      return base
    }
    return `${base}?color=${color}`
  },
  gift: () => '/gift-card',
})
export default productRoutes
