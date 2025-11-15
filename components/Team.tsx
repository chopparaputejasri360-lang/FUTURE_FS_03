'use client'

import { Linkedin, Twitter, Github, Mail } from 'lucide-react'

export default function Team() {
  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Co-Founder',
      bio: 'Visionary leader with 15+ years in design and technology. Passionate about AI-human collaboration.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      social: {
        linkedin: 'https://linkedin.com/in/sarahchen',
        twitter: 'https://twitter.com/sarahchen',
        email: 'sarah@futurebrand.com'
      },
      expertise: ['Strategic Leadership', 'AI Innovation', 'Design Thinking']
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO & Co-Founder',
      bio: 'Tech innovator specializing in AI and machine learning. Former Google engineer with a passion for creative technology.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      social: {
        linkedin: 'https://linkedin.com/in/michaelrodriguez',
        github: 'https://github.com/michaelrodriguez',
        email: 'michael@futurebrand.com'
      },
      expertise: ['AI/ML Engineering', 'System Architecture', 'Product Development']
    },
    {
      name: 'Emily Johnson',
      role: 'Head of Design',
      bio: 'Award-winning designer with expertise in brand identity and user experience. Believes in the power of design to transform businesses.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      social: {
        linkedin: 'https://linkedin.com/in/emilyjohnson',
        twitter: 'https://twitter.com/emilyjohnson',
        email: 'emily@futurebrand.com'
      },
      expertise: ['Brand Design', 'UX/UI Design', 'Creative Direction']
    },
    {
      name: 'David Kim',
      role: 'Lead AI Engineer',
      bio: 'AI researcher and engineer focused on creative applications of machine learning. PhD in Computer Science from Stanford.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      social: {
        linkedin: 'https://linkedin.com/in/davidkim',
        github: 'https://github.com/davidkim',
        email: 'david@futurebrand.com'
      },
      expertise: ['Machine Learning', 'Computer Vision', 'Neural Networks']
    },
    {
      name: 'Lisa Wang',
      role: 'Head of Marketing',
      bio: 'Marketing strategist with expertise in digital transformation and brand growth. Former VP at leading tech companies.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face',
      social: {
        linkedin: 'https://linkedin.com/in/lisawang',
        twitter: 'https://twitter.com/lisawang',
        email: 'lisa@futurebrand.com'
      },
      expertise: ['Digital Marketing', 'Brand Strategy', 'Growth Hacking']
    },
    {
      name: 'Alex Thompson',
      role: 'Head of Operations',
      bio: 'Operations expert with a focus on scaling businesses and building high-performing teams. Former McKinsey consultant.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
      social: {
        linkedin: 'https://linkedin.com/in/alexthompson',
        email: 'alex@futurebrand.com'
      },
      expertise: ['Operations', 'Team Building', 'Strategic Planning']
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-6">
            Meet Our Amazing{' '}
            <span className="bg-gradient-to-r from-secondary-500 to-accent-500 bg-clip-text text-transparent">
              Team
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're a diverse group of passionate individuals united by our shared vision of transforming 
            the future of design through AI innovation and human creativity.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card p-6 text-center hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                {/* Profile image */}
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>

                {/* Name and role */}
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-secondary-600 font-medium mb-4">
                  {member.role}
                </p>

                {/* Bio */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>

                {/* Expertise tags */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Social links */}
                <div className="flex justify-center space-x-3">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors duration-300"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors duration-300"
                      aria-label={`${member.name}'s Twitter`}
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors duration-300"
                      aria-label={`${member.name}'s GitHub`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.email && (
                    <a
                      href={`mailto:${member.social.email}`}
                      className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors duration-300"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team culture section */}
        <div className="text-center">
          <div className="glass p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/30 max-w-4xl mx-auto">
            <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-6">
              Our Culture & Values
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We believe that great products come from great teams. Our culture is built on collaboration, 
              innovation, and a shared passion for creating exceptional digital experiences.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Collaborative</h4>
                <p className="text-sm text-gray-600">We work together as one team</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Innovative</h4>
                <p className="text-sm text-gray-600">We embrace new ideas and technologies</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Passionate</h4>
                <p className="text-sm text-gray-600">We love what we do</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

