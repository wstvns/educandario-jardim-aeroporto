import { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Star, Camera, ArrowRight, Sparkles, Heart, Pencil } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const EventosNoticias = () => {
  const [activeTab, setActiveTab] = useState('proximos');

  const upcomingEvents = [
    {
      id: 1,
      title: 'Festa da Primavera',
      date: '2024-09-21',
      time: '14h às 17h',
      location: 'Pátio da escola',
      description: 'Celebração da chegada da primavera com apresentações das crianças, atividades ao ar livre e muita diversão.',
      category: 'Festa',
      participants: 'Todas as turmas',
      image: '/api/placeholder/400/250',
      highlights: [
        'Apresentações musicais',
        'Oficinas de jardinagem',
        'Lanche coletivo',
        'Brincadeiras ao ar livre'
      ]
    },
    {
      id: 2,
      title: 'Reunião de Pais - 2º Semestre',
      date: '2024-08-15',
      time: '19h às 21h',
      location: 'Auditório da escola',
      description: 'Reunião para apresentar o desenvolvimento das crianças no segundo semestre e planos para o próximo período.',
      category: 'Reunião',
      participants: 'Pais e responsáveis',
      image: '/api/placeholder/400/250',
      highlights: [
        'Relatório de desenvolvimento',
        'Apresentação de projetos',
        'Planejamento futuro',
        'Espaço para dúvidas'
      ]
    },
    {
      id: 3,
      title: 'Dia da Criança - Programação Especial',
      date: '2024-10-12',
      time: '8h às 17h',
      location: 'Toda a escola',
      description: 'Dia especial com atividades lúdicas, apresentações, brincadeiras e surpresas para celebrar o Dia da Criança.',
      category: 'Comemoração',
      participants: 'Todas as crianças',
      image: '/api/placeholder/400/250',
      highlights: [
        'Recreação especial',
        'Teatro infantil',
        'Oficinas criativas',
        'Lanche temático'
      ]
    },
    {
      id: 4,
      title: 'Mostra Cultural',
      date: '2024-11-20',
      time: '15h às 18h',
      location: 'Pátio e salas de aula',
      description: 'Exposição dos trabalhos desenvolvidos pelas crianças durante o ano, com apresentações e atividades interativas.',
      category: 'Mostra',
      participants: 'Famílias e comunidade',
      image: '/api/placeholder/400/250',
      highlights: [
        'Exposição de trabalhos',
        'Apresentações artísticas',
        'Atividades interativas',
        'Confraternização'
      ]
    }
  ];

  const pastEvents = [
    {
      id: 5,
      title: 'Festa Junina 2024',
      date: '2024-06-29',
      description: 'Nossa tradicional festa junina foi um sucesso! As crianças se apresentaram com danças típicas e todos se divertiram muito.',
      category: 'Festa',
      image: '/api/placeholder/400/250',
      gallery: 15,
      highlights: [
        'Quadrilha das crianças',
        'Barraquinhas típicas',
        'Pescaria infantil',
        'Apresentação dos pais'
      ]
    },
    {
      id: 6,
      title: 'Dia das Mães',
      date: '2024-05-10',
      description: 'Celebração especial para homenagear as mamães com apresentações emocionantes e atividades em família.',
      category: 'Comemoração',
      image: '/api/placeholder/400/250',
      gallery: 12,
      highlights: [
        'Café da manhã especial',
        'Apresentações das crianças',
        'Entrega de lembranças',
        'Momento família'
      ]
    },
    {
      id: 7,
      title: 'Formatura Pré II - 2023',
      date: '2023-12-15',
      description: 'Cerimônia de formatura dos pequenos que estão seguindo para o ensino fundamental. Momento emocionante para toda a família escolar.',
      category: 'Formatura',
      image: '/api/placeholder/400/250',
      gallery: 25,
      highlights: [
        'Cerimônia de colação',
        'Apresentação especial',
        'Entrega de diplomas',
        'Confraternização'
      ]
    },
    {
      id: 8,
      title: 'Dia do Livro Infantil',
      date: '2024-04-18',
      description: 'Semana especial dedicada à literatura infantil com contação de histórias, teatro e atividades de leitura.',
      category: 'Educativo',
      image: '/api/placeholder/400/250',
      gallery: 8,
      highlights: [
        'Contação de histórias',
        'Teatro de fantoches',
        'Oficina de livros',
        'Visita de autor'
      ]
    }
  ];

  const news = [
    {
      id: 1,
      title: 'Nova Parceria com Biblioteca Municipal',
      date: '2024-07-20',
      content: 'Firmamos uma parceria com a Biblioteca Municipal para enriquecer ainda mais nossas atividades de leitura e literatura infantil.',
      category: 'Parceria'
    },
    {
      id: 2,
      title: 'Horta Pedagógica em Funcionamento',
      date: '2024-07-15',
      content: 'Nossa horta pedagógica está produzindo os primeiros frutos! As crianças estão aprendendo sobre sustentabilidade e alimentação saudável.',
      category: 'Projeto'
    },
    {
      id: 3,
      title: 'Novo Playground Inaugurado',
      date: '2024-07-01',
      content: 'Inauguramos nosso novo playground com equipamentos modernos e seguros, proporcionando ainda mais diversão e desenvolvimento motor.',
      category: 'Infraestrutura'
    }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  const getCategoryColor = (category) => {
    const colors = {
      Festa: 'bg-blue-100 text-blue-700',
      Reunião: 'bg-blue-100 text-blue-700',
      Comemoração: 'bg-blue-100 text-blue-700',
      Mostra: 'bg-green-100 text-green-700',
      Formatura: 'bg-orange-100 text-orange-700',
      Educativo: 'bg-indigo-100 text-indigo-700',
      Parceria: 'bg-teal-100 text-teal-700',
      Projeto: 'bg-emerald-100 text-emerald-700',
      Infraestrutura: 'bg-slate-100 text-slate-700',
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

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
              Eventos e Notícias
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
              Fique por dentro de todos os momentos especiais, comemorações e novidades 
              da nossa escola. Cada evento é uma celebração do crescimento e aprendizado!
            </p>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="flex bg-slate-100 rounded-full p-1">
              <button
                onClick={() => setActiveTab('proximos')}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 ease-out ${
                  activeTab === 'proximos'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                Próximos Eventos
              </button>
              <button
                onClick={() => setActiveTab('anteriores')}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 ease-out ${
                  activeTab === 'anteriores'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                Eventos Anteriores
              </button>
              <button
                onClick={() => setActiveTab('noticias')}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 ease-out ${
                  activeTab === 'noticias'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                Notícias
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Próximos Eventos */}
      {activeTab === 'proximos' && (
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
                Próximos Eventos
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
                Não perca os próximos eventos da nossa escola
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {upcomingEvents.map((event) => (
                <Card
                  key={event.id}
                  className="shadow-md hover:shadow-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] overflow-hidden bg-white border border-slate-100 rounded-2xl group"
                >
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(event.category)}`}>
                          {event.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">
                        {event.title}
                      </h3>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-slate-700">
                          <Calendar className="h-4 w-4 mr-2 text-blue-500" />
                          <span>{formatDate(event.date)}</span>
                        </div>
                        <div className="flex items-center text-slate-700">
                          <Clock className="h-4 w-4 mr-2 text-blue-500" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center text-slate-700">
                          <MapPin className="h-4 w-4 mr-2 text-blue-500" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center text-slate-700">
                          <Users className="h-4 w-4 mr-2 text-blue-500" />
                          <span>{event.participants}</span>
                        </div>
                      </div>
                      
                      <p className="text-slate-700 mb-4 leading-relaxed">
                        {event.description}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-slate-900 mb-2">Destaques:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {event.highlights.map((highlight, index) => (
                            <div key={index} className="flex items-center text-sm text-slate-700">
                              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                              {highlight}
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
      )}

      {/* Eventos Anteriores */}
      {activeTab === 'anteriores' && (
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
                Eventos Anteriores
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
                Relembre os momentos especiais que já vivemos
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pastEvents.map((event) => (
                <Card
                  key={event.id}
                  className="shadow-md hover:shadow-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] overflow-hidden bg-white border border-slate-100 rounded-2xl group"
                >
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(event.category)}`}>
                          {event.category}
                        </span>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center text-sm">
                          <Camera className="h-4 w-4 mr-1 text-blue-500" />
                          {event.gallery} fotos
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-semibold text-slate-900">
                          {event.title}
                        </h3>
                        <span className="text-sm text-slate-500">
                          {formatDate(event.date)}
                        </span>
                      </div>
                      
                      <p className="text-slate-700 mb-4 leading-relaxed">
                        {event.description}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-slate-900 mb-2">Destaques:</h4>
                        <div className="grid grid-cols-1 gap-1">
                          {event.highlights.map((highlight, index) => (
                            <div key={index} className="flex items-center text-sm text-slate-700">
                              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                              {highlight}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <Button 
                        asChild
                        variant="outline"
                        className="w-full border-blue-600 text-blue-700 hover:bg-blue-50"
                      >
                        <Link to="/galeria">
                          Ver Galeria de Fotos
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Notícias */}
      {activeTab === 'noticias' && (
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
                Últimas Notícias
              </h2>
              <p className="text-base md:text-lg text-slate-700">
                Fique por dentro das novidades da nossa escola
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-8">
              {news.map((item) => (
                <Card
                  key={item.id}
                  className="shadow-md hover:shadow-xl transition-all duration-200 ease-out hover:-translate-y-1 bg-white"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">
                          {item.title}
                        </h3>
                        <div className="flex items-center space-x-4">
                          <span className="text-slate-500 text-sm">
                            {formatDate(item.date)}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(item.category)}`}>
                            {item.category}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-700 leading-relaxed">
                      {item.content}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {}
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
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
            Não perca nenhum evento!
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Siga nossas redes sociais e mantenha-se sempre informado sobre 
            todos os eventos e novidades da nossa escola.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-3 text-base sm:text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200 ease-out hover:-translate-y-0.5"
            >
              <a 
                href="https://www.instagram.com/educandariojardimaeroport/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Seguir no Instagram
              </a>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-blue-600 text-blue-700 hover:bg-blue-50 rounded-full px-8 py-3 text-base sm:text-lg font-semibold transition-all duration-200 ease-out"
            >
              <Link to="/contato">
                Receber Informações
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventosNoticias;