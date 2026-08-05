import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Header from "@/components/header"
import {
  ClinicsAudiencesSection,
  ClinicsCtaSection,
  ClinicsDifferentiatorsSection,
  ClinicsFaqSection,
  ClinicsHeroSection,
  ClinicsRelatedArticlesSection,
  ClinicsServicesSection,
} from "@/components/clinics/clinics-landing-sections"

/**
 * Landing comercial de clínicas (PPT + SEO).
 * Content: `components/clinics/clinics-landing-content.ts`
 * Sections: `components/clinics/clinics-landing-sections.tsx`
 */
export default function ClinicsLanding() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-custom-bg-primary">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="home-grid-pattern absolute inset-0" />
        <div className="home-orb absolute left-[-10rem] top-20 h-[26rem] w-[26rem]" />
        <div className="home-orb absolute right-[-8rem] top-[34rem] h-[22rem] w-[22rem]" />
      </div>

      <div className="relative">
        <Header />
        <ClinicsHeroSection />
        <ClinicsServicesSection />
        <ClinicsDifferentiatorsSection />
        <ClinicsAudiencesSection />
        <ClinicsCtaSection />
        <ClinicsRelatedArticlesSection />
        <ClinicsFaqSection />
        <Contact
          title="Vamos analisar a situação tributária da sua clínica."
          description="Conte o tipo de clínica, a cidade, o regime tributário se souber e o que você precisa decidir. A resposta começa pela triagem do caso."
          formSubject="Lead clínicas - Lucimeire Xavier Advocacia"
          messagePlaceholder="Ex.: clínica médica em São Paulo, Lucro Presumido, quero revisar a estrutura tributária..."
          ctaLocation="clinics_contact_form"
          showClinicType
          defaultSubject="Análise tributária para clínica"
        />
        <Footer />
      </div>
    </main>
  )
}
