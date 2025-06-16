
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Play, Pause, Eye, Heart, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Photo {
  src: string;
  alt: string;
  category: string;
  likes?: number;
}

interface PhotoCarouselProps {
  photos: Photo[];
}

const PhotoCarousel: React.FC<PhotoCarouselProps> = ({ photos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [likedPhotos, setLikedPhotos] = useState<Set<number>>(new Set());
  const [isHovered, setIsHovered] = useState(false);

  // Autoplay functionality
  useEffect(() => {
    if (!isAutoPlay || isHovered) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay, isHovered, photos.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const toggleLike = (index: number) => {
    const newLikedPhotos = new Set(likedPhotos);
    if (newLikedPhotos.has(index)) {
      newLikedPhotos.delete(index);
    } else {
      newLikedPhotos.add(index);
    }
    setLikedPhotos(newLikedPhotos);
  };

  const openLightbox = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'Escape') closeLightbox();
      if (e.key === ' ') {
        e.preventDefault();
        setIsAutoPlay(!isAutoPlay);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isAutoPlay]);

  return (
    <div className="relative w-full">
      {/* Main Carousel */}
      <div 
        className="relative overflow-hidden rounded-2xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {photos.map((photo, index) => (
            <div key={index} className="w-full flex-shrink-0 relative group">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Photo Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{photo.alt}</h4>
                      <span className="text-sm text-yellow-400 font-medium">{photo.category}</span>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-white hover:text-yellow-400 hover:bg-white/20"
                        onClick={() => toggleLike(index)}
                      >
                        <Heart 
                          className={`w-4 h-4 ${likedPhotos.has(index) ? 'fill-red-500 text-red-500' : ''}`}
                        />
                        <span className="ml-1 text-sm">{(photo.likes || 0) + (likedPhotos.has(index) ? 1 : 0)}</span>
                      </Button>
                      
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-white hover:text-yellow-400 hover:bg-white/20"
                        onClick={() => openLightbox(photo)}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-white hover:text-yellow-400 hover:bg-white/20"
                      >
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white border-0 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={goToPrevious}
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white border-0 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={goToNext}
        >
          <ChevronRight className="w-6 h-6" />
        </Button>

        {/* Auto-play Control */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-4 right-4 bg-black/30 hover:bg-black/50 text-white border-0 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={() => setIsAutoPlay(!isAutoPlay)}
        >
          {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          <span className="ml-2 text-sm">{isAutoPlay ? 'Pausar' : 'Reproduzir'}</span>
        </Button>

        {/* Photo Counter */}
        <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
          {currentIndex + 1} / {photos.length}
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {photos.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-yellow-500 scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white border-0 backdrop-blur-sm"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6" />
            </Button>
            
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold mb-1">{selectedPhoto.alt}</h3>
              <span className="text-yellow-400 font-medium">{selectedPhoto.category}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoCarousel;
