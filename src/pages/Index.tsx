
import { useState } from 'react';
import { Menu, X, Play, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm relative z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">BJJ</span>
              </div>
              <span className="text-xl font-bold text-gray-800">BJJ TASMANIA</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-red-600 transition-colors">HOME</a>
              <a href="#about" className="text-gray-700 hover:text-red-600 transition-colors">ABOUT</a>
              <a href="#classes" className="text-gray-700 hover:text-red-600 transition-colors">CLASSES</a>
              <a href="#instructors" className="text-gray-700 hover:text-red-600 transition-colors">INSTRUCTORS</a>
              <a href="#membership" className="text-gray-700 hover:text-red-600 transition-colors">MEMBERSHIP</a>
              <a href="#news" className="text-gray-700 hover:text-red-600 transition-colors">NEWS</a>
              <a href="#contact" className="text-gray-700 hover:text-red-600 transition-colors">CONTACT</a>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-gray-700 hover:text-red-600 transition-colors"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
              <div className="px-4 py-2 space-y-1">
                <a href="#home" className="block py-3 text-gray-700 hover:text-red-600 border-b border-gray-100">HOME</a>
                <a href="#about" className="block py-3 text-gray-700 hover:text-red-600 border-b border-gray-100">ABOUT</a>
                <a href="#classes" className="block py-3 text-gray-700 hover:text-red-600 border-b border-gray-100">CLASSES</a>
                <a href="#instructors" className="block py-3 text-gray-700 hover:text-red-600 border-b border-gray-100">INSTRUCTORS</a>
                <a href="#membership" className="block py-3 text-gray-700 hover:text-red-600 border-b border-gray-100">MEMBERSHIP</a>
                <a href="#news" className="block py-3 text-gray-700 hover:text-red-600 border-b border-gray-100">NEWS</a>
                <a href="#contact" className="block py-3 text-gray-700 hover:text-red-600">CONTACT</a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-r from-gray-100 to-gray-200 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6">
                BRAZILIAN<br />
                JIU JITSU<br />
                <span className="text-red-600">TASMANIA</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto lg:mx-0">
                Learn the art of Brazilian Jiu Jitsu with experienced instructors in a welcoming environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg">
                  JOIN NOW <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="border-gray-400 text-gray-700 hover:bg-gray-100 px-8 py-3 text-lg">
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
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-red-600 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <span className="text-red-600 font-bold text-sm">BJJ</span>
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
              <div className="w-32 h-32 bg-red-600 rounded-full flex items-center justify-center">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                  <span className="text-red-600 font-bold text-2xl">BJJ</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                WELCOME TO<br />
                <span className="text-red-600">BJJ TASMANIA</span>
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
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
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
                <div className="absolute bottom-4 left-4">
                  <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                    VIEW MORE
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">ADULTS BJJ</h3>
                <p className="text-gray-600 text-sm">
                  Learn complete Brazilian Jiu-Jitsu including effective self-defense, ground fighting, takedowns and much more.
                </p>
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
                <div className="absolute bottom-4 left-4">
                  <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                    VIEW MORE
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">JUNIORS 10-16 YRS BJJ</h3>
                <p className="text-gray-600 text-sm">
                  This class is aimed to instill confidence, fitness and self defense while developing strong discipline and respect.
                </p>
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
                <div className="absolute bottom-4 left-4">
                  <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                    VIEW MORE
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">JUNIORS 6-10 YRS BJJ</h3>
                <p className="text-gray-600 text-sm">
                  This class consists of fun base games which help build core strength and learning a sport they can continue for life.
                </p>
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
                <div className="absolute bottom-4 left-4">
                  <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                    VIEW MORE
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">LADIES BJJ</h3>
                <p className="text-gray-600 text-sm">
                  For ladies wanting to get into BJJ for fun, fitness or self-defense, this class will introduce women to the basics.
                </p>
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
                <div className="absolute bottom-4 left-4">
                  <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                    VIEW MORE
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">NO-GI GRAPPLING BJJ</h3>
                <p className="text-gray-600 text-sm">
                  No-Gi BJJ is great and can be regarded as a combination of submission wrestling and BJJ techniques.
                </p>
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
                <div className="absolute bottom-4 left-4">
                  <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                    VIEW MORE
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">OPEN MAT BJJ</h3>
                <p className="text-gray-600 text-sm">
                  Open mat sessions are available only for students who are actively training and rolling and need extra time to practice.
                </p>
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
              <span className="text-red-500">RANKINGS</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Learn about our grading system, which denotes proficiency and skill level, and gives insight into 
              an opponent's skill level in BJJ and we will break down exactly how our 
              ranking system and training works.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg">
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
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white rounded-full w-16 h-16">
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
              <span className="text-red-500">OUR NEWSLETTER</span>
            </h2>
          </div>
          
          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-red-500"
              />
              <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3">
                SUBSCRIBE
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-red-500">CONTACT INFO</h3>
              <div className="space-y-2 text-gray-300">
                <p>BJJ Tasmania Launceston Academy</p>
                <p>Tasmania, Australia - Email: bigjujitsu.com</p>
                <p>bigjujitsu.com</p>
                <p>Tasmania, Post-Hobart</p>
                <p>Tasmania, From Hobart</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-red-500">CLASSES</h3>
              <div className="space-y-2 text-gray-300">
                <p>BJJ Tasmania Launceston Academy</p>
                <p>Q6 Building, Elwick Street</p>
                <p>Inglewhite, IA SUPP</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-red-500">QUICK LINKS</h3>
              <div className="space-y-2 text-gray-300">
                <p><a href="#home" className="hover:text-red-500 transition-colors">Home</a></p>
                <p><a href="#about" className="hover:text-red-500 transition-colors">About</a></p>
                <p><a href="#classes" className="hover:text-red-500 transition-colors">Classes</a></p>
                <p><a href="#contact" className="hover:text-red-500 transition-colors">Contact</a></p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-red-500">FOLLOW US</h3>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">f</span>
                </div>
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">t</span>
                </div>
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">i</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BJJ Tasmania. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
