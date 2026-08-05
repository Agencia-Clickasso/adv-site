import type { LucideIcon } from "lucide-react"
import {
  Building2,
  CheckCircle2,
  ClipboardList,
  HeartPulse,
  MessageCircle,
  Scale,
  ShieldCheck,
  Stethoscope,
  UserRound,
} from "lucide-react"

export type ClinicsContentCard = {
  icon: LucideIcon
  title: string
  description: string
}

export type ClinicsRelatedArticle = {
  title: string
  href: string
}

export type ClinicsFaqItem = {
  question: string
  answer: string
}

export const CLINICS_WHATSAPP_HREF =
  "https://api.whatsapp.com/send?phone=5511967586911&text=" +
  encodeURIComponent("Olá, tenho uma clínica e gostaria de solicitar uma análise tributária.")

export const CLINICS_RELATED_ARTICLES: ClinicsRelatedArticle[] = [
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

export const CLINICS_SERVICES: ClinicsContentCard[] = [
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

export const CLINICS_DIFFERENTIATORS: ClinicsContentCard[] = [
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

export const CLINICS_AUDIENCES: ClinicsContentCard[] = [
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

export const CLINICS_FAQ_ITEMS: ClinicsFaqItem[] = [
  {
    question: "Para quais clínicas a assessoria faz sentido?",
    answer:
      "Clínicas médicas, odontológicas, centros de diagnóstico e operações multidisciplinares que precisam revisar regime, estrutura, carga ou oportunidades de crédito com base jurídica.",
  },
  {
    question: "O que acontece na primeira análise?",
    answer:
      "A análise parte da operação real da clínica: regime tributário, estrutura societária, obrigações e documentos fiscais relevantes, para identificar riscos e caminhos cabíveis.",
  },
  {
    question: "Há promessa de valor recuperado?",
    answer:
      "Não. A recuperação de créditos só é avaliada quando existem fundamentos legais e documentação adequada. O trabalho começa com diagnóstico técnico.",
  },
  {
    question: "O atendimento é só no ABC?",
    answer:
      "A base está em São Bernardo do Campo, com atendimento a clínicas do ABC, de São Paulo e de outras regiões do Brasil, conforme o caso.",
  },
]

export const CLINICS_HERO_CHIPS = [
  { label: "Foco", value: "Clínicas de saúde" },
  { label: "Atuação", value: "Diagnóstico ao contencioso" },
  { label: "Atendimento", value: "Direto pela advogada" },
] as const
