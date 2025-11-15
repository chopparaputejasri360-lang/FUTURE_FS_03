'use client'

import { Heart, Shield, Lightbulb, Users, Globe, Zap } from 'lucide-react'

export default function Values() {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible, embracing new technologies and creative approaches to solve complex challenges.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Human + AI Collaboration',
      description: 'We believe in the perfect harmony between human creativity and artificial intelligence, leveraging both to create exceptional results.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'We are committed to sustainable practices and creating solutions that have a positive impact on our planet and future generations.',
      color: 'from-purple-500 to-violet-500'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-6">
            Our Core{' '}
            <span className="bg-gradient-to-r from-secondary-500 to-accent-500 bg-clip-text text-transparent">
              Values
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            These fundamental principles guide our decisions, shape our culture, and drive our commitment to delivering exceptional results.
          </p>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card h-full p-8 text-center hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                {/* Icon */}
                <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <value.icon className="w-10 h-10 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Values statement */}
        <div className="mt-16 text-center">
          <div className="glass p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/30 max-w-4xl mx-auto">
            <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-6">
              Living Our Values Every Day
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Our values aren't just words on a wall—they're the foundation of how we work, 
              how we treat each other, and how we serve our clients. They guide every decision 
              we make and every project we undertake.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-full"
                >
                  <div className={`w-3 h-3 bg-gradient-to-br ${value.color} rounded-full`}></div>
                  <span className="text-sm font-medium text-gray-700">{value.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
