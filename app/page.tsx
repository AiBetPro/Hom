import Link from 'next/link';
import {
  IconGrid,
  IconBolt,
  IconBot,
  IconTicket,
  IconUser,
  IconHome,
  IconArrowRight,
  IconFootball,
  IconBasketball,
  IconTennis,
  IconRacing,
  IconUp,
  IconDown,
} from '../components/Icons';

const matches = [
  { id: 'arsenal-chelsea', league: 'Premier League', time: '18:00', home: 'Arsenal', away: 'Chelsea', odds: ['1.65', '3.70', '4.90'] },
  { id: 'barcelona-sevilla', league: 'La Liga', time: '20:30', home: 'Barcelona', away: 'Sevilla', odds: ['1.42', '4.40', '6.80'] },
  { id: 'inter-milan', league: 'Serie A', time: '21:00', home: 'Inter', away: 'Milan', odds: ['1.75', '3.50', '4.30'] },
];

const tickerOdds = [
  { label: 'Arsenal - Chelsea', value: '1.65', dir: 'up' as const },
  { label: 'Real Madrid - Betis', value: '1.28', dir: 'down' as const },
  { label: 'PSG - Lyon', value: '1.54', dir: 'up' as const },
  { label: 'Barcelona - Sevilla', value: '1.42', dir: 'down' as const },
  { label: 'Inter - Milan', value: '3.50', dir: 'up' as const },
  { label: 'Bayern - Dortmund', value: '1.61', dir: 'up' as const },
  { label: 'Liverpool - City', value: '2.90', dir: 'down' as const },
];
const tickerLoop = [...tickerOdds, ...tickerOdds];

export default function Home() {
  return (
    <main className="goalix-home">
      <header className="goalix-header">
        <Link href="/" className="logo">GOA<span>LIX</span></Link>
        <nav className="desktop-nav">
          <Link href="/dashboard"><IconGrid /> Sports</Link>
          <Link href="/live"><span className="nav-live-dot" /> Live</Link>
          <Link href="/ai-prono"><IconBot /> IA Prono</Link>
          <Link href="/bets"><IconTicket /> Mes paris</Link>
        </nav>
        <div className="header-account-actions">
          <Link href="/connexion" className="header-auth-link">Connexion</Link>
          <Link href="/connexion?mode=register" className="header-auth-button">Inscription</Link>
          <Link href="/connexion" className="account-button" aria-label="Connexion ou inscription">
            <IconUser />
          </Link>
        </div>
      </header>

      <section className="hero-v1">
        <div className="hero-content">
          <div className="live-badge"><span /> 312 marchés en direct</div>
          <h1>Le sport.<br /><strong>Ton analyse.</strong><br />Ton pari.</h1>
          <p>Cotes en temps réel, live betting et un moteur d&apos;analyse IA réunis dans une seule plateforme, pensée pour parier avec méthode.</p>
          <div className="hero-actions">
            <Link href="/dashboard" className="primary-button">Voir les matchs <IconArrowRight /></Link>
            <Link href="/ai-prono" className="secondary-button"><IconBot /> IA Prono</Link>
          </div>
        </div>

        <Link href="/match/arsenal-chelsea" className="hero-card hero-card-link">
          <div className="hero-card-top"><span><IconBolt /> Match à la une</span><small>18:00</small></div>
          <div className="teams">
            <div><div className="team-icon">A</div><strong>Arsenal</strong></div>
            <span className="vs">VS</span>
            <div><div className="team-icon">C</div><strong>Chelsea</strong></div>
          </div>
          <div className="featured-odds">
            <div><small>1</small><strong>1.65</strong></div>
            <div><small>X</small><strong>3.70</strong></div>
            <div><small>2</small><strong>4.90</strong></div>
          </div>
          <div className="hero-card-cta">Voir les marchés du match <IconArrowRight /></div>
        </Link>
      </section>

      <div className="odds-ticker" aria-hidden="true">
        <div className="odds-ticker-track">
          {tickerLoop.map((t, i) => (
            <div className="ticker-item" key={`${t.label}-${i}`}>
              <b>{t.label}</b>
              <span>{t.value}</span>
              {t.dir === 'up' ? <IconUp className="tick-up" width={13} height={13} /> : <IconDown className="tick-down" width={13} height={13} />}
            </div>
          ))}
        </div>
      </div>

      <section className="sports-section">
        <div className="section-title"><div><span>Explorer</span><h2>Sports populaires</h2></div><Link href="/dashboard">Voir tout <IconArrowRight width={14} height={14} /></Link></div>
        <div className="sports-grid">
          <Link href="/dashboard" className="sport-card active"><IconFootball /><strong>Football</strong><small>245 matchs</small></Link>
          <Link href="/dashboard" className="sport-card"><IconBasketball /><strong>Basketball</strong><small>38 matchs</small></Link>
          <Link href="/dashboard" className="sport-card"><IconTennis /><strong>Tennis</strong><small>64 matchs</small></Link>
          <Link href="/dashboard" className="sport-card"><IconRacing /><strong>Formule 1</strong><small>12 événements</small></Link>
        </div>
      </section>

      <section className="matches-section">
        <div className="section-title"><div><span>Aujourd&apos;hui</span><h2>Matchs populaires</h2></div><Link href="/live"><span className="nav-live-dot" style={{ marginRight: 6 }} />Live</Link></div>
        <div className="matches-list">
          {matches.map((match) => (
            <Link href={`/match/${match.id}`} className="match-card match-card-link" key={match.id}>
              <div className="match-info"><small>{match.league}</small><span>{match.time}</span></div>
              <div className="match-teams"><strong>{match.home}</strong><span>vs</span><strong>{match.away}</strong></div>
              <div className="match-odds">
                <div><small>1</small>{match.odds[0]}</div>
                <div><small>X</small>{match.odds[1]}</div>
                <div><small>2</small>{match.odds[2]}</div>
              </div>
              <div className="match-card-arrow">Voir les marchés <IconArrowRight width={14} height={14} /></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="ai-banner">
        <div>
          <div className="ai-label"><IconBot /> GOALIX AI</div>
          <h2>Laissez l&apos;IA<br />analyser les matchs.</h2>
          <p>Choisissez votre niveau de risque et laissez notre moteur classer les opportunités disponibles selon leur potentiel.</p>
          <Link href="/ai-prono" className="primary-button">Découvrir IA Prono <IconArrowRight /></Link>
        </div>
        <div className="ai-orb"><span>AI</span></div>
      </section>

      <footer className="goalix-footer">
        <div><Link href="/" className="logo">GOA<span>LIX</span></Link><p>Sports Betting & AI Predictions Platform</p></div>
        <div className="footer-links">
          <Link href="/dashboard">Sports</Link>
          <Link href="/live">Live</Link>
          <Link href="/ai-prono">IA Prono</Link>
          <Link href="/bets">Mes paris</Link>
        </div>
      </footer>

      <div className="mobile-nav">
        <Link href="/"><IconHome />Accueil</Link>
        <Link href="/dashboard"><IconFootball />Sports</Link>
        <Link href="/live"><IconBolt />Live</Link>
        <Link href="/ai-prono"><IconBot />IA</Link>
        <Link href="/bets"><IconTicket />Paris</Link>
      </div>
    </main>
  );
}
