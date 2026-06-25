import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ClientLogos from '@/components/ClientLogos'
import Solutions from '@/components/Solutions'
import Technology from '@/components/Technology'
import Pricing from '@/components/Pricing'
import Blog from '@/components/Blog'
import About from '@/components/About'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ClientLogos />
        <Solutions />
        <Technology />
        <Pricing />
        <Blog />
        <About />
      </main>
      <Footer />
    </>
  )
}
