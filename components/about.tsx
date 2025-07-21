import Image from "next/image"
import { Award, BookOpen, Users, Clock } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Sobre Lucimeire Xavier</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Advogada especializada com mais de 15 anos de experiência, dedicada a oferecer soluções jurídicas eficazes
              e personalizadas.
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
                <p>
                  Graduada em Direito pela Universidade Federal, com especialização em Direito Civil e Empresarial.
                  Mestre em Direito Processual Civil.
                </p>
                <p>
                  Ao longo de sua carreira, tem se destacado pela dedicação aos clientes e pela busca constante por
                  soluções inovadoras e eficazes para questões jurídicas complexas.
                </p>
                <p>
                  Membro ativo da OAB e participante regular de congressos e seminários jurídicos, mantendo-se sempre
                  atualizada com as mudanças na legislação.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-slate-50 rounded-lg">
              <Award className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-slate-900 mb-2">15+ Anos</h4>
              <p className="text-slate-600">de experiência jurídica</p>
            </div>
            <div className="text-center p-6 bg-slate-50 rounded-lg">
              <Users className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-slate-900 mb-2">500+</h4>
              <p className="text-slate-600">clientes atendidos</p>
            </div>
            <div className="text-center p-6 bg-slate-50 rounded-lg">
              <BookOpen className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-slate-900 mb-2">95%</h4>
              <p className="text-slate-600">taxa de sucesso</p>
            </div>
            <div className="text-center p-6 bg-slate-50 rounded-lg">
              <Clock className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-slate-900 mb-2">24h</h4>
              <p className="text-slate-600">resposta garantida</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
