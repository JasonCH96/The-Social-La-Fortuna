import type { Metadata } from 'next';
import { ArrowDown, ArrowLeft, ArrowUpRight } from 'lucide-react';
import TourCatalog, { type Tour } from './tour-catalog';

export const metadata: Metadata = {
  title: 'Tours & Adventures | The Social Fortuna',
  description: 'Explore Arenal Volcano, Río Celeste, hanging bridges, rafting, canyoning, hot springs and cultural tours from The Social Fortuna.',
  openGraph: { title: 'Tours from The Social Fortuna', description: 'Fourteen ways to experience Arenal and La Fortuna.', images: ['/images/tours/01-arenal-volcano-hot-springs.webp'] },
  twitter: { card: 'summary_large_image', title: 'Tours from The Social Fortuna', description: 'Fourteen ways to experience Arenal and La Fortuna.', images: ['/images/tours/01-arenal-volcano-hot-springs.webp'] },
};

const tours: Tour[] = [
  { title: 'Arenal Volcano & Hot Springs · Tour 1', category: 'Volcano', image: '/images/tours/01-arenal-volcano-hot-springs.webp' },
  { title: 'Místico Hanging Bridges · Tour 2', category: 'Rainforest', image: '/images/tours/02-mistico-hanging-bridges.webp' },
  { title: 'Río Celeste · Tour 3', category: 'Rainforest', image: '/images/tours/03-rio-celeste.webp' },
  { title: 'Arenal Volcano & Hot Springs · Tour 4', category: 'Volcano', image: '/images/tours/04-arenal-hot-springs.webp' },
  { title: 'Waterfall, Volcano & Hot Springs · Combo 1', category: 'Combinations', image: '/images/tours/05-combo-waterfall-volcano.webp' },
  { title: 'Volcano, Hanging Bridges & Hot Springs · Combo 2', category: 'Combinations', image: '/images/tours/06-combo-bridges-volcano.webp' },
  { title: 'Arenal Full-Day Adventure · Combo 3', category: 'Combinations', image: '/images/tours/07-full-day-adventure.webp' },
  { title: 'Coffee & Chocolate', category: 'Culture', image: '/images/tours/08-coffee-chocolate.webp' },
  { title: 'Coffee, Chocolate & Sloth', category: 'Culture', image: '/images/tours/09-coffee-chocolate-sloth.webp' },
  { title: 'Balsa River Rafting', category: 'Adrenaline', image: '/images/tours/10-balsa-rafting.webp' },
  { title: 'Sarapiquí River Rafting', category: 'Adrenaline', image: '/images/tours/11-sarapiqui-rafting.webp' },
  { title: 'Zip Lining & Hot Springs', category: 'Adrenaline', image: '/images/tours/12-zipline-hot-springs.webp' },
  { title: 'Canyoning', category: 'Adrenaline', image: '/images/tours/13-canyoning.webp' },
  { title: 'Horseback Riding & Hot Springs', category: 'Adrenaline', image: '/images/tours/14-horseback-hot-springs.webp' },
];

const whatsapp = 'https://wa.me/50661273625?text=Hello!%20I%27m%20staying%20at%20The%20Social%20Fortuna%20and%20I%27d%20like%20help%20booking%20a%20tour.';

export default function ToursPage() {
  return <main className="tours-page">
    <section className="tours-hero">
      <img src="/images/tours/01-arenal-volcano-hot-springs.webp" alt="Arenal Volcano adventure in La Fortuna" />
      <div className="tours-hero-shade" />
      <header className="site-header">
        <a className="brand" href="/" aria-label="The Social Fortuna — Home"><span className="brand-mark">TS</span><span className="brand-name">THE SOCIAL<br />FORTUNA</span></a>
        <nav aria-label="Main navigation"><a href="/">Hotel</a><a href="/#stay">Stay</a><a className="current" href="/tours">Tours</a><a href="/#location">Location</a></nav>
        <a className="book" href={whatsapp} target="_blank" rel="noreferrer">Ask the tour desk <ArrowUpRight size={16} /></a>
      </header>
      <div className="tours-hero-copy"><a className="back-link" href="/"><ArrowLeft size={15} /> Back to the hotel</a><p className="kicker light">LOCAL ADVENTURES · LA FORTUNA</p><h1>Your Arenal story<br /><em>starts here.</em></h1><p>Explore fourteen hand-picked experiences and let our local team help you choose the right pace, route and combination.</p><a className="button button-coral" href="#catalog">Explore the tourbook <ArrowDown size={17} /></a></div>
    </section>

    <section className="tourbook-section" id="catalog">
      <div className="section-label"><span>01</span><p>COMPLETE COLLECTION</p></div>
      <div className="tourbook-heading"><div><p className="kicker">THE TOURBOOK</p><h2>Choose your<br /><em>wild side.</em></h2></div><p>Select any card to see the complete tour information. Filter by the kind of day you want, then ask our team about current schedules and availability.</p></div>
      <TourCatalog tours={tours} />
    </section>

    <section className="tour-help"><p className="kicker light">PLAN WITH A LOCAL</p><h2>Not sure which<br /><em>adventure fits?</em></h2><p>Tell us your dates, interests and preferred pace. We’ll help you compare the latest schedules, pickup details and combinations.</p><a className="button button-coral" href={whatsapp} target="_blank" rel="noreferrer">Talk to our tour desk <ArrowUpRight size={17} /></a></section>
    <footer><a className="brand" href="/"><span className="brand-mark">TS</span><span className="brand-name">THE SOCIAL<br />FORTUNA</span></a><p>Calle 468 · La Fortuna · Costa Rica</p><p>© 2026 THE SOCIAL FORTUNA</p></footer>
  </main>;
}
