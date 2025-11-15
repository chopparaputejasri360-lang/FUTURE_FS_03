import ProductsHero from '@/components/ProductsHero'
import ProductGrid from '@/components/ProductGrid'
import ProductFeatures from '@/components/ProductFeatures'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'

export const metadata = {
  title: 'Products & Solutions',
  description: 'Explore our comprehensive suite of AI-powered design and branding solutions that help businesses create exceptional digital experiences.',
  openGraph: {
    title: 'Products & Solutions - Future Brand',
    description: 'Discover our AI-powered design tools, branding services, and digital transformation solutions.',
  },
}

export default function ProductsPage() {
  return (
    <>
      {/* Products Hero Section */}
      <ProductsHero />
      
      {/* Product Grid Section */}
      <ProductGrid />
      
      {/* Product Features Section */}
      <ProductFeatures />
      
      {/* Pricing Section */}
      <Pricing />
      
      {/* FAQ Section */}
      <FAQ />
    </>
  )
}

