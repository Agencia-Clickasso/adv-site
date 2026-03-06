"use client"

import type React from "react"

import { useState } from "react"
import { AlertCircle, CheckCircle, Clock, Mail, MapPin, Phone, Send, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { blogSerif } from "@/lib/blog-design"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const form = e.target as HTMLFormElement
      const formDataObj = new FormData(form)

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formDataObj as any).toString(),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const inputClassName =
    "h-12 rounded-2xl border-custom-text-primary/18 bg-custom-bg-primary/45 text-custom-text-secondary placeholder:text-custom-text-primary/48 focus-visible:ring-custom-text-primary/25"

  return (
    <section id="contact" className="relative py-18 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="home-paper rounded-[2rem] p-5 text-slate-900 shadow-[0_32px_120px_rgba(0,0,0,0.22)] sm:rounded-[2.2rem] sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div className="space-y-6 sm:space-y-8">
                <div className="section-kicker text-[#7f5b39]">
                  <Sparkles className="h-3.5 w-3.5" />
                  Contato direto
                </div>

                <div>
                  <h2
                    className={`${blogSerif.className} max-w-3xl text-[2.9rem] leading-[0.98] tracking-[-0.03em] text-slate-950 sm:text-5xl lg:text-6xl`}
                  >
                    Fale sobre seu caso com clareza.
                  </h2>
                  <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-slate-700 sm:mt-5 sm:text-base sm:leading-8">
                    Se houver cobrança, execução fiscal, autuação ou uma decisão empresarial com impacto tributário,
                    descreva isso logo no primeiro contato.
                  </p>
                </div>

                <div className="grid gap-4">
                  {[
                    {
                      icon: MapPin,
                      title: "Endereço",
                      body: "Rua José Versolato, nº 111, BL B - 11° andar – Cj. 1101\nCentro - São Bernardo do Campo - SP\nCEP: 09750-730",
                    },
                    {
                      icon: Phone,
                      title: "Telefone",
                      body: "(11) 96758-6911",
                    },
                    {
                      icon: Mail,
                      title: "E-mail",
                      body: "contato@lucimeirexavieradvocacia.adv.br",
                    },
                    {
                      icon: Clock,
                      title: "Atendimento",
                      body: "Segunda a Sexta: 8h às 18h\nSábado: 8h às 12h",
                    },
                  ].map((item) => (
                    <div key={item.title} className="rounded-[1.35rem] border border-[#dcc3a4] bg-white/65 p-4 sm:rounded-[1.5rem] sm:p-5">
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#ecd5ba] text-[#7f5b39]">
                          <item.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">{item.title}</p>
                          <p className="mt-1 whitespace-pre-line text-sm leading-7 text-slate-700">{item.body}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.8rem] bg-[#161c25] p-5 text-custom-text-secondary shadow-[0_24px_80px_rgba(0,0,0,0.28)] sm:rounded-[2rem] sm:p-8">
                <div className="mb-6 border-b border-custom-text-primary/10 pb-6">
                  <p className="text-xs uppercase tracking-[0.24em] text-custom-text-primary/62">Formulário de triagem</p>
                  <h3 className={`${blogSerif.className} mt-3 text-3xl sm:text-4xl`}>Solicitar atendimento</h3>
                  <p className="mt-3 text-sm leading-7 text-custom-text-primary/76">
                    Resuma a demanda, a urgência e o ponto principal que precisa ser analisado.
                  </p>
                </div>

                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="hidden">
                    <input name="bot-field" />
                  </div>

                  {submitStatus === "success" && (
                    <div className="flex items-center gap-3 rounded-2xl border border-green-400/25 bg-green-500/12 p-4 text-green-300">
                      <CheckCircle className="h-5 w-5" />
                      <span>Mensagem enviada com sucesso. O retorno será feito em breve.</span>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="flex items-center gap-3 rounded-2xl border border-red-400/25 bg-red-500/12 p-4 text-red-300">
                      <AlertCircle className="h-5 w-5" />
                      <span>Erro ao enviar a mensagem. Tente novamente ou use o contato direto.</span>
                    </div>
                  )}

                  <div className="grid gap-4 md:grid-cols-2">
                    <Input
                      name="name"
                      placeholder="Nome completo"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className={inputClassName}
                    />
                    <Input
                      name="email"
                      type="email"
                      placeholder="E-mail"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className={inputClassName}
                    />
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <Input
                      name="phone"
                      placeholder="Telefone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className={inputClassName}
                    />
                    <Input
                      name="subject"
                      placeholder="Assunto"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className={inputClassName}
                    />
                  </div>

                  <Textarea
                    name="message"
                    placeholder="Descreva brevemente o caso, o tipo de risco ou cobrança e o que precisa decidir."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="rounded-2xl border-custom-text-primary/18 bg-custom-bg-primary/45 text-custom-text-secondary placeholder:text-custom-text-primary/48 focus-visible:ring-custom-text-primary/25"
                  />

                  <Button
                    type="submit"
                    className="w-full rounded-full bg-custom-text-primary py-4 text-custom-bg-primary hover:bg-custom-text-secondary disabled:opacity-70"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-custom-bg-primary border-t-transparent" />
                        Enviando...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="h-5 w-5" />
                        Enviar mensagem
                      </div>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
