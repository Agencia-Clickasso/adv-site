import Image from "next/image"
import { GraduationCap, Landmark } from "lucide-react"
import { blogSerif } from "@/lib/blog-design"

/** Sobre — geral, curto, sem nichar cliente. */
export default function About() {
  return (
    <section id="about" className="relative py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2rem] border border-custom-text-primary/16 bg-custom-bg-secondary/80 shadow-[0_32px_100px_rgba(0,0,0,0.35)]">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
              <div className="relative min-h-[20rem] lg:min-h-full">
                <Image
                  src="/profile-photo.jpeg"
                  alt="Dra. Lucimeire Xavier"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-custom-bg-primary via-custom-bg-primary/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-custom-bg-secondary/90" />
                <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                  <p
                    className={`${blogSerif.className} text-3xl text-custom-text-secondary sm:text-4xl`}
                  >
                    Lucimeire Xavier
                  </p>
                  <p className="mt-1 text-sm text-custom-text-primary">
                    Advogada tributarista · OAB/SP 508.937
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-5 p-7 sm:p-10">
                <div className="section-kicker w-fit">
                  <Landmark className="h-3.5 w-3.5" />
                  Sobre
                </div>
                <h2
                  className={`${blogSerif.className} text-4xl leading-[1.02] text-custom-text-secondary sm:text-5xl`}
                >
                  Técnica tributária com foco em prevenção de risco.
                </h2>
                <p className="max-w-xl text-base leading-8 text-custom-text-primary/85">
                  Atendimento a empresas, profissionais e organizações em todo o Brasil.
                </p>

                <div className="home-paper rounded-[1.4rem] p-5 text-slate-900">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-custom-bg-primary text-custom-text-primary">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <div className="space-y-1 text-sm leading-7">
                      <p className="font-semibold text-slate-950">Formação</p>
                      <p>Pós-graduação em Direito Tributário · UNISC</p>
                      <p>Bacharela em Direito · São Judas Tadeu</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
