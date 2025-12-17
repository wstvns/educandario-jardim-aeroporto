import { useState } from 'react';
import { Camera, Play, X, ChevronLeft, ChevronRight, Sparkles, Star, Heart, Pencil } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

const Galeria = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [selectedImage, setSelectedImage] = useState(null);
  
  useEffect(() => {
  if (selectedImage) {
    document.body.classList.add('modal-open');
  } else {
    document.body.classList.remove('modal-open');
  }

  return () => {
    document.body.classList.remove('modal-open');
  };
}, [selectedImage]);
  const categories = [
    { id: 'todos', name: 'Todos', count: 24 },
    { id: 'atividades', name: 'Atividades Pedagógicas', count: 8 },
    { id: 'recreacao', name: 'Recreação', count: 6 },
    { id: 'eventos', name: 'Eventos Especiais', count: 5 },
    { id: 'estrutura', name: 'Estrutura', count: 5 }
  ];

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      category: 'atividades',
      title: 'Atividade de Pintura',
      description: 'Crianças do Maternal II desenvolvendo a criatividade através da arte',
      thumbnail: '/api/placeholder/300/200',
      fullSize: '/api/placeholder/800/600'
    },
    {
      id: 2,
      type: 'image',
      category: 'recreacao',
      title: 'Brincadeira no Playground',
      description: 'Momento de diversão e desenvolvimento motor no parquinho',
      thumbnail: 'src/assets/sala-aula-infantil.jpg',
      fullSize: 'src/assets/sala-aula-infantil.jpg'
    },
    {
      id: 3,
      type: 'video',
      category: 'eventos',
      title: 'Festa Junina 2024',
      description: 'Apresentação das crianças na festa junina da escola',
      thumbnail: '/api/placeholder/300/200',
      duration: '2:30'
    },
    {
      id: 4,
      type: 'image',
      category: 'atividades',
      title: 'Aula de karatê',
      description: 'Desenvolvimento musical com instrumentos adaptados',
      thumbnail: '/api/placeholder/300/200',
      fullSize: '/api/placeholder/800/600'
    },
    {
      id: 5,
      type: 'image',
      category: 'estrutura',
      title: 'Sala do Berçário',
      description: 'Ambiente acolhedor e seguro para os bebês',
      thumbnail: '/api/placeholder/300/200',
      fullSize: '/api/placeholder/800/600'
    },
    {
      id: 6,
      type: 'image',
      category: 'atividades',
      title: 'Contação de Histórias',
      description: 'Momento mágico de leitura e imaginação',
      thumbnail: '/api/placeholder/300/200',
      fullSize: '/api/placeholder/800/600'
    },
    {
      id: 7,
      type: 'image',
      category: 'recreacao',
      title: 'Educação Física',
      description: 'Desenvolvimento motor através de atividades lúdicas',
      thumbnail: '/api/placeholder/300/200',
      fullSize: '/api/placeholder/800/600'
    },
    {
      id: 8,
      type: 'video',
      category: 'eventos',
      title: 'Formatura Pré II',
      description: 'Cerimônia de formatura dos pequenos',
      thumbnail: '/api/placeholder/300/200',
      duration: '5:15'
    },
    {
      id: 9,
      type: 'image',
      category: 'estrutura',
      title: 'Refeitório',
      description: 'Espaço para refeições saudáveis e nutritivas',
      thumbnail: '/api/placeholder/300/200',
      fullSize: '/api/placeholder/800/600'
    },
    {
      id: 10,
      type: 'image',
      category: 'atividades',
      title: 'Atividade de Ciências',
      description: 'Experimentos simples despertando a curiosidade',
      thumbnail: '/api/placeholder/300/200',
      fullSize: '/api/placeholder/800/600'
    },
    {
      id: 11,
      type: 'image',
      category: 'recreacao',
      title: 'Brincadeira Livre',
      description: 'Momentos de socialização e diversão',
      thumbnail: '/api/placeholder/300/200',
      fullSize: '/api/placeholder/800/600'
    },
    {
      id: 12,
      type: 'image',
      category: 'eventos',
      title: 'Dia das Mães',
      description: 'Celebração especial com as mamães',
      thumbnail: '/api/placeholder/300/200',
      fullSize: '/api/placeholder/800/600'
    }
  ];

  const filteredItems = selectedCategory === 'todos' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openModal = (item) => {
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedImage(filteredItems[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedImage(filteredItems[prevIndex]);
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
              Galeria
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
              Momentos especiais, sorrisos e descobertas! Veja um pouquinho do dia a dia 
              cheio de alegria e aprendizado das nossas crianças.
            </p>
          </div>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`rounded-full px-6 py-2 text-sm font-semibold transition-all duration-200 ease-out ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-md hover:bg-blue-700 hover:shadow-lg'
                    : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                {category.name}
                <span className="ml-2 text-xs bg-white/70 text-slate-700 px-2 py-0.5 rounded-full">
                  {category.count}
                </span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de Imagens */}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {filteredItems.map((item) => (
              <Card 
                key={item.id} 
                className="border-2 border-white/80 shadow-[0_30px_60px_-15px_rgba(180,160,100,0.2)] hover:shadow-[0_40px_80px_-15px_rgba(180,160,100,0.3)] hover:-translate-y-2 transition-all duration-300 ease-out cursor-pointer overflow-hidden bg-white rounded-[3rem] group"
                onClick={() => openModal(item)}
              >
                <CardContent className="p-0">
                  <div className="relative group">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      {item.type === 'video' ? (
                        <div className="text-center text-white">
                          <Play className="h-12 w-12 mx-auto mb-2" />
                          <span className="text-sm">{item.duration}</span>
                        </div>
                      ) : (
                        <Camera className="h-12 w-12 text-white" />
                      )}
                    </div>
                    
                    {/* Tipo de mídia */}
                    <div className="absolute top-3 right-3">
                      {item.type === 'video' ? (
                        <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs flex items-center">
                          <Play className="h-3 w-3 mr-1" />
                          Vídeo
                        </div>
                      ) : (
                        <div className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs flex items-center">
                          <Camera className="h-3 w-3 mr-1" />
                          Foto
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-semibold text-slate-900 mb-2 line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-slate-700 text-sm line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <Camera className="h-16 w-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-700 mb-2">
                Nenhum item encontrado
              </h3>
              <p className="text-slate-500">
                Não há itens nesta categoria no momento.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Modal de Visualização */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4 backdrop-blur-sm">
          {/* Fundo para fechar ao clicar fora da img*/}
          <div className="absolute inset-0" onClick={closeModal} />

          <div className="relative w-full max-w-4xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl z-10">
            
            {/*botao de fechar*/}
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 z-50 bg-white/80 hover:bg-red-500 hover:text-white text-slate-900 rounded-full p-2 transition-all duration-200 shadow-lg backdrop-blur-md"
            >
              <X className="h-6 w-6" />
            </button>

            {/* container pra midia*/}
            <div className="relative group">
              {selectedImage.type === 'video' ? (
                <div className="aspect-video bg-slate-900 flex items-center justify-center">
                  <div className="text-center">
                    <Play className="h-20 w-20 text-blue-500 mx-auto mb-4" />
                    <p className="text-white font-bold">{selectedImage.title}</p>
                  </div>
                </div>
              ) : (
                <img
                  src={selectedImage.fullSize}
                  alt={selectedImage.title}
                  className="w-full max-h-[70vh] object-cover"
                />
              )}

              {/* Setinhas*/}
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 backdrop-blur-sm transition-all"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
              
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 backdrop-blur-sm transition-all"
              >
                <ChevronRight className="h-8 w-8" />
              </button>
            </div>

            {/* Infos da img*/}
            <div className="p-8 bg-white">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Seção de Compartilhamento */}
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
            Acompanhe nosso dia a dia
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Siga nossas redes sociais para ver mais momentos especiais das crianças 
            e ficar por dentro de todas as novidades da escola.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full px-8 py-3 text-base sm:text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200 ease-out hover:-translate-y-0.5"
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
              className="bg-gradient-to-r from-emerald-500 to-green-600 text-white border-none rounded-full px-8 py-3 text-base sm:text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200 ease-out hover:-translate-y-0.5"
            >
              <a 
                href="https://api.whatsapp.com/message/SREIOJFRZZA2O1?autoload=1&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Galeria;