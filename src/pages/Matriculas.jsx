import { Link } from 'react-router-dom';
import { FileText, CheckCircle, DollarSign, HelpCircle, Phone, ArrowRight, Sparkles, Star, Heart, Pencil } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Matriculas = () => {
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
              Matrículas
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
              Estamos ansiosos para receber seu filho! Um processo simples e acolhedor 
              para começar essa jornada incrível juntos.
            </p>
            <div className="pt-4">
              <Button
                asChild
                size="lg"
                className="bg-red-500 text-white rounded-full px-10 py-5 text-lg font-bold hover:bg-red-600 hover:scale-95 transition-all duration-300 ease-out"
              >
                <Link to="https://api.whatsapp.com/send/?phone=556593547420&text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20matr%C3%ADcula%21&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
                >
                  Faça sua Matrícula Agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Processo de Matrícula */}
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
              Processo de Matrícula
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
              Um processo simples e acolhedor para você e sua família
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { step: '1', title: 'Agende uma Visita', desc: 'Conheça nossa estrutura e metodologia', color: 'from-blue-50 to-blue-100', iconColor: 'text-blue-600' },
              { step: '2', title: 'Documentação', desc: 'Reúna os documentos necessários', color: 'from-green-50 to-green-100', iconColor: 'text-green-600' },
              { step: '3', title: 'Preenchimento', desc: 'Preencha a ficha de matrícula', color: 'from-yellow-50 to-yellow-100', iconColor: 'text-yellow-500' },
              { step: '4', title: 'Bem-vindo!', desc: 'Seu filho está oficialmente matriculado', color: 'from-red-50 to-red-100', iconColor: 'text-red-500' }
            ].map((item, index) => (
              <Card key={index} className="border-2 border-white/80 border-t-4 border-t-blue-400/60 shadow-[0_30px_60px_-15px_rgba(180,160,100,0.2)] hover:shadow-[0_40px_80px_-15px_rgba(180,160,100,0.3)] hover:-translate-y-2 transition-all duration-300 ease-out bg-white rounded-[3rem] group">
                <CardContent className="p-8 text-center">
                  <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-3`}>
                    <span className={`text-2xl font-bold ${item.iconColor}`}>{item.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-base text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Documentos */}
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
              Documentos Necessários
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
              Lista completa de documentos para facilitar sua matrícula
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="border-2 border-white/80 shadow-[0_30px_60px_-15px_rgba(180,160,100,0.2)] bg-white rounded-[3rem]">
              <CardContent className="p-8">
                <ul className="space-y-4 text-base text-slate-600">
                  <li className="flex items-start gap-3 group/item">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0 transition-transform duration-300 group-hover/item:scale-110" />
                    <span>Certidão de Nascimento (cópia)</span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0 transition-transform duration-300 group-hover/item:scale-110" />
                    <span>RG e CPF dos pais ou responsáveis (cópia)</span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0 transition-transform duration-300 group-hover/item:scale-110" />
                    <span>Comprovante de residência (cópia)</span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0 transition-transform duration-300 group-hover/item:scale-110" />
                    <span>Cartão de vacinação atualizado (cópia)</span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0 transition-transform duration-300 group-hover/item:scale-110" />
                    <span>2 fotos 3x4 da criança</span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0 transition-transform duration-300 group-hover/item:scale-110" />
                    <span>Atestado médico (se necessário)</span>
                  </li>
                </ul>
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
              Vamos começar essa jornada juntos?
            </h2>
            <p className="text-lg md:text-xl text-blue-50 leading-relaxed font-medium">
              Agende sua visita e venha conhecer de perto todo o carinho que temos para oferecer. 
              Estamos ansiosos para receber vocês!
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center pt-4">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="rounded-full px-10 py-3 text-md font-bold bg-white text-blue-700 hover:bg-red-500 hover:text-white hover:scale-95 transition-all duration-300 ease-out"
              >
                <Link to="/contato">Agendar Visita</Link>
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

export default Matriculas;
