import Link from "next/link"
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardList,
  HeartPulse,
  MessageCircle,
  Scale,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserRound,
} from "lucide-react"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Header from "@/components/header"
import TrackedLink from "@/components/tracked-link"
import { Button } from "@/components/ui/button"
import { blogSerif } from "@/lib/blog-design"
import { SEO } from "@/lib/seo"

const relatedArticles = [
  {
    title: "Planejamento tributário para clínicas médicas: o que analisar",
    href: "/blog/planejamento-tributario-para-clinicas-medicas-o-que-analisar",
  },
  {
    title: "Lucro Presumido em clínicas: quando revisar o regime",
    href: "/blog/lucro-presumido-em-clinicas-quando-revisar-o-regime",
  },
  {
    title: "Recuperação de créditos no setor de saúde: cuidados",
    href: "/blog/recuperacao-de-creditos-tributarios-setor-saude-cuidados",
  },
  {
    title: "Consultoria tributária para clínicas odontológicas",
    href: "/blog/consultoria-tributaria-para-clinicas-odontologicas",
  },
]

const WHATSAPP_CLINICS_HREF =
  "https://api.whatsapp.com/send?phone=5511967586911&text=" +
  encodeURIComponent(
    "Olá, tenho uma clínica e gostaria de solicitar uma análise tributária."
  )

const services = [
  {
    icon: ClipboardList,
    title: "Diagnóstico Jurídico Tributário",
    description:
      "Análise técnica da estrutura tributária da clínica, com parecer que identifica riscos e oportunidades de melhoria.",
  },
  {
    icon: Scale,
    title: "Planejamento Tributário",
    description:
      "Avaliação de estratégias para otimizar a carga tributária, considerando a operação e as necessidades de cada clínica.",
  },
  {
    icon: CheckCircle2,
    title: "Recuperação de Créditos Tributários",
    description:
      "Identificação e aproveitamento de créditos passíveis de recuperação, quando presentes os fundamentos jurídicos necessários.",
  },
  {
    icon: MessageCircle,
    title: "Consultoria Tributária",
    description:
      "Suporte jurídico preventivo e contínuo para decisões tributárias com mais segurança, clareza e eficiência.",
  },
]

const differentiators = [
  {
    icon: HeartPulse,
    title: "Especialização no setor da saúde",
    description:
      "Atendimento voltado a clínicas médicas e odontológicas, com atenção às particularidades tributárias do setor.",
  },
  {
    icon: Building2,
    title: "Estratégias personalizadas",
    description:
      "Cada clínica tem uma realidade única. As soluções são adaptadas ao perfil, ao regime e aos objetivos do negócio.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança jurídica",
    description:
      "Estratégias fundamentadas na legislação vigente, com foco em conformidade e proteção contra passivos tributários.",
  },
  {
    icon: UserRound,
    title: "Atendimento direto pela advogada",
    description:
      "A Dra. Lucimeire Xavier conduz pessoalmente cada caso, com comunicação direta e atenção individualizada.",
  },
]

