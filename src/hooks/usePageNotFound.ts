// src/hooks/usePageNotFound.ts
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Registra en consola la URL que no se encontró
export function usePageNotFound() {
  const location = useLocation();

  useEffect(() => {
    console.warn('[404] Ruta no encontrada:', location.pathname + location.search);
  }, [location]);
}