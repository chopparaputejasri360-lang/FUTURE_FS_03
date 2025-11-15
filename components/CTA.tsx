'use client'

import Link from 'next/link'
import { ArrowRight, Sparkles, Zap, Rocket, Brain } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-950 via-secondary-900 to-accent-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-secondary-400/20 to-accent-400/20 rounded-full animate-float blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-accent-400/20 to-primary-400/20 rounded-full animate-float blur-xl" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 rounded-full animate-float blur-xl" style={{ animationDelay: '4s' }}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* Floating icons */}
        <div className="absolute top-32 right-32 w-8 h-8 text-secondary-400/30 animate-float">
          <Sparkles className="w-full h-full" />
        </div>
        <div className="absolute bottom-32 left-32 w-6 h-6 text-accent-400/30 animate-float" style={{ animationDelay: '1s' }}>
          <Zap className="w-full h-full" />
        </div>
        <div className="absolute top-1/3 left-1/4 w-10 h-10 text-primary-400/30 animate-float" style={{ animationDelay: '3s' }}>
          <Rocket className="w-full h-full" />
        </div>
        <div className="absolute bottom-1/3 right-1/4 w-7 h-7 text-secondary-400/30 animate-float" style={{ animationDelay: '2s' }}>
          <Brain className="w-full h-full" />
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading */}
          <h2 className="heading-2 text-white mb-6">
            Ready to Transform Your{' '}
            <span className="bg-gradient-to-r from-secondary-400 to-accent-400 bg-clip-text text-transparent">
              Digital Presence?
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Join thousands of forward-thinking brands that are already leveraging AI-powered design 
            to create exceptional digital experiences and drive unprecedented growth.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link
              href="/contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-secondary-500 to-accent-500 text-white font-semibold rounded-xl shadow-2xl hover:shadow-secondary-500/25 transition-all duration-300 hover:scale-105 focus-ring"
            >
              <span className="flex items-center space-x-2">
                <span>Start Your Journey</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary-600 to-accent-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </Link>

            <Link
              href="/products"
              className="group px-8 py-4 glass text-white font-semibold rounded-xl border border-white/20 hover:bg-white/10 transition-all duration-300 hover:scale-105 focus-ring"
            >
              <span className="flex items-center space-x-2">
                <span>Explore Solutions</span>
                <Sparkles className="w-5 h-5 group-hover:animate-pulse" />
              </span>
            </Link>
          </div>

          {/* Features highlight */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="glass-dark p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Lightning Fast</h3>
              <p className="text-gray-300 text-sm">Get your project delivered in record time with our AI-powered workflow.</p>
            </div>

            <div className="glass-dark p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-primary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">AI-Powered</h3>
              <p className="text-gray-300 text-sm">Leverage cutting-edge AI technology for superior design and performance.</p>
            </div>

            <div className="glass-dark p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Future Ready</h3>
              <p className="text-gray-300 text-sm">Built with the latest technologies to ensure long-term success.</p>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Free Consultation</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-sm">No Setup Fees</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="text-sm">30-Day Money Back</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
              <span className="text-sm">24/7 Support</span>
            </div>
          </div>

          {/* Contact info */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-gray-300 mb-4">
              Have questions? We're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
              <a 
                href="mailto:hello@futurebrand.com" 
                className="text-secondary-400 hover:text-secondary-300 transition-colors duration-300"
              >
                hello@futurebrand.com
              </a>
              <span className="text-gray-500 hidden sm:block">•</span>
              <a 
                href="tel:+15551234567" 
                className="text-secondary-400 hover:text-secondary-300 transition-colors duration-300"
              >
                +1 (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

