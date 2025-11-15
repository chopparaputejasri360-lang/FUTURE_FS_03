'use client'

import { useState, useEffect } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'TechFlow Inc.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      content: 'Future Brand transformed our digital presence completely. The AI-powered design solutions helped us increase our conversion rate by 300% in just three months. Their innovative approach and attention to detail is unmatched.',
      rating: 5,
      industry: 'Technology'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Marketing Director',
      company: 'Global Retail Co.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      content: 'Working with Future Brand was a game-changer for our brand identity. Their AI-driven insights helped us understand our audience better and create campaigns that truly resonate. The results speak for themselves.',
      rating: 5,
      industry: 'Retail'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Founder',
      company: 'StartupXYZ',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      content: 'As a startup, we needed a partner who could scale with us. Future Brand delivered beyond our expectations. Their AI-powered tools helped us establish a professional brand presence that rivals industry leaders.',
      rating: 5,
      industry: 'Startup'
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Creative Director',
      company: 'Design Studio Pro',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      content: 'The level of innovation and creativity that Future Brand brings to the table is extraordinary. Their AI-assisted design process has revolutionized how we approach branding projects for our clients.',
      rating: 5,
      industry: 'Design'
    },
    {
      id: 5,
      name: 'Lisa Wang',
      role: 'VP of Marketing',
      company: 'FinanceFirst',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
      content: 'Future Brand helped us modernize our financial services brand while maintaining trust and credibility. Their AI-powered analytics provided insights that transformed our marketing strategy completely.',
      rating: 5,
      industry: 'Finance'
    }
  ]

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-6">
            What Our Clients{' '}
            <span className="bg-gradient-to-r from-secondary-500 to-accent-500 bg-clip-text text-transparent">
              Say About Us
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what industry leaders and successful businesses have to say about their experience with Future Brand.
          </p>
        </div>

        {/* Testimonials carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main testimonial card */}
          <div className="relative">
            <div className="card-glass p-8 md:p-12 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/30 shadow-2xl">
              {/* Quote icon */}
              <div className="absolute top-8 right-8 w-12 h-12 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Testimonial content */}
              <div className="mb-8">
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-medium">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>

                {/* Author info */}
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <img
                      src={testimonials[currentTestimonial].avatar}
                      alt={testimonials[currentTestimonial].name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-heading font-semibold text-gray-900">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-gray-600">
                      {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                    </p>
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-secondary-100 to-accent-100 text-secondary-700 text-sm font-medium rounded-full mt-1">
                      {testimonials[currentTestimonial].industry}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Previous button */}
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-white hover:shadow-lg transition-all duration-300 focus-ring"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>

            {/* Dots indicator */}
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-gradient-to-r from-secondary-500 to-accent-500 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Next button */}
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-white hover:shadow-lg transition-all duration-300 focus-ring"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-8">Trusted by industry leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* Placeholder for company logos */}
            <div className="w-32 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-sm font-medium">Company 1</span>
            </div>
            <div className="w-32 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-sm font-medium">Company 2</span>
            </div>
            <div className="w-32 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-sm font-medium">Company 3</span>
            </div>
            <div className="w-32 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-sm font-medium">Company 4</span>
            </div>
            <div className="w-32 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-sm font-medium">Company 5</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

