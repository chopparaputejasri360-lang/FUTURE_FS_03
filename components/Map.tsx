'use client'

import { MapPin, Navigation, Clock, Phone } from 'lucide-react'

export default function Map() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-6">
            Find Us on the{' '}
            <span className="bg-gradient-to-r from-secondary-500 to-accent-500 bg-clip-text text-transparent">
              Map
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Visit our office in the heart of San Francisco's innovation district. 
            We're easily accessible by public transportation and have parking available.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map placeholder */}
          <div className="lg:col-span-2">
            <div className="card p-0 overflow-hidden rounded-3xl">
              {/* Map placeholder - in a real app, you'd integrate Google Maps or similar */}
              <div className="relative h-96 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Interactive Map
                  </h3>
                  <p className="text-gray-600">
                    Google Maps integration would go here
                  </p>
                </div>
                
                {/* Map overlay elements */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700">You are here</span>
                  </div>
                </div>
                
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700">Future Brand Office</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Location details */}
          <div className="space-y-6">
            {/* Address card */}
            <div className="card p-6">
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">
                    Our Address
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    123 Innovation Street<br />
                    San Francisco, CA 94105<br />
                    United States
                  </p>
                </div>
              </div>
              
              <button className="w-full btn-secondary flex items-center justify-center space-x-2">
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </button>
            </div>

            {/* Hours card */}
            <div className="card p-6">
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-primary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">
                    Office Hours
                  </h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact card */}
            <div className="card p-6">
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">
                    Contact Info
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>
                      <span className="font-medium">Main:</span> +1 (555) 123-4567
                    </div>
                    <div>
                      <span className="font-medium">Support:</span> +1 (555) 123-4568
                    </div>
                    <div>
                      <span className="font-medium">Email:</span> hello@futurebrand.com
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Transportation info */}
            <div className="card p-6">
              <h3 className="text-lg font-heading font-semibold text-gray-900 mb-4">
                Getting Here
              </h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>5 min walk from Montgomery BART Station</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Multiple bus lines stop nearby</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Street parking available</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Bike racks on-site</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

