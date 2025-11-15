'use client'

import React, { useState } from 'react'
import { ChevronRight, Lightbulb, Rocket, Target, Users } from 'lucide-react'

export default function OurStory() {
  const [activeTab, setActiveTab] = useState(0)

  const storyTabs = [
    {
      id: 'mission',
      title: 'Our Mission',
      icon: Target,
      content: {
        heading: 'Empowering Brands Through AI Innovation',
        description: 'We believe that every brand deserves access to world-class design and technology. Our mission is to democratize exceptional digital experiences by making AI-powered design accessible, affordable, and effective for businesses of all sizes.',
        highlights: [
          'Democratizing access to premium design',
          'Bridging the gap between creativity and technology',
          'Creating sustainable, scalable solutions',
          'Fostering innovation in the design industry'
        ]
      }
    },
    {
      id: 'vision',
      title: 'Our Vision',
      icon: Lightbulb,
      content: {
        heading: 'Shaping the Future of Digital Branding',
        description: 'We envision a world where AI and human creativity work in perfect harmony to create digital experiences that are not just beautiful, but truly transformative. A future where every brand can compete on a global scale with the power of intelligent design.',
        highlights: [
          'AI-human collaboration as the new standard',
          'Global accessibility to premium design',
          'Sustainable and ethical technology use',
          'Continuous innovation and evolution'
        ]
      }
    },
    {
      id: 'journey',
      title: 'Our Journey',
      icon: Rocket,
      content: {
        heading: 'From Startup to Industry Leader',
        description: 'Founded in 2019 by a team of designers and engineers who saw the potential of AI in creative work, we started as a small startup with big dreams. Today, we\'re proud to be at the forefront of the AI design revolution.',
        highlights: [
          '2019: Founded with a vision for AI-powered design',
          '2020: Launched our first AI design platform',
          '2021: Reached 100+ successful projects',
          '2022: Expanded globally with 50+ team members',
          '2023: Achieved 1000+ projects milestone',
          '2024: Leading the industry in AI innovation'
        ]
      }
    },
    {
      id: 'impact',
      title: 'Our Impact',
      icon: Users,
      content: {
        heading: 'Transforming Businesses Worldwide',
        description: 'Our work has helped thousands of businesses transform their digital presence, increase their conversion rates, and achieve their growth goals. We measure our success by the success of our clients.',
        highlights: [
          '300% average increase in conversion rates',
          '95% client satisfaction rate',
          '50+ countries served globally',
          '25+ industry awards and recognition',
          '1000+ successful brand transformations'
        ]
      }
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-6">
            Our Story &{' '}
            <span className="bg-gradient-to-r from-secondary-500 to-accent-500 bg-clip-text text-transparent">
              Purpose
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the driving force behind our innovation and the values that guide everything we do.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Tab navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {storyTabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-secondary-500 to-accent-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.title}</span>
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="card p-8 md:p-12 rounded-3xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <h3 className="text-3xl font-heading font-semibold text-gray-900 mb-6">
                  {storyTabs[activeTab].content.heading}
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {storyTabs[activeTab].content.description}
                </p>

                {/* Highlights */}
                <div className="space-y-4">
                  {storyTabs[activeTab].content.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ChevronRight className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual representation */}
              <div className="relative">
                <div className="glass p-8 rounded-3xl bg-gradient-to-br from-secondary-50 to-accent-50">
                  {/* Dynamic visual based on active tab */}
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                      {React.createElement(storyTabs[activeTab].icon, { 
                        className: "w-12 h-12 text-white" 
                      })}
                    </div>
                    
                    <h4 className="text-xl font-semibold text-gray-800 mb-4">
                      {storyTabs[activeTab].title}
                    </h4>
                    
                    <div className="space-y-3">
                      <div className="h-3 bg-gradient-to-r from-secondary-200 to-secondary-300 rounded-full animate-pulse"></div>
                      <div className="h-3 bg-gradient-to-r from-accent-200 to-accent-300 rounded-full w-3/4 mx-auto animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      <div className="h-3 bg-gradient-to-r from-primary-200 to-primary-300 rounded-full w-1/2 mx-auto animate-pulse" style={{ animationDelay: '1s' }}></div>
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
