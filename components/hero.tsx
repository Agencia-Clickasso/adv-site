import Link from "next/link"
import { ArrowRight, ChartNoAxesColumn, Scale, ShieldCheck, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { blogSerif } from "@/lib/blog-design"

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 text-custom-text-secondary sm:pt-36">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div className="space-y-7 rounded-[1.8rem] border border-custom-text-primary/14 bg-gradient-to-br from-white/8 via-white/3 to-transparent p-5 shadow-[0_28px_100px_rgba(0,0,0,0.26)] backdrop-blur-sm sm:space-y-8 sm:rounded-[2rem] sm:p-10 lg:p-12">
              <div className="section-kicker">
                <Sparkles className="h-3.5 w-3.5" />
                Boutique jurídica tributária
              </div>

              <div className="space-y-6">
                <h1
                  className={`${blogSerif.className} max-w-5xl text-[3rem] leading-[0.97] tracking-[-0.035em] sm:text-6xl lg:text-7xl`}
                >
                  Advogada tributarista em São Bernardo do Campo para empresas que precisam decidir com mais clareza.
                </h1>
                <p className="max-w-2xl text-base leading-7 text-custom-text-primary/88 sm:text-xl sm:leading-8">
                  Planejamento tributário, execução fiscal e consultoria fiscal preventiva com leitura jurídica
                  conectada ao caixa, ao passivo e ao risco real da operação.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-[1.5rem] border border-custom-text-primary/12 bg-black/15 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-custom-text-primary/62">Atuação central</p>
                  <p className={`${blogSerif.className} mt-3 text-3xl text-custom-text-secondary`}>Tributário</p>
                  <p className="mt-2 text-sm leading-7 text-custom-text-primary/76">Planejamento, execução fiscal e revisão de carga.</p>
                </div>
                <div className="rounded-[1.5rem] border border-custom-text-primary/12 bg-black/15 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-custom-text-primary/62">Perfil de cliente</p>
                  <p className={`${blogSerif.className} mt-3 text-3xl text-custom-text-secondary`}>Empresas</p>
                  <p className="mt-2 text-sm leading-7 text-custom-text-primary/76">Atendimento com visão de negócio e prevenção.</p>
                </div>
                <div className="rounded-[1.5rem] border border-custom-text-primary/12 bg-black/15 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-custom-text-primary/62">Base</p>
                  <p className={`${blogSerif.className} mt-3 text-3xl text-custom-text-secondary`}>São Bernardo</p>
                  <p className="mt-2 text-sm leading-7 text-custom-text-primary/76">Atuação local com leitura nacional de risco fiscal.</p>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="rounded-full bg-custom-text-primary px-6 text-custom-bg-primary hover:bg-custom-text-secondary sm:px-8">
                  <Link href="#contact">
                    Solicitar análise tributária
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full border-custom-text-primary/30 bg-transparent px-8 text-custom-text-primary hover:bg-custom-text-primary hover:text-custom-bg-primary"
                >
                  <Link href="#services">Ver frentes de atuação</Link>
                </Button>
              </div>
            </div>

            <div className="grid gap-5">
              <div className="home-paper rounded-[1.8rem] p-5 text-slate-900 sm:rounded-[2rem] sm:p-8">
                <p className="text-xs uppercase tracking-[0.26em] text-[#7f5b39]">Como a atuação entra</p>
                <h2 className={`${blogSerif.className} mt-4 text-[2.35rem] leading-[1.02] sm:text-5xl`}>
                  Diagnóstico técnico antes que o problema vire custo permanente.
                </h2>
                <p className="mt-4 text-[0.98rem] leading-7 text-slate-700 sm:text-base sm:leading-8">
                  A proposta do escritório é organizar decisão, não apenas reagir ao litígio. O trabalho começa com
                  leitura da operação, da exposição tributária e do melhor caminho de resposta.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: Scale,
                    title: "Planejamento tributário",
                    text: "Estrutura fiscal com menos improviso e mais previsibilidade.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Defesa fiscal",
                    text: "Resposta técnica para cobrança, autuação e execução.",
                  },
                  {
                    icon: ChartNoAxesColumn,
                    title: "Leitura de impacto",
                    text: "Avaliação do reflexo jurídico no caixa e na operação.",
                  },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className={`home-panel rounded-[1.6rem] p-5 ${index === 2 ? "sm:col-span-2" : ""}`}
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-custom-text-primary/16 text-custom-text-primary">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h3 className={`${blogSerif.className} mt-5 text-2xl text-custom-text-secondary`}>{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-custom-text-primary/78">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
