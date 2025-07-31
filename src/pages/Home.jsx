import { Link } from 'react-router-dom';
import { ArrowRight, Users, Heart, Star, BookOpen, Shield, GraduationCap, NotebookPen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Home = () => {
  const features = [
    {
      icon: Heart,
      title: 'Cuidado com Amor',
      description: 'Cada criança é tratada com carinho e atenção individualizada',
    },
    {
      icon: BookOpen,
      title: 'Educação de Qualidade',
      description: 'Metodologia pedagógica moderna e adaptada para cada faixa etária',
    },
    {
      icon: Shield,
      title: 'Ambiente Seguro',
      description: 'Instalações seguras e monitoradas para tranquilidade dos pais',
    },
    {
      icon: Users,
      title: 'Equipe Qualificada',
      description: 'Profissionais experientes e especializados em educação infantil',
    },
  ];

  const testimonials = [
    {
      name: 'Tecka Grossa',
      text: 'Meu filho ama a escola! O cuidado e carinho da equipe são excepcionais.',
      rating: 5,
    },
    {
      name: 'Maurício Pizza',
      text: 'Excelente estrutura e metodologia. Recomendo para todos os pais!',
      rating: 5,
    },
    {
      name: 'Juliana C. Pizza',
      text: 'O desenvolvimento do meu filho foi incrível desde que começou aqui.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-100 via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-white/20 dark:bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="max-w-4xl mx-auto text-center lg:text-left">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white leading-tight mb-6">
                  Educação Infantil com Amor e Cuidado
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  No Educandário Jardim Aeroporto, cada criança é única e especial.
                  Oferecemos um ambiente acolhedor e estimulante para o desenvolvimento integral dos pequenos.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-blue-500 hover:from-blue-600 hover:to-blue-600 text-white rounded-full px-8 py-3 text-lg"
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
                    className="border-2 border-blue-300 dark:border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900 rounded-full px-8 py-3 text-lg"
                  >
                    <Link to="/quem-somos">Conheça Nossa História</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 dark:from-gray-700 dark:to-gray-600 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center">
                  <div className="w-28 h-28 flex items-center justify-center mx-auto mb-6">
                    <img src="/favicon.png" alt="Logo" className="w-full h-full object-cover" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Educandário Jardim Aeroporto</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-8">Mais de 4 anos cuidando e educando crianças</p>
                  <div className="flex justify-center space-x-4 text-sm">
                    <div className="text-center">
                      <div className="font-bold text-blue-600 dark:text-blue-400">35+</div>
                      <div className="text-gray-600 dark:text-gray-300">Crianças</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-blue-600 dark:text-blue-400">5+</div>
                      <div className="text-gray-600 dark:text-gray-300">Professores</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-red-600 dark:text-red-400">4+</div>
                      <div className="text-gray-600 dark:text-gray-300">Anos</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Por que escolher nossa Escola?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Nosso compromisso é oferecer o melhor para seu filho, com uma educação de qualidade em um ambiente seguro e acolhedor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-50 dark:from-gray-800 dark:to-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">35+</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Crianças Felizes</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">5+</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Professores</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">4+</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Anos de Experiência</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-green-600 dark:text-green-400 mb-2">100%</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Satisfação</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">O que os pais dizem</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">Depoimentos de famílias que confiam em nosso trabalho</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white dark:bg-gray-800">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                  <div className="font-semibold text-gray-800 dark:text-white">{testimonial.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-700 dark:to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Pronto para fazer parte da nossa família?</h2>
            <p className="text-xl text-blue-100 dark:text-blue-200 mb-8">
              Venha conhecer nossa escola e descubra como podemos contribuir para o desenvolvimento do seu filho.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 dark:bg-gray-200 dark:text-blue-700 dark:hover:bg-gray-100 rounded-full px-8 py-3 text-lg font-semibold"
              >
                <Link to="/contato">Agende uma Visita</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 dark:border-gray-300 dark:text-gray-100 dark:hover:bg-gray-200 dark:hover:text-blue-700 rounded-full px-8 py-3 text-lg"
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