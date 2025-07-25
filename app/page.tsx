"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Star, Users, Smartphone, MessageCircle, Trophy, ArrowRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function HiltoGarciaLanding() {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    age: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui integraria com o sistema de leads
    console.log("Lead capturado:", formData)
    alert("Consultoria agendada! Entraremos em contato via WhatsApp.")
  }

  const openWhatsApp = () => {
    window.open("https://wa.link/vmzhk4", "_blank")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/images/hilto-logo.png"
                  alt="Hilto Garcia Logo"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
                <Badge className="bg-red-600 text-white">SHAPE PREMIUM</Badge>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Transforme Seu Corpo Após os 35 Anos com o Shape Premium
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Sistema completo com acompanhamento diário que já transformou mais de 500 pessoas. Sem dietas malucas,
                sem perder tempo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={openWhatsApp} size="lg" className="bg-red-600 hover:bg-red-700 text-lg px-8 py-4">
                  FALAR COM HILTO NO WHATSAPP
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="flex items-center gap-6 mt-8">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-red-500" />
                  <span className="text-sm">500+ Transformações</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span className="text-sm">4.9/5 Avaliação</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent rounded-lg"></div>
              <Image
                src="/images/hilto-hero.jpg"
                alt="Hilto Garcia Personal Trainer"
                width={500}
                height={600}
                className="rounded-lg shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-4 -left-4 bg-red-600 text-white p-4 rounded-lg z-20">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm">Anos de Experiência</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problema/Dor */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Você Está Cansado de...</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sabemos exatamente pelo que você está passando. Estes são os principais obstáculos que impedem sua
              transformação:
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              "Tentar várias dietas sem resultados",
              "Não ter tempo para treinar",
              "Sentir que o corpo não responde como antes",
              "Falta de energia e disposição",
              "Não saber por onde começar",
              "Treinar sozinho sem orientação",
            ].map((problema, index) => (
              <Card key={index} className="p-6 border-l-4 border-red-600">
                <CardContent className="p-0">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                    <p className="text-gray-700 font-medium">{problema}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solução */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              O Método do Hilto Garcia, Shape Premium é a Solução
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sistema completo baseado em 3 pilares fundamentais para sua transformação
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Smartphone className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Aplicativo</h3>
                <p className="text-gray-600 mb-6">
                  Treinos personalizados direto no seu celular. Interface intuitiva com vídeos explicativos e progressão
                  automática.
                </p>
                <ul className="text-left space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Treinos personalizados</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Vídeos explicativos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Controle de evolução</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow border-2 border-red-600">
              <CardContent className="p-0">
                <Badge className="bg-red-600 text-white mb-4">MAIS POPULAR</Badge>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Acompanhamento Diário</h3>
                <p className="text-gray-600 mb-6">
                  Suporte personalizado via WhatsApp. Hilto acompanha sua evolução todos os dias e ajusta sua
                  estratégia.
                </p>
                <ul className="text-left space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Suporte via WhatsApp</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Ajustes em tempo real</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Motivação constante</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Trophy className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Método Comprovado</h3>
                <p className="text-gray-600 mb-6">
                  Sistema testado e aprovado com mais de 500 transformações reais. Resultados garantidos em 90 dias.
                </p>
                <ul className="text-left space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">500+ casos de sucesso</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Resultados em 90 dias</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Método científico</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resultados/Prova Social */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Veja as Transformações Reais</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Mais de 500 pessoas já transformaram suas vidas com o Método Hilto Garcia
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-5xl font-bold text-red-500 mb-2">500+</div>
              <div className="text-gray-300">Pessoas Transformadas</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-red-500 mb-2">90</div>
              <div className="text-gray-300">Dias Para Resultados</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-red-500 mb-2">4.9</div>
              <div className="text-gray-300">Avaliação Média</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Marcos",
                photo: "/placeholder.svg?height=60&width=60&text=Marcos",
                transformationImage: "/images/marcos-transformation.png",
                testimonial:
                  "Incrível! Saí de 96kg para 78kg e reduzi minha gordura corporal de 27,5% para 10,8%. O acompanhamento do Hilto fez toda diferença na minha transformação!",
                results: "96kg → 78kg | 27,5% → 10,8% gordura",
              },
              {
                name: "Eric",
                photo: "/placeholder.svg?height=60&width=60&text=Eric",
                transformationImage: "/images/eric-transformation.png",
                testimonial:
                  "Mudança completa de vida! Não só perdi peso, mas ganhei condicionamento físico e disposição que não tinha há anos. O método realmente funciona!",
                results: "Transformação completa em poucos meses",
              },
              {
                name: "Rodrigo",
                photo: "/placeholder.svg?height=60&width=60&text=Rodrigo",
                transformationImage: "/images/rodrigo-transformation.png",
                testimonial:
                  "De 110kg para 80kg! Reduzi minha gordura corporal de 35% para 18%. Nunca imaginei que conseguiria essa transformação aos meus anos. Hilto é sensacional!",
                results: "110kg → 80kg | 35% → 18% gordura",
              },
            ].map((client, i) => (
              <Card key={i} className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src={client.photo || "/placeholder.svg"}
                      alt={client.name}
                      width={60}
                      height={60}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-white text-lg">{client.name}</div>
                      <div className="text-sm text-red-400 font-medium">{client.results}</div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <Image
                      src={client.transformationImage || "/placeholder.svg"}
                      alt={`Transformação ${client.name}`}
                      width={300}
                      height={200}
                      className="rounded-lg w-full object-cover"
                    />
                  </div>
                  <p className="text-gray-300 text-sm mb-3">"{client.testimonial}"</p>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre o Hilto */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <Image
                  src="/images/hilto-about.jpg"
                  alt="Hilto Garcia treinando"
                  width={400}
                  height={500}
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg">
                  <Image src="/images/hilto-logo.png" alt="HG Logo" width={60} height={20} className="h-5 w-auto" />
                </div>
              </div>
            </div>
            <div>
              <Badge className="bg-red-600 text-white mb-4">SOBRE O HILTO</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Conheça Quem Vai Te Transformar</h2>
              <p className="text-lg text-gray-600 mb-6">
                Hilto Garcia é Personal Trainer há mais de 15 anos, especializado em transformação corporal para pessoas
                acima dos 35 anos. Desenvolveu um método exclusivo que combina tecnologia, acompanhamento personalizado
                e estratégias comprovadas.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>15+ anos de experiência</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Certificado CREF ativo</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Especialização em Nutrição Esportiva</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Criador do App HG Fitness</span>
                </div>
              </div>
              <Button onClick={openWhatsApp} size="lg" className="bg-red-600 hover:bg-red-700">
                QUERO SER ACOMPANHADO PELO HILTO
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Oferta Principal */}
      <section id="consultoria-form" className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Consultoria Estratégica Personalizada</h2>
            <p className="text-xl mb-8 opacity-90">
              Análise completa + estratégia personalizada + demonstração do app exclusivo
            </p>

            <Button
              onClick={openWhatsApp}
              size="lg"
              className="bg-white text-red-600 hover:bg-red-700 hover:text-white text-lg px-8 py-4"
            >
              QUERO MINHA CONSULTORIA GRATUITA
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ/Objeções */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Perguntas Frequentes</h2>
            <p className="text-xl text-gray-600">Esclarecemos as principais dúvidas sobre o método</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "E se eu não tiver tempo para treinar?",
                answer:
                  "O método foi desenvolvido para pessoas ocupadas. Treinos de 30-45 minutos, 3-4x por semana. O app se adapta à sua rotina.",
              },
              {
                question: "O aplicativo é fácil de usar?",
                answer:
                  "Sim! Interface intuitiva com vídeos explicativos. Mesmo quem não tem familiaridade com tecnologia consegue usar facilmente.",
              },
              {
                question: "Funciona mesmo para quem tem mais de 35 anos?",
                answer:
                  "Especialmente! O método foi criado especificamente para pessoas 35+, considerando as mudanças metabólicas e hormonais desta faixa etária.",
              },
              {
                question: "Preciso de equipamentos caros?",
                answer:
                  "Não! O método funciona com equipamentos básicos ou até mesmo exercícios com peso corporal. Adaptamos aos seus recursos.",
              },
              {
                question: "Como funciona o acompanhamento?",
                answer:
                  "Suporte diário via WhatsApp, ajustes semanais no treino e nutrição, calls mensais de acompanhamento e acesso 24h ao Hilto.",
              },
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Button Fixo */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="bg-green-500 hover:bg-green-600 rounded-full w-16 h-16 shadow-lg"
          onClick={() => window.open("https://wa.link/vmzhk4", "_blank")}
        >
          <MessageCircle className="h-8 w-8" />
        </Button>
      </div>
    </div>
  )
}
