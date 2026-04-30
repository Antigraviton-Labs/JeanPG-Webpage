import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import RippleTrail from './components/RippleTrail'
import StaggeredMenu from './components/StaggeredMenu'
import CollectionOverlay from './components/CollectionOverlay'
import BrandManifesto from './components/BrandManifesto'
import Experiences from './components/Experiences'
import FragranceNotes from './components/FragranceNotes'
import Testimonials from './components/Testimonials'
import Shop from './components/Shop'
import Atelier from './components/Atelier'
import ConsultationForm from './components/ConsultationForm'
import Faq from './components/Faq'
import PressStrip from './components/PressStrip'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'
import Blog from './components/Blog'
import FamiliesPage from './components/FamiliesPage'
import ShopPage from './components/ShopPage'
import AboutPage from './components/AboutPage'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [collectionOpen, setCollectionOpen] = useState(false)
  const [blogOpen, setBlogOpen] = useState(false)
  const [familiesOpen, setFamiliesOpen] = useState(false)
  const [shopOpen, setShopOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(prev => !prev)

  return (
    <>
      <Header
        menuOpen={menuOpen}
        onBlogOpen={() => setBlogOpen(true)}
        onCollectionOpen={() => setCollectionOpen(true)}
        onFamiliesOpen={() => setFamiliesOpen(true)}
        onShopOpen={() => setShopOpen(true)}
        onAboutOpen={() => setAboutOpen(true)}
      />
      <Hero collectionOpen={collectionOpen} menuOpen={menuOpen} />
      <RippleTrail />
      <StaggeredMenu
        isOpen={menuOpen}
        onToggle={toggleMenu}
        onCollectionOpen={() => { setCollectionOpen(true); setMenuOpen(false) }}
      />
      <CollectionOverlay isOpen={collectionOpen} onClose={() => setCollectionOpen(false)} />

      <div style={{ position: 'relative', zIndex: 25 }}>
        <div style={{ height: '100vh' }} />
        <div style={{ backgroundColor: 'var(--bg-base)' }}>
          <BrandManifesto />
          <Experiences />
          <FragranceNotes />
          <Testimonials />
          <Shop />
          <Atelier />
          <ConsultationForm />
          <Faq />
          <PressStrip />
          <Footer />
        </div>
      </div>

      <CookieConsent />
      <Blog isOpen={blogOpen} onClose={() => setBlogOpen(false)} />
      <FamiliesPage isOpen={familiesOpen} onClose={() => setFamiliesOpen(false)} />
      <ShopPage isOpen={shopOpen} onClose={() => setShopOpen(false)} />
      <AboutPage isOpen={aboutOpen} onClose={() => setAboutOpen(false)} />
    </>
  )
}
