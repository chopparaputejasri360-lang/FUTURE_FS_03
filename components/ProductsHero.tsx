'use client'

import { Palette, Code, BarChart3, Smartphone, Globe, Zap } from 'lucide-react'

export default function ProductsHero() {
  const productCategories = [
    {
      icon: Palette,
      title: 'AI Design Studio',
      description: 'Create stunning visuals with AI assistance',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Build modern, responsive websites',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Data-driven decision making',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform solutions',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Globe,
      title: 'Digital Marketing',
      description: 'Comprehensive marketing solutions',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Zap,
      title: 'Automation',
      description: 'Streamline your workflows',
      color: 'from-yellow-500 to-orange-500'
    }
  ]

  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 mb-8">
              <Palette className="w-4 h-4 text-secondary-500" />
              <span className="text-sm font-medium text-gray-700">Our Products & Solutions</span>
            </div>

            {/* Main heading */}
            <h1 className="heading-1 mb-6">
              AI-Powered Solutions for{' '}
              <span className="bg-gradient-to-r from-secondary-500 to-accent-500 bg-clip-text text-transparent">
                Modern Brands
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover our comprehensive suite of AI-powered tools and services designed to help 
              businesses create exceptional digital experiences, build stronger brands, and drive growth.
            </p>

            {/* Key benefits */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <p className="text-gray-700">
                  <strong>AI-Enhanced Creativity:</strong> Leverage artificial intelligence to amplify your creative potential and design capabilities.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <p className="text-gray-700">
                  <strong>Scalable Solutions:</strong> From startups to enterprises, our solutions grow with your business needs.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <p className="text-gray-700">
                  <strong>Results-Driven:</strong> Every solution is designed to deliver measurable business impact and ROI.
                </p>
              </div>
            </div>
          </div>

          {/* Right column - Product categories */}
          <div className="grid grid-cols-2 gap-4">
            {productCategories.map((category, index) => (
              <div key={index} className="card p-6 text-center group hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

