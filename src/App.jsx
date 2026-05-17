import { useMemo, useState } from 'react'
import {
  ArrowUpRight,
  Building2,
  Camera,
  ChefHat,
  Globe2,
  Mail,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  X,
} from 'lucide-react'
import './App.css'

const venues = [
  {
    id: 'brutal-soul',
    name: 'Brutal Soul',
    type: { es: 'Almuerzos, tapas creativas y cocina urbana', en: 'Brunch, creative tapas and urban food' },
    description: {
      es: 'Una experiencia con alma propia: almuerzos potentes, tapas con intención, carnes, hamburguesas y bocatas que mezclan tradición valenciana con un punto más urbano.',
      en: 'A soulful restaurant built around generous brunches, focused tapas, meats, burgers and sandwiches that blend Valencian tradition with an urban edge.',
    },
    address: 'C/ Vicente Marco Miranda, 6, 46026 Valencia',
    phone: '+34 963 839 067',
    email: 'brutal.soul.25@gmail.com',
    hours: '09:00 - 00:30',
    website: 'https://brutalsoul.es/',
    instagram: 'https://www.instagram.com/brutal_soul_restaurante/',
    logo: '/venues/brutal-soul-logo.png',
    image: '/venues/brutal-soul-front.jpg',
    imageFit: 'contain',
    color: '#f04b37',
  },
  {
    id: 'brutal-5',
    name: 'Brutal 5 Estrellas',
    type: { es: 'La esencia de siempre, renovada', en: 'The classic essence, renewed' },
    description: {
      es: 'Un concepto renovado con alma Brutal: producto reconocible, platos generosos, desayunos, almuerzos y menús para grupos en un espacio pensado para disfrutar sin complicaciones.',
      en: 'A renewed concept with a Brutal soul: recognisable product, generous dishes, breakfasts, brunches and group menus in a space designed for easy enjoyment.',
    },
    address: 'C/ de la Vall de la Ballestera, 43, 46015 Valencia',
    phone: '+34 961 237 266',
    email: 'brutal5estrellas@gmail.com',
    hours: '08:00 - 00:30',
    website: 'https://brutal5estrellas.es/',
    instagram: 'https://www.instagram.com/brutal.5estrellas/',
    logo: '/venues/brutal-5-logo.webp',
    logoWide: true,
    image: '/venues/brutal-5-front.webp',
    imageFit: 'contain',
    color: '#f3b735',
  },
  {
    id: 'bodegas',
    name: 'Bodegas Brutal',
    type: { es: 'Cocina mediterránea sin filtros', en: 'Unfiltered Mediterranean cooking' },
    description: {
      es: 'Producto fresco, tapeo, burgers y almuerzos con sabor reconocible. Una bodega contemporánea donde la cocina mediterránea se vive sin solemnidad.',
      en: 'Fresh produce, tapas, burgers and brunches with a recognisable flavour. A contemporary bodega where Mediterranean food feels lively and direct.',
    },
    address: 'C/ de Luis Buñuel Director de Cine, 1, Campanar, 46015 Valencia',
    phone: '+34 961 237 267',
    email: 'bodegasbrutal@gmail.com',
    hours: '07:30 - 00:15 / fin de semana 08:00 - 00:45',
    website: 'https://bodegasbrutal.es/',
    instagram: 'https://www.instagram.com/bodegas_brutal/',
    logo: '/venues/bodegas-brutal-logo.png',
    image: '/venues/bodegas-brutal-front.jpg',
    imageFit: 'contain',
    color: '#69b36b',
  },
  {
    id: 'stella',
    name: 'Stella Brutal',
    type: { es: 'Restaurante temático Stella Artois', en: 'Stella Artois themed restaurant' },
    description: {
      es: 'Tapas típicas, almuerzos, hamburguesas gourmet, carnes y una selección de cervezas de importación en el primer restaurante temático Stella Artois de Valencia.',
      en: 'Traditional tapas, brunches, gourmet burgers, meats and imported beers inside Valencia’s first Stella Artois themed restaurant.',
    },
    address: 'Valencia',
    phone: '',
    email: 'stella.brutal@gmail.com',
    hours: 'Consultar web',
    website: 'https://stellabrutal.es/',
    instagram: 'https://www.instagram.com/stella.brutal/',
    logo: '/venues/stella-brutal-logo.jpg',
    image: '/venues/stella-brutal-food.jpg',
    imageFit: 'contain',
    color: '#234d9b',
  },
]

