import ContactHero from '@/components/ContactHero'
import ContactForm from '@/components/ContactForm'
import ContactInfo from '@/components/ContactInfo'
import Map from '@/components/Map'

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Future Brand to discuss your project needs. We\'re here to help transform your digital presence with AI-powered solutions.',
  openGraph: {
    title: 'Contact Future Brand - Let\'s Work Together',
    description: 'Ready to transform your brand? Contact our team to discuss your project and discover how we can help.',
  },
}

export default function ContactPage() {
  return (
    <>
      {/* Contact Hero Section */}
      <ContactHero />
      
      {/* Contact Form Section */}
      <ContactForm />
      
      {/* Contact Info Section */}
      <ContactInfo />
      
      {/* Map Section */}
      <Map />
    </>
  )
}

