import AboutHero from '@/components/AboutHero'
import OurStory from '@/components/OurStory'
import Team from '@/components/Team'
import Values from '@/components/Values'
import Timeline from '@/components/Timeline'
import AboutCTA from '@/components/AboutCTA'

export const metadata = {
  title: 'About Us',
  description: 'Learn about Future Brand\'s mission to revolutionize digital branding through AI-powered design and innovative technology.',
  openGraph: {
    title: 'About Future Brand - AI-Powered Innovation',
    description: 'Discover our story, values, and the passionate team behind the future of digital branding.',
  },
}

export default function AboutPage() {
  return (
    <>
      {/* About Hero Section */}
      <AboutHero />
      
      {/* Our Story Section */}
      <OurStory />
      
      {/* Values Section */}
      <Values />
      
      {/* Timeline Section */}
      <Timeline />
      
      {/* Team Section */}
      <Team />
      
      {/* Call to Action Section */}
      <AboutCTA />
    </>
  )
}
