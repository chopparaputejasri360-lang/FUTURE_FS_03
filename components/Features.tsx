'use client'

import React, { useState } from 'react'
import { Brain, Zap, Shield, Palette, Globe, Smartphone, BarChart3, Users } from 'lucide-react'

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Design',
      description: 'Leverage cutting-edge artificial intelligence to create stunning, personalized designs that adapt to your brand\'s unique identity.',
      benefits: ['Automated design generation', 'Smart color matching', 'Intelligent layout optimization', 'Brand consistency analysis']
    },
    {
      icon: Zap,
      title: 'Lightning Fast Delivery',
      description: 'Get your projects completed in record time with our streamlined workflow and AI-assisted development process.',
      benefits: ['24-hour turnaround', 'Automated testing', 'Instant deployment', 'Real-time collaboration']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security measures protect your data and ensure compliance with industry standards and regulations.',
      benefits: ['End-to-end encryption', 'GDPR compliance', 'SOC 2 certified', 'Regular security audits']
    },
    {
      icon: Palette,
      title: 'Custom Branding',
      description: 'Create a unique visual identity that stands out from the competition with our comprehensive branding solutions.',
      benefits: ['Logo design', 'Color palette creation', 'Typography selection', 'Brand guidelines']
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Expand your business worldwide with our multi-language support and international deployment capabilities.',
      benefits: ['Multi-language support', 'CDN optimization', 'Local hosting options', 'Currency localization']
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Ensure your brand looks perfect on every device with our responsive, mobile-first design approach.',
      benefits: ['Responsive layouts', 'Touch optimization', 'Progressive web apps', 'Cross-platform compatibility']
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Make data-driven decisions with comprehensive analytics and AI-powered insights about your brand performance.',
      benefits: ['Real-time analytics', 'Performance tracking', 'User behavior analysis', 'ROI measurement']
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Work seamlessly with your team using our collaborative tools and project management features.',
      benefits: ['Real-time editing', 'Version control', 'Comment system', 'Role-based access']
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-6">
            Powerful Features for{' '}
            <span className="bg-gradient-to-r from-secondary-500 to-accent-500 bg-clip-text text-transparent">
              Modern Brands
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the comprehensive suite of tools and technologies that power the future of digital branding and design.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group cursor-pointer transition-all duration-300 ${
                activeFeature === index ? 'transform scale-105' : 'hover:transform hover:scale-105'
              }`}
              onClick={() => setActiveFeature(index)}
            >
              <div className={`card h-full transition-all duration-300 ${
                activeFeature === index 
                  ? 'ring-2 ring-secondary-500 shadow-xl' 
                  : 'hover:shadow-xl'
              }`}>
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                  activeFeature === index
                    ? 'bg-gradient-to-br from-secondary-500 to-accent-500'
                    : 'bg-gradient-to-br from-gray-100 to-gray-200 group-hover:from-secondary-100 group-hover:to-accent-100'
                }`}>
                  <feature.icon className={`w-8 h-8 transition-colors duration-300 ${
                    activeFeature === index ? 'text-white' : 'text-gray-600 group-hover:text-secondary-600'
                  }`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {feature.description}
                </p>

                {/* Benefits list */}
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-500">
                      <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                        activeFeature === index ? 'bg-secondary-500' : 'bg-gray-300'
                      }`}></div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Feature details panel */}
        <div className="mt-16">
          <div className="glass p-8 rounded-3xl bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-xl border border-white/30">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Visual representation */}
              <div className="relative">
                <div className="w-full h-64 bg-gradient-to-br from-secondary-100 to-accent-100 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      {React.createElement(features[activeFeature].icon, { className: "w-10 h-10 text-white" })}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      {features[activeFeature].title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Interactive demonstration
                    </p>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-white/80 rounded-full flex items-center justify-center shadow-lg">
                  <Zap className="w-6 h-6 text-secondary-500" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-lg">
                  <Brain className="w-5 h-5 text-accent-500" />
                </div>
              </div>

              {/* Detailed information */}
              <div>
                <h3 className="text-2xl font-heading font-semibold mb-4 text-gray-900">
                  {features[activeFeature].title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {features[activeFeature].description}
                </p>
                
                <div className="space-y-4">
                  {features[activeFeature].benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>

                <button className="mt-6 btn-primary">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