const copy = {
  es: {
    nav: ['Grupo', 'Locales', 'Expansión', 'Contacto'],
    badge: 'Grupo gastronómico en Valencia',
    title: 'Grupo Sabores Brutal',
    subtitle:
      'Una colección de restaurantes con identidad propia, unidos por una misma forma de entender la hostelería: producto honesto, sabor directo y locales con carácter.',
    ctaVenues: 'Ver locales',
    ctaContact: 'Contacto corporativo',
    stats: [
      ['4', 'locales activos'],
      ['1', 'próxima apertura'],
      ['Valencia', 'territorio de origen'],
    ],
    introEyebrow: 'La idea',
    introTitle: 'Distintos locales, una misma forma de entender el sabor.',
    intro:
      'Grupo Sabores Brutal reúne una forma de hacer hostelería que ya se reconoce en Valencia: locales con personalidad propia, cocina sabrosa, trato cercano y una energía común. Cada restaurante tiene su carácter, pero todos comparten la misma idea: comer bien, disfrutar el momento y volver.',
    pillars: [
      ['Identidad local', 'Restaurantes reconocibles, conectados con Valencia y con propuestas pensadas para el cliente real.'],
      ['Operación escalable', 'Marcas diferenciadas, conceptos claros y una estructura preparada para nuevas aperturas.'],
      ['Experiencia Brutal', 'Ambiente, producto y comunicación con una personalidad directa, actual y fácil de recordar.'],
    ],
    venuesEyebrow: 'Nuestros locales',
    venuesTitle: 'Cinco conceptos, una misma energía.',
    visitWeb: 'Web',
    reserve: 'Reservar',
    instagram: 'Instagram',
    opening: 'Próxima apertura',
    keTitle: 'Ke Brutal',
    keType: 'Kebabs de autor, tapas originales y cocina de calidad',
    keText:
      'El próximo concepto del grupo aterriza en Vall de la Ballestera con una lectura más gastronómica del kebab: producto cuidado, recetas propias, tapas con intención y una experiencia lejos de la comida rápida convencional.',
    keAddress: 'C/ Vall de la Ballestera, 40 bajo, Valencia',
    growthEyebrow: 'Visión',
    growthTitle: 'Un grupo con base real y capacidad de crecer.',
    growthText:
      'La propuesta combina locales en funcionamiento, marcas con personalidad y una narrativa común que permite presentar el conjunto con más fuerza ante clientes, colaboradores e inversores.',
    growthItems: ['Portfolio multimarca', 'Conceptos replicables', 'Presencia local consolidada', 'Nueva apertura en desarrollo'],
    contactTitle: 'Contacto corporativo',
    contactText:
      'Para propuestas de colaboración, expansión, prensa o información del grupo.',
    legal: 'Aviso legal, privacidad y cookies pendientes de completar con datos oficiales de la sociedad.',
  },
  en: {
    nav: ['Group', 'Venues', 'Growth', 'Contact'],
    badge: 'Restaurant group in Valencia',
    title: 'Grupo Sabores Brutal',
    subtitle:
      'A collection of restaurants with their own identities, connected by the same view of hospitality: honest product, direct flavour and venues with character.',
    ctaVenues: 'Explore venues',
    ctaContact: 'Corporate contact',
    stats: [
      ['4', 'active venues'],
      ['1', 'opening soon'],
      ['Valencia', 'home market'],
    ],
    introEyebrow: 'The idea',
    introTitle: 'Different venues, one shared way of understanding flavour.',
    intro:
      'Grupo Sabores Brutal brings together a way of doing hospitality that is already recognised in Valencia: venues with their own personality, flavourful food, close service and a shared energy. Each restaurant has its own character, but they all share the same idea: eat well, enjoy the moment and come back.',
    pillars: [
      ['Local identity', 'Recognisable restaurants connected to Valencia and designed for real everyday customers.'],
      ['Scalable operation', 'Differentiated brands, clear concepts and a structure ready for new openings.'],
      ['Brutal experience', 'Atmosphere, product and communication with a direct, current and memorable personality.'],
    ],
    venuesEyebrow: 'Our venues',
    venuesTitle: 'Five concepts, one shared energy.',
    visitWeb: 'Website',
    reserve: 'Book',
    instagram: 'Instagram',
    opening: 'Opening soon',
    keTitle: 'Ke Brutal',
    keType: 'Signature kebabs, original tapas and quality food',
    keText:
      'The group’s next concept lands in Vall de la Ballestera with a more gastronomic view of kebab: curated product, original recipes, tapas with intention and an experience far from conventional fast food.',
    keAddress: 'C/ Vall de la Ballestera, 40 bajo, Valencia',
    growthEyebrow: 'Vision',
    growthTitle: 'A group with a real base and room to grow.',
    growthText:
      'The proposal combines operating venues, brands with personality and a shared narrative that gives the whole group more strength for customers, partners and investors.',
    growthItems: ['Multi-brand portfolio', 'Replicable concepts', 'Established local presence', 'New opening in development'],
    contactTitle: 'Corporate contact',
    contactText: 'For partnership, expansion, press or group information.',
    legal: 'Legal notice, privacy and cookies to be completed with official company details.',
  },
}

