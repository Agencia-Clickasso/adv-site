import Image from "next/image"
import { Award, BookOpen, Users, Clock, GraduationCap } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-custom-bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-custom-text-secondary mb-4">Sobre Lucimeire Xavier</h2>
            <p className="text-xl text-custom-text-primary max-w-3xl mx-auto">
              Advogada especializada em Direito Tributário, dedicada a oferecer soluções jurídicas eficazes
              e personalizadas para seus clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <Image
                src="/profile-photo.jpeg"
                alt="Dra. Lucimeire Xavier"
                width={400}
                height={500}
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-custom-text-secondary mb-6">Formação e Experiência</h3>

              <div className="flex items-start space-x-3">
                  <GraduationCap className="h-6 w-6 text-custom-text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-custom-text-secondary">UNISC</h4>
                    <p className="text-sm text-custom-text-primary">Pós graduada em Direito Tributário (2024 - 2025)</p>
                  </div>
                </div>

              <div className="space-y-4 text-custom-text-primary">
                <div className="flex items-start space-x-3">
                  <GraduationCap className="h-6 w-6 text-custom-text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-custom-text-secondary">Universidade São Judas Tadeu</h4>
                    <p className="text-sm text-custom-text-primary">Bacharela em Direito (2019 - 2023)</p>
                    <p className="text-sm text-custom-text-primary">Nota: 10</p>
                  </div>
                </div>
                
                
                <div className="ml-9">
                  <h5 className="font-medium text-custom-text-secondary mb-2">Trabalho de Conclusão de Curso</h5>
                  <p className="text-sm text-custom-text-primary mb-3">
                    <strong>Tema:</strong> "O Impacto do Incentivo Fiscal Drawback nas Exportações de Carne de Frango in natura"
                  </p>
                  <p className="text-sm text-custom-text-primary mb-3">
                    Este estudo aprofundou-se na análise de como o incentivo fiscal Drawback influencia positivamente 
                    as exportações do setor avícola brasileiro, contribuindo para a competitividade internacional e o crescimento econômico.
                  </p>
                  <p className="text-sm text-custom-text-primary mb-3">Período: nov de 2022 - nov de 2023</p>
                  <a 
                    href="https://repositorio-api.animaeducacao.com.br/server/api/core/bitstreams/7f34702a-53ac-4367-b201-9fabd77e8a29/content" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-[#B80618] hover:text-[#B80618]/80 underline"
                  >
                    📄 Acessar TCC Completo
                  </a>
                </div>

                <div className="ml-9">
                  <div className="flex items-start space-x-3 mb-2">
                    <BookOpen className="h-5 w-5 text-custom-text-primary mt-1 flex-shrink-0" />
                    <h5 className="font-medium text-custom-text-secondary">Cursos de Extensão e Projetos</h5>
                  </div>
                  <ul className="text-sm text-custom-text-primary space-y-1 ml-8">
                    <li>• Curso "Universo Tributário: teoria e prática descomplicadas" (45h) - CEISC (2024-2025)</li>
                    <li>• Projeto de Extensão "Propostas para integração de imigrantes e refugiados" (80h) - USTJ</li>
                    <li>• Curso "Tópicos aprofundados de Teoria Penal e crimes em espécie" (24h) - USJT</li>
                    <li>• Curso "Introdução às Ciências Penais" (24h) - USJT</li>
                    <li>• Curso "Direito das Sucessões" (40h) - USJT</li>
                    <li>• Curso "Direito civil: pessoas" (32h) - USJT</li>
                  </ul>
                </div>

                <p className="text-sm text-custom-text-primary">
                  <strong>Competências:</strong> Negociação, Relacionamentos interpessoais
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-custom-bg-primary rounded-lg border border-custom-bg-secondary">
              <Award className="h-12 w-12 text-custom-text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-custom-text-secondary mb-2">Nota 10</h4>
              <p className="text-custom-text-primary">TCC Bacharelado em Direito</p>
            </div>
            <div className="text-center p-6 bg-custom-bg-primary rounded-lg border border-custom-bg-secondary">
              <GraduationCap className="h-12 w-12 text-custom-text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-custom-text-secondary mb-2">4 Anos</h4>
              <p className="text-custom-text-primary">formação em Direito</p>
            </div>
            <div className="text-center p-6 bg-custom-bg-primary rounded-lg border border-custom-bg-secondary">
              <BookOpen className="h-12 w-12 text-custom-text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-custom-text-secondary mb-2">200h+</h4>
              <p className="text-custom-text-primary">cursos de extensão</p>
            </div>
            <div className="text-center p-6 bg-custom-bg-primary rounded-lg border border-custom-bg-secondary">
              <Users className="h-12 w-12 text-custom-text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-custom-text-secondary mb-2">Especialista</h4>
              <p className="text-custom-text-primary">em Direito Tributário</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
