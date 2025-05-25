
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const LocationMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [mapInitialized, setMapInitialized] = useState(false);

  // Coordenadas da academia baseadas no link do Google Maps
  const academyLocation: [number, number] = [-47.9472321, -16.1482418];

  const initializeMap = (token: string) => {
    if (!mapContainer.current || !token) return;

    mapboxgl.accessToken = token;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: academyLocation,
      zoom: 16,
    });

    // Adicionar marcador da academia
    new mapboxgl.Marker({ color: '#EAB308' })
      .setLngLat(academyLocation)
      .setPopup(
        new mapboxgl.Popup({ offset: 25 })
          .setHTML('<div><h3>BJJ Tasmania</h3><p>Academia de Brazilian Jiu Jitsu</p></div>')
      )
      .addTo(map.current);

    // Adicionar controles de navegação
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    setMapInitialized(true);
  };

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken.trim()) {
      initializeMap(mapboxToken.trim());
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  if (!mapInitialized) {
    return (
      <div className="w-full h-96 bg-gray-100 rounded-lg flex flex-col items-center justify-center p-8">
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold mb-2">Configure o Mapa</h3>
          <p className="text-gray-600 text-sm mb-4">
            Para visualizar o mapa, insira seu token público do Mapbox.<br />
            Acesse <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:underline">mapbox.com</a> para obter seu token.
          </p>
        </div>
        <form onSubmit={handleTokenSubmit} className="flex gap-2 w-full max-w-md">
          <Input
            type="text"
            placeholder="Seu token público do Mapbox"
            value={mapboxToken}
            onChange={(e) => setMapboxToken(e.target.value)}
            className="flex-1"
          />
          <Button type="submit" className="bg-yellow-500 hover:bg-yellow-600">
            Carregar Mapa
          </Button>
        </form>
      </div>
    );
  }

  return (
    <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
};

export default LocationMap;
