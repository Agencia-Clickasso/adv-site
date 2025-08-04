import Image from "next/image"
import { Award, BookOpen, Users, Clock, GraduationCap } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Sobre Lucimeire Xavier</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Advogada especializada em Direito Tributário, dedicada a oferecer soluções jurídicas eficazes
              e personalizadas para seus clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <Image
                src="/placeholder.svg?height=500&width=400"
                alt="Dra. Lucimeire Xavier"
                width={400}
                height={500}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Formação e Experiência</h3>
              <div className="space-y-4 text-slate-700">
                <div className="flex items-start space-x-3">
                  <GraduationCap className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Universidade São Judas Tadeu</h4>
                    <p className="text-sm text-slate-600">Acadêmica de Direito (2019 - 2023)</p>
                    <p className="text-sm text-slate-600">Nota: 10</p>
                  </div>
                </div>
                
                <div className="ml-9">
                  <h5 className="font-medium text-slate-900 mb-2">Trabalho de Conclusão de Curso</h5>
                  <p className="text-sm text-slate-700 mb-3">
                    <strong>Tema:</strong> "O Impacto do Incentivo Fiscal Drawback nas Exportações de Carne de Frango in natura"
                  </p>
                  <p className="text-sm text-slate-700 mb-3">
                    Este estudo aprofundou-se na análise de como o incentivo fiscal Drawback influencia positivamente 
                    as exportações do setor avícola brasileiro, contribuindo para a competitividade internacional e o crescimento econômico.
                  </p>
                  <p className="text-sm text-slate-600">Período: nov de 2022 - nov de 2023</p>
                </div>

                <div className="ml-9">
                  <h5 className="font-medium text-slate-900 mb-2">Cursos de Extensão e Projetos</h5>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Projeto de Extensão "Propostas para integração de imigrantes e refugiados" (80h) - USTJ</li>
                    <li>• Curso "Tópicos aprofundados de Teoria Penal e crimes em espécie" (24h) - USJT</li>
                    <li>• Curso "Introdução às Ciências Penais" (24h) - USJT</li>
                    <li>• Curso "Direito das Sucessões" (40h) - USJT</li>
                    <li>• Curso "Direito civil: pessoas" (32h) - USJT</li>
                  </ul>
                </div>

                <p className="text-sm text-slate-700">
                  <strong>Competências:</strong> Negociação, Relacionamentos interpessoais
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-slate-50 rounded-lg">
              <Award className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-slate-900 mb-2">Nota 10</h4>
              <p className="text-slate-600">TCC Direito Tributário</p>
            </div>
            <div className="text-center p-6 bg-slate-50 rounded-lg">
              <GraduationCap className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-slate-900 mb-2">4 Anos</h4>
              <p className="text-slate-600">formação em Direito</p>
            </div>
            <div className="text-center p-6 bg-slate-50 rounded-lg">
              <BookOpen className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-slate-900 mb-2">200h+</h4>
              <p className="text-slate-600">cursos de extensão</p>
            </div>
            <div className="text-center p-6 bg-slate-50 rounded-lg">
              <Users className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-slate-900 mb-2">Especialista</h4>
              <p className="text-slate-600">em Direito Tributário</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
