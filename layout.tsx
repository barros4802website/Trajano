import './globals.css';
import type { Metadata } from 'next';
import { restaurant } from './data';

export const metadata: Metadata = {
  title: 'Biclaque Trajano — Cozinhar é cuidar | Restaurante em Chaves',
  description: 'Restaurante Biclaque Trajano em Chaves: cozinha portuguesa contemporânea, produto local, sustentabilidade, Pena Farm e reservas online.',
  openGraph: { title: 'Biclaque Trajano — Cozinhar é cuidar', description: 'Uma experiência gastronómica em Chaves, entre produto local, origem e tempo.', type: 'website' }
};

const jsonLd = {
  '@context': 'https://schema.org', '@type': 'Restaurant', name: restaurant.name,
  address: { '@type': 'PostalAddress', streetAddress: 'Largo Santa Maria Madalena 6 R/C', postalCode: '5400-165', addressLocality: 'Chaves', addressCountry: 'PT' },
  telephone: '+351276096190', servesCuisine: ['Portuguesa','Mediterrânea','Europeia','Saudável'],
  openingHours: ['Mo-Su 10:00-22:00'], acceptsReservations: true, url: 'https://biclaque-trajano.pt', sameAs: [restaurant.instagram, restaurant.facebook], potentialAction: { '@type': 'ReserveAction', target: restaurant.reservation }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="pt"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}} />{children}</body></html>;
}
