'use client'

import { useState } from 'react'
import { Send, CheckCircle, AlertCircle, User, Mail, Phone, Building, MessageSquare } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const projectTypes = [
    'Brand Identity Design',
    'Website Development',
    'Mobile App Development',
    'Digital Marketing',
    'E-commerce Solution',
    'Enterprise Software',
    'Other'
  ]

  const budgetRanges = [
    'Under $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    'Over $100,000',
    'Not sure yet'
  ]

  const timelineOptions = [
    'ASAP',
    'Within 1 month',
    '1-3 months',
    '3-6 months',
    '6+ months',
    'Flexible'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Here you would typically send the data to your backend/Firebase
      console.log('Form submitted:', formData)
      
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">
              Tell Us About Your{' '}
              <span className="bg-gradient-to-r from-secondary-500 to-accent-500 bg-clip-text text-transparent">
                Project
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Fill out the form below and we'll get back to you within 24 hours with a personalized proposal.
            </p>
          </div>

          {/* Contact form */}
          <div className="card p-8 md:p-12 rounded-3xl">
            {submitStatus === 'success' ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-4">
                  Thank You!
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  Your message has been sent successfully. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="btn-primary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      <Building className="w-4 h-4 inline mr-2" />
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select timeline</option>
                      {timelineOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    <MessageSquare className="w-4 h-4 inline mr-2" />
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                  />
                </div>

                {/* Submit button */}
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary flex items-center space-x-2 mx-auto disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  {submitStatus === 'error' && (
                    <div className="mt-4 flex items-center justify-center space-x-2 text-red-600">
                      <AlertCircle className="w-5 h-5" />
                      <span>Something went wrong. Please try again.</span>
                    </div>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

