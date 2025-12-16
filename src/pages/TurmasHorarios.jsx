import { Link } from 'react-router-dom';
import { Clock, Users, Calendar, Phone, Sparkles, Star, Heart, Pencil } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const TurmasHorarios = () => {
  const classes = [
    {
      age: '4 meses a 2 anos',
      title: 'Berçário',
      description: 'Cuidados especializados para bebês com foco no desenvolvimento sensorial, motor e afetivo.',
      schedule: 'Integral: 7h às 18h'
    },
    {
      age: '2 a 3 anos',
      title: 'Maternal I',
      description: 'Desenvolvimento da autonomia e primeiras interações sociais em ambiente seguro e estimulante.',
      schedule: 'Manhã: 7h às 12h | Tarde: 13h às 18h | Integral: 7h às 18h'
    },
    {
      age: '3 a 4 anos',
      title: 'Maternal II',
      description: 'Ampliação do vocabulário e desenvolvimento da criatividade através de atividades lúdicas.',
      schedule: 'Manhã: 7h às 12h | Tarde: 13h às 18h | Integral: 7h às 18h'
    },
    {
      age: '4 a 5 anos',
      title: 'Pré I',
      description: 'Preparação para a alfabetização com atividades que desenvolvem a prontidão para a escrita.',
      schedule: 'Manhã: 7h às 12h | Tarde: 13h às 18h | Integral: 7h às 18h'
    },
    {
      age: '5 a 6 anos',
      title: 'Pré II',
      description: 'Consolidação dos conhecimentos e preparação completa para o ensino fundamental.',
      schedule: 'Manhã: 7h às 12h | Tarde: 13h às 18h | Integral: 7h às 18h'
    }
  ];

  const schedules = [
    {
      period: 'Manhã',
      time: '7h às 12h',
      activities: ['Acolhida', 'Atividades pedagógicas', 'Lanche', 'Recreação', 'Saída'],
      color: 'from-yellow-50 to-yellow-100',
      iconColor: 'text-yellow-500',
    },
    {
      period: 'Tarde',
      time: '13h às 18h',
      activities: ['Acolhida', 'Descanso', 'Lanche', 'Atividades lúdicas', 'Saída'],
      color: 'from-green-50 to-green-100',
      iconColor: 'text-green-600',
    },
    {
      period: 'Integral',
      time: '7h às 18h',
      activities: ['Todas as atividades', 'Almoço', 'Descanso', 'Atividades extras', 'Saída'],
      color: 'from-blue-50 to-blue-100',
      iconColor: 'text-blue-600',
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
              Turmas e Horários
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
              Encontre a turma perfeita para seu filho! Temos opções flexíveis que se adaptam 
              perfeitamente à rotina da sua família.
            </p>
          </div>
        </div>
      </section>

      {/* Opções de Horário */}
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
              Opções de Horário
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
              Escolha o período que melhor se adapta à sua rotina
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {schedules.map((schedule, index) => (
              <Card key={index} className="border-2 border-white/80 border-t-4 border-t-blue-400/60 shadow-[0_30px_60px_-15px_rgba(180,160,100,0.2)] hover:shadow-[0_40px_80px_-15px_rgba(180,160,100,0.3)] hover:-translate-y-2 transition-all duration-300 ease-out bg-white rounded-[3rem] group">
                <CardContent className="p-8 text-center">
                  <div className={`w-20 h-20 bg-gradient-to-br ${schedule.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-3`}>
                    <Clock className={`h-10 w-10 ${schedule.iconColor} transition-transform duration-300 group-hover:-translate-y-1`} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">
                    {schedule.period}
                  </h3>
                  <p className={`text-lg ${schedule.iconColor} font-semibold mb-6`}>{schedule.time}</p>
                  <ul className="space-y-2 text-base text-slate-600 text-left">
                    {schedule.activities.map((activity, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Star className={`h-4 w-4 ${schedule.iconColor} fill-current`} />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Turmas */}
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
              Nossas Turmas
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
              Organizadas por faixa etária para melhor desenvolvimento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {classes.map((classItem, index) => {
              const colors = [
                { bg: 'from-red-50 to-red-100', icon: 'text-red-500' },
                { bg: 'from-yellow-50 to-yellow-100', icon: 'text-yellow-500' },
                { bg: 'from-green-50 to-green-100', icon: 'text-green-600' },
                { bg: 'from-blue-50 to-blue-100', icon: 'text-blue-600' },
                { bg: 'from-purple-50 to-purple-100', icon: 'text-purple-500' },
              ];
              const colorScheme = colors[index % colors.length];
              
              return (
                <Card key={index} className="border-2 border-white/80 border-t-4 border-t-blue-400/60 shadow-[0_30px_60px_-15px_rgba(180,160,100,0.2)] hover:shadow-[0_40px_80px_-15px_rgba(180,160,100,0.3)] hover:-translate-y-2 transition-all duration-300 ease-out bg-white rounded-[3rem] group">
                  <CardContent className="p-8">
                    <div className={`w-20 h-20 bg-gradient-to-br ${colorScheme.bg} rounded-2xl flex items-center justify-center mb-6 shadow-sm transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-3`}>
                      <Users className={`h-10 w-10 ${colorScheme.icon} transition-transform duration-300 group-hover:-translate-y-1`} />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2 tracking-tight">
                      {classItem.title}
                    </h3>
                    <p className={`text-sm ${colorScheme.icon} font-medium mb-4`}>{classItem.age}</p>
                    <p className="text-base text-slate-600 leading-relaxed mb-4">
                      {classItem.description}
                    </p>
                    <p className="text-sm text-slate-600 font-medium">{classItem.schedule}</p>
                  </CardContent>
                </Card>
              );
            })}
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
              Vamos encontrar o horário perfeito para seu filho?
            </h2>
            <p className="text-lg md:text-xl text-blue-50 leading-relaxed font-medium">
              Entre em contato conosco! Estamos aqui para ajudar você a escolher a melhor opção 
              para sua família.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center pt-4">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="rounded-full px-10 py-3 text-md font-bold bg-white text-blue-700 hover:bg-blue-50 hover:scale-95 transition-all duration-300 ease-out"
              >
                <Link to="/contato">Agendar Visita</Link>
              </Button>
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="rounded-full px-10 py-3 text-md font-bold bg-white text-blue-700 hover:bg-blue-50 hover:scale-95 transition-all duration-300 ease-out"
              >
                <a href="tel:+55659935474200">
                  <Phone className="mr-2 h-5 w-5" />
                  Ligar Agora
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TurmasHorarios;
