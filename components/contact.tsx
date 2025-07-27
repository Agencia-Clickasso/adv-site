"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Entre em Contato</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Estamos prontos para ajudá-lo. Agende uma consulta gratuita e descubra como podemos resolver sua questão
              jurídica.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-8">Informações de Contato</h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-amber-400 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Endereço</h4>
                    <p className="text-slate-300">
                      Rua das Flores, 123, Sala 456
                      <br />
                      Centro - São Paulo, SP
                      <br />
                      CEP: 01234-567
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-amber-400 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Telefone</h4>
                    <p className="text-slate-300">
                      (11) 96758-6911
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-amber-400 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">E-mail</h4>
                    <p className="text-slate-300">contato@lucimeirexavieradvocacia.adv.br</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-amber-400 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Horário de Atendimento</h4>
                    <p className="text-slate-300">
                      Segunda a Sexta: 8h às 18h
                      <br />
                      Sábado: 8h às 12h
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-white text-slate-900">
              <CardHeader>
                <CardTitle>Agende sua Consulta</CardTitle>
                <CardDescription>Preencha o formulário abaixo e entraremos em contato em até 24 horas.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Seu nome completo"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Seu e-mail"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="phone"
                        placeholder="Seu telefone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        name="subject"
                        placeholder="Assunto"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder="Descreva brevemente sua questão jurídica..."
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3"
                  >
                    Enviar Mensagem
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
