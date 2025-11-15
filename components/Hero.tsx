'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Play, Sparkles, Zap, Brain, Rocket } from 'lucide-react'

export default function Hero() {
  const [currentText, setCurrentText] = useState(0)
  
  // AI-powered text variations for dynamic hero
  const heroTexts = [
    'AI-Powered Design',
    'Innovative Branding',
    'Future Technology',
    'Digital Transformation'
  ]

  // Rotate through hero texts
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-secondary-400/20 to-accent-400/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 rounded-lg rotate-45 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-br from-accent-400/20 to-primary-400/20 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-gradient-to-br from-secondary-400/20 to-accent-400/20 rounded-lg animate-float" style={{ animationDelay: '1s' }}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4 text-secondary-500" />
              <span className="text-sm font-medium text-gray-700">Powered by AI Technology</span>
            </div>

            {/* Main heading */}
            <h1 className="heading-1 mb-6 animate-slide-up">
              Redefining the Future of{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-secondary-500 to-accent-500 bg-clip-text text-transparent">
                  {heroTexts[currentText]}
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-full animate-pulse"></div>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Experience cutting-edge design solutions that blend artificial intelligence with human creativity. 
              We create digital experiences that inspire, engage, and transform your brand.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <Link
                href="/contact"
                className="btn-primary flex items-center justify-center space-x-2 group"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <button className="btn-glass flex items-center justify-center space-x-2 group">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">AI-Powered</div>
                  <div className="text-sm text-gray-600">Smart Design</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Lightning Fast</div>
                  <div className="text-sm text-gray-600">Quick Results</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Future Ready</div>
                  <div className="text-sm text-gray-600">Innovation</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Visual */}
          <div className="relative animate-slide-up" style={{ animationDelay: '0.8s' }}>
            {/* Main visual container */}
            <div className="relative">
              {/* Glassmorphism card */}
              <div className="glass p-8 rounded-3xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl">
                {/* AI-generated mockup content */}
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-lg"></div>
                      <span className="font-semibold text-gray-800">AI Studio</span>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>

                  {/* Content area */}
                  <div className="space-y-4">
                    <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse"></div>
                    <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-3/4 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    
                    {/* AI visualization */}
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="h-20 bg-gradient-to-br from-secondary-400/30 to-secondary-600/30 rounded-lg flex items-center justify-center">
                        <Sparkles className="w-8 h-8 text-secondary-600" />
                      </div>
                      <div className="h-20 bg-gradient-to-br from-accent-400/30 to-accent-600/30 rounded-lg flex items-center justify-center">
                        <Brain className="w-8 h-8 text-accent-600" />
                      </div>
                    </div>
                    
                    <div className="h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-1/2 animate-pulse" style={{ animationDelay: '1s' }}></div>
                  </div>
                </div>
              </div>

              {/* Floating elements around the main visual */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-secondary-400 to-accent-400 rounded-full flex items-center justify-center animate-float">
                <Zap className="w-8 h-8 text-white" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-accent-400 to-primary-400 rounded-lg flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                <Rocket className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

