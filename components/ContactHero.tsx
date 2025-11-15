'use client'

import { Mail, Phone, MapPin, Clock, MessageCircle, Calendar } from 'lucide-react'

export default function ContactHero() {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us a message anytime',
      contact: 'hello@futurebrand.com',
      action: 'mailto:hello@futurebrand.com',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak with our team directly',
      contact: '+1 (555) 123-4567',
      action: 'tel:+15551234567',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant support',
      contact: 'Available 24/7',
      action: '#',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Calendar,
      title: 'Schedule Call',
      description: 'Book a consultation',
      contact: 'Free 30-min session',
      action: '#',
      color: 'from-orange-500 to-orange-600'
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
              <MessageCircle className="w-4 h-4 text-secondary-500" />
              <span className="text-sm font-medium text-gray-700">Get In Touch</span>
            </div>

            {/* Main heading */}
            <h1 className="heading-1 mb-6">
              Let's Create Something{' '}
              <span className="bg-gradient-to-r from-secondary-500 to-accent-500 bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Ready to transform your brand with AI-powered design? We'd love to hear about your project 
              and discuss how we can help bring your vision to life.
            </p>

            {/* Key benefits */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <p className="text-gray-700">
                  <strong>Free Consultation:</strong> Get expert advice on your project with no obligation.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <p className="text-gray-700">
                  <strong>Quick Response:</strong> We typically respond within 24 hours.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <p className="text-gray-700">
                  <strong>Custom Solutions:</strong> Every project is tailored to your specific needs.
                </p>
              </div>
            </div>
          </div>

          {/* Right column - Contact methods */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.action}
                className="card p-6 text-center group hover:shadow-xl transition-all duration-300 group-hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {method.description}
                </p>
                <p className="text-sm font-medium text-secondary-600">
                  {method.contact}
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* Office hours */}
        <div className="mt-16">
          <div className="glass p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/30 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Office Hours</h4>
                  <p className="text-sm text-gray-600">Mon-Fri: 9AM-6PM PST</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-primary-500 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Location</h4>
                  <p className="text-sm text-gray-600">San Francisco, CA</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Response Time</h4>
                  <p className="text-sm text-gray-600">Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

