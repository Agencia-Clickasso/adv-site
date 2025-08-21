import Image from "next/image"
import { Award, BookOpen, Users, Clock, GraduationCap, CheckCircle, Star, TrendingUp } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-24 bg-custom-bg-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(206,167,133,0.03),transparent_50%)]"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-custom-text-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced header section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-custom-text-primary/10 border border-custom-text-primary/20 rounded-full px-4 py-2 text-sm text-custom-text-primary font-medium mb-6">
              <Star className="h-4 w-4" />
              Sobre Nossa Advocacia
            </div>
            <h2 className="text-5xl font-bold text-custom-text-secondary mb-6 leading-tight">
              Dra. Lucimeire Xavier
            </h2>
            <p className="text-xl text-custom-text-primary/90 max-w-4xl mx-auto leading-relaxed">
              Advogada especializada em Direito Tributário, dedicada a oferecer soluções jurídicas eficazes
              e personalizadas para seus clientes.
            </p>
          </div>

          {/* Main content with improved layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            {/* Enhanced image section */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/profile-photo.jpeg"
                  alt="Dra. Lucimeire Xavier"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay with professional info */}
                <div className="absolute inset-0 bg-gradient-to-t from-custom-bg-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-custom-text-secondary">
                    <h4 className="text-xl font-semibold mb-2">Especialista em Direito Tributário</h4>
                    <p className="text-sm text-custom-text-primary/90">Formada pela Universidade São Judas Tadeu</p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-custom-text-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-custom-text-primary/10 rounded-full blur-lg"></div>
            </div>

            {/* Enhanced content section */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-custom-text-secondary mb-8 flex items-center gap-3">
                  <GraduationCap className="h-8 w-8 text-custom-text-primary" />
                  Formação e Experiência
                </h3>

                <div className="space-y-6">
                  {/* UNISC */}
                  <div className="p-6 bg-custom-bg-primary/30 rounded-xl border border-custom-text-primary/10 hover:bg-custom-bg-primary/50 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-custom-text-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="h-6 w-6 text-custom-text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-custom-text-secondary text-lg mb-2">UNISC</h4>
                        <p className="text-custom-text-primary/90 mb-2">Pós graduada em Direito Tributário</p>
                        <p className="text-sm text-custom-text-primary/70">2024 - 2025</p>
                      </div>
                    </div>
                  </div>

                  {/* Universidade São Judas Tadeu */}
                  <div className="p-6 bg-custom-bg-primary/30 rounded-xl border border-custom-text-primary/10 hover:bg-custom-bg-primary/50 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-custom-text-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="h-6 w-6 text-custom-text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-custom-text-secondary text-lg mb-2">Universidade São Judas Tadeu</h4>
                        <p className="text-custom-text-primary/90 mb-2">Bacharela em Direito</p>
                        <p className="text-sm text-custom-text-primary/70">2019 - 2023</p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-sm text-custom-text-primary/70">Nota:</span>
                          <span className="inline-flex items-center gap-1 bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-sm font-medium">
                            <Star className="h-3 w-3" />
                            10
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* TCC Section */}
                  <div className="p-6 bg-custom-bg-primary/30 rounded-xl border border-custom-text-primary/10 hover:bg-custom-bg-primary/50 transition-all duration-300">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 mb-3">
                        <BookOpen className="h-5 w-5 text-custom-text-primary" />
                        <h5 className="font-semibold text-custom-text-secondary">Trabalho de Conclusão de Curso</h5>
                      </div>
                      <div className="space-y-3">
                        <p className="text-sm text-custom-text-primary/90">
                          <strong className="text-custom-text-secondary">Tema:</strong> "O Impacto do Incentivo Fiscal Drawback nas Exportações de Carne de Frango in natura"
                        </p>
                        <p className="text-sm text-custom-text-primary/80 leading-relaxed">
                          Este estudo aprofundou-se na análise de como o incentivo fiscal Drawback influencia positivamente 
                          as exportações do setor avícola brasileiro, contribuindo para a competitividade internacional e o crescimento econômico.
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-custom-text-primary/70">Período: nov de 2022 - nov de 2023</span>
                          <a 
                            href="https://repositorio-api.animaeducacao.com.br/server/api/core/bitstreams/7f34702a-53ac-4367-b201-9fabd77e8a29/content" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-custom-text-primary hover:text-custom-text-primary/80 underline transition-colors duration-200"
                          >
                            📄 Acessar TCC Completo
                            <TrendingUp className="h-3 w-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Cursos de Extensão */}
                  <div className="p-6 bg-custom-bg-primary/30 rounded-xl border border-custom-text-primary/10 hover:bg-custom-bg-primary/50 transition-all duration-300">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 mb-3">
                        <BookOpen className="h-5 w-5 text-custom-text-primary" />
                        <h5 className="font-semibold text-custom-text-secondary">Cursos de Extensão e Projetos</h5>
                      </div>
                      <ul className="space-y-2">
                        {[
                          'Curso "Universo Tributário: teoria e prática descomplicadas" (45h) - CEISC (2024-2025)',
                          'Projeto de Extensão "Propostas para integração de imigrantes e refugiados" (80h) - USTJ',
                          'Curso "Tópicos aprofundados de Teoria Penal e crimes em espécie" (24h) - USJT',
                          'Curso "Introdução às Ciências Penais" (24h) - USJT',
                          'Curso "Direito das Sucessões" (40h) - USJT',
                          'Curso "Direito civil: pessoas" (32h) - USJT'
                        ].map((course, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-custom-text-primary/80">
                            <CheckCircle className="h-3 w-3 text-custom-text-primary mt-1 flex-shrink-0" />
                            <span>{course}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Competências */}
                  <div className="p-4 bg-custom-text-primary/10 rounded-xl border border-custom-text-primary/20">
                    <p className="text-sm text-custom-text-primary/90">
                      <strong className="text-custom-text-secondary">Competências:</strong> Negociação, Relacionamentos interpessoais
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced stats grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group text-center p-8 bg-custom-bg-primary/50 backdrop-blur-sm rounded-2xl border border-custom-text-primary/20 hover:bg-custom-bg-primary/70 hover:border-custom-text-primary/40 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-custom-text-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-custom-text-primary/30 transition-colors duration-300">
                <Award className="h-8 w-8 text-custom-text-primary" />
              </div>
              <h4 className="text-2xl font-bold text-custom-text-secondary mb-2">10</h4>
              <p className="text-custom-text-primary/80">Nota no TCC</p>
            </div>
            <div className="group text-center p-8 bg-custom-bg-primary/50 backdrop-blur-sm rounded-2xl border border-custom-text-primary/20 hover:bg-custom-bg-primary/70 hover:border-custom-text-primary/40 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-custom-text-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-custom-text-primary/30 transition-colors duration-300">
                <GraduationCap className="h-8 w-8 text-custom-text-primary" />
              </div>
              <h4 className="text-2xl font-bold text-custom-text-secondary mb-2">4 Anos</h4>
              <p className="text-custom-text-primary/80">Formação em Direito</p>
            </div>
            <div className="group text-center p-8 bg-custom-bg-primary/50 backdrop-blur-sm rounded-2xl border border-custom-text-primary/20 hover:bg-custom-bg-primary/70 hover:border-custom-text-primary/40 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-custom-text-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-custom-text-primary/30 transition-colors duration-300">
                <BookOpen className="h-8 w-8 text-custom-text-primary" />
              </div>
              <h4 className="text-2xl font-bold text-custom-text-secondary mb-2">200h+</h4>
              <p className="text-custom-text-primary/80">Cursos de Extensão</p>
            </div>
            <div className="group text-center p-8 bg-custom-bg-primary/50 backdrop-blur-sm rounded-2xl border border-custom-text-primary/20 hover:bg-custom-bg-primary/70 hover:border-custom-text-primary/40 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-custom-text-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-custom-text-primary/30 transition-colors duration-300">
                <Users className="h-8 w-8 text-custom-text-primary" />
              </div>
              <h4 className="text-2xl font-bold text-custom-text-secondary mb-2">Especialista</h4>
              <p className="text-custom-text-primary/80">em Direito Tributário</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