const audiences = [
  {
    icon: Stethoscope,
    title: "Clínicas médicas",
    description:
      "Clínicas de diversas especialidades com estruturas societárias e tributárias que pedem assessoria especializada.",
  },
  {
    icon: HeartPulse,
    title: "Clínicas odontológicas",
    description:
      "Consultórios e clínicas odontológicas de todos os portes, incluindo redes e operações em expansão.",
  },
  {
    icon: Building2,
    title: "Centros médicos",
    description:
      "Centros de diagnóstico, imagem e procedimentos ambulatoriais com estrutura tributária mais complexa.",
  },
  {
    icon: ClipboardList,
    title: "Clínicas multidisciplinares",
    description:
      "Saúde integrada e demais prestadores de serviços médicos e odontológicos que buscam eficiência fiscal.",
  },
]

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

        {/* Hero — slide 1 */}
        <section className="relative overflow-hidden pt-32 text-custom-text-secondary sm:pt-36">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="space-y-7 rounded-[1.8rem] border border-custom-text-primary/14 bg-gradient-to-br from-white/8 via-white/3 to-transparent p-5 shadow-[0_28px_100px_rgba(0,0,0,0.26)] backdrop-blur-sm sm:space-y-8 sm:rounded-[2rem] sm:p-10 lg:p-12">
                <div className="section-kicker">
                  <Sparkles className="h-3.5 w-3.5" />
                  Setor da saúde
                </div>

                <div className="space-y-6">
                  <h1
                    className={`${blogSerif.className} max-w-5xl text-[2.7rem] leading-[0.97] tracking-[-0.035em] sm:text-6xl lg:text-7xl`}
                  >
                    Soluções tributárias estratégicas para clínicas médicas e odontológicas
                  </h1>
                  <p className="max-w-3xl text-base leading-7 text-custom-text-primary/88 sm:text-xl sm:leading-8">
                    A Lucimeire Xavier Advocacia Tributária analisa a estrutura tributária da clínica, identifica
                    oportunidades de planejamento, reduz riscos fiscais e desenvolve soluções jurídicas personalizadas
                    — sempre em conformidade com a legislação vigente.
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full bg-custom-text-primary px-6 text-custom-bg-primary hover:bg-custom-text-secondary sm:px-8"
                  >
                    <TrackedLink
                      href="#contact"
                      ctaLabel="Solicitar análise tributária"
                      ctaLocation="clinics_hero_primary"
                      trafficContext="lead_capture"
                    >
                      Solicitar análise tributária
                      <ArrowRight className="h-5 w-5" />
                    </TrackedLink>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="rounded-full border-custom-text-primary/30 bg-transparent px-8 text-custom-text-primary hover:bg-custom-text-primary hover:text-custom-bg-primary"
                  >
                    <TrackedLink
                      href={WHATSAPP_CLINICS_HREF}
                      target="_blank"
                      rel="noopener noreferrer"
                      ctaLabel="Falar no WhatsApp — clínicas"
                      ctaLocation="clinics_hero_whatsapp"
                      trafficContext="lead_capture"
                    >
                      Falar no WhatsApp
                    </TrackedLink>
                  </Button>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    { label: "Foco", value: "Clínicas de saúde" },
                    { label: "Atuação", value: "Diagnóstico ao contencioso" },
                    { label: "Atendimento", value: "Direto pela advogada" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[1.5rem] border border-custom-text-primary/12 bg-black/15 p-5"
                    >
                      <p className="text-xs uppercase tracking-[0.24em] text-custom-text-primary/62">{item.label}</p>
                      <p className={`${blogSerif.className} mt-3 text-2xl text-custom-text-secondary sm:text-3xl`}>
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Serviços — slide 2 */}
        <section id="servicos" className="relative py-20 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="max-w-3xl">
                <div className="section-kicker">
                  <Stethoscope className="h-3.5 w-3.5" />
                  Como podemos ajudar
                </div>
                <h2
                  className={`${blogSerif.className} mt-5 text-4xl leading-[0.98] text-custom-text-secondary sm:text-5xl`}
                >
                  Soluções jurídico-tributárias para o setor da saúde
                </h2>
                <p className="mt-5 text-base leading-8 text-custom-text-primary/84 sm:text-lg">
                  Cada serviço é estruturado de forma personalizada, com foco na segurança jurídica e na eficiência
                  fiscal da sua clínica.
                </p>
              </div>

              <div className="mt-10 grid gap-5 md:grid-cols-2">
                {services.map((service) => (
                  <article
                    key={service.title}
                    className="home-paper rounded-[1.7rem] p-6 text-slate-900 sm:p-7"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e7cfb3] text-[#7f5b39]">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <h3 className={`${blogSerif.className} mt-5 text-3xl leading-tight`}>{service.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
                      {service.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Diferenciais — slide 3 */}
        <section id="diferenciais" className="relative pb-20 sm:pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="rounded-[2rem] border border-custom-text-primary/12 bg-black/12 p-6 sm:p-10">
                <div className="max-w-3xl">
                  <p className="text-xs uppercase tracking-[0.24em] text-custom-text-primary/60">Nossos diferenciais</p>
                  <h2
                    className={`${blogSerif.className} mt-4 text-4xl leading-tight text-custom-text-secondary sm:text-5xl`}
                  >
                    Parceria estratégica para a saúde tributária da sua clínica
                  </h2>
                </div>

                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  {differentiators.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[1.5rem] border border-custom-text-primary/12 bg-black/15 p-6"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-custom-text-primary/16 text-custom-text-primary">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <h3 className={`${blogSerif.className} mt-4 text-2xl text-custom-text-secondary`}>
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-custom-text-primary/78">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quem atendemos — slide 4 */}
        <section id="quem-atendemos" className="relative pb-20 sm:pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="max-w-3xl">
                <div className="section-kicker">
                  <Building2 className="h-3.5 w-3.5" />
                  Quem atendemos
                </div>
                <h2
                  className={`${blogSerif.className} mt-5 text-4xl leading-[0.98] text-custom-text-secondary sm:text-5xl`}
                >
                  Clínicas e centros de saúde que buscam clareza fiscal
                </h2>
                <p className="mt-5 text-base leading-8 text-custom-text-primary/84 sm:text-lg">
                  Atendimento a negócios do setor da saúde — do pequeno e médio porte a centros e grupos com operação
                  mais complexa.
                </p>
              </div>

              <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {audiences.map((item) => (
                  <article
                    key={item.title}
                    className="home-panel rounded-[1.6rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-custom-text-primary/28"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-custom-text-primary/16 text-custom-text-primary">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h3 className={`${blogSerif.className} mt-4 text-2xl text-custom-text-secondary`}>{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-custom-text-primary/76">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA conversa — slide 5 */}
        <section className="relative pb-12 sm:pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <div className="home-paper rounded-[2rem] px-6 py-10 text-center text-slate-900 sm:px-10 sm:py-12">
                <p className="text-xs uppercase tracking-[0.24em] text-[#7f5b39]">Vamos conversar?</p>
                <h2 className={`${blogSerif.className} mt-4 text-4xl leading-tight sm:text-5xl`}>
                  Uma análise tributária especializada pode revelar oportunidades para a sua clínica
                </h2>
                <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-700 sm:text-lg">
                  Do planejamento e da adequação da estrutura tributária à recuperação de créditos, quando presentes os
                  requisitos legais. Cada decisão com embasamento jurídico representa menos risco e maior eficiência
                  financeira para o seu negócio.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="w-full rounded-full bg-[#1b2028] px-6 text-[#f8f0df] hover:bg-[#0f1319] sm:w-auto sm:px-8"
                  >
                    <TrackedLink
                      href="#contact"
                      ctaLabel="Solicitar análise tributária"
                      ctaLocation="clinics_mid_cta"
                      trafficContext="lead_capture"
                    >
                      Solicitar análise tributária
                      <ArrowRight className="h-4 w-4" />
                    </TrackedLink>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="w-full rounded-full border-[#b99066] bg-transparent px-6 text-[#7f5b39] hover:bg-[#1b2028] hover:text-[#f8f0df] sm:w-auto sm:px-8"
                  >
                    <TrackedLink
                      href={WHATSAPP_CLINICS_HREF}
                      target="_blank"
                      rel="noopener noreferrer"
                      ctaLabel="WhatsApp clínicas mid"
                      ctaLocation="clinics_mid_whatsapp"
                      trafficContext="lead_capture"
                    >
                      Falar no WhatsApp
                    </TrackedLink>
                  </Button>
                </div>
                <p className="mt-6 text-sm text-slate-600">
                  OAB/SP 508.937 · {SEO.phoneDisplay} · {SEO.email}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Conteúdo do cluster */}
        <section className="relative pb-12 sm:pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
              <div className="rounded-[1.8rem] border border-custom-text-primary/12 bg-white/5 p-7 sm:p-9">
                <p className="text-xs uppercase tracking-[0.24em] text-custom-text-primary/60">Leitura relacionada</p>
                <h2
                  className={`${blogSerif.className} mt-3 text-3xl leading-tight text-custom-text-secondary sm:text-4xl`}
                >
                  Conteúdo para clínicas que querem decidir com mais clareza
                </h2>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {relatedArticles.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-[1.4rem] border border-custom-text-primary/10 bg-black/10 p-5 text-sm leading-7 text-custom-text-primary/78 transition hover:border-custom-text-primary/26 hover:text-custom-text-secondary"
                    >
                      {item.title}
                      <span className="mt-2 flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-custom-text-primary/55">
                        Ler artigo
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative pb-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
              <div className="home-panel rounded-[2rem] p-7 sm:p-10">
                <h2
                  className={`${blogSerif.className} text-4xl leading-tight text-custom-text-secondary sm:text-5xl`}
                >
                  Perguntas frequentes
                </h2>
                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  {[
                    {
                      q: "Para quais clínicas a assessoria faz sentido?",
                      a: "Clínicas médicas, odontológicas, centros de diagnóstico e operações multidisciplinares que precisam revisar regime, estrutura, carga ou oportunidades de crédito com base jurídica.",
                    },
                    {
                      q: "O que acontece na primeira análise?",
                      a: "A análise parte da operação real da clínica: regime tributário, estrutura societária, obrigações e documentos fiscais relevantes, para identificar riscos e caminhos cabíveis.",
                    },
                    {
                      q: "Há promessa de valor recuperado?",
                      a: "Não. A recuperação de créditos só é avaliada quando existem fundamentos legais e documentação adequada. O trabalho começa com diagnóstico técnico.",
                    },
                    {
                      q: "O atendimento é só no ABC?",
                      a: "A base está em São Bernardo do Campo, com atendimento a clínicas do ABC, de São Paulo e de outras regiões do Brasil, conforme o caso.",
                    },
                  ].map((item) => (
                    <article
                      key={item.q}
                      className="rounded-[1.6rem] border border-custom-text-primary/12 bg-black/10 p-6"
                    >
                      <h3 className={`${blogSerif.className} text-2xl leading-tight text-custom-text-secondary`}>
                        {item.q}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-custom-text-primary/78">{item.a}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

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
