import buildRoutes from '../shared/buildRoutes'

const productRoutes = buildRoutes('collections', {
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
    return `${base}?variant=${color}`
  },
  gift: () => '/gift-card',
})
export default productRoutes
