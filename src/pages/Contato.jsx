import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram, Send, User, MessageSquare, Star, Heart, Pencil } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contato = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      const numbersOnly = value.replace(/\D/g, '');
      
      let formattedPhone = numbersOnly;
      if (numbersOnly.length >= 2) {
        formattedPhone = `(${numbersOnly.slice(0, 2)}) ${numbersOnly.slice(2)}`;
      }
      if (numbersOnly.length >= 7) {
        formattedPhone = `(${numbersOnly.slice(0, 2)}) ${numbersOnly.slice(2, 7)}-${numbersOnly.slice(7, 11)}`;
      }
      
      if (numbersOnly.length <= 11) {
        setFormData(prev => ({
          ...prev,
          [name]: formattedPhone
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const subjectLabels = {
      'matricula': 'Informações sobre Matrícula',
      'visita': 'Agendar Visita',
      'valores': 'Consultar Valores',
      'pedagogico': 'Questões Pedagógicas',
      'outros': 'Outros'
    };

    const phoneNumbers = formData.phone.replace(/\D/g, '');
    const formattedPhoneForMessage = phoneNumbers.length === 11 
      ? `(${phoneNumbers.slice(0, 2)}) ${phoneNumbers.slice(2, 7)}-${phoneNumbers.slice(7)}`
      : formData.phone;

    const message = `🏫 *CONTATO PELO SITE - EDUCANDÁRIO JARDIM AEROPORTO*

👤 *Nome:* ${formData.name}
📧 *Email:* ${formData.email}  
📱 *Telefone:* ${formattedPhoneForMessage}
📋 *Assunto:* ${subjectLabels[formData.subject] || formData.subject}

💬 *Mensagem:* 
${formData.message}

---
_Mensagem enviada através do formulário do site_`;

    setTimeout(() => {
      const whatsappNumber = "5565993547420";
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;
      
      window.open(whatsappUrl, '_blank');
      
      setSubmitStatus('success');
      setIsSubmitting(false);
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      info: 'Rua João Líbano, 547\nCentro Norte\nVárzea Grande - MT, 78110-338',
      action: 'Ver no Mapa',
      link: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3841.92157752885!2d-56.128020524872866!3d-15.649163984971146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939dad3a42bf5161%3A0x262bc42f67662c38!2sEducand%C3%A1rio%20Jardim%20Aeroporto!5e0!3m2!1sen!2sbr!4v1753798139841!5m2!1sen!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    },
    {
      icon: Phone,
      title: 'Telefone',
      info: '(65) 99354-7420',
      action: 'Ligar Agora',
      link: 'tel:+55659935474200'
    },
    {
      icon: Mail,
      title: 'E-mail',
      info: 'placeholder@placeholder.com.br',
      action: 'Enviar E-mail',
      link: 'mailto:placeholder@placeholder.com.br'
    },
    {
      icon: Clock,
      title: 'Horário de Funcionamento',
      info: 'Segunda a Sexta: 7h às 18h\nSábado: 8h às 12h',
      action: 'Agendar Visita',
      link: '/matriculas'
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: 'Instagram',
      handle: '@educandariojardimaeroport',
      link: 'https://www.instagram.com/educandariojardimaeroport/',
      color: 'from-blue-500 to-blue-500'
    },
    {
      icon: MessageCircle,
      name: 'WhatsApp',
      handle: '(65) 99354-7420',
      link: 'https://api.whatsapp.com/message/SREIOJFRZZA2O1?autoload=1&app_absent=0',
      color: 'from-green-500 to-green-600'
    }
  ];

  const quickActions = [
    {
      title: 'Agendar Visita',
      description: 'Conheça nossa escola pessoalmente',
      icon: MapPin,
      action: 'Agendar',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Informações sobre Matrícula',
      description: 'Tire dúvidas sobre o processo',
      icon: MessageSquare,
      action: 'Perguntar',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Falar com a Diretora',
      description: 'Contato direto com a direção',
      icon: User,
      action: 'Contatar',
      color: 'from-blue-500 to-blue-600'
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
              Entre em Contato
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
              Estamos aqui para esclarecer suas dúvidas, agendar uma visita ou 
              ajudar com o processo de matrícula. Fale conosco!
            </p>
          </div>
        </div>
      </section>

      {/* Informações de Contato */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {contactInfo.map((contact, index) => (
              <Card key={index} className="border border-slate-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200 ease-out bg-white rounded-2xl">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <contact.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">
                    {contact.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 whitespace-pre-line leading-relaxed">
                    {contact.info}
                  </p>
                  <Button 
                    asChild
                    variant="outline"
                    size="sm"
                  >
                    <a href={contact.link} target={contact.link.startsWith('http') ? '_blank' : '_self'}>
                      {contact.action}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mapa e Formulário */}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Mapa */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                Nossa Localização
              </h2>
              <Card className="border border-slate-100 shadow-md overflow-hidden bg-white rounded-2xl">
                <CardContent className="p-0">
                  <div className="aspect-video">
                    <iframe
                      title="Mapa do Google - Educandário Jardim Aeroporto"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.685020432869!2d-56.1357984!3d-15.6466311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939dad3a42bf5161%3A0x262bc42f67662c38!2sEducand%C3%A1rio%20Jardim%20Aeroporto!5e0!3m2!1spt-BR!2sbr!4v1722000000000!5m2!1spt-BR!2sbr"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-md w-full h-full"
                    />
                  </div>
                </CardContent>
              </Card>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4 tracking-tight">
                  Como Chegar
                </h3>
                <div className="space-y-2 text-slate-600 leading-relaxed">
                  <p>• Próximo ao Aeroporto Internacional de Cuiabá</p>
                  <p>• Fácil acesso pela Avenida Principal</p>
                  <p>• Estacionamento gratuito disponível</p>
                  <p>• Transporte público: Linhas 007, 008, 024 e outros</p>
                </div>
              </div>
            </div>

            {/* Formulário */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                Envie sua Mensagem
              </h2>
              <Card className="border border-slate-100 shadow-md bg-white rounded-2xl">
                <CardContent className="p-8">
                  {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg">
                      <p className="text-green-700 font-semibold">
                        ✅ Redirecionando para WhatsApp... Sua mensagem está pronta para envio!
                      </p>
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                          Nome Completo *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Seu nome completo"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                          Telefone *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="(65) 99999-9999"
                          maxLength={15}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        E-mail *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="seu@email.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                        Assunto *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition-all duration-200 ease-out"
                      >
                        <option value="">Selecione um assunto</option>
                        <option value="matricula">Informações sobre Matrícula</option>
                        <option value="visita">Agendar Visita</option>
                        <option value="valores">Consultar Valores</option>
                        <option value="pedagogico">Questões Pedagógicas</option>
                        <option value="outros">Outros</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                        Mensagem *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Digite sua mensagem aqui..."
                        rows={5}
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full py-3 text-lg font-semibold"
                    >
                      {isSubmitting ? (
                        <>
                          <MessageCircle className="mr-2 h-5 w-5 animate-pulse" />
                          Redirecionando para WhatsApp...
                        </>
                      ) : (
                        <>
                          <MessageCircle className="mr-2 h-5 w-5" />
                          Enviar via WhatsApp
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Ações Rápidas */}
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
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
              Precisa de Ajuda Rápida?
            </h2>
            <p className="text-lg md:text-xl text-slate-600 font-medium">
              Escolha a opção que melhor atende sua necessidade
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {quickActions.map((action, index) => (
              <Card key={index} className="border border-slate-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200 ease-out bg-white rounded-2xl">
                <CardContent className="p-8 text-center">
                  <div className={`w-20 h-20 bg-gradient-to-r ${action.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm`}>
                    <action.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">
                    {action.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {action.description}
                  </p>
                  <Button 
                    asChild
                    variant="default"
                    className="rounded-full px-6"
                  >
                    <a 
                      href="https://api.whatsapp.com/message/SREIOJFRZZA2O1?autoload=1&app_absent=0"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {action.action}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Redes Sociais */}
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
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
              Siga-nos nas Redes Sociais
            </h2>
            <p className="text-lg md:text-xl text-slate-600 font-medium">
              Acompanhe o dia a dia das crianças e fique por dentro das novidades
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {socialLinks.map((social, index) => (
              <Card key={index} className="border border-slate-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200 ease-out bg-white rounded-2xl">
                <CardContent className="p-8 text-center">
                  <div className={`w-20 h-20 bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm`}>
                    <social.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">
                    {social.name}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {social.handle}
                  </p>
                  <Button 
                    asChild
                    variant="default"
                    className="rounded-full px-8"
                  >
                    <a 
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Entre em Contato
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
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
              Estamos Aqui para Você!
            </h2>
            <p className="text-lg md:text-xl text-blue-50 leading-relaxed font-medium">
              Nossa equipe está sempre disponível para esclarecer dúvidas, 
              agendar visitas e ajudar no que você precisar.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center pt-4">
              <Button 
                asChild
                size="lg"
                variant="secondary"
                className="rounded-full px-10 py-3 text-md font-bold bg-white text-blue-700 hover:bg-green-500 hover:text-white hover:scale-95 transition-all duration-300 ease-out"
              >
                <a 
                  href="https://api.whatsapp.com/message/SREIOJFRZZA2O1?autoload=1&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
              <Button 
                asChild
                variant="secondary"
                size="lg"
                className="rounded-full px-10 py-3 text-md font-bold bg-white text-blue-700 hover:bg-red-500 hover:text-white hover:scale-95 transition-all duration-300 ease-out"
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

export default Contato;