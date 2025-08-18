"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Star, Send, CheckCircle, AlertCircle } from "lucide-react"

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

      // Submit to site root; Netlify will process via detected static form
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

  return (
    <section id="contact" className="py-24 bg-custom-bg-primary text-custom-text-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(206,167,133,0.03),transparent_50%)]"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-custom-text-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced header section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-custom-text-primary/10 border border-custom-text-primary/20 rounded-full px-4 py-2 text-sm text-custom-text-primary font-medium mb-6">
              <Star className="h-4 w-4" />
              Vamos Conversar
            </div>
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              Entre em Contato
            </h2>
            <p className="text-xl text-custom-text-primary/90 max-w-4xl mx-auto leading-relaxed">
              Estamos prontos para ajudá-lo. Agende uma consulta e descubra como podemos resolver sua questão
              jurídica com excelência e dedicação.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Enhanced contact information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <Star className="h-8 w-8 text-custom-text-primary" />
                  Informações de Contato
                </h3>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="group p-6 bg-custom-bg-secondary/30 backdrop-blur-sm rounded-2xl border border-custom-text-primary/10 hover:bg-custom-bg-secondary/50 hover:border-custom-text-primary/30 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-custom-text-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-custom-text-primary/30 transition-colors duration-300">
                        <MapPin className="h-6 w-6 text-custom-text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-custom-text-secondary mb-2 text-lg">Endereço</h4>
                        <p className="text-custom-text-primary/90 leading-relaxed">
                          Rua José Versolato, nº 111, BL B - 11° andar – Cj. 1101
                          <br />
                          Centro - São Bernardo do Campo - SP
                          <br />
                          CEP: 09750-730
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="group p-6 bg-custom-bg-secondary/30 backdrop-blur-sm rounded-2xl border border-custom-text-primary/10 hover:bg-custom-bg-secondary/50 hover:border-custom-text-primary/30 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-custom-text-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-custom-text-primary/30 transition-colors duration-300">
                        <Phone className="h-6 w-6 text-custom-text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-custom-text-secondary mb-2 text-lg">Telefone</h4>
                        <p className="text-custom-text-primary/90 text-lg">
                          (11) 96758-6911
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="group p-6 bg-custom-bg-secondary/30 backdrop-blur-sm rounded-2xl border border-custom-text-primary/10 hover:bg-custom-bg-secondary/50 hover:border-custom-text-primary/30 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-custom-text-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-custom-text-primary/30 transition-colors duration-300">
                        <Mail className="h-6 w-6 text-custom-text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-custom-text-secondary mb-2 text-lg">E-mail</h4>
                        <p className="text-custom-text-primary/90 text-lg">contato@lucimeirexavieradvocacia.adv.br</p>
                      </div>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="group p-6 bg-custom-bg-secondary/30 backdrop-blur-sm rounded-2xl border border-custom-text-primary/10 hover:bg-custom-bg-secondary/50 hover:border-custom-text-primary/30 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-custom-text-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-custom-text-primary/30 transition-colors duration-300">
                        <Clock className="h-6 w-6 text-custom-text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-custom-text-secondary mb-2 text-lg">Horário de Atendimento</h4>
                        <p className="text-custom-text-primary/90 leading-relaxed">
                          Segunda a Sexta: 8h às 18h
                          <br />
                          Sábado: 8h às 12h
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced contact form */}
            <Card className="bg-custom-bg-secondary/50 backdrop-blur-sm text-custom-text-secondary border border-custom-text-primary/20 shadow-2xl">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-custom-text-primary/20 rounded-xl flex items-center justify-center">
                    <Send className="h-6 w-6 text-custom-text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Agende sua Consulta</CardTitle>
                    <CardDescription className="text-custom-text-primary/80 mt-2">
                      Preencha o formulário abaixo e entraremos em contato em até 24 horas.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <form 
                  name="contact" 
                  method="POST" 
                  data-netlify="true" 
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  {/* Hidden input for Netlify Forms */}
                  <input type="hidden" name="form-name" value="contact" />
                  
                  {/* Honeypot field to prevent spam */}
                  <div className="hidden">
                    <input name="bot-field" />
                  </div>

                  {/* Status messages */}
                  {submitStatus === "success" && (
                    <div className="p-4 bg-green-500/20 border border-green-400/30 text-green-400 rounded-xl flex items-center gap-3">
                      <CheckCircle className="h-5 w-5" />
                      <span>Mensagem enviada com sucesso! Entraremos em contato em breve.</span>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="p-4 bg-red-500/20 border border-red-400/30 text-red-400 rounded-xl flex items-center gap-3">
                      <AlertCircle className="h-5 w-5" />
                      <span>Erro ao enviar mensagem. Tente novamente ou entre em contato diretamente.</span>
                    </div>
                  )}

                  {/* Form fields with enhanced styling */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Input
                        name="name"
                        placeholder="Seu nome completo"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="bg-custom-bg-primary/50 border-custom-text-primary/20 text-custom-text-secondary placeholder:text-custom-text-primary/50 focus:border-custom-text-primary focus:ring-custom-text-primary/20 rounded-xl h-12 transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <Input
                        name="email"
                        type="email"
                        placeholder="Seu e-mail"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="bg-custom-bg-primary/50 border-custom-text-primary/20 text-custom-text-secondary placeholder:text-custom-text-primary/50 focus:border-custom-text-primary focus:ring-custom-text-primary/20 rounded-xl h-12 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Input
                        name="phone"
                        placeholder="Seu telefone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="bg-custom-bg-primary/50 border-custom-text-primary/20 text-custom-text-secondary placeholder:text-custom-text-primary/50 focus:border-custom-text-primary focus:ring-custom-text-primary/20 rounded-xl h-12 transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <Input
                        name="subject"
                        placeholder="Assunto"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="bg-custom-bg-primary/50 border-custom-text-primary/20 text-custom-text-secondary placeholder:text-custom-text-primary/50 focus:border-custom-text-primary focus:ring-custom-text-primary/20 rounded-xl h-12 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Textarea
                      name="message"
                      placeholder="Descreva brevemente sua questão jurídica..."
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="bg-custom-bg-primary/50 border-custom-text-primary/20 text-custom-text-secondary placeholder:text-custom-text-primary/50 focus:border-custom-text-primary focus:ring-custom-text-primary/20 rounded-xl resize-none transition-all duration-300"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-custom-text-primary hover:bg-custom-text-primary/90 text-custom-bg-secondary font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 disabled:transform-none disabled:opacity-70"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-custom-bg-secondary border-t-transparent rounded-full animate-spin"></div>
                        Enviando...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="h-5 w-5" />
                        Enviar Mensagem
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
