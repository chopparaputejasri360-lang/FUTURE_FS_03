'use client'

import Link from 'next/link'
import { ArrowRight, MessageCircle, Users } from 'lucide-react'

export default function AboutCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-950 via-secondary-900 to-accent-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-secondary-400/20 to-accent-400/20 rounded-full animate-float blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-accent-400/20 to-primary-400/20 rounded-full animate-float blur-xl" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 rounded-full animate-float blur-xl" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading */}
          <h2 className="heading-2 text-white mb-6">
            Ready to Work{' '}
            <span className="bg-gradient-to-r from-secondary-400 to-accent-400 bg-clip-text text-transparent">
              With Us?
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Join the growing community of forward-thinking brands that are already leveraging AI-powered design 
            to create exceptional digital experiences and drive unprecedented growth.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link
              href="/contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-secondary-500 to-accent-500 text-white font-semibold rounded-xl shadow-2xl hover:shadow-secondary-500/25 transition-all duration-300 hover:scale-105 focus-ring"
            >
              <span className="flex items-center space-x-2">
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>

            <Link
              href="/products"
              className="group px-8 py-4 glass text-white font-semibold rounded-xl border border-white/20 hover:bg-white/10 transition-all duration-300 hover:scale-105 focus-ring"
            >
              <span className="flex items-center space-x-2">
                <span>Learn More</span>
                <MessageCircle className="w-5 h-5 group-hover:animate-pulse" />
              </span>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Free Consultation</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Expert Team</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Proven Results</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
              <span className="text-sm">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

