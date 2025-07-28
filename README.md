# EM DESENVOLVIMENTO

# Educandário Jardim Aeroporto - Site Oficial

Site completo em React para a escola infantil "Educandário Jardim Aeroporto".

## 🎨 Características do Projeto

- **Totalmente Responsivo**: Otimizado para desktop, tablet e mobile
- **8 Páginas Completas**: Home, Quem Somos, Proposta Pedagógica, Turmas e Horários, Galeria, Eventos/Notícias, Matrículas e Contato
- **Integração com Redes Sociais**: Links diretos para Instagram e WhatsApp
- **Formulário de Contato**: Sistema funcional para recebimento de mensagens (Backend/formulario google/excell. Pensar no mais facil ainda)
- **Navegação Suave**: React Router para mudar as paginas sem loading
- **Componentes Modernos**: shadcn/ui com Tailwind CSS pra nao criar tudo igual um maniaco

## 🚀 Tecnologias Utilizadas

- **React 19** - Framework principal
- **React Router** - Navegação entre páginas
- **Tailwind CSS** - Estilização e responsividade
- **shadcn/ui** - Componentes de interface
- **Lucide React** - Ícones modernos (infelizmente do whatsapp é feio)
- **Vite** - Build tool e desenvolvimento
- **Framer Motion** - Animações suaves (bonitinhas bem firulentas)

## 📱 Páginas do Site

### 1. **Home**
- Apresentação da escola
- Destaques da escola
- Estatísticas e números importantes
- Depoimentos de pais (de mentirinha por enquanto)
- CTA pra matrícula

### 2. **Quem Somos* - aind sera coletada as infos, tudo de faz de conta ainda
- História da escola 
- Missão, visão e valores
- Apresentação da equipe pedagógica
- Infraestrutura e instalações

### 3. **Proposta Pedagógica**
- Metodologia de ensino
- Desenvolvimento integral (cognitivo, emocional, social, motor)
- Diferenciais pedagógicos
- Faixas etárias e atividades específicas
- Rotina pedagógica detalhada

### 4. **Turmas e Horários* - tudo de faz de conta ainda
- Berçário (4 meses a 2 anos)
- Maternal I e II (2 a 4 anos)
- Pré I e II (4 a 6 anos)
- Opções de horário (manhã, tarde, integral)
- Atividades extracurriculares

### 5. **Galeria**
- Sistema de filtros por categoria
- Modal para visualização ampliada
- Navegação entre imagens (via API caso acrescente para o formulario ja aproveito as imgs)
- Integração com redes sociais

### 6. **Eventos/Notícias**
- Próximos eventos com detalhes
- Registro de eventos anteriores
- Notícias e comunicados

### 7. **Matrículas**
- Processo de matrícula em "N" passos
- Lista completa de documentos necessários
- Valores e planos (meio período e integral)
- FAQ com perguntas frequentes
- Integração direta com WhatsApp

### 8. **Contato**
- Informações completas de contato
- Formulário funcional (VIA API)
- Mapa de localização
- Links para redes sociais

## 🛠️ Instalação e Desenvolvimento

### Pré-requisitos
- Node.js 18+ 
- npm ou pnpm

### Passos para instalação

1. **Clone o repositório**
```bash
git clone https://github.com/wstvns/educandario-jardim-aeroporto
cd educandario-jardim-aeroporto
```

2. **Instale as dependências**

Se usar npm:

```bash
npm install
```

Se usar pnpm:

```bash
pnpm install
```

> ⚠️ **Importante:** Na primeira vez que rodar `pnpm install`, pode ser necessário aprovar scripts de build de alguns pacotes:
>
> ```bash
> pnpm approve-builds
> ```
> Escolha os pacotes que deseja aprovar para executar scripts de build (possivelmente serão o `esbuild` e `@tailwindcss/oxide`).

3. **Execute o servidor de desenvolvimento**
```bash
npm run dev
# ou
pnpm run dev
```

4. **Acesse o site via**
[http://localhost:5173](http://localhost:5173)

## 📦 Build para Produção

```bash
npm run build
# ou
pnpm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

## 📞 Informações de Contato da Escola

- **Telefone**: (65) 9354-7420
- **Instagram**: [@educandariojardimaeroport](https://www.instagram.com/educandariojardimaeroport/)
- **WhatsApp**: [Link direto](https://api.whatsapp.com/message/SREIOJFRZZA2O1?autoload=1&app_absent=0)
- **Endereço**: R. João Líbano, 547 - Centro Norte, Várzea Grande - MT, 78110-338

## 🎯 Funcionalidades Especiais

### Integração com WhatsApp
- Botões diretos para WhatsApp em várias páginas
- Link personalizado para facilitar o contato
- Mensagens pré-configuradas para diferentes contextos

### Formulário de Contato
- Validação de campos obrigatórios
- Feedback visual para o usuário
- Organização por assunto (matrícula, visita, valores, etc.)

### Design Responsivo
- Breakpoints otimizados para todos os dispositivos
- Menu mobile com xtudão
- Imagens adaptáveis

### Acessibilidade
- Contraste adequado de cores
- Navegação por teclado

## 🔧 Personalização

### Cores
As cores principais podem ser alteradas no arquivo `src/index.css`:
- Rosa: `#FFB6C1`
- Azul: `#B0E0E6` 
- Amarelo: `#FFFACD`
- Gradientes personalizados disponíveis

### Conteúdo
- Textos: Edite os arquivos em `src/pages/`
- Imagens: Substitua os arquivos em `src/assets/`
- Informações de contato: Atualize nos componentes Header e Footer

### Componentes
- Header: `src/components/layout/Header.jsx`
- Footer: `src/components/layout/Footer.jsx`
- Layout: `src/components/layout/Layout.jsx`

## 🐛 Troubleshooting

### Problemas Comuns

1. **Erro de build**
   - Verifique se todas as dependências estão instaladas
   - Execute `npm install` ou `npm install --legacy-peer-deps` caso o `npm install` não funcione

## 🤝 Suporte

Para suporte técnico ou dúvidas sobre o site, entre em contato através dos canais oficiais da escola.

---

**Desenvolvido com ❤️ para o Educandário Jardim Aeroporto**