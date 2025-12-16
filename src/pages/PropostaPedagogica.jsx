import { Link } from 'react-router-dom';
import { BookOpen, Brain, Heart, Users, Palette, Music, Gamepad2, Leaf, Sparkles, Star, Pencil } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PropostaPedagogica = () => {
  const methodology = [
    {
      icon: Brain,
      title: 'Desenvolvimento Cognitivo',
      description: 'Atividades que estimulam o raciocínio lógico, a memória e a capacidade de resolução de problemas através de jogos educativos e brincadeiras dirigidas.',
      color: 'from-blue-50 to-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      icon: Heart,
      title: 'Desenvolvimento Emocional',
      description: 'Trabalhamos a inteligência emocional, ajudando as crianças a reconhecer e expressar seus sentimentos de forma saudável.',
      color: 'from-red-50 to-red-100',
      iconColor: 'text-red-500',
    },
    {
      icon: Users,
      title: 'Desenvolvimento Social',
      description: 'Promovemos a interação entre as crianças, ensinando valores como respeito, cooperação e amizade através de atividades em grupo.',
      color: 'from-green-50 to-green-100',
      iconColor: 'text-green-600',
    },
    {
      icon: Gamepad2,
      title: 'Desenvolvimento Motor',
      description: 'Atividades físicas e psicomotoras que desenvolvem a coordenação, equilíbrio e habilidades motoras finas e grossas.',
      color: 'from-yellow-50 to-yellow-100',
      iconColor: 'text-yellow-500',
    }
  ];

  const differentials = [
    {
      icon: Palette,
      title: 'Arte e Criatividade',
      description: 'Ateliês de arte, pintura, desenho e trabalhos manuais que estimulam a criatividade e expressão artística.',
      color: 'from-red-50 to-red-100',
      iconColor: 'text-red-500',
    },
    {
      icon: Music,
      title: 'Educação Musical',
      description: 'Aulas de música com instrumentos adaptados para crianças, desenvolvendo o ritmo e a sensibilidade musical.',
      color: 'from-yellow-50 to-yellow-100',
      iconColor: 'text-yellow-500',
    },
    {
      icon: Leaf,
      title: 'Educação Ambiental',
      description: 'Consciência ecológica desde cedo, com horta pedagógica e atividades de sustentabilidade.',
      color: 'from-green-50 to-green-100',
      iconColor: 'text-green-600',
    },
    {
      icon: BookOpen,
      title: 'Letramento Precoce',
      description: 'Introdução ao mundo das letras e números de forma lúdica e natural, respeitando o ritmo de cada criança.',
      color: 'from-blue-50 to-blue-100',
      iconColor: 'text-blue-600',
    }
  ];

  const ageGroups = [
    {
      age: '4 meses a 2 anos',
      title: 'Berçário',
      description: 'Cuidados especializados para bebês com foco no desenvolvimento sensorial, motor e afetivo.',
      activities: [
        'Estimulação sensorial',
        'Desenvolvimento motor',
        'Rotina de cuidados',
        'Música e movimento',
        'Contação de histórias'
      ],
      color: 'from-blue-400 to-blue-600'
    },
    {
      age: '2 a 3 anos',
      title: 'Maternal I',
      description: 'Desenvolvimento da autonomia e primeiras interações sociais em ambiente seguro e estimulante.',
      activities: [
        'Desenvolvimento da fala',
        'Coordenação motora',
        'Socialização',
        'Artes e pintura',
        'Brincadeiras dirigidas'
      ],
      color: 'from-blue-400 to-blue-600'
    },
    {
      age: '3 a 4 anos',
      title: 'Maternal II',
      description: 'Ampliação do vocabulário e desenvolvimento da criatividade através de atividades lúdicas.',
      activities: [
        'Linguagem oral',
        'Coordenação fina',
        'Jogos educativos',
        'Teatro e dramatização',
        'Educação musical'
      ],
      color: 'from-blue-400 to-blue-600'
    },
    {
      age: '4 a 5 anos',
      title: 'Pré I',
      description: 'Preparação para a alfabetização com atividades que desenvolvem a prontidão para a escrita.',
      activities: [
        'Pré-alfabetização',
        'Conceitos matemáticos',
        'Ciências naturais',
        'Educação física',
        'Projetos temáticos'
      ],
      color: 'from-green-400 to-green-600'
    },
    {
      age: '5 a 6 anos',
      title: 'Pré II',
      description: 'Consolidação dos conhecimentos e preparação para o ensino fundamental.',
      activities: [
        'Alfabetização',
        'Matemática básica',
        'Estudos sociais',
        'Experimentos científicos',
        'Preparação escolar'
      ],
      color: 'from-orange-400 to-orange-600'
    }
  ];

  return (
    <div className="min-h-screen text-slate-900">
      {/* Hero Section */}
      <section className="relative pt-24 pb-28 lg:pt-32 lg:pb-36">
        <div className="absolute inset-0 -z-20">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-400/30 rounded-full blur-[100px]" />
          <div className="absolute top-[20%] right-0 w-[400px] h-[400px] bg-yellow-400/30 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-[20%] w-[600px] h-[600px] bg-pink-400/20 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 right-[10%] w-[300px] h-[300px] bg-green-400/20 rounded-full blur-[70px]" />
        </div>
        
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
          <div className="text-center space-y-6 max-w-4xl mx-auto bg-transparent">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 leading-tight tracking-tighter">
              Proposta Pedagógica
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
              Uma metodologia que respeita cada criança como única, promovendo um aprendizado 
              significativo, prazeroso e cheio de descobertas. Aqui, seu filho cresce feliz!
            </p>
          </div>
        </div>
      </section>

      {/* Metodologia */}
      <section className="relative py-24">
        <div className="absolute inset-0 -z-20">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-400/30 rounded-full blur-[100px]" />
          <div className="absolute top-[20%] right-0 w-[400px] h-[400px] bg-yellow-400/30 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-[20%] w-[600px] h-[600px] bg-pink-400/20 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 right-[10%] w-[300px] h-[300px] bg-green-400/20 rounded-full blur-[70px]" />
        </div>
        
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
              Nossa Metodologia
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
              Trabalhamos com uma abordagem holística que contempla todos os aspectos 
              do desenvolvimento infantil, criando uma base sólida para o futuro.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {methodology.map((item, index) => (
              <Card
                key={index}
                className="border-2 border-white/80 border-t-4 border-t-blue-400/60 shadow-[0_30px_60px_-15px_rgba(180,160,100,0.2)] hover:shadow-[0_40px_80px_-15px_rgba(180,160,100,0.3)] hover:-translate-y-2 transition-all duration-300 ease-out bg-white rounded-[3rem] group"
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-3`}>
                      <item.icon className={`h-10 w-10 ${item.iconColor} transition-transform duration-300 group-hover:-translate-y-1`} />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-slate-900 tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-base text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="relative py-24">
        <div className="absolute inset-0 -z-20">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-400/30 rounded-full blur-[100px]" />
          <div className="absolute top-[20%] right-0 w-[400px] h-[400px] bg-yellow-400/30 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-[20%] w-[600px] h-[600px] bg-pink-400/20 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 right-[10%] w-[300px] h-[300px] bg-green-400/20 rounded-full blur-[70px]" />
        </div>
        
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
              Nossos Diferenciais
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
              Atividades especiais que enriquecem o desenvolvimento das crianças
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {differentials.map((differential, index) => (
              <Card
                key={index}
                className="border-2 border-white/80 border-t-4 border-t-blue-400/60 shadow-[0_30px_60px_-15px_rgba(180,160,100,0.2)] hover:shadow-[0_40px_80px_-15px_rgba(180,160,100,0.3)] hover:-translate-y-2 transition-all duration-300 ease-out bg-white rounded-[3rem] group"
              >
                <CardContent className="p-8 text-center">
                  <div className={`w-20 h-20 bg-gradient-to-br ${differential.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-3`}>
                    <differential.icon className={`h-10 w-10 ${differential.iconColor} transition-transform duration-300 group-hover:-translate-y-1`} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">
                    {differential.title}
                  </h3>
                  <p className="text-base text-slate-600 leading-relaxed">
                    {differential.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Faixas Etárias */}
      <section className="relative py-24">
        <div className="absolute inset-0 -z-20">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-400/30 rounded-full blur-[100px]" />
          <div className="absolute top-[20%] right-0 w-[400px] h-[400px] bg-yellow-400/30 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-[20%] w-[600px] h-[600px] bg-pink-400/20 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 right-[10%] w-[300px] h-[300px] bg-green-400/20 rounded-full blur-[70px]" />
        </div>
        
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
              Faixas Etárias e Atividades
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
              Cada idade tem suas particularidades e necessidades específicas
            </p>
          </div>
          
          <div className="space-y-8">
            {ageGroups.map((group, index) => (
              <Card key={index} className="overflow-hidden bg-white shadow-md hover:shadow-xl hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300 ease-out border border-slate-100 rounded-2xl">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-3">
                    <div className={`bg-gradient-to-br ${group.color} p-8 text-white relative`}>
                      <div className="absolute top-4 right-4 opacity-20">
                        <Star className="h-6 w-6 fill-white" />
                      </div>
                      <div className="text-center relative z-10">
                        <h3 className="text-2xl font-bold mb-2 tracking-tight">{group.title}</h3>
                        <p className="text-lg opacity-90 mb-4">{group.age}</p>
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm">
                          <BookOpen className="h-8 w-8" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-2 p-8">
                      <p className="text-slate-600 mb-6 leading-relaxed text-base">
                        {group.description}
                      </p>
                      
                      <h4 className="text-xl font-semibold text-slate-900 mb-4 tracking-tight">
                        Principais Atividades:
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {group.activities.map((activity, actIndex) => (
                          <div key={actIndex} className="flex items-center gap-2">
                            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                            <span className="text-slate-600">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rotina Pedagógica */}
      <section className="relative py-24">
        <div className="absolute inset-0 -z-20">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-400/30 rounded-full blur-[100px]" />
          <div className="absolute top-[20%] right-0 w-[400px] h-[400px] bg-yellow-400/30 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-[20%] w-[600px] h-[600px] bg-pink-400/20 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 right-[10%] w-[300px] h-[300px] bg-green-400/20 rounded-full blur-[70px]" />
        </div>
        
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
              Rotina Pedagógica
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
              Uma rotina estruturada que proporciona segurança e desenvolvimento
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <Card className="border-2 border-white/80 border-t-4 border-t-yellow-400/60 shadow-[0_30px_60px_-15px_rgba(180,160,100,0.2)] hover:shadow-[0_40px_80px_-15px_rgba(180,160,100,0.3)] hover:-translate-y-2 transition-all duration-300 ease-out bg-white rounded-[3rem] group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-3">
                  <Sparkles className="h-10 w-10 text-yellow-500 transition-transform duration-300 group-hover:-translate-y-1" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4 tracking-tight">
                  Manhã (7h às 12h)
                </h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    Acolhida e roda de conversa
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    Atividades pedagógicas dirigidas
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    Lanche da manhã
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    Recreação livre
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    Atividades artísticas
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    Almoço
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-white/80 border-t-4 border-t-green-400/60 shadow-[0_30px_60px_-15px_rgba(180,160,100,0.2)] hover:shadow-[0_40px_80px_-15px_rgba(180,160,100,0.3)] hover:-translate-y-2 transition-all duration-300 ease-out bg-white rounded-[3rem] group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-3">
                  <Heart className="h-10 w-10 text-green-600 transition-transform duration-300 group-hover:-translate-y-1" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4 tracking-tight">
                  Tarde (13h às 18h)
                </h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-green-500 fill-green-500" />
                    Descanso/Sono
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-green-500 fill-green-500" />
                    Lanche da tarde
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-green-500 fill-green-500" />
                    Atividades lúdicas
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-green-500 fill-green-500" />
                    Educação física
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-green-500 fill-green-500" />
                    Projetos especiais
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-green-500 fill-green-500" />
                    Saída
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-white/80 border-t-4 border-t-blue-400/60 shadow-[0_30px_60px_-15px_rgba(180,160,100,0.2)] hover:shadow-[0_40px_80px_-15px_rgba(180,160,100,0.3)] hover:-translate-y-2 transition-all duration-300 ease-out bg-white rounded-[3rem] group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-3">
                  <Sparkles className="h-10 w-10 text-blue-600 transition-transform duration-300 group-hover:-translate-y-1" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4 tracking-tight">
                  Integral (7h às 18h)
                </h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-blue-500 fill-blue-500" />
                    Todas as atividades dos períodos
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-blue-500 fill-blue-500" />
                    Acompanhamento personalizado
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-blue-500 fill-blue-500" />
                    Atividades extras
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-blue-500 fill-blue-500" />
                    Apoio pedagógico
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-blue-500 fill-blue-500" />
                    Cuidados especiais
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-blue-500 fill-blue-500" />
                    Flexibilidade de horários
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Avaliação */}
      <section className="relative py-24">
        <div className="absolute inset-0 -z-20">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-400/30 rounded-full blur-[100px]" />
          <div className="absolute top-[20%] right-0 w-[400px] h-[400px] bg-yellow-400/30 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-[20%] w-[600px] h-[600px] bg-pink-400/20 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 right-[10%] w-[300px] h-[300px] bg-green-400/20 rounded-full blur-[70px]" />
        </div>
        
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
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              Acompanhamento e Avaliação
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-6 tracking-tight">
                Como acompanhamos o desenvolvimento
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Observação Contínua</h4>
                    <p className="text-slate-600">Acompanhamento diário das atividades e progressos de cada criança.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Portfólio Individual</h4>
                    <p className="text-slate-600">Registro das atividades e evolução através de fotos e trabalhos.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Reuniões com Pais</h4>
                    <p className="text-slate-600">Encontros regulares para compartilhar o desenvolvimento da criança.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Relatórios Semestrais</h4>
                    <p className="text-slate-600">Documentos detalhados sobre o progresso em todas as áreas.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/40 backdrop-blur-xl rounded-[3rem] p-8 shadow-[0_30px_60px_-15px_rgba(180,160,100,0.2)] border-2 border-white/80">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-slate-900 mb-4 tracking-tight">
                  Nosso Compromisso
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Acreditamos que cada criança é única e tem seu próprio ritmo de desenvolvimento. 
                  Nossa avaliação é sempre construtiva, focando nos progressos e potencialidades, 
                  nunca em comparações ou julgamentos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="relative py-28 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-600">
        <div className="absolute inset-0 -z-20">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-400/30 rounded-full blur-[100px]" />
          <div className="absolute top-[20%] right-0 w-[400px] h-[400px] bg-yellow-400/30 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-[20%] w-[600px] h-[600px] bg-pink-400/20 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 right-[10%] w-[300px] h-[300px] bg-green-400/20 rounded-full blur-[70px]" />
        </div>
        
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
              Vamos cuidar do desenvolvimento do seu tesouro mais precioso?
            </h2>
            <p className="text-lg md:text-xl text-blue-50 leading-relaxed font-medium">
              Agende uma visita e venha conhecer de perto nossa proposta pedagógica. 
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

export default PropostaPedagogica;