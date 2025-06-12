import { useState } from 'react';
import { Menu, X, Play, Pause, Volume2, VolumeX, ChevronRight, Facebook, Instagram, Youtube, Linkedin, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import LocationMap from '@/components/LocationMap';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedClass, setExpandedClass] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleClassInfo = (className: string) => {
    setExpandedClass(expandedClass === className ? null : className);
  };

  const handlePlayPause = () => {
    const video = document.getElementById('academy-video') as HTMLVideoElement;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMuteToggle = () => {
    const video = document.getElementById('academy-video') as HTMLVideoElement;
    if (video) {
      video.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const classDetails = {
    'adults-bjj': {
      schedule: 'infantil:Segundas, Quartas e Sextas 09h, 17h e 18h.',
      age: 'Judô adulto: A partir de 12 anos.',
      description: ''
    },
    'juniors-10-16': {
      schedule: 'Terça e Quinta - 17:00 às 18:00',
      age: '10 a 16 anos',
      description: 'Esta classe tem como objetivo incutir confiança, fitness e defesa pessoal, desenvolvendo forte disciplina e respeito. Foco em fundamentos e desenvolvimento do caráter.'
    },
    'juniors-6-10': {
      schedule: 'Terça e Quinta - 16:00 às 17:00',
      age: '6 a 10 anos',
      description: 'Esta classe consiste em jogos divertidos que ajudam a construir força central e aprender um esporte que podem continuar para a vida. Ambiente lúdico e educativo.'
    },
    'ladies-bjj': {
      schedule: 'Sábado - 10:00 às 11:30',
      age: 'A partir de 16 anos',
      description: 'Para mulheres que querem entrar no BJJ por diversão, fitness ou autodefesa, esta classe irá introduzir as mulheres aos fundamentos básicos em um ambiente acolhedor e encorajador.'
    },
    'no-gi': {
      schedule: 'Domingo - 15:00 às 16:30',
      age: 'A partir de 14 anos',
      description: 'No-Gi BJJ é ótimo e pode ser considerado como uma combinação de submission wrestling e técnicas de BJJ. Foco em agilidade, velocidade e transições dinâmicas.'
    },
    'open-mat': {
      schedule: 'Sábado - 14:00 às 16:00',
      age: 'Apenas para alunos ativos',
      description: ''
    }
  };
  
  {/** sessão  fotos da acemia -------------------------------------------- */}
  const academyImages = [
    {
      src: "lovable-uploads/taekendo1.jpeg",
      alt: "treino infantil de Taekendo"
    },
    {
      src: "lovable-uploads/medalha_mirin.png",
      alt: "Nossos campeões da classe Mirim, 07 e 08 anos."
    },
    {
      src: "https://images.unsplash.com/photo-1544737151-6e4b9c2c2e5e?w=800&h=600&fit=crop",
      alt: "BJJ Techniques"
    },
    {
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      alt: "Students Training"
    },
    {
      src: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&h=600&fit=crop",
      alt: "Competition Training"
    }
  ];

  const instructors = [
    {
      name: "Prof. Leandro Costa",
      specialty: "Judô",
      image: "/lovable-uploads/prof-leandro.jpeg" ,
      experience: "Judô é uma arte marcial praticada como esporte. Criada por Jigoro Kano em 1882, o judô é uma adaptação do jiu-jitsu, que tem por objetivo desenvolver técnicas de defesa pessoal, fortalecer o corpo, o físico e a mente de forma integrada. Foi considerado esporte oficial no Japão no final do século XIX."
   
   
    },
    {
      name: "Prof. Victor Ferrari",
      specialty: "Taekwondo",
      image: "/lovable-uploads/victor-ferrari.jpeg" ,
      experience: "O taekwondo é uma arte marcial milenar coreana que combina técnicas de combate, autodefesa, esporte, exercício e filosofia. É conhecido por sua ênfase em chutes rápidos e potentes, bem como em técnicas de mão e defesa pessoal."
    },
    {
      name: "Prof. Serginho",
      specialty: "Muay Thai",
      image:  "/lovable-uploads/serginho.jpeg" ,
      experience: "O muay thai tem como premissa ser utilizado para autodefesa. Segundo sua história, foi criado pelos tailandeses para que agricultores se defendessem durante invasões no país. Sendo assim, ao invés de usarem espadas, investiam nos chutes e socos."
    },
    {
      name: "Prof. Anna",
      specialty: "Jiu-Jitsu",
      image:  "/lovable-uploads/anna-jiu.jpeg",
      experience: "O jiu-jítsu é um esporte de combate e uma arte marcial que foi desenvolvida no Japão. Trata-se de uma luta em que o atleta tenta controlar o adversário com golpes, até conseguir imobilizá-lo, usando técnicas de torção ou estrangulamento, que finalizam o combate."
    },
    
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm relative z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-16 h-16 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/c7ae828f-680a-42b7-9d9d-4cf62682f517.png" 
                  alt=" Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold text-gray-800">CT - ESPORTE VIDA</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-yellow-500 transition-colors">HOME</a>
              <a href="#about" className="text-gray-700 hover:text-yellow-500 transition-colors">SOBRE</a>
              <a href="#classes" className="text-gray-700 hover:text-yellow-500 transition-colors">MODALIDADES</a>
              <a href="#instructors" className="text-gray-700 hover:text-yellow-500 transition-colors">INSTRUTORES</a>
              <a href="#membership" className="text-gray-700 hover:text-yellow-500 transition-colors">FOTOS</a>
              <a href="#news" className="text-gray-700 hover:text-yellow-500 transition-colors">EVENTOS</a>
              <a href="#contact" className="text-gray-700 hover:text-yellow-500 transition-colors">CONTATO</a>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-gray-700 hover:text-yellow-500 transition-colors"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
              <div className="px-4 py-2 space-y-1">
                <a href="#home" className="block py-3 text-gray-700 hover:text-yellow-500 border-b border-gray-100">HOME</a>
                <a href="#about" className="block py-3 text-gray-700 hover:text-yellow-500 border-b border-gray-100">SOBRE</a>
                <a href="#classes" className="block py-3 text-gray-700 hover:text-yellow-500 border-b border-gray-100">MODALIDADES</a>
                <a href="#instructors" className="block py-3 text-gray-700 hover:text-yellow-500 border-b border-gray-100">INSTRUTORES</a>
                <a href="#membership" className="block py-3 text-gray-700 hover:text-yellow-500 border-b border-gray-100">FOTOS</a>
                <a href="#news" className="block py-3 text-gray-700 hover:text-yellow-500 border-b border-gray-100">EVENTOS</a>
                <a href="#contact" className="block py-3 text-gray-700 hover:text-yellow-500">CONTATO</a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section 
        id="home" 
        className="relative bg-gradient-to-r from-gray-900/80 to-gray-800/80 py-20 lg:py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/lovable-uploads/judo1.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-center items-center min-h-[400px] lg:min-h-[500px]">
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
               CAMINHO<br />
                SUAVE<br />
                <span className="text-yellow-500">ESPORTE VIDA</span>
              </h1>
              <p className="text-lg text-gray-200 mb-8 max-w-md mx-auto">
              Aprenda a arte do Jiu Jitsu,Judô,Muay Thay com instrutores experientes em um ambiente acolhedor.
              </p>
              <div className="flex justify-center">
                <Button className=" bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 text-lg">
                <a href="#classes">Quero conhecer<ChevronRight className="ml-3 h-5 w-6" /></a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
             
                <div className="w-55 h-55 bg-white rounded-full flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/c7ae828f-680a-42b7-9d9d-4cf62682f517.png" 
                    alt="BJJ Tasmania Logo"
                    className="w-54 h-54 object-contain"
                  />
                </div>
              
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                SEJA MUITO BEM-VINDO AO<br />
                <span className="text-yellow-500">CT-Esporte Vida</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
              As artes marciais servem para uma variedade de propósitos, incluindo defesa pessoal, saúde 
              física e mental, desenvolvimento pessoal, socialização e lazer. Elas oferecem benefícios como 
              melhora na flexibilidade, coordenação, respiração, postura, força, 
              resistência, autocontrole e disciplina, além de fortalecer o caráter e a autoconfiança. 
              </p>
              <p className="text-gray-800 mb-8 leading-relaxed">
              Prepare-se para elevar o seu treino! Na nossa academia, 
              oferecemos treinamento de alto nível conduzido por instrutores
               experientes e apaixonados por transmitir seus conhecimentos.

              Não importa se você está apenas começando ou já é um praticante avançado,
               convidamos a todos para fazer parte da nossa comunidade acolhedora e internacional.
                Venha desenvolver suas habilidades em alguma arte marcial em um ambiente de apoio e camaradagem.
              </p>
            
            </div>
          </div>
        </div>
      </section>

      {/* MODALIDADES ----------------------------------------------------------- */}
      
      
      <section id="classes" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">MODALIDADES</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
         
            {/* Adult BJJ */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-68 bg-gray-200 relative">
                <img 
                  src="lovable-uploads\judo-infantil2.jpg" 
                  alt="Judô Infantil"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Judô Infantil</h3>
                <Button 
                  size="sm" 
                  className="bg-yellow-500 hover:bg-yellow-600 text-white mb-4"
                  onClick={() => toggleClassInfo('adults-bjj')}
                >
                 VER MAIS
                </Button>
                {expandedClass === 'adults-bjj' && (
                  <div className="mt-4 space-y-2 text-sm text-gray-600">
                    <p><strong>Horários:</strong> {classDetails['adults-bjj'].schedule}</p>
                    <p><strong>Idade:</strong> {classDetails['adults-bjj'].age}</p>
                    <p className="mt-2">{classDetails['adults-bjj'].description}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Juniors 10-16 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-68 bg-gray-200 relative">
                <img 
                 src="lovable-uploads\muay-thay.jpg" 
                  alt="Juniors BJJ"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Muai-Thay</h3>
                <Button 
                  size="sm" 
                  className="bg-yellow-500 hover:bg-yellow-600 text-white mb-4"
                  onClick={() => toggleClassInfo('juniors-10-16')}
                >
                  VER MAIS
                </Button>
                {expandedClass === 'juniors-10-16' && (
                  <div className="mt-4 space-y-2 text-sm text-gray-600">
                    <p><strong>Horários:</strong> {classDetails['juniors-10-16'].schedule}</p>
                    <p><strong>Idade:</strong> {classDetails['juniors-10-16'].age}</p>
                    <p className="mt-2">{classDetails['juniors-10-16'].description}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Juniors 6-10 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-68 bg-gray-200 relative">
                <img 
                src="lovable-uploads\jiu-jitsu.jpg" 
                  alt="Kids BJJ"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Jiu-Jitsu</h3>
                <Button 
                  size="sm" 
                  className="bg-yellow-500 hover:bg-yellow-600 text-white mb-4"
                  onClick={() => toggleClassInfo('juniors-6-10')}
                >
                  VER MAIS
                </Button>
                {expandedClass === 'juniors-6-10' && (
                  <div className="mt-4 space-y-2 text-sm text-gray-600">
                    <p><strong>Horários:</strong> {classDetails['juniors-6-10'].schedule}</p>
                    <p><strong>Idade:</strong> {classDetails['juniors-6-10'].age}</p>
                    <p className="mt-2">{classDetails['juniors-6-10'].description}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Ladies BJJ */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-68 bg-gray-200 relative">
                <img 
                  src="lovable-uploads\taekendo_modalidades.jpg" 
                  alt="Ladies BJJ"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">TAEKWONDO</h3>
                <Button 
                  size="sm" 
                  className="bg-yellow-500 hover:bg-yellow-600 text-white mb-4"
                  onClick={() => toggleClassInfo('ladies-bjj')}
                >
                  VER MAIS
                </Button>
                {expandedClass === 'ladies-bjj' && (
                  <div className="mt-4 space-y-2 text-sm text-gray-600">
                    <p><strong>Horários:</strong> {classDetails['ladies-bjj'].schedule}</p>
                    <p><strong>Idade:</strong> {classDetails['ladies-bjj'].age}</p>
                    <p className="mt-2">{classDetails['ladies-bjj'].description}</p>
                  </div>
                )}
              </div>
            </div>

           

           
          </div>
        </div>
      </section>
{/*__________________________________________________________________________________________________ */}
      {/* fotos da academia  */}
      <section id="membership" className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              BJJ CLUB<br />
              <span className="text-yellow-500">RANKINGS</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Learn about our grading system, which denotes proficiency and skill level, and gives insight into 
              an opponent's skill level in BJJ and we will break down exactly how our 
              ranking system and training works.
            </p>
          </div>

          {/* Academy Photos Carousel */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-yellow-500">FOTOS DA ACADEMIA</h3>
            <div className="max-w-4xl mx-auto">
              <Carousel className="w-full">
                <CarouselContent>
                  {academyImages.map((image, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-2">
                        <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-4 left-4 text-white">
                              <p className="text-sm font-medium">{image.alt}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 text-lg">
              OUR CLUB NEWS
            </Button>
            
          </div>
        </div>
      </section>

      {/* nossos professores ----------------------------------------------------------- */}
     
      <section id="instructors" className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              NOSSOS <span className="text-yellow-500">PROFESSORES</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Conheça nossa equipe de instrutores altamente qualificados, cada um especialista em sua modalidade, 
              prontos para compartilhar conhecimento e experiência com você.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <div key={index} className="bg-gray-700 rounded-lg overflow-hidden hover:bg-gray-600 transition-colors">
                <div className="h-54 overflow-hidden">
                  <img 
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-yellow-500 mb-2">{instructor.name}</h3>
                  <h4 className="text-lg font-semibold text-white mb-4">{instructor.specialty}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {instructor.experience}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* section das imagens de eventos ------------------------------------------------- */}
     
      <section id="news" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">LATEST VIDEO</h2>
              <div className="relative bg-gray-200 rounded-lg overflow-hidden h-64">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop" 
                  alt="Latest Video"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-full w-16 h-16">
                    <Play className="w-6 h-6" />
                  </Button>
                </div>
              </div>
              <p className="text-gray-600 mt-4">
                Check out our latest video and see what "Portable sockets" by 
                our visitors.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">EVENTOS RECENTES</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <img 
                    src="lovable-uploads\medalha_mirin.png" 
                    alt="News"
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Campeonato de Judô 2023</h3>
                    <p className="text-sm text-gray-600">
                    Nossos campeões da classe Mirim, 07 e 08 anos.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <img 
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=80&fit=crop" 
                    alt="News"
                    className="w-20 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">A GREAT BBJJ GUILD & CLUB</h3>
                    <p className="text-sm text-gray-600">
                      A great sport played around the world and available to all.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <img 
                     src="/lovable-uploads/judoherick.jpg" 
                    alt="News"
                    className="w-20 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">OPEN SESSON THIS FINALS - IN QC GYMNASIUM</h3>
                    <p className="text-sm text-gray-600">
                      Open academy and session during the season brings the club.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Footer */}
      <footer className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              12 ANOS DE TRADIÇÃO!
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Sobre a Academia */}
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Sobre a Academia</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                CT-Esporte Vida - Empresa voltada para a arte de fazer você evoluir, fundada em 2014, 
                foi instalada no Jardim Ingá, com objetivo de ser uma academia voltada para a 
                satisfação de seu usuário, tendo como foco principal você praticante.
              </p>
            </div>

            {/* Tratamentos Especializados */}
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Treinamentos Especializados</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                Todos os nossos treinamentos e serviços são realizados em tatame amplo e confortável, 
                projetados de acordo com os melhores padrões de qualidade.
              </p>
            </div>

            {/* Atendimento de Qualidade */}
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2m-2-2v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Atendimento de Qualidade</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                "Para nós, CT - Esporte Vida, a sua satisfação é de suma importância para o 
                nosso desenvolvimento, criando uma rede de confiança e sustentabilidade." - 
                Forte abraço!!!
              </p>
            </div>
          </div>
          
          {/* Social Media and Contact Section */}
          <div className="border-t border-white/20 pt-8">
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              {/* Social Media */}
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold mb-4">Siga-nos nas Redes Sociais</h3>
                <div className="flex justify-center md:justify-start gap-6">
                  <a 
                    href="http://facebook.com/judoesportevida" 
                    className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-6 h-6 text-white" />
                  </a>
                  <a 
                    href="https://www.instagram.com/senseileandroesportevida?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                    className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>

              {/* contato e informação*/}
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold mb-4">Localização e Contato</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-center md:justify-start gap-3">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="text-white/90 text-sm">Jardim Ingá - Academia Esporte & Vida</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center md:justify-start gap-3">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="text-white/90 text-sm">(61)992163613</p>
                    </div>
                  </div>

                 
                  <div className="flex items-start justify-center md:justify-start gap-3">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="text-white/90 text-sm">
                        <p>Seg-Sex: 17:00-21:00</p>
                        <p>Sáb: 10:00-16:00</p>
                        <p>Dom: 15:00-17:00</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <a 
                      href="https://www.google.com/maps/place/Centro+de+Treinamento+Esporte+Vida+-
                      +Jardim+Ing%C3%A1/@-16.1482418,-47.9472321,18z/data=!4m10!1m2!2m1!1sacademia+
                      esporte+vide+jardim+inga!3m6!1s0x93599b0b952a92c3:0xc33d98cb7137398!8m2!3d-
                      16.1482419!4d-47.9449789!15sCiFhY2FkZW1pYSBlc3BvcnRlIHZpZGUgamFyZGltIGluZ2FaIyIhY
                      WNhZGVtaWEgZXNwb3J0ZSB2aWRlIGphcmRpbSBpbmdhkgENc3BvcnRzX3NjaG9vbJoBI0NoWkRTVWhOTU
                      c5blMwVkpRMEZuU1VOU2NVeFBjV05SRUFFqgFmEAEqGSIVYWNhZGVtaWEgZXNwb3J0ZSB2aWRlKAwyIBA
                      BIhyE8tayhwCFgVOs3sV-I2_7kX1TxCoRxdvHTaICMiUQAiIhYWNhZGVtaWEgZXNwb3J0ZSB2aWRlIGphc
                      mRpbSBpbmdh4AEA-gEECAAQMA!16s%2Fg%2F11fl900fj1?entry=ttu&g_ep=EgoyMDI1MDUyNi4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-yellow-500 hover:text-yellow-400 font-medium text-sm underline"
                    >
                      Ver no Google Maps →
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center text-white/80 border-t border-white/20 pt-6">
              <p>&copy; 2025 CT Esporte Vida | Artes marciais - Jardim inga/Luziânia Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a href="https://api.whatsapp.com/send?phone=5561992163613&text=Olá! venho pelo site e gostaria de mais informações.">
        <WhatsAppFloat />
      </a>
    </div>
  );
};

export default Index;