function App() {
  const [language, setLanguage] = useState('es')
  const [menuOpen, setMenuOpen] = useState(false)
  const t = copy[language]

  const featured = useMemo(() => venues.slice(0, 3), [])

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Grupo Sabores Brutal">
          <img className="brand-logo" src="/brand/grupo-sabores-brutal-logo-cropped.png" alt="Grupo Sabores Brutal" />
        </a>

        <button className="menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Principal">
          <a href="#grupo" onClick={() => setMenuOpen(false)}>{t.nav[0]}</a>
          <a href="#locales" onClick={() => setMenuOpen(false)}>{t.nav[1]}</a>
          <a href="#vision" onClick={() => setMenuOpen(false)}>{t.nav[2]}</a>
          <a href="#contacto" onClick={() => setMenuOpen(false)}>{t.nav[3]}</a>
          <div className="language-switch" aria-label="Selector de idioma">
            <button type="button" className={language === 'es' ? 'active' : ''} onClick={() => setLanguage('es')}>ES</button>
            <button type="button" className={language === 'en' ? 'active' : ''} onClick={() => setLanguage('en')}>EN</button>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-copy">
            <span className="eyebrow"><Sparkles size={16} />{t.badge}</span>
            <h1 id="hero-title">
              <span>Grupo</span>
              <span>Sabores</span>
              <span>Brutal</span>
            </h1>
            <p>{t.subtitle}</p>
            <div className="hero-actions">
              <a className="button primary" href="#locales">
                <ChefHat size={18} />
                {t.ctaVenues}
              </a>
              <a className="button secondary" href="#contacto">
                <Mail size={18} />
                {t.ctaContact}
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Locales del grupo">
            {featured.map((venue) => (
              <article className="hero-tile" key={venue.id} style={{ '--accent-color': venue.color }}>
                <img src={venue.image} alt="" />
                <div>
                  <img className="hero-logo" src={venue.logo} alt={venue.name} />
                  <span>{venue.name}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="stats-strip" aria-label="Datos del grupo">
          {t.stats.map(([value, label]) => (
            <div key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </section>

        <section className="content-section split" id="grupo">
          <div>
            <span className="section-kicker">{t.introEyebrow}</span>
            <h2>{t.introTitle}</h2>
          </div>
          <div className="section-copy">
            <p>{t.intro}</p>
            <div className="pillars">
              {t.pillars.map(([title, text]) => (
                <article key={title}>
                  <Building2 size={22} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section venues-section" id="locales">
          <div className="section-heading">
            <span className="section-kicker">{t.venuesEyebrow}</span>
            <h2>{t.venuesTitle}</h2>
          </div>

          <div className="venue-grid">
            {venues.map((venue) => (
              <article
                className={`venue-card ${venue.imageFit === 'contain' ? 'has-contain-image' : ''}`}
                key={venue.id}
                style={{ '--accent-color': venue.color }}
              >
                <div className={`venue-image ${venue.imageFit === 'contain' ? 'fit-contain' : ''}`}>
                  <img src={venue.image} alt="" />
                </div>
                <div className="venue-body">
                  <div className="venue-logo-row">
                    <img
                      className={venue.logoWide ? 'wide-logo' : ''}
                      src={venue.logo}
                      alt={venue.name}
                    />
                    <span>{venue.type[language]}</span>
                  </div>
                  <h3>{venue.name}</h3>
                  <p>{venue.description[language]}</p>
                  <ul className="venue-meta">
                    <li><MapPin size={16} />{venue.address}</li>
                    {venue.phone && <li><Phone size={16} />{venue.phone}</li>}
                    <li><Mail size={16} />{venue.email}</li>
                  </ul>
                  <div className="venue-links">
                    <a href={venue.website} target="_blank" rel="noreferrer">
                      <Globe2 size={17} />
                      {t.visitWeb}
                    </a>
                    <a href={`${venue.website}reservas/`} target="_blank" rel="noreferrer">
                      <ArrowUpRight size={17} />
                      {t.reserve}
                    </a>
                    <a href={venue.instagram} target="_blank" rel="noreferrer">
                      <Camera size={17} />
                      {t.instagram}
                    </a>
                  </div>
                </div>
              </article>
            ))}

            <article className="venue-card upcoming">
              <div className="ke-mark">
                <img src="/venues/ke-brutal-logo.jpeg" alt="Ke Brutal" />
              </div>
              <div className="venue-body">
                <div className="venue-logo-row">
                  <span className="opening-label">{t.opening}</span>
                </div>
                <h3>{t.keTitle}</h3>
                <strong>{t.keType}</strong>
                <p>{t.keText}</p>
                <ul className="venue-meta">
                  <li><MapPin size={16} />{t.keAddress}</li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        <section className="content-section growth-section" id="vision">
          <div className="growth-copy">
            <span className="section-kicker">{t.growthEyebrow}</span>
            <h2>{t.growthTitle}</h2>
            <p>{t.growthText}</p>
          </div>
          <div className="growth-list">
            {t.growthItems.map((item) => (
              <div key={item}>
                <span></span>
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contacto">
          <div>
            <span className="section-kicker">{t.nav[3]}</span>
            <h2>{t.contactTitle}</h2>
            <p>{t.contactText}</p>
          </div>
          <a className="contact-link" href="mailto:gruposaboresbrutal@gmail.com">
            <Mail size={22} />
            gruposaboresbrutal@gmail.com
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <span>Grupo Sabores Brutal</span>
        <span>{t.legal}</span>
      </footer>
    </div>
  )
}

export default App
