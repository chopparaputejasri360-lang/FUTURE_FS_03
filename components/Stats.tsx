'use client'

import { useState, useEffect } from 'react'
import { Users, Zap, Globe, Award } from 'lucide-react'

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({
    clients: 0,
    projects: 0,
    countries: 0,
    awards: 0
  })

  // Target values for animation
  const targetCounts = {
    clients: 1000,
    projects: 5000,
    countries: 50,
    awards: 25
  }

  // Intersection Observer to trigger animation when component is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('stats-section')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  // Animate counters when component becomes visible
  useEffect(() => {
    if (!isVisible) return

    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps

    const animateCount = (key: keyof typeof targetCounts) => {
      const target = targetCounts[key]
      const increment = target / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(timer)
        }
        setCounts(prev => ({ ...prev, [key]: Math.floor(current) }))
      }, stepDuration)
    }

    // Start animations with slight delays
    setTimeout(() => animateCount('clients'), 0)
    setTimeout(() => animateCount('projects'), 200)
    setTimeout(() => animateCount('countries'), 400)
    setTimeout(() => animateCount('awards'), 600)
  }, [isVisible])

  const stats = [
    {
      icon: Users,
      value: counts.clients,
      suffix: '+',
      label: 'Happy Clients',
      description: 'Satisfied customers worldwide',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Zap,
      value: counts.projects,
      suffix: '+',
      label: 'Projects Completed',
      description: 'Successful digital transformations',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Globe,
      value: counts.countries,
      suffix: '+',
      label: 'Countries Served',
      description: 'Global reach and impact',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Award,
      value: counts.awards,
      suffix: '',
      label: 'Awards Won',
      description: 'Industry recognition',
      color: 'from-orange-500 to-orange-600'
    }
  ]

  return (
    <section id="stats-section" className="py-20 bg-gradient-to-br from-primary-950 to-secondary-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-white/5 rounded-full animate-float"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-white/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/5 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="heading-2 text-white mb-6">
            Trusted by Brands{' '}
            <span className="bg-gradient-to-r from-secondary-400 to-accent-400 bg-clip-text text-transparent">
              Worldwide
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our AI-powered solutions have transformed businesses across the globe, delivering exceptional results and driving innovation.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="glass-dark p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300 group-hover:scale-105">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>

                {/* Counter */}
                <div className="mb-4">
                  <span className="text-4xl md:text-5xl font-heading font-bold text-white">
                    {stat.value.toLocaleString()}
                  </span>
                  <span className="text-2xl md:text-3xl font-heading font-bold text-secondary-400">
                    {stat.suffix}
                  </span>
                </div>

                {/* Label */}
                <h3 className="text-xl font-heading font-semibold text-white mb-2">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info section */}
        <div className="mt-16 text-center">
          <div className="glass-dark p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 max-w-4xl mx-auto">
            <h3 className="text-2xl font-heading font-semibold text-white mb-4">
              Join the Future of Digital Innovation
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Be part of the growing community of forward-thinking brands that are leveraging AI technology 
              to create exceptional digital experiences and drive business growth.
            </p>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">99.9% Uptime</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-sm">24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <span className="text-sm">Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                <span className="text-sm">AI-Powered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

