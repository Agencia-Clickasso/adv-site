import Image from "next/image"
import { BookOpen, GraduationCap, Landmark, MoveUpRight } from "lucide-react"
import { blogSerif } from "@/lib/blog-design"

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div className="home-panel rounded-[2rem] p-6 sm:p-8">
            <div className="relative overflow-hidden rounded-[1.6rem]">
              <Image
                src="/profile-photo.jpeg"
                alt="Dra. Lucimeire Xavier"
                width={640}
                height={760}
                className="h-auto w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-custom-bg-primary via-custom-bg-primary/70 to-transparent p-6">
                <p className={`${blogSerif.className} mt-2 text-3xl text-custom-text-secondary`}>
                  Lucimeire Xavier
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="home-paper rounded-[2rem] p-7 text-slate-900 sm:p-9">
              <div className="section-kicker text-[#7f5b39]">
                <Landmark className="h-3.5 w-3.5" />
                Sobre a Dra. Lucimeire Xavier
              </div>
              <h2 className={`${blogSerif.className} mt-6 text-4xl leading-tight sm:text-5xl`}>
                Formação jurídica sólida com foco direto em operação, prevenção e risco tributário.
              </h2>
              <div className="mt-5 max-w-3xl space-y-4 text-base leading-8 text-slate-700">
                <p>
                  Dra. Lucimeire Xavier da Silva é Advogada Tributarista, com atuação voltada à
                  assessoria e consultoria jurídica, especialmente em questões de natureza
                  tributária empresarial.
                </p>
                <p>
                  Sua trajetória profissional reúne mais de 15 anos de experiência em operações
                  empresariais, adquirida em empresas de grande porte nas áreas de Compras, gestão
                  de processos, negociações, contratos, controles internos e relacionamento com
                  fornecedores. Essa experiência proporciona uma visão prática e estratégica da
                  dinâmica empresarial e dos desafios jurídicos enfrentados pelas organizações.
                </p>
                <p>
                  Na advocacia, atua na área tributária empresarial, com foco em orientação
                  jurídica, planejamento tributário, análise de riscos, conformidade, revisão de
                  procedimentos e suporte às empresas na tomada de decisões relacionadas às suas
                  obrigações e relações tributárias.
                </p>
                <p>
                  Sua formação multidisciplinar permite integrar conhecimento jurídico, visão
                  financeira e experiência prática em processos empresariais, contribuindo para uma
                  análise mais ampla das questões tributárias e para a construção de soluções
                  jurídicas adequadas à realidade de cada empresa.
                </p>
                <p>
                  Sua atuação é pautada pela análise técnica, prevenção de riscos e busca por
                  soluções jurídicas seguras e aplicáveis, aproximando o Direito Tributário da
                  realidade operacional das empresas.
                </p>
              </div>

              <div className="mt-7 rounded-[1.6rem] border border-[#dcc3a4] bg-white/70 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-[#7f5b39]">
                  Atuação institucional
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 marker:text-[#b99066]">
                  <li>Membro da Comissão de Direito Tributário da OAB São Bernardo do Campo/SP</li>
                  <li>Secretária da Comissão de Eventos da OAB São Bernardo do Campo/SP</li>
                  <li>
                    Associada da Associação Brasileira de Mulheres de Carreira Jurídica de São Paulo
                    (ABMCJSP)
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="home-panel rounded-[1.7rem] p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-custom-text-primary/16 text-custom-text-primary">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className={`${blogSerif.className} mt-5 text-3xl text-custom-text-secondary`}>
                  Formação
                </h3>
                <div className="mt-4 space-y-5 text-sm leading-7 text-custom-text-primary/82">
                  <div>
                    <p className="font-semibold text-custom-text-secondary">UNISC</p>
                    <p>Pós-graduação em Direito Tributário</p>
                    <p className="text-custom-text-primary/58">2024 - 2025</p>
                  </div>
                  <div className="border-t home-soft-line pt-5">
                    <p className="font-semibold text-custom-text-secondary">PUC-RS</p>
                    <p>Pós-graduação em Direito Processual Civil</p>
                  </div>
                  <div className="border-t home-soft-line pt-5">
                    <p className="font-semibold text-custom-text-secondary">
                      Universidade São Judas Tadeu
                    </p>
                    <p>Bacharela em Direito</p>
                    <p className="text-custom-text-primary/58">2019 - 2023</p>
                  </div>
                  <div className="border-t home-soft-line pt-5">
                    <p className="font-semibold text-custom-text-secondary">
                      Tecnóloga em Gestão Financeira
                    </p>
                    <p>Técnica em Administração de Empresas</p>
                  </div>
                </div>
              </div>

              <div className="home-panel flex h-full flex-col rounded-[1.7rem] p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-custom-text-primary/16 text-custom-text-primary">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className={`${blogSerif.className} mt-5 text-3xl text-custom-text-secondary`}>
                  Pesquisa aplicada
                </h3>
                <p className="mt-4 text-sm leading-7 text-custom-text-primary/82">
                  O trabalho de conclusão sobre incentivo fiscal Drawback em exportações reforça uma
                  base prática em competitividade, incentivos e interpretação de instrumentos
                  tributários.
                </p>
                <a
                  href="https://repositorio-api.animaeducacao.com.br/server/api/core/bitstreams/7f34702a-53ac-4367-b201-9fabd77e8a29/content"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-medium text-custom-text-primary transition hover:text-custom-text-secondary"
                >
                  Acessar TCC completo
                  <MoveUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["Tributário", "Planejamento, cobrança e defesa fiscal como eixo principal."],
                ["Prevenção", "Consultoria para reduzir desgaste antes do litígio."],
                ["Estratégia", "Leitura jurídica conectada à realidade da empresa."],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-[1.5rem] border border-custom-text-primary/12 bg-black/12 p-5"
                >
                  <p className={`${blogSerif.className} text-3xl text-custom-text-secondary`}>
                    {title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-custom-text-primary/78">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
