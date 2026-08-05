import Image from "next/image"
import { GraduationCap, Landmark } from "lucide-react"
import { blogSerif } from "@/lib/blog-design"

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
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
                <p className={`${blogSerif.className} text-3xl text-custom-text-secondary`}>Lucimeire Xavier</p>
                <p className="mt-1 text-sm text-custom-text-primary/78">Advogada tributarista · OAB/SP 508.937</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="home-paper rounded-[2rem] p-7 text-slate-900 sm:p-9">
              <div className="section-kicker text-[#7f5b39]">
                <Landmark className="h-3.5 w-3.5" />
                Sobre
              </div>
              <h2 className={`${blogSerif.className} mt-5 text-4xl leading-tight sm:text-5xl`}>
                Técnica tributária com foco em operação e prevenção de risco.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-700">
                Atuação para empresas e clínicas que precisam organizar a rotina fiscal, reduzir exposição e decidir com
                mais clareza — sem improviso.
              </p>
            </div>

            <div className="home-panel rounded-[1.7rem] p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-custom-text-primary/16 text-custom-text-primary">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div className="space-y-3 text-sm leading-7 text-custom-text-primary/82">
                  <h3 className={`${blogSerif.className} text-2xl text-custom-text-secondary`}>Formação</h3>
                  <p>
                    <span className="font-semibold text-custom-text-secondary">Pós-graduação em Direito Tributário</span>
                    {" · "}
                    UNISC
                  </p>
                  <p>
                    <span className="font-semibold text-custom-text-secondary">Bacharela em Direito</span>
                    {" · "}
                    Universidade São Judas Tadeu
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {["Tributário", "Prevenção", "Estratégia"].map((title) => (
                <div
                  key={title}
                  className="rounded-full border border-custom-text-primary/14 bg-black/12 px-5 py-2.5 text-sm text-custom-text-secondary"
                >
                  {title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
