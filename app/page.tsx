import { ArrowDown, ArrowUpRight, MapPin, ShieldCheck, Snowflake, Wifi } from 'lucide-react';

const bookingUrl = 'https://www.hostelworld.com/hostels/p/331420/the-social-fortuna/';
const stays = [
  { eyebrow: 'PRIVATE STAY', title: 'Private Rooms', copy: 'Thoughtfully designed rooms with plush beds, powerful air conditioning and the calm you want after a full day outside.', image: '/images/social-room.jpg' },
  { eyebrow: 'SHARED STAY', title: '6-Bed Social Dorm', copy: 'A comfortable shared room for travelers who want an easy place to meet, recharge and head back into La Fortuna.', image: '/images/social-detail.jpg' },
];

export default function Home() {
  return <main>
    <section className="hero" id="top">
      <img className="hero-image" src="/images/social-hero.jpg" alt="Colorful tropical art inside The Social Fortuna" />
      <div className="hero-shade" />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="The Social Fortuna — Home"><span className="brand-mark">TS</span><span className="brand-name">THE SOCIAL<br />FORTUNA</span></a>
        <nav aria-label="Main navigation"><a href="#stay">Stay</a><a href="#experience">Experience</a><a href="#location">Location</a></nav>
        <a className="book" href={bookingUrl} target="_blank" rel="noreferrer">Book your stay <ArrowUpRight size={16} /></a>
      </header>
      <div className="hero-copy">
        <p className="kicker light">LA FORTUNA · COSTA RICA</p>
        <h1>Stay close.<br />Feel <em>connected.</em></h1>
        <p className="hero-intro">A fresh, design-forward stay steps from the heart of La Fortuna — made for good sleep, new stories and everything Arenal.</p>
        <div className="hero-actions"><a className="button button-coral" href={bookingUrl} target="_blank" rel="noreferrer">Check availability <ArrowUpRight size={17} /></a><a className="text-link light" href="#experience">Explore the hotel <ArrowDown size={16} /></a></div>
      </div>
      <div className="hero-index"><span>01</span><span className="line" /><span>04</span></div>
    </section>

    <section className="intro-section" id="experience">
      <div className="section-label"><span>01</span><p>THE SOCIAL WAY</p></div>
      <div className="intro-grid">
        <div><p className="kicker">YOUR BASE IN THE CENTER OF IT ALL</p><h2>The city outside.<br /><em>Your people inside.</em></h2></div>
        <div className="intro-body"><p>The Social Fortuna brings together the ease of a central hotel and the energy of a modern traveler community.</p><p>Walk to restaurants, cafés, shops and tour operators. Come back to cool rooms, warm showers, local art and spaces that make meeting people feel effortless.</p><a className="text-link dark" href="#stay">Discover your stay <ArrowUpRight size={16} /></a></div>
      </div>
      <div className="amenity-strip" aria-label="Featured amenities"><div><Wifi /><span>Fast Wi-Fi</span></div><div><Snowflake /><span>Air conditioning</span></div><div><ShieldCheck /><span>24-hour security</span></div><div><MapPin /><span>Steps from Central Park</span></div></div>
    </section>

    <section className="stay-section" id="stay">
      <div className="section-label on-dark"><span>02</span><p>WHERE YOU'LL STAY</p></div>
      <div className="stay-heading"><h2>Room to rest.<br /><em>Space to belong.</em></h2><p>Brand-new, thoughtfully designed accommodation with the details that matter most.</p></div>
      <div className="stay-grid">{stays.map((stay, index) => <article className="stay-card" key={stay.title}><div className="stay-image-wrap"><img src={stay.image} alt={`${stay.title} at The Social Fortuna`} /><span>0{index + 1}</span></div><p className="kicker light">{stay.eyebrow}</p><h3>{stay.title}</h3><p>{stay.copy}</p><a className="text-link light" href={bookingUrl} target="_blank" rel="noreferrer">View availability <ArrowUpRight size={16} /></a></article>)}</div>
    </section>

    <section className="location-section" id="location">
      <div className="location-copy"><div className="section-label"><span>03</span><p>LOCATION</p></div><p className="kicker">0.2 KM FROM THE CITY CENTER</p><h2>La Fortuna,<br /><em>right outside.</em></h2><p>Stay moments from Central Park, local restaurants, shops and the departure point for your next Arenal adventure.</p><ul><li><span>01</span> Central Park & downtown</li><li><span>02</span> Restaurants, cafés & nightlife</li><li><span>03</span> Tour operators & transport</li></ul></div>
      <div className="location-image"><img src="/images/social-lobby.jpg" alt="Reception and social space at The Social Fortuna" /></div>
    </section>

    <section className="final-cta"><p className="kicker light">LA FORTUNA IS WAITING</p><h2>Come for Arenal.<br /><em>Stay for the story.</em></h2><a className="button button-coral" href={bookingUrl} target="_blank" rel="noreferrer">Book your stay <ArrowUpRight size={17} /></a></section>
    <footer><a className="brand" href="#top"><span className="brand-mark">TS</span><span className="brand-name">THE SOCIAL<br />FORTUNA</span></a><p>Calle 468 · La Fortuna · Costa Rica</p><p>© 2026 THE SOCIAL FORTUNA</p></footer>
  </main>;
}
