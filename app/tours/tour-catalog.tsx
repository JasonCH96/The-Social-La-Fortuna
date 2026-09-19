'use client';

import { ArrowUpRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

export type Tour = { title: string; category: string; image: string };

const filters = ['All', 'Volcano', 'Rainforest', 'Combinations', 'Culture', 'Adrenaline'];
const whatsapp = 'https://wa.me/50661273625?text=Hello!%20I%27m%20staying%20at%20The%20Social%20Fortuna%20and%20I%27d%20like%20help%20booking%20a%20tour.';

export default function TourCatalog({ tours }: { tours: Tour[] }) {
  const [filter, setFilter] = useState('All');
  const [active, setActive] = useState<number | null>(null);
  const visible = useMemo(() => filter === 'All' ? tours : tours.filter(t => t.category === filter), [filter, tours]);

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActive(null);
      if (event.key === 'ArrowRight') setActive((active + 1) % visible.length);
      if (event.key === 'ArrowLeft') setActive((active - 1 + visible.length) % visible.length);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); };
  }, [active, visible.length]);

  const selectFilter = (next: string) => { setFilter(next); setActive(null); };
  const move = (direction: number) => active !== null && setActive((active + direction + visible.length) % visible.length);

  return <>
    <div className="tour-filters" role="group" aria-label="Filter tours by category">
      {filters.map(item => <button key={item} className={filter === item ? 'active' : ''} onClick={() => selectFilter(item)}>{item}</button>)}
    </div>
    <div className="tour-grid">
      {visible.map((tour, index) => <article className="tour-card" key={tour.title}>
        <button className="tour-card-image" onClick={() => setActive(index)} aria-label={`View full information for ${tour.title}`}>
          <img src={tour.image} alt={`${tour.title} information card`} loading="lazy" />
          <span className="tour-number">{String(index + 1).padStart(2, '0')}</span>
          <span className="tour-expand">View full card <ArrowUpRight size={15} /></span>
        </button>
        <div className="tour-card-copy"><p>{tour.category}</p><h3>{tour.title}</h3></div>
      </article>)}
    </div>

    {active !== null && <div className="tour-modal" role="dialog" aria-modal="true" aria-label={visible[active].title} onClick={() => setActive(null)}>
      <button className="modal-close" onClick={() => setActive(null)} aria-label="Close tour card"><X /></button>
      <button className="modal-arrow left" onClick={e => { e.stopPropagation(); move(-1); }} aria-label="Previous tour"><ChevronLeft /></button>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <img src={visible[active].image} alt={`${visible[active].title} full information card`} />
        <div><p><span>{visible[active].category}</span>{active + 1} / {visible.length}</p><a href={whatsapp} target="_blank" rel="noreferrer">Ask about this tour <ArrowUpRight size={16} /></a></div>
      </div>
      <button className="modal-arrow right" onClick={e => { e.stopPropagation(); move(1); }} aria-label="Next tour"><ChevronRight /></button>
    </div>}
  </>;
}
