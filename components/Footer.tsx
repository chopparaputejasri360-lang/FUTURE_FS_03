import Link from 'next/link'
import { Sparkles, Mail, Phone, MapPin, Github, Twitter, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  // Footer navigation sections
  const footerSections = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/about#team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Press', href: '/press' },
      ]
    },
    {
      title: 'Products',
      links: [
        { name: 'AI Design', href: '/products#ai-design' },
        { name: 'Branding', href: '/products#branding' },
        { name: 'Web Development', href: '/products#web-dev' },
        { name: 'Consulting', href: '/products#consulting' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '/blog' },
        { name: 'Documentation', href: '/docs' },
        { name: 'Help Center', href: '/help' },
        { name: 'Community', href: '/community' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
        { name: 'GDPR', href: '/gdpr' },
      ]
    }
  ]

  // Social media links
  const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com/futurebrand', icon: Twitter },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/futurebrand', icon: Linkedin },
    { name: 'GitHub', href: 'https://github.com/futurebrand', icon: Github },
    { name: 'Instagram', href: 'https://instagram.com/futurebrand', icon: Instagram },
  ]

  // Contact information
  const contactInfo = [
    { icon: Mail, text: 'hello@futurebrand.com', href: 'mailto:hello@futurebrand.com' },
    { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: MapPin, text: 'San Francisco, CA', href: '#' },
  ]

  return (
    <footer className="bg-gradient-to-br from-primary-950 to-secondary-900 text-white">
      {/* Main footer content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent-400 rounded-full animate-pulse"></div>
              </div>
              <span className="text-2xl font-heading font-bold group-hover:text-secondary-400 transition-colors duration-300">
                Future Brand
              </span>
            </Link>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Redefining the future of branding with AI-powered design, innovative technology, 
              and cutting-edge aesthetics. We create digital experiences that inspire and transform.
            </p>

            {/* Contact information */}
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center space-x-3 text-gray-300 hover:text-secondary-400 transition-colors duration-300 group"
                >
                  <contact.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>{contact.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-heading font-semibold mb-4 text-white">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-secondary-400 transition-colors duration-300 group flex items-center"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter signup */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="max-w-md">
            <h3 className="text-xl font-heading font-semibold mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-300 mb-6">
              Get the latest updates on AI-powered design trends and innovative branding solutions.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-300"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-secondary-500 text-white rounded-lg font-medium hover:bg-secondary-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 focus:ring-offset-primary-950"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="border-t border-gray-700">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} Future Brand. All rights reserved. Built with ❤️ and AI.
            </div>

            {/* Social media links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-300 group"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-secondary-500 via-accent-500 to-secondary-500"></div>
    </footer>
  )
}

