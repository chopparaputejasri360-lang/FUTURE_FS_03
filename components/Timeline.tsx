'use client'

import { Calendar, Rocket, Users, Award, Globe, Zap } from 'lucide-react'

export default function Timeline() {
  const milestones = [
    {
      year: '2019',
      title: 'The Beginning',
      description: 'Future Brand was founded by a team of passionate designers and engineers who saw the potential of AI in creative work.',
      icon: Rocket,
      color: 'from-blue-500 to-blue-600',
      achievements: ['Company founded', 'First AI prototype', 'Initial team of 5']
    },
    {
      year: '2020',
      title: 'First Breakthrough',
      description: 'We launched our first AI-powered design platform and completed our first 50 projects, proving the concept works.',
      icon: Zap,
      color: 'from-purple-500 to-purple-600',
      achievements: ['Platform launch', '50 projects completed', 'Series A funding']
    },
    {
      year: '2021',
      title: 'Rapid Growth',
      description: 'Expanded our team and reached 100+ successful projects, establishing ourselves as a leader in AI design.',
      icon: Users,
      color: 'from-green-500 to-green-600',
      achievements: ['100+ projects', 'Team expansion', 'International clients']
    },
    {
      year: '2022',
      title: 'Global Expansion',
      description: 'Opened offices in multiple countries and reached 500+ projects, serving clients across 30+ countries.',
      icon: Globe,
      color: 'from-orange-500 to-orange-600',
      achievements: ['Global expansion', '500+ projects', '30+ countries served']
    },
    {
      year: '2023',
      title: 'Industry Recognition',
      description: 'Won multiple industry awards and reached 1000+ projects, solidifying our position as an industry leader.',
      icon: Award,
      color: 'from-red-500 to-red-600',
      achievements: ['1000+ projects', 'Industry awards', '50+ team members']
    },
    {
      year: '2024',
      title: 'Future Vision',
      description: 'Continuing to innovate and lead the industry with cutting-edge AI technology and exceptional design solutions.',
      icon: Calendar,
      color: 'from-cyan-500 to-cyan-600',
      achievements: ['AI innovation', 'New partnerships', 'Expanded services']
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-6">
            Our Journey Through{' '}
            <span className="bg-gradient-to-r from-secondary-500 to-accent-500 bg-clip-text text-transparent">
              Time
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From a small startup with big dreams to an industry-leading company, here's how we've grown and evolved over the years.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-secondary-500 to-accent-500 rounded-full"></div>

          {/* Timeline items */}
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white border-4 border-secondary-500 rounded-full flex items-center justify-center z-10 shadow-lg">
                  <milestone.icon className="w-8 h-8 text-secondary-500" />
                </div>

                {/* Content card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="card p-6 hover:shadow-xl transition-all duration-300">
                    {/* Year */}
                    <div className={`inline-block px-4 py-2 bg-gradient-to-r ${milestone.color} text-white text-sm font-semibold rounded-full mb-4`}>
                      {milestone.year}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                      {milestone.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {milestone.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      {milestone.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-center space-x-2">
                          <div className={`w-2 h-2 bg-gradient-to-r ${milestone.color} rounded-full`}></div>
                          <span className="text-sm text-gray-600">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future vision */}
        <div className="mt-16 text-center">
          <div className="glass p-8 rounded-3xl bg-gradient-to-br from-secondary-50 to-accent-50 max-w-4xl mx-auto">
            <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-4">
              The Future is Bright
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              As we look ahead, we're excited about the possibilities that AI and emerging technologies 
              will bring to the world of design and branding. Our journey is far from over, and we're 
              committed to continuing to innovate and lead the industry forward.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

