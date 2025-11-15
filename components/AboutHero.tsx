'use client'

import { Brain, Target, Users, Lightbulb } from 'lucide-react'

export default function AboutHero() {
  const stats = [
    { icon: Brain, value: '5+', label: 'Years of Innovation', description: 'Pioneering AI in design' },
    { icon: Target, value: '1000+', label: 'Projects Delivered', description: 'Successful transformations' },
    { icon: Users, value: '50+', label: 'Team Members', description: 'Global talent network' },
    { icon: Lightbulb, value: '25+', label: 'Awards Won', description: 'Industry recognition' }
  ]

  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 mb-8">
              <Brain className="w-4 h-4 text-secondary-500" />
              <span className="text-sm font-medium text-gray-700">About Future Brand</span>
            </div>

            {/* Main heading */}
            <h1 className="heading-1 mb-6">
              Pioneering the Future of{' '}
              <span className="bg-gradient-to-r from-secondary-500 to-accent-500 bg-clip-text text-transparent">
                Digital Innovation
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We're a team of passionate innovators, designers, and technologists who believe in the 
              transformative power of AI-driven design. Our mission is to help brands create 
              exceptional digital experiences that inspire, engage, and drive results.
            </p>

            {/* Key points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <p className="text-gray-700">
                  <strong>AI-First Approach:</strong> We leverage cutting-edge artificial intelligence to create smarter, more effective designs.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <p className="text-gray-700">
                  <strong>Human-Centered Design:</strong> Technology serves creativity, not the other way around.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <p className="text-gray-700">
                  <strong>Results-Driven:</strong> Every project is measured by its impact on your business goals.
                </p>
              </div>
            </div>
          </div>

          {/* Right column - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="card p-6 text-center group hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-heading font-bold text-primary-950 mb-2">
                  {stat.value}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {stat.label}
                </h3>
                <p className="text-sm text-gray-600">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

