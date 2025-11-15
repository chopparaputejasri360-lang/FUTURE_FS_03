'use client'

import { Brain, Zap, Shield, Globe, Smartphone, BarChart3 } from 'lucide-react'

export default function ProductFeatures() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Our products leverage cutting-edge artificial intelligence to automate complex tasks, provide intelligent insights, and enhance creativity.',
      benefits: [
        'Automated design generation',
        'Smart content optimization',
        'Predictive analytics',
        'Intelligent recommendations'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Lightning Fast Performance',
      description: 'Built for speed and efficiency, our solutions deliver results in record time without compromising on quality.',
      benefits: [
        'Sub-second response times',
        'Optimized algorithms',
        'Cloud-based processing',
        'Real-time collaboration'
      ],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security measures protect your data and ensure compliance with industry standards and regulations.',
      benefits: [
        'End-to-end encryption',
        'SOC 2 compliance',
        'Regular security audits',
        'Data privacy protection'
      ],
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Globe,
      title: 'Global Scalability',
      description: 'Our solutions are designed to scale with your business, from startup to enterprise, across multiple markets.',
      benefits: [
        'Multi-region deployment',
        'Auto-scaling infrastructure',
        'Global CDN network',
        '24/7 availability'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'All our products are built with mobile-first principles, ensuring optimal performance across all devices.',
      benefits: [
        'Responsive design',
        'Touch optimization',
        'Offline capabilities',
        'Progressive web apps'
      ],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics and reporting tools help you make data-driven decisions and measure success.',
      benefits: [
        'Real-time dashboards',
        'Custom reporting',
        'Performance tracking',
        'ROI measurement'
      ],
      color: 'from-red-500 to-pink-500'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-6">
            Why Choose Our{' '}
            <span className="bg-gradient-to-r from-secondary-500 to-accent-500 bg-clip-text text-transparent">
              Products?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our products are built with cutting-edge technology and designed to deliver exceptional results for businesses of all sizes.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card h-full p-8 hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Benefits */}
                <div className="space-y-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 bg-gradient-to-r ${feature.color} rounded-full`}></div>
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Integration section */}
        <div className="mt-16">
          <div className="card p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white to-gray-50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <h3 className="text-3xl font-heading font-semibold text-gray-900 mb-6">
                  Seamless Integration
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our products integrate seamlessly with your existing tools and workflows. 
                  Connect with popular platforms and services to create a unified experience.
                </p>

                {/* Integration features */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700">API-first architecture for easy integration</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Pre-built connectors for popular tools</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Custom integration support</span>
                  </div>
                </div>
              </div>

              {/* Visual representation */}
              <div className="relative">
                <div className="glass p-8 rounded-3xl bg-gradient-to-br from-secondary-50 to-accent-50">
                  {/* Integration diagram */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-3 shadow-lg">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg"></div>
                      </div>
                      <span className="text-sm font-medium text-gray-700">CRM</span>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-3 shadow-lg">
                        <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg"></div>
                      </div>
                      <span className="text-sm font-medium text-gray-700">Analytics</span>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-3 shadow-lg">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg"></div>
                      </div>
                      <span className="text-sm font-medium text-gray-700">Marketing</span>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-3 shadow-lg">
                        <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg"></div>
                      </div>
                      <span className="text-sm font-medium text-gray-700">Design</span>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-xl flex items-center justify-center mb-3 shadow-lg">
                        <div className="w-8 h-8 bg-white rounded-lg"></div>
                      </div>
                      <span className="text-sm font-medium text-gray-700">Future Brand</span>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-3 shadow-lg">
                        <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg"></div>
                      </div>
                      <span className="text-sm font-medium text-gray-700">E-commerce</span>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-white/80 rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-6 h-6 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-full"></div>
                </div>
                <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-4 h-4 bg-gradient-to-br from-accent-500 to-primary-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

