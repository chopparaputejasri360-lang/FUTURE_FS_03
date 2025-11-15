'use client'

import { Mail, Phone, MapPin, Clock, MessageCircle, Calendar, Users, Award } from 'lucide-react'

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us a detailed message about your project',
      primary: 'hello@futurebrand.com',
      secondary: 'support@futurebrand.com',
      action: 'mailto:hello@futurebrand.com',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our team',
      primary: '+1 (555) 123-4567',
      secondary: 'Mon-Fri: 9AM-6PM PST',
      action: 'tel:+15551234567',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Come see us at our office',
      primary: '123 Innovation Street',
      secondary: 'San Francisco, CA 94105',
      action: 'https://maps.google.com',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant support',
      primary: 'Available 24/7',
      secondary: 'Average response: 2 minutes',
      action: '#',
      color: 'from-orange-500 to-orange-600'
    }
  ]

  const stats = [
    { icon: Users, value: '1000+', label: 'Happy Clients' },
    { icon: Award, value: '25+', label: 'Awards Won' },
    { icon: Clock, value: '24h', label: 'Response Time' },
    { icon: Calendar, value: '5+', label: 'Years Experience' }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-6">
            Get In Touch{' '}
            <span className="bg-gradient-to-r from-secondary-500 to-accent-500 bg-clip-text text-transparent">
              With Our Team
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're here to help you succeed. Choose the communication method that works best for you.
          </p>
        </div>

        {/* Contact methods grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactDetails.map((contact, index) => (
            <a
              key={index}
              href={contact.action}
              target={contact.action.startsWith('http') ? '_blank' : undefined}
              rel={contact.action.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group"
            >
              <div className="card h-full p-6 text-center hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className={`w-16 h-16 bg-gradient-to-br ${contact.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <contact.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">
                  {contact.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {contact.description}
                </p>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-secondary-600">
                    {contact.primary}
                  </p>
                  <p className="text-xs text-gray-500">
                    {contact.secondary}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Stats section */}
        <div className="mb-16">
          <div className="glass p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/30">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-heading font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Office information */}
          <div className="card p-8">
            <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-6">
              Our Office
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-6 h-6 text-secondary-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Address</h4>
                  <p className="text-gray-600">
                    123 Innovation Street<br />
                    San Francisco, CA 94105<br />
                    United States
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-6 h-6 text-secondary-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Office Hours</h4>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                    Saturday: 10:00 AM - 4:00 PM PST<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="w-6 h-6 text-secondary-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-600">
                    Main: +1 (555) 123-4567<br />
                    Support: +1 (555) 123-4568<br />
                    Sales: +1 (555) 123-4569
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Response time information */}
          <div className="card p-8">
            <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-6">
              Response Times
            </h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="font-medium text-gray-900">Email</span>
                </div>
                <span className="text-sm text-gray-600">Within 24 hours</span>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="font-medium text-gray-900">Phone</span>
                </div>
                <span className="text-sm text-gray-600">Immediate</span>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="font-medium text-gray-900">Live Chat</span>
                </div>
                <span className="text-sm text-gray-600">2 minutes average</span>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="font-medium text-gray-900">Project Quote</span>
                </div>
                <span className="text-sm text-gray-600">48 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

