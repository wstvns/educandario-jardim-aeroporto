import { Link } from 'react-router-dom';
import { Users, Heart, Award, Target, Eye, Lightbulb, Sparkles, Star, Pencil } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const QuemSomos = () => {
  const values = [
    {
      icon: Heart,
      title: 'Amor',
      description: 'Tratamos cada criança com carinho e dedicação, como se fosse nossa própria família.',
      color: 'from-red-50 to-red-100',
      iconColor: 'text-red-500',
    },
    {
      icon: Award,
      title: 'Excelência',
      description: 'Buscamos sempre a qualidade em tudo que fazemos, desde o ensino até o cuidado diário.',
      color: 'from-yellow-50 to-yellow-100',
      iconColor: 'text-yellow-500',
    },
    {
      icon: Users,
      title: 'Respeito',
      description: 'Valorizamos a individualidade de cada criança e respeitamos seu ritmo de desenvolvimento.',
      color: 'from-blue-50 to-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      icon: Lightbulb,
      title: 'Inovação',
      description: 'Utilizamos metodologias modernas e criativas para tornar o aprendizado mais prazeroso.',
      color: 'from-green-50 to-green-100',
      iconColor: 'text-green-600',
    }
  ];

  const team = [
    {
      name: 'Elcy Rejane Pereira da Costa',
      role: 'Diretora Pedagógica',
      education: 'Advocacia',
      experience: '15 anos de experiência',
      description: 'Apaixonada pela educação infantil, dedica-se a criar um ambiente acolhedor e estimulante.'
    },
    /*{
      name: 'Franklin Benedito Ferreira',
      role: 'Sócio Diretor',
      education: 'Pedagogia e Psicopedagogia',
      experience: '12 anos de experiência',
      description: 'Especialista em desenvolvimento infantil, acompanha de perto o progresso de cada criança.'
    },/*
    /*{
      name: 'Juliana Oliveira',
      role: 'Professora do Berçário',
      education: 'Pedagogia com especialização em Primeira Infância',
      experience: '8 anos de experiência',
      description: 'Cuidado especializado para os bebês, com muito amor e atenção aos detalhes.'
    },
    {
      name: 'Fernanda Costa',
      role: 'Professora do Maternal',
      education: 'Pedagogia e Artes',
      experience: '10 anos de experiência',
      description: 'Combina criatividade e pedagogia para estimular o desenvolvimento das crianças.'
    },
    {
      name: 'Carla Mendes',
      role: 'Professora do Pré-Escolar',
      education: 'Pedagogia com especialização em Alfabetização',
      experience: '14 anos de experiência',
      description: 'Prepara as crianças para o ensino fundamental com metodologias lúdicas e eficazes.'
    },
    {
      name: 'Roberto Lima',
      role: 'Professor de Educação Física',
      education: 'Educação Física com especialização em Psicomotricidade',
      experience: '9 anos de experiência',
      description: 'Desenvolve a coordenação motora e habilidades físicas através de brincadeiras.'
    }*/
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
              Quem Somos
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
              Uma escola feita com amor, onde cada criança é única e especial. 
              Conheça a história e as pessoas que fazem do Educandário Jardim Aeroporto um lugar especial para seu filho.
            </p>
          </div>
        </div>
      </section>

      {/* História */}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Nossa História
              </h2>
              <div className="space-y-5 text-base text-slate-600 leading-relaxed">
                <p>
                  O Educandário Jardim Aeroporto nasceu em 2021 do sonho de criar um espaço 
                  onde as crianças pudessem crescer e aprender em um ambiente acolhedor, 
                  seguro e estimulante. Fundado por educadores apaixonados pela primeira 
                  infância, nossa escola começou pequena, mas com grandes ideais.
                </p>
                <p>
                  Ao longo dos anos, crescemos não apenas em tamanho, mas em experiência 
                  e conhecimento. Cada criança que passou por aqui deixou sua marca e 
                  contribuiu para que nos tornássemos a escola que somos hoje: um lugar 
                  onde o cuidado, o carinho e a educação de qualidade caminham juntos.
                </p>
                <p>
                  Hoje, com mais de 4 anos de história, continuamos fiéis aos nossos 
                  valores originais, sempre buscando inovar e oferecer o melhor para 
                  nossas crianças e suas famílias. Somos mais que uma escola - somos 
                  uma grande família.
                </p>
              </div>
            </div>
            <div className="relative lg:pl-8">
              <div className="bg-white/40 backdrop-blur-xl rounded-[3rem] p-10 shadow-[0_30px_60px_-15px_rgba(180,160,100,0.2)] hover:shadow-[0_40px_80px_-15px_rgba(180,160,100,0.3)] hover:-translate-y-2 transition-all duration-300 ease-out border-2 border-white/80">
                <div className="bg-white/30 backdrop-blur-md rounded-[3rem] p-8 text-center border-2 border-white/60">
                  <div className="text-5xl md:text-6xl font-bold text-blue-600 mb-4">
                    2021
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">
                    Ano de Fundação
                  </h3>
                  <p className="text-base text-slate-600 font-medium">
                    Há anos dedicada à educação infantil de qualidade
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
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
              Missão, Visão e Valores
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 mb-20">
            <Card className="border-2 border-white/80 border-t-4 border-t-blue-400/60 shadow-[0_30px_60px_-15px_rgba(180,160,100,0.2)] hover:shadow-[0_40px_80px_-15px_rgba(180,160,100,0.3)] hover:-translate-y-2 transition-all duration-300 ease-out bg-white rounded-[3rem] group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-3">
                  <Target className="h-10 w-10 text-blue-600 transition-transform duration-300 group-hover:-translate-y-1" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Missão</h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Proporcionar uma educação infantil de qualidade, baseada no amor, 
                  respeito e cuidado, contribuindo para o desenvolvimento integral 
                  de cada criança em suas dimensões cognitiva, emocional, social e física.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-white/80 border-t-4 border-t-green-400/60 shadow-[0_30px_60px_-15px_rgba(180,160,100,0.2)] hover:shadow-[0_40px_80px_-15px_rgba(180,160,100,0.3)] hover:-translate-y-2 transition-all duration-300 ease-out bg-white rounded-[3rem] group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-3">
                  <Eye className="h-10 w-10 text-green-600 transition-transform duration-300 group-hover:-translate-y-1" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Visão</h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Ser reconhecida como referência em educação infantil na região, 
                  formando cidadãos críticos, criativos e felizes, preparados para 
                  os desafios do futuro com valores sólidos e amor pelo aprendizado.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-white/80 border-t-4 border-t-red-400/60 shadow-[0_30px_60px_-15px_rgba(180,160,100,0.2)] hover:shadow-[0_40px_80px_-15px_rgba(180,160,100,0.3)] hover:-translate-y-2 transition-all duration-300 ease-out bg-white rounded-[3rem] group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-3">
                  <Heart className="h-10 w-10 text-red-500 transition-transform duration-300 group-hover:-translate-y-1" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Valores</h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Amor, respeito, excelência, inovação, transparência, 
                  responsabilidade social e compromisso com o desenvolvimento 
                  integral de cada criança e o bem-estar de suas famílias.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-2 border-white/80 border-t-4 border-t-blue-400/60 shadow-[0_30px_60px_-15px_rgba(180,160,100,0.2)] hover:shadow-[0_40px_80px_-15px_rgba(180,160,100,0.3)] hover:-translate-y-2 transition-all duration-300 ease-out bg-white rounded-[3rem]"
              >
                <CardContent className="p-8 text-center group">
                  <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-3`}>
                    <value.icon className={`h-10 w-10 ${value.iconColor} transition-transform duration-300 group-hover:-translate-y-1`} />
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">
                    {value.title}
                  </h4>
                  <p className="text-base text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe */}
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
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative bg-transparent">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              Nossa Equipe
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
              Profissionais qualificados e apaixonados pela educação infantil, 
              dedicados ao desenvolvimento e bem-estar de cada criança.
            </p>
          </div>
          
          {/* (Para uso quando decidir colocar mais professores, se for o caso) 
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white dark:bg-gray-800">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-200 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                      {member.role}
                    </p>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-semibold text-gray-700 dark:text-gray-300">Formação: </span>
                      <span className="text-gray-600 dark:text-gray-400">{member.education}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700 dark:text-gray-300">Experiência: </span>
                      <span className="text-gray-600 dark:text-gray-400">{member.experience}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mt-3 leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 max-w-sm w-full gap-8">
              {team.map((member, index) => (
                <Card
                  key={index}
                  className="border-2 border-white/80 border-t-4 border-t-blue-400/60 shadow-[0_30px_60px_-15px_rgba(180,160,100,0.2)] hover:shadow-[0_40px_80px_-15px_rgba(180,160,100,0.3)] hover:-translate-y-2 transition-all duration-300 ease-out bg-white rounded-[3rem] group"
                >
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-3">
                      <Users className="h-10 w-10 text-blue-600 transition-transform duration-300 group-hover:-translate-y-1" />
                      </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-1 tracking-tight">
                        {member.name}
                      </h3>
                    <p className="text-blue-600 font-semibold mb-2">
                        {member.role}
                      </p>
                    </div>
                    
                    <div className="space-y-2 text-base">
                      <div>
                        <span className="font-semibold text-slate-900">Formação: </span>
                        <span className="text-slate-600">{member.education}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-slate-900">Experiência: </span>
                        <span className="text-slate-600">{member.experience}</span>
                      </div>
                      <p className="text-slate-600 mt-3 leading-relaxed">
                        {member.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Infraestrutura */}
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
              Nossa Infraestrutura
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
              Espaços pensados especialmente para o desenvolvimento e bem-estar das crianças
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <Card className="border-2 border-white/80 border-t-4 border-t-blue-400/60 shadow-[0_30px_60px_-15px_rgba(180,160,100,0.2)] hover:shadow-[0_40px_80px_-15px_rgba(180,160,100,0.3)] hover:-translate-y-2 transition-all duration-300 ease-out bg-white rounded-[3rem] group">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-3">
                    <Sparkles className="h-10 w-10 text-blue-600 transition-transform duration-300 group-hover:-translate-y-1" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">
                  Salas de Aula Climatizadas
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Ambientes confortáveis e adaptados para cada faixa etária
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-white/80 border-t-4 border-t-green-400/60 shadow-[0_30px_60px_-15px_rgba(180,160,100,0.2)] hover:shadow-[0_40px_80px_-15px_rgba(180,160,100,0.3)] hover:-translate-y-2 transition-all duration-300 ease-out bg-white rounded-[3rem] group">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-3">
                    <Star className="h-10 w-10 text-green-600 fill-green-600 transition-transform duration-300 group-hover:-translate-y-1" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">
                  Playground Seguro
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Área de recreação com brinquedos adequados, piso emborrachado e área verde com bastante natureza
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-white/80 border-t-4 border-t-yellow-400/60 shadow-[0_30px_60px_-15px_rgba(180,160,100,0.2)] hover:shadow-[0_40px_80px_-15px_rgba(180,160,100,0.3)] hover:-translate-y-2 transition-all duration-300 ease-out bg-white rounded-[3rem] group">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-3">
                    <Heart className="h-10 w-10 text-yellow-500 transition-transform duration-300 group-hover:-translate-y-1" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">
                  Refeitório
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Espaço para refeições com cardápio balanceado e nutritivo
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-white/80 border-t-4 border-t-red-400/60 shadow-[0_30px_60px_-15px_rgba(180,160,100,0.2)] hover:shadow-[0_40px_80px_-15px_rgba(180,160,100,0.3)] hover:-translate-y-2 transition-all duration-300 ease-out bg-white rounded-[3rem] group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-3">
                  <Heart className="h-10 w-10 text-red-500 transition-transform duration-300 group-hover:-translate-y-1" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">
                  Sala de Descanso
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Ambiente tranquilo para o sono e descanso dos pequenos
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-white/80 border-t-4 border-t-green-400/60 shadow-[0_30px_60px_-15px_rgba(180,160,100,0.2)] hover:shadow-[0_40px_80px_-15px_rgba(180,160,100,0.3)] hover:-translate-y-2 transition-all duration-300 ease-out bg-white rounded-[3rem] group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-3">
                  <Sparkles className="h-10 w-10 text-green-600 transition-transform duration-300 group-hover:-translate-y-1" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">
                  Área Verde
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Jardim com plantas e espaço para atividades ao ar livre
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-white/80 border-t-4 border-t-blue-400/60 shadow-[0_30px_60px_-15px_rgba(180,160,100,0.2)] hover:shadow-[0_40px_80px_-15px_rgba(180,160,100,0.3)] hover:-translate-y-2 transition-all duration-300 ease-out bg-white rounded-[3rem] group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-3">
                  <Award className="h-10 w-10 text-blue-600 transition-transform duration-300 group-hover:-translate-y-1" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">
                  Sistema de Segurança
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Câmeras de monitoramento interno
                </p>
              </CardContent>
            </Card>
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
              Venha conhecer nossa escola pessoalmente!
            </h2>
            <p className="text-lg md:text-xl text-blue-50 leading-relaxed font-medium">
              Agende uma visita e venha conhecer de perto o <span className="text-yellow-300 font-semibold">carinho</span> e{' '}
              <span className="text-amber-300 font-semibold">dedicação</span> que dedicamos a cada criança.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center pt-4">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="rounded-full px-10 py-3 text-md font-bold bg-white text-blue-700 hover:bg-red-500 hover:text-white hover:scale-95 transition-all duration-300 ease-out"
              >
                <Link to="/contato">Agende uma Visita</Link>
              </Button>
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="rounded-full px-10 py-3 text-md font-bold bg-white text-blue-700 hover:bg-green-500 hover:text-white hover:scale-95 transition-all duration-300 ease-out"
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

export default QuemSomos;
