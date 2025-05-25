

import { useState } from 'react';
import { Menu, X, Play, ChevronRight, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedClass, setExpandedClass] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleClassInfo = (className: string) => {
    setExpandedClass(expandedClass === className ? null : className);
  };

  const classDetails = {
    'adults-bjj': {
      schedule: 'Segunda, Quarta e Sexta - 19:00 às 20:30',
      age: 'A partir de 16 anos',
      description: 'Aprenda o Brazilian Jiu-Jitsu completo incluindo defesa pessoal eficaz, luta no solo, quedas e muito mais. Classes focadas em técnica, condicionamento físico e desenvolvimento pessoal.'
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
      description: 'Sessões de treino livre disponíveis apenas para estudantes que estão treinando ativamente e precisam de tempo extra para praticar. Sparring supervisionado e desenvolvimento técnico.'
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm relative z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">BJJ</span>
              </div>
              <span className="text-xl font-bold text-gray-800">BJJ TASMANIA</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-yellow-500 transition-colors">HOME</a>
              <a href="#about" className="text-gray-700 hover:text-yellow-500 transition-colors">ABOUT</a>
              <a href="#classes" className="text-gray-700 hover:text-yellow-500 transition-colors">CLASSES</a>
              <a href="#instructors" className="text-gray-700 hover:text-yellow-500 transition-colors">INSTRUCTORS</a>
              <a href="#membership" className="text-gray-700 hover:text-yellow-500 transition-colors">MEMBERSHIP</a>
              <a href="#news" className="text-gray-700 hover:text-yellow-500 transition-colors">NEWS</a>
              <a href="#contact" className="text-gray-700 hover:text-yellow-500 transition-colors">CONTACT</a>
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
                <a href="#about" className="block py-3 text-gray-700 hover:text-yellow-500 border-b border-gray-100">ABOUT</a>
                <a href="#classes" className="block py-3 text-gray-700 hover:text-yellow-500 border-b border-gray-100">CLASSES</a>
                <a href="#instructors" className="block py-3 text-gray-700 hover:text-yellow-500 border-b border-gray-100">INSTRUCTORS</a>
                <a href="#membership" className="block py-3 text-gray-700 hover:text-yellow-500 border-b border-gray-100">MEMBERSHIP</a>
                <a href="#news" className="block py-3 text-gray-700 hover:text-yellow-500 border-b border-gray-100">NEWS</a>
                <a href="#contact" className="block py-3 text-gray-700 hover:text-yellow-500">CONTACT</a>
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
          backgroundImage: "url('https://images.unsplash.com/photo-1544737151-6e4b9c2c2e5e?w=1920&h=1080&fit=crop')"
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                BRAZILIAN<br />
                JIU JITSU<br />
                <span className="text-yellow-500">TASMANIA</span>
              </h1>
              <p className="text-lg text-gray-200 mb-8 max-w-md mx-auto lg:mx-0">
                Learn the art of Brazilian Jiu Jitsu with experienced instructors in a welcoming environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 text-lg">
                  JOIN NOW <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="border-gray-200 text-white hover:bg-white/10 px-8 py-3 text-lg">
                  CLASS TIMETABLE
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 lg:w-80 lg:h-80 bg-gray-300 rounded-full flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1544737151-6e4b9c2c2e5e?w=400&h=400&fit=crop" 
                    alt="BJJ Training"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <span className="text-yellow-500 font-bold text-sm">BJJ</span>
                  </div>
                </div>
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
              <div className="w-32 h-32 bg-yellow-500 rounded-full flex items-center justify-center">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                  <span className="text-yellow-500 font-bold text-2xl">BJJ</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                WELCOME TO<br />
                <span className="text-yellow-500">BJJ TASMANIA</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Brazilian Jiu Jitsu has been described as "the best martial art for self defense and self-discipline." 
                Australia has also been regarded as one of the strongest BJJ countries in the world outside of Brazil.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our academy offers world-class training with experienced instructors who are passionate about 
                sharing their knowledge. Whether you're a beginner or advanced practitioner, we welcome everyone 
                to join our supportive community and international brotherhood in BJJ and martial arts Brazilian Jiu Jitsu Tasmania.
              </p>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3">
                READ MORE
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section id="classes" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">CLASSES</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Adult BJJ */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-200 relative">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop" 
                  alt="Adult BJJ"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">ADULTS BJJ</h3>
                <Button 
                  size="sm" 
                  className="bg-yellow-500 hover:bg-yellow-600 text-white mb-4"
                  onClick={() => toggleClassInfo('adults-bjj')}
                >
                  VIEW MORE
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
              <div className="h-48 bg-gray-200 relative">
                <img 
                  src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=400&h=300&fit=crop" 
                  alt="Juniors BJJ"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">JUNIORS 10-16 YRS BJJ</h3>
                <Button 
                  size="sm" 
                  className="bg-yellow-500 hover:bg-yellow-600 text-white mb-4"
                  onClick={() => toggleClassInfo('juniors-10-16')}
                >
                  VIEW MORE
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
              <div className="h-48 bg-gray-200 relative">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop" 
                  alt="Kids BJJ"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">JUNIORS 6-10 YRS BJJ</h3>
                <Button 
                  size="sm" 
                  className="bg-yellow-500 hover:bg-yellow-600 text-white mb-4"
                  onClick={() => toggleClassInfo('juniors-6-10')}
                >
                  VIEW MORE
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
              <div className="h-48 bg-gray-200 relative">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop" 
                  alt="Ladies BJJ"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">LADIES BJJ</h3>
                <Button 
                  size="sm" 
                  className="bg-yellow-500 hover:bg-yellow-600 text-white mb-4"
                  onClick={() => toggleClassInfo('ladies-bjj')}
                >
                  VIEW MORE
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

            {/* No-Gi Grappling */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-200 relative">
                <img 
                  src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=400&h=300&fit=crop" 
                  alt="No-Gi Grappling"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">NO-GI GRAPPLING BJJ</h3>
                <Button 
                  size="sm" 
                  className="bg-yellow-500 hover:bg-yellow-600 text-white mb-4"
                  onClick={() => toggleClassInfo('no-gi')}
                >
                  VIEW MORE
                </Button>
                {expandedClass === 'no-gi' && (
                  <div className="mt-4 space-y-2 text-sm text-gray-600">
                    <p><strong>Horários:</strong> {classDetails['no-gi'].schedule}</p>
                    <p><strong>Idade:</strong> {classDetails['no-gi'].age}</p>
                    <p className="mt-2">{classDetails['no-gi'].description}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Open Mat */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-200 relative">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop" 
                  alt="Open Mat"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">OPEN MAT BJJ</h3>
                <Button 
                  size="sm" 
                  className="bg-yellow-500 hover:bg-yellow-600 text-white mb-4"
                  onClick={() => toggleClassInfo('open-mat')}
                >
                  VIEW MORE
                </Button>
                {expandedClass === 'open-mat' && (
                  <div className="mt-4 space-y-2 text-sm text-gray-600">
                    <p><strong>Horários:</strong> {classDetails['open-mat'].schedule}</p>
                    <p><strong>Idade:</strong> {classDetails['open-mat'].age}</p>
                    <p className="mt-2">{classDetails['open-mat'].description}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="membership" className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              BJJ CLUB<br />
              <span className="text-yellow-500">RANKINGS</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Learn about our grading system, which denotes proficiency and skill level, and gives insight into 
              an opponent's skill level in BJJ and we will break down exactly how our 
              ranking system and training works.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 text-lg">
              OUR CLUB NEWS
            </Button>
            <Button variant="outline" className="border-gray-400 text-white hover:bg-gray-700 px-8 py-3 text-lg">
              ABOUT GRADING
            </Button>
          </div>
        </div>
      </section>

      {/* News Section */}
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
              <h2 className="text-3xl font-bold text-gray-800 mb-8">RECENT NEWS & EVENTS</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <img 
                    src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=100&h=80&fit=crop" 
                    alt="News"
                    className="w-20 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">2016 BJJ ACADEMY OF SEMARANG</h3>
                    <p className="text-sm text-gray-600">
                      Keep up to date with all the latest news and events at Millennium and BJJ.
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
                    src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=100&h=80&fit=crop" 
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

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              SUBSCRIBE TO<br />
              <span className="text-yellow-500">OUR NEWSLETTER</span>
            </h2>
          </div>
          
          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-yellow-500"
              />
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3">
                SUBSCRIBE
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              18 ANOS DE TRADIÇÃO!
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
                Academia BJJ Tasmania - Empresa voltada para a arte de fazer você evoluir, fundada em 2006, 
                foi instalada em Tasmania com objetivo de ser uma academia voltada para a 
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
                Todos os nossos treinamentos e serviços são realizados em consultórios 
                altamente confortáveis, projetados de acordo com os melhores padrões de 
                qualidade.
              </p>
            </div>

            {/* Atendimento de Qualidade */}
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Atendimento de Qualidade</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                "Para nós, Academia BJJ Tasmania, a sua satisfação é de suma importância para o 
                nosso desenvolvimento, criando uma rede de confiança e sustentabilidade." - 
                Forte abraço!!!
              </p>
            </div>
          </div>
          
          {/* Social Media Section */}
          <div className="border-t border-white/20 pt-8">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-4">Siga-nos nas Redes Sociais</h3>
              <div className="flex justify-center gap-6">
                <a 
                  href="#" 
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6 text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6 text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-6 h-6 text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>
            
            <div className="text-center text-white/80">
              <p>&copy; 2024 BJJ Tasmania. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

