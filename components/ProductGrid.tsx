'use client'

import { useState } from 'react'
import { ExternalLink, ArrowRight, Star, Users, Zap, Shield } from 'lucide-react'

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'design', name: 'Design Tools' },
    { id: 'development', name: 'Development' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'analytics', name: 'Analytics' }
  ]

  const products = [
    {
      id: 1,
      title: 'AI Design Studio',
      category: 'design',
      description: 'Create stunning visuals, logos, and brand assets with our AI-powered design platform.',
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=500&h=300&fit=crop',
      features: ['AI-powered logo generation', 'Brand kit creation', 'Template library', 'Collaboration tools'],
      price: 'Starting at $29/month',
      rating: 4.9,
      users: '10K+',
      badge: 'Most Popular',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      title: 'Smart Website Builder',
      category: 'development',
      description: 'Build responsive, SEO-optimized websites with our intelligent website builder.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      features: ['Drag & drop builder', 'AI content generation', 'SEO optimization', 'Mobile responsive'],
      price: 'Starting at $19/month',
      rating: 4.8,
      users: '25K+',
      badge: 'Best Value',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      title: 'Brand Analytics Pro',
      category: 'analytics',
      description: 'Track and analyze your brand performance with comprehensive analytics and insights.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      features: ['Brand monitoring', 'Competitor analysis', 'Performance metrics', 'Custom reports'],
      price: 'Starting at $49/month',
      rating: 4.7,
      users: '5K+',
      badge: 'Enterprise',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 4,
      title: 'Social Media Manager',
      category: 'marketing',
      description: 'Manage and optimize your social media presence with AI-powered content creation.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      features: ['Content scheduling', 'AI post generation', 'Analytics dashboard', 'Multi-platform support'],
      price: 'Starting at $39/month',
      rating: 4.6,
      users: '15K+',
      badge: 'Trending',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      title: 'Email Marketing Suite',
      category: 'marketing',
      description: 'Create and send beautiful, personalized email campaigns with AI optimization.',
      image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=500&h=300&fit=crop',
      features: ['Email templates', 'A/B testing', 'Automation workflows', 'Performance tracking'],
      price: 'Starting at $25/month',
      rating: 4.8,
      users: '20K+',
      badge: 'New',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 6,
      title: 'Mobile App Builder',
      category: 'development',
      description: 'Create native and cross-platform mobile apps with our no-code builder.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop',
      features: ['No-code development', 'Native performance', 'App store deployment', 'Push notifications'],
      price: 'Starting at $59/month',
      rating: 4.5,
      users: '8K+',
      badge: 'Advanced',
      color: 'from-yellow-500 to-orange-500'
    }
  ]

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory)

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-6">
            Explore Our{' '}
            <span className="bg-gradient-to-r from-secondary-500 to-accent-500 bg-clip-text text-transparent">
              Product Suite
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose from our comprehensive range of AI-powered tools and services designed to meet your specific business needs.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-secondary-500 to-accent-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group"
            >
              <div className="card h-full overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                {/* Product image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 bg-gradient-to-r ${product.color} text-white text-xs font-semibold rounded-full`}>
                      {product.badge}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Product content */}
                <div className="p-6">
                  {/* Title and rating */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-heading font-semibold text-gray-900">
                      {product.title}
                    </h3>
                    <div className="flex items-center space-x-1 ml-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{product.rating}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                    {product.features.length > 3 && (
                      <div className="text-sm text-gray-500">
                        +{product.features.length - 3} more features
                      </div>
                    )}
                  </div>

                  {/* Price and users */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-lg font-semibold text-gray-900">{product.price}</div>
                      <div className="flex items-center space-x-1 text-sm text-gray-500">
                        <Users className="w-4 h-4" />
                        <span>{product.users} users</span>
                      </div>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex space-x-3">
                    <button className="flex-1 btn-primary flex items-center justify-center space-x-2">
                      <span>Get Started</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                      <ExternalLink className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA section */}
        <div className="mt-16 text-center">
          <div className="glass p-8 rounded-3xl bg-gradient-to-br from-secondary-50 to-accent-50 max-w-4xl mx-auto">
            <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Our team can create a tailored solution that perfectly fits your unique business requirements.
            </p>
            <button className="btn-primary">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

