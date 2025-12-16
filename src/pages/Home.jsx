import { Link } from 'react-router-dom';
import { ArrowRight, Users, Heart, Star, BookOpen, Shield, GraduationCap, Sparkles, Pencil } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Home = () => {
  const features = [
    {
      icon: Heart,
      title: 'Cuidado com Amor',
      description: 'Cada criança é tratada com carinho e atenção individualizada',
      color: 'from-red-50 to-red-100',
      iconColor: 'text-red-500',
    },
    {
      icon: BookOpen,
      title: 'Educação de Qualidade',
      description: 'Metodologia pedagógica moderna e adaptada para cada faixa etária',
      color: 'from-blue-50 to-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      icon: Shield,
      title: 'Ambiente Seguro',
      description: 'Instalações seguras e monitoradas para tranquilidade dos pais',
      color: 'from-green-50 to-green-100',
      iconColor: 'text-green-600',
    },
    {
      icon: Users,
      title: 'Equipe Qualificada',
      description: 'Profissionais experientes e especializados em educação infantil',
      color: 'from-yellow-50 to-yellow-100',
      iconColor: 'text-yellow-500',
    },
  ];

  const testimonials = [
    {
      name: 'Maria Ferreira',
      text: 'Meu filho ama a escola! O cuidado e carinho da equipe são excepcionais.',
      rating: 5,
    },
    {
      name: 'Jair Silva',
      text: 'Excelente estrutura e metodologia. Recomendo para todos os pais!',
      rating: 5,
    },
    {
      name: 'Amanda dos Santos',
      text: 'O desenvolvimento do meu filho foi incrível desde que começou aqui.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen text-slate-900">
      {/* Hero Section */}
      <section className="relative pt-24 pb-28 lg:pt-32 lg:pb-36">
        {/* fundo absoluto*/}
        <div className="absolute inset-0 -z-20">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-400/30 rounded-full blur-[100px]" />
          <div className="absolute top-[20%] right-0 w-[400px] h-[400px] bg-yellow-400/30 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-[20%] w-[600px] h-[600px] bg-pink-400/20 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 right-[10%] w-[300px] h-[300px] bg-green-400/20 rounded-full blur-[70px]" />
        </div>
        
        {/* icones espalhados */}
        <div className="absolute top-20 right-10 opacity-40 rotate-12 -z-10">
          <Star className="h-8 w-8 text-yellow-400 fill-yellow-400" />
        </div>
        <div className="absolute top-40 left-10 opacity-40 -rotate-12 -z-10">
          <Heart className="h-7 w-7 text-pink-400" />
        </div>
        <div className="absolute bottom-32 right-20 opacity-40 rotate-45 -z-10">
          <div className="w-6 h-6 bg-blue-400 rounded-full" />
        </div>
        <div className="absolute top-1/2 left-5 opacity-40 -z-10">
          <Star className="h-6 w-6 text-yellow-400 fill-yellow-400" />
        </div>
        <div className="absolute bottom-20 left-1/4 opacity-40 -z-10">
          <div className="w-4 h-4 bg-amber-400 rounded-full" />
        </div>
        <div className="absolute top-10 right-1/3 opacity-40 rotate-12 -z-10">
          <Pencil className="h-6 w-6 text-purple-400" />
        </div>
        <div className="absolute bottom-40 right-1/4 opacity-40 -rotate-12 -z-10">
          <Heart className="h-5 w-5 text-pink-400" />
        </div>
        <div className="absolute top-1/3 right-5 opacity-40 -z-10">
          <div className="w-3 h-3 bg-green-400 rounded-full" />
        </div>
        <div className="absolute top-60 left-1/3 opacity-40 rotate-45 -z-10">
          <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center bg-transparent">
            <div className="text-center lg:text-left space-y-6 bg-transparent">
              <div className="max-w-4xl mx-auto text-center lg:text-left space-y-6 bg-transparent">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 leading-tight tracking-tighter">
                  Educação Infantil com{' '}
                  <span className="text-red-500">Amor</span> e Cuidado
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                  Um lugar especial onde seu filho <span className="text-green-600 font-semibold">cresce</span>,{' '}
                  <span className="text-amber-500 font-semibold">aprende</span> e{' '}
                  <span className="text-blue-600 font-semibold">brinca</span> com carinho. 
                  Venha fazer parte da nossa família!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                  <Button
                    asChild
                    size="lg"
                    className="bg-red-500 text-white rounded-full px-10 py-5 text-lg font-bold hover:bg-red-600 hover:scale-95 transition-all duration-300 ease-out"
                  >
                    <Link to="/matriculas">
                      Faça sua Matrícula
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="rounded-full px-10 py-5 text-lg font-bold border-2 border-blue-500 text-blue-600 hover:bg-blue-50 hover:scale-95 transition-all duration-300 ease-out"
                  >
                    <Link to="/quem-somos">Conheça Nossa História</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="relative lg:pl-8">
              <div className="bg-white/40 backdrop-blur-xl rounded-[3rem] p-10 shadow-[0_30px_60px_-15px_rgba(180,160,100,0.2)] hover:shadow-[0_40px_80px_-15px_rgba(180,160,100,0.3)] hover:-translate-y-2 transition-all duration-300 ease-out border-2 border-white/80">
                <div className="bg-white/30 backdrop-blur-md rounded-[3rem] p-8 text-center border-2 border-white/60">
                  <div className="w-32 h-32 flex items-center justify-center mx-auto mb-6">
                    <img src="/favicon.png" alt="Logo" className="w-full h-full object-cover drop-shadow-md" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Educandário Jardim Aeroporto</h2>
                  <p className="text-base text-slate-600 mb-8 font-medium">
                    Mais de 4 anos cuidando e educando crianças
                  </p>
                  <div className="flex justify-center gap-6 text-sm">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-1">35+</div>
                      <div className="text-slate-600 font-medium">Crianças</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-1">5+</div>
                      <div className="text-slate-600 font-medium">Professores</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600 mb-1">4+</div>
                      <div className="text-slate-600 font-medium">Anos</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* secao de features */}
      <section className="relative py-24">
        {/* fudo absoluto */}
        <div className="absolute inset-0 -z-20">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-400/30 rounded-full blur-[100px]" />
          <div className="absolute top-[20%] right-0 w-[400px] h-[400px] bg-yellow-400/30 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-[20%] w-[600px] h-[600px] bg-pink-400/20 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 right-[10%] w-[300px] h-[300px] bg-green-400/20 rounded-full blur-[70px]" />
        </div>
        
        {}
        <div className="absolute top-32 right-20 opacity-40 rotate-12 -z-10">
          <Star className="h-8 w-8 text-yellow-400 fill-yellow-400" />
        </div>
        <div className="absolute bottom-32 left-20 opacity-40 -rotate-12 -z-10">
          <Heart className="h-7 w-7 text-pink-400" />
        </div>
        <div className="absolute top-20 left-1/4 opacity-40 rotate-45 -z-10">
          <div className="w-6 h-6 bg-blue-400 rounded-full" />
        </div>
        <div className="absolute bottom-20 right-1/3 opacity-40 -z-10">
          <Pencil className="h-6 w-6 text-purple-400" />
        </div>
        <div className="absolute top-1/2 right-10 opacity-40 -z-10">
          <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
        </div>
        <div className="absolute top-40 left-1/3 opacity-40 -z-10">
          <div className="w-4 h-4 bg-green-400 rounded-full" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              Por que escolher nossa Escola?
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
              Nosso compromisso é oferecer o melhor para seu filho, com uma{' '}
              <span className="text-green-600 font-semibold">educação</span> de{' '}
              <span className="text-blue-600 font-semibold">qualidade</span> em um ambiente{' '}
              <span className="text-red-500 font-semibold">seguro</span> e acolhedor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-2 border-white/80 border-t-4 border-t-blue-400/60 shadow-[0_30px_60px_-15px_rgba(180,160,100,0.2)] hover:shadow-[0_40px_80px_-15px_rgba(180,160,100,0.3)] hover:-translate-y-2 transition-all duration-300 ease-out bg-white rounded-[3rem]"
              >
                <CardContent className="p-8 text-center group">
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-3`}>
                    <feature.icon className={`h-10 w-10 ${feature.iconColor} transition-transform duration-300 group-hover:-translate-y-1`} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-base text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Secao de stats */}
      <section className="relative py-24">
        {}
        <div className="absolute inset-0 -z-20">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-400/30 rounded-full blur-[100px]" />
          <div className="absolute top-[20%] right-0 w-[400px] h-[400px] bg-yellow-400/30 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-[20%] w-[600px] h-[600px] bg-pink-400/20 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 right-[10%] w-[300px] h-[300px] bg-green-400/20 rounded-full blur-[70px]" />
        </div>
        
        {}
        <div className="absolute top-20 left-1/3 opacity-40 rotate-12 -z-10">
          <Star className="h-7 w-7 text-yellow-400 fill-yellow-400" />
        </div>
        <div className="absolute bottom-20 right-1/3 opacity-40 -rotate-12 -z-10">
          <div className="w-6 h-6 bg-yellow-400 rounded-full" />
        </div>
        <div className="absolute top-1/2 left-10 opacity-40 rotate-45 -z-10">
          <Heart className="h-5 w-5 text-pink-400" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-40 -z-10">
          <Pencil className="h-5 w-5 text-purple-400" />
        </div>
        <div className="absolute top-32 right-1/4 opacity-40 -z-10">
          <div className="w-4 h-4 bg-blue-400 rounded-full" />
        </div>
        <div className="absolute bottom-32 left-1/4 opacity-40 -z-10">
          <Star className="h-6 w-6 text-yellow-400 fill-yellow-400" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative bg-transparent">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 text-center">
            <div className="bg-white rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(180,160,100,0.2)] hover:shadow-[0_40px_80px_-15px_rgba(180,160,100,0.3)] px-6 py-8 lg:py-10 transition-all duration-300 ease-out hover:-translate-y-2 border-2 border-white/80 border-t-4 border-t-yellow-400/60">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 mb-2">
                35+
              </div>
              <div className="text-slate-700 font-semibold text-sm sm:text-base">Crianças Felizes</div>
            </div>
            <div className="bg-white rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(180,160,100,0.2)] hover:shadow-[0_40px_80px_-15px_rgba(180,160,100,0.3)] px-6 py-8 lg:py-10 transition-all duration-300 ease-out hover:-translate-y-2 border-2 border-white/80 border-t-4 border-t-yellow-400/60">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 mb-2">
                5+
              </div>
              <div className="text-slate-700 font-semibold text-sm sm:text-base">Professores</div>
            </div>
            <div className="bg-white rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(180,160,100,0.2)] hover:shadow-[0_40px_80px_-15px_rgba(180,160,100,0.3)] px-6 py-8 lg:py-10 transition-all duration-300 ease-out hover:-translate-y-2 border-2 border-white/80 border-t-4 border-t-yellow-400/60">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 mb-2">
                4+
              </div>
              <div className="text-slate-700 font-semibold text-sm sm:text-base">
                Anos de Experiência
              </div>
            </div>
            <div className="bg-white rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(180,160,100,0.2)] hover:shadow-[0_40px_80px_-15px_rgba(180,160,100,0.3)] px-6 py-8 lg:py-10 transition-all duration-300 ease-out hover:-translate-y-2 border-2 border-white/80 border-t-4 border-t-yellow-400/60">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-600 mb-2">
                100%
              </div>
              <div className="text-slate-700 font-semibold text-sm sm:text-base">Satisfação</div>
            </div>
          </div>
        </div>
      </section>

      {/* reviews*/}
      <section className="relative py-24">
        {}
        <div className="absolute inset-0 -z-20">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-400/30 rounded-full blur-[100px]" />
          <div className="absolute top-[20%] right-0 w-[400px] h-[400px] bg-yellow-400/30 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-[20%] w-[600px] h-[600px] bg-pink-400/20 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 right-[10%] w-[300px] h-[300px] bg-green-400/20 rounded-full blur-[70px]" />
        </div>
        
        {}
        <div className="absolute top-32 right-32 opacity-40 rotate-12 -z-10">
          <Heart className="h-8 w-8 text-pink-400" />
        </div>
        <div className="absolute bottom-32 left-32 opacity-40 -rotate-12 -z-10">
          <Star className="h-7 w-7 text-yellow-400 fill-yellow-400" />
        </div>
        <div className="absolute top-20 left-1/4 opacity-40 rotate-45 -z-10">
          <div className="w-6 h-6 bg-red-400 rounded-full" />
        </div>
        <div className="absolute bottom-20 right-1/3 opacity-40 -z-10">
          <Pencil className="h-6 w-6 text-purple-400" />
        </div>
        <div className="absolute top-1/2 right-10 opacity-40 -z-10">
          <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
        </div>
        <div className="absolute top-40 left-1/3 opacity-40 -z-10">
          <Heart className="h-4 w-4 text-pink-400" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative bg-transparent">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              O que os pais dizem
            </h2>
            <p className="text-lg md:text-xl text-slate-600 font-medium">
              Depoimentos de <span className="text-blue-600 font-semibold">famílias</span> que{' '}
              <span className="text-green-600 font-semibold">confiam</span> em nosso trabalho
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-2 border-white/80 border-t-4 border-t-pink-400/60 shadow-[0_30px_60px_-15px_rgba(180,160,100,0.2)] hover:shadow-[0_40px_80px_-15px_rgba(180,160,100,0.3)] hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 ease-out bg-white rounded-[3rem] group"
              >
                <CardContent className="p-8">
                  <div className="flex mb-5 gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current transition-transform duration-300 group-hover:scale-110" style={{ transitionDelay: `${i * 50}ms` }} />
                    ))}
                  </div>
                  <p className="text-base md:text-lg text-slate-700 mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="font-semibold text-slate-900 text-base flex items-center gap-2">
                    <Heart className="h-4 w-4 text-red-400" />
                    {testimonial.name}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {}
      <section className="relative py-28 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-600">
        {}
        <div className="absolute inset-0 -z-20">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-400/30 rounded-full blur-[100px]" />
          <div className="absolute top-[20%] right-0 w-[400px] h-[400px] bg-yellow-400/30 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-[20%] w-[600px] h-[600px] bg-pink-400/20 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 right-[10%] w-[300px] h-[300px] bg-green-400/20 rounded-full blur-[70px]" />
        </div>

        {/* icones espalhados */}
        <div className="absolute top-20 right-20 opacity-40 rotate-12 -z-10">
          <Star className="h-8 w-8 text-yellow-200 fill-yellow-200" />
        </div>
        <div className="absolute bottom-32 left-20 opacity-40 -rotate-12 -z-10">
          <Heart className="h-7 w-7 text-pink-200" />
        </div>
        <div className="absolute top-1/2 right-10 opacity-40 rotate-45 -z-10">
          <div className="w-6 h-6 bg-yellow-200 rounded-full" />
        </div>
        <div className="absolute bottom-20 left-1/4 opacity-40 -z-10">
          <Pencil className="h-6 w-6 text-cyan-200" />
        </div>
        <div className="absolute top-40 left-1/3 opacity-40 -z-10">
          <Star className="h-5 w-5 text-yellow-200 fill-yellow-200" />
        </div>
        
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative bg-transparent">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-tight">
              Vamos cuidar do seu tesouro mais precioso?
            </h2>
            <p className="text-lg md:text-xl text-blue-50 leading-relaxed font-medium">
              Agende uma visita e venha conhecer de perto o <span className="text-yellow-300 font-semibold">carinho</span> e{' '}
              <span className="text-amber-300 font-semibold">dedicação</span> que dedicamos a cada criança. 
              Estamos ansiosos para receber vocês!
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center pt-4">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="rounded-full px-10 py-3 text-md font-bold bg-white text-blue-700 hover:bg-blue-50 hover:scale-95 transition-all duration-300 ease-out"
              >
                <Link to="/contato">Agende uma Visita</Link>
              </Button>
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="rounded-full px-10 py-3 text-md font-bold bg-white text-blue-700 hover:bg-blue-50 hover:scale-95 transition-all duration-300 ease-out"
              >
                <a
                  href="https://api.whatsapp.com/message/SREIOJFRZZA2O1?autoload=1&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fale no WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;