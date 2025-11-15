'use client'

import { useState } from 'react'
import { Check, Star, Zap, Crown } from 'lucide-react'

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for individuals and small teams getting started',
      price: { monthly: 29, annual: 290 },
      icon: Zap,
      color: 'from-blue-500 to-blue-600',
      features: [
        'AI Design Studio access',
        'Up to 10 projects',
        'Basic templates',
        'Email support',
        '5GB storage',
        'Standard analytics'
      ],
      limitations: [
        'Limited AI generations',
        'Basic customization',
        'Standard support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses and creative agencies',
      price: { monthly: 79, annual: 790 },
      icon: Star,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Everything in Starter',
        'Unlimited projects',
        'Premium templates',
        'Priority support',
        '50GB storage',
        'Advanced analytics',
        'Team collaboration',
        'Custom branding',
        'API access'
      ],
      limitations: [
        'Limited team members',
        'Standard integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with advanced needs',
      price: { monthly: 199, annual: 1990 },
      icon: Crown,
      color: 'from-orange-500 to-red-500',
      features: [
        'Everything in Professional',
        'Unlimited everything',
        'Custom integrations',
        'Dedicated support',
        'Unlimited storage',
        'Custom analytics',
        'White-label options',
        'Advanced security',
        'SLA guarantee',
        'Custom training'
      ],
      limitations: [],
      popular: false
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-6">
            Simple, Transparent{' '}
            <span className="bg-gradient-to-r from-secondary-500 to-accent-500 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Choose the plan that fits your needs. All plans include our core AI-powered features with no hidden fees.
          </p>

          {/* Billing toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                isAnnual ? 'bg-gradient-to-r from-secondary-500 to-accent-500' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual
            </span>
            {isAnnual && (
              <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                Save 20%
              </span>
            )}
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative ${
                plan.popular ? 'scale-105' : ''
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="px-4 py-2 bg-gradient-to-r from-secondary-500 to-accent-500 text-white text-sm font-semibold rounded-full shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className={`card h-full p-8 ${
                plan.popular 
                  ? 'ring-2 ring-secondary-500 shadow-xl' 
                  : 'hover:shadow-xl'
              } transition-all duration-300`}>
                {/* Plan header */}
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-gray-900">
                        ${isAnnual ? plan.price.annual : plan.price.monthly}
                      </span>
                      <span className="text-gray-500 ml-2">
                        /{isAnnual ? 'year' : 'month'}
                      </span>
                    </div>
                    {isAnnual && (
                      <div className="text-sm text-green-600 font-medium mt-2">
                        Save ${(plan.price.monthly * 12) - plan.price.annual}/year
                      </div>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA button */}
                <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-secondary-500 to-accent-500 text-white hover:shadow-lg hover:scale-105'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </button>

                {/* Limitations */}
                {plan.limitations.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="text-sm text-gray-500">
                      <div className="font-medium mb-2">Limitations:</div>
                      <ul className="space-y-1">
                        {plan.limitations.map((limitation, limitationIndex) => (
                          <li key={limitationIndex} className="flex items-center space-x-2">
                            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                            <span>{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="glass p-8 rounded-3xl bg-gradient-to-br from-secondary-50 to-accent-50 max-w-4xl mx-auto">
            <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              We offer custom pricing for large organizations with specific requirements. 
              Contact our sales team to discuss your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Contact Sales
              </button>
              <button className="btn-glass">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>

        {/* FAQ section */}
        <div className="mt-16">
          <h3 className="text-2xl font-heading font-semibold text-center text-gray-900 mb-8">
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Can I change plans anytime?</h4>
              <p className="text-gray-600 text-sm">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Is there a free trial?</h4>
              <p className="text-gray-600 text-sm">Yes, all plans come with a 14-day free trial. No credit card required.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">What payment methods do you accept?</h4>
              <p className="text-gray-600 text-sm">We accept all major credit cards, PayPal, and bank transfers for annual plans.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Do you offer refunds?</h4>
              <p className="text-gray-600 text-sm">Yes, we offer a 30-day money-back guarantee on all plans.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

