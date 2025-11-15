'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const faqs = [
    {
      question: 'What makes Future Brand different from other design agencies?',
      answer: 'Future Brand combines cutting-edge AI technology with human creativity to deliver exceptional results at scale. Our AI-powered tools help us work faster and more efficiently while maintaining the highest quality standards. We also offer comprehensive solutions beyond just design, including development, marketing, and analytics.'
    },
    {
      question: 'How does your AI-powered design process work?',
      answer: 'Our AI system analyzes your brand requirements, target audience, and industry trends to generate initial design concepts. Our human designers then refine and customize these concepts to create unique, brand-specific solutions. This hybrid approach ensures both efficiency and creativity.'
    },
    {
      question: 'What types of projects do you work on?',
      answer: 'We work on a wide range of projects including brand identity design, website development, mobile apps, digital marketing campaigns, e-commerce solutions, and enterprise software. Our team has experience across various industries from startups to Fortune 500 companies.'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary depending on scope and complexity. A simple brand identity project typically takes 2-4 weeks, while a comprehensive website development project can take 6-12 weeks. We provide detailed timelines during the project planning phase and keep you updated throughout the process.'
    },
    {
      question: 'Do you work with clients outside the US?',
      answer: 'Yes, we work with clients worldwide. Our team is distributed across multiple time zones, and we have experience working with international clients. We can accommodate different time zones and cultural considerations to ensure smooth collaboration.'
    },
    {
      question: 'What is your pricing structure?',
      answer: 'We offer flexible pricing options including fixed-price projects, retainer agreements, and subscription-based services. Pricing depends on project scope, timeline, and specific requirements. We provide detailed proposals with transparent pricing before starting any project.'
    },
    {
      question: 'Do you provide ongoing support after project completion?',
      answer: 'Yes, we offer various support packages including maintenance, updates, and optimization services. We also provide training for your team to manage and update the solutions we create. Our goal is to ensure long-term success for your brand.'
    },
    {
      question: 'How do you ensure the security of our data?',
      answer: 'We take data security seriously and implement industry-standard security measures including encryption, secure file transfer, and regular security audits. We are SOC 2 compliant and follow GDPR guidelines. All team members sign confidentiality agreements.'
    },
    {
      question: 'Can you help with existing brand assets?',
      answer: 'Absolutely! We can work with your existing brand assets, improve them, or create new ones that complement your current brand. We can also help you develop comprehensive brand guidelines to ensure consistency across all touchpoints.'
    },
    {
      question: 'What if I\'m not satisfied with the results?',
      answer: 'We stand behind our work and offer unlimited revisions during the project phase. If you\'re not satisfied with the final results, we\'ll work with you to make it right. We have a 100% client satisfaction rate and are committed to delivering exceptional results.'
    }
  ]

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    )
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-6">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-secondary-500 to-accent-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our services, process, and how we can help transform your brand.
          </p>
        </div>

        {/* FAQ items */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="card overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </div>
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="glass p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/30 max-w-4xl mx-auto">
            <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Our team is here to help. Contact us for personalized answers to your specific questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Contact Us
              </button>
              <button className="btn-glass">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

