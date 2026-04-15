import React, { useState, useEffect } from 'react';
import { Shield, Bitcoin, MapPin, Terminal, ChevronRight, Globe, Github, ExternalLink, Brain } from 'lucide-react';
import { content } from './content';

type Language = 'de' | 'ru' | 'he';
type Page = 'home' | 'about' | 'links' | 'research';

const App = () => {
  const [lang, setLang] = useState<Language>('de');
  const [page, setPage] = useState<Page>('home');
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const t = content[lang];
  const isRtl = lang === 'he';

  const renderHome = () => (
    <>
      {/* Hero / Intro */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-sky-100">
        <span className="text-teal-600 font-mono text-[16px] block mb-2 uppercase">{t.hero.subtitle}</span>
        <h2 className="text-3xl sm:text-4xl font-light mb-6 text-slate-800 border-b border-sky-50 pb-4">{t.hero.title}</h2>
        <div className="prose max-w-none text-slate-600">
          <p className="text-lg leading-relaxed mb-4">{t.hero.text}</p>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6 flex items-start rounded-r-lg">
            <Bitcoin className="h-6 w-6 text-amber-500 mr-3 flex-shrink-0 mt-1" />
            <p className="m-0 font-medium text-slate-800">{t.hero.warning}</p>
          </div>
        </div>
      </section>

      {/* Fallstudien */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-sky-100">
        <h2 className="text-2xl sm:text-3xl font-light mb-6 text-slate-800 border-b border-sky-50 pb-4">{t.cases.title}</h2>
        <div className="space-y-6">
          {t.cases.items.map((item, idx) => (
            <div key={idx} className={`bg-sky-50 p-5 rounded-xl border border-sky-100 ${isRtl ? 'border-r-4 border-r-teal-500' : 'border-l-4 border-l-teal-500'}`}>
              <h3 className="font-bold text-lg text-slate-800 mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-sky-100">
        <h2 className="text-2xl sm:text-3xl font-light mb-6 text-slate-800 border-b border-sky-50 pb-4">{t.team.title}</h2>
        <p className="mb-8 text-slate-600">{t.team.desc}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {t.team.members.map((member, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 bg-sky-50 rounded-xl border border-sky-100 hover:shadow-md transition-shadow">
              <img src={member.img} alt={member.name} className="w-24 h-24 mb-4 rounded-full border-4 border-white shadow-sm object-cover" referrerPolicy="no-referrer" />
              <div>
                <h4 className="font-bold text-slate-800 text-lg mb-1">{member.name}</h4>
                <p className="text-xs text-teal-600 font-mono mb-2 uppercase tracking-[1px]">{member.role}</p>
                <p className="text-xs text-slate-600 font-mono">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Forschungsbereich - Sublimative Beeinflussung */}
      <section className="bg-gradient-to-br from-sky-50 to-teal-50 p-6 sm:p-8 rounded-2xl shadow-sm border border-teal-200">
        <div className="flex items-center mb-4">
          <Brain className={`h-6 w-6 text-teal-600 ${isRtl ? 'ml-2' : 'mr-2'}`} />
          <span className="text-teal-600 font-mono text-sm uppercase tracking-wider">{t.research.subtitle}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-light mb-4 text-slate-800">{t.research.title}</h2>
        <p className="text-slate-600 leading-relaxed mb-6">{t.research.text}</p>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
          <p className="text-sm text-amber-800 flex items-start">
            <Shield className={`h-5 w-5 text-amber-600 flex-shrink-0 ${isRtl ? 'ml-2 mt-0.5' : 'mr-2 mt-0.5'}`} />
            {t.research.warning}
          </p>
        </div>
        <a 
          href={t.research.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition-colors font-medium"
        >
          {t.research.linkText}
          <ExternalLink className={`h-4 w-4 ${isRtl ? 'mr-2' : 'ml-2'}`} />
        </a>
      </section>
    </>
  );

  const renderAbout = () => (
    <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-sky-100">
      <h2 className="text-3xl sm:text-4xl font-light mb-6 text-slate-800 border-b border-sky-50 pb-4">{t.about.title}</h2>
      <div className="prose max-w-none text-slate-600 space-y-6 text-lg leading-relaxed">
        <p>{t.about.text1}</p>
        <p>{t.about.text2}</p>
        <div className="bg-sky-50 p-6 border border-sky-100 rounded-xl">
          <p className="text-slate-700 font-mono italic">{t.about.text3}</p>
        </div>
      </div>
    </section>
  );

  const renderLinks = () => (
    <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-sky-100">
      <h2 className="text-3xl sm:text-4xl font-light mb-6 text-slate-800 border-b border-sky-50 pb-4">{t.links.title}</h2>
      <p className="text-slate-600 text-lg mb-8">{t.links.desc}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {t.links.items.map((link, idx) => {
          const username = link.split('/').pop();
          return (
            <a key={idx} href={link} target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-sky-50 border border-sky-100 rounded-xl hover:border-teal-400 hover:shadow-sm transition-all group">
              <Github className={`h-6 w-6 text-slate-400 group-hover:text-teal-600 ${isRtl ? 'ml-4' : 'mr-4'}`} />
              <div>
                <div className="text-slate-800 font-bold">@{username}</div>
                <div className="text-xs text-slate-500 font-mono mt-1" dir="ltr">{link}</div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );

  const renderResearch = () => (
    <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-sky-100">
      <div className="flex items-center mb-6">
        <Brain className={`h-8 w-8 text-teal-600 ${isRtl ? 'ml-3' : 'mr-3'}`} />
        <h2 className="text-3xl sm:text-4xl font-light text-slate-800">{t.research.title}</h2>
      </div>
      <div className="prose max-w-none text-slate-600 space-y-6 text-lg leading-relaxed">
        <p>{t.research.text}</p>
        <div className="bg-gradient-to-r from-sky-50 to-teal-50 p-6 border border-teal-200 rounded-xl my-8">
          <h3 className="text-xl font-semibold text-teal-700 mb-4">{t.research.subtitle}</h3>
          <p className="text-slate-700 mb-6">{t.research.warning}</p>
          <a 
            href={t.research.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition-colors font-medium"
          >
            {t.research.linkText}
            <ExternalLink className={`h-4 w-4 ${isRtl ? 'mr-2' : 'ml-2'}`} />
          </a>
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Top Bar */}
      <div className="bg-white text-slate-500 py-2 text-[13px] border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center"><MapPin className={`h-4 w-4 text-teal-600 ${isRtl ? 'ml-1' : 'mr-1'}`}/> Próspera ZEDE, Honduras</span>
            <span className="flex items-center text-amber-500 font-bold"><Bitcoin className={`h-4 w-4 ${isRtl ? 'ml-1' : 'mr-1'}`}/> BTC Only</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="hidden sm:inline font-mono text-xs">Autokratische Hacker-Initiative</span>
            <div className="relative">
              <button 
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center space-x-1 text-teal-600 hover:text-teal-800 transition-colors focus:outline-none"
              >
                <Globe className="h-4 w-4" />
                <span className="uppercase font-mono text-xs">{lang}</span>
              </button>
              {langMenuOpen && (
                <div className={`absolute ${isRtl ? 'left-0' : 'right-0'} mt-2 w-32 bg-white border border-slate-200 rounded-xl shadow-lg z-50 overflow-hidden`}>
                  <button onClick={() => { setLang('de'); setLangMenuOpen(false); }} className="block w-full text-left px-4 py-2 text-sm hover:bg-sky-50 text-slate-700">🇩🇪 Deutsch</button>
                  <button onClick={() => { setLang('ru'); setLangMenuOpen(false); }} className="block w-full text-left px-4 py-2 text-sm hover:bg-sky-50 text-slate-700">🇷🇺 Русский</button>
                  <button onClick={() => { setLang('he'); setLangMenuOpen(false); }} className="block w-full text-left px-4 py-2 text-sm hover:bg-sky-50 text-slate-700">🇮🇱 עברית</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0 cursor-pointer" onClick={() => setPage('home')}>
              {/* Logo Integration */}
              <div className={`bg-sky-50 p-2 rounded-xl border border-sky-100 ${isRtl ? 'ml-3' : ''}`}>
                <img 
                  src="/images/logo.png" 
                  alt="Cybermobbing-Untersuchung Logo" 
                  className="h-10 w-10 object-contain"
                  onError={(e) => {
                    // Fallback to Terminal icon if logo fails to load
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling;
                    if (fallback) fallback.style.display = 'block';
                  }}
                />
                <Terminal className="h-10 w-10 text-teal-600 hidden" />
              </div>
              <div>
                <h1 className="font-mono font-bold text-xl sm:text-2xl tracking-[2px] text-teal-700 uppercase">Cybermobbing-Untersuchung</h1>
                <p className="text-[13px] text-slate-500 font-mono uppercase tracking-[1px]">Projekt autokratischer Hacker</p>
              </div>
            </div>
            <nav className="flex space-x-4 sm:space-x-6 font-semibold text-slate-500 text-[13px] uppercase tracking-[1px]">
              <button onClick={() => setPage('home')} className={`hover:text-teal-600 transition-colors py-1 ${page === 'home' ? 'text-teal-600 border-b-2 border-teal-600' : ''}`}>{t.nav.home}</button>
              <button onClick={() => setPage('about')} className={`hover:text-teal-600 transition-colors py-1 ${page === 'about' ? 'text-teal-600 border-b-2 border-teal-600' : ''}`}>{t.nav.about}</button>
              <button onClick={() => setPage('research')} className={`hover:text-teal-600 transition-colors py-1 ${page === 'research' ? 'text-teal-600 border-b-2 border-teal-600' : ''}`}>{t.nav.research}</button>
              <button onClick={() => setPage('links')} className={`hover:text-teal-600 transition-colors py-1 ${page === 'links' ? 'text-teal-600 border-b-2 border-teal-600' : ''}`}>{t.nav.links}</button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Main Column */}
        <main className="lg:col-span-3 space-y-8">
          {page === 'home' && renderHome()}
          {page === 'about' && renderAbout()}
          {page === 'links' && renderLinks()}
          {page === 'research' && renderResearch()}
        </main>

        {/* Sidebar */}
        <aside className="space-y-8">
          
          {/* Info Widget */}
          <div className="bg-white text-slate-700 p-6 rounded-2xl shadow-sm border border-sky-100 border-t-4 border-t-teal-500">
            <h3 className="font-light text-xl mb-4 flex items-center text-slate-800"><Terminal className={`h-5 w-5 text-teal-600 ${isRtl ? 'ml-2' : 'mr-2'}`}/> {t.sidebar.status}</h3>
            <ul className="space-y-3 text-sm text-slate-600 font-mono">
              <li className="flex justify-between border-b border-sky-50 pb-2">
                <span>{t.sidebar.location}</span>
                <span className="text-slate-800">Próspera, HN</span>
              </li>
              <li className="flex justify-between border-b border-sky-50 pb-2">
                <span>{t.sidebar.currency}</span>
                <span className="text-amber-500 font-bold">Bitcoin Only</span>
              </li>
              <li className="flex justify-between border-b border-sky-50 pb-2">
                <span>{t.sidebar.cases}</span>
                <span className="text-slate-800">1,337</span>
              </li>
              <li className="flex justify-between">
                <span>{t.sidebar.structure}</span>
                <span className="text-slate-800">Autokratisch</span>
              </li>
            </ul>
          </div>

          {/* Research Link Widget */}
          <div className="bg-gradient-to-br from-teal-50 to-sky-50 p-6 rounded-2xl shadow-sm border border-teal-200">
            <h3 className="font-light text-xl mb-4 flex items-center text-slate-800">
              <Brain className={`h-5 w-5 text-teal-600 ${isRtl ? 'ml-2' : 'mr-2'}`}/> 
              {t.research.title}
            </h3>
            <p className="text-sm text-slate-600 mb-4">{t.research.subtitle}</p>
            <a 
              href={t.research.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-sm text-teal-600 hover:text-teal-800 transition-colors font-mono"
            >
              <ExternalLink className={`h-4 w-4 ${isRtl ? 'ml-1' : 'mr-1'}`}/>
              {t.research.linkText}
            </a>
          </div>

          {/* Quick Links */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-sky-100">
            <h3 className="font-light text-xl mb-4 text-slate-800">{t.sidebar.resources}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="flex items-center text-sm text-slate-600 hover:text-teal-600 transition-colors font-mono">
                  <ChevronRight className={`h-4 w-4 ${isRtl ? 'ml-1 rotate-180' : 'mr-1'}`}/> PGP Public Keys
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-sm text-slate-600 hover:text-teal-600 transition-colors font-mono">
                  <ChevronRight className={`h-4 w-4 ${isRtl ? 'ml-1 rotate-180' : 'mr-1'}`}/> Bitcoin Node Setup Guide
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-sm text-slate-600 hover:text-teal-600 transition-colors font-mono">
                  <ChevronRight className={`h-4 w-4 ${isRtl ? 'ml-1 rotate-180' : 'mr-1'}`}/> OPSEC Manifest
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-sm text-slate-600 hover:text-teal-600 transition-colors font-mono">
                  <ChevronRight className={`h-4 w-4 ${isRtl ? 'ml-1 rotate-180' : 'mr-1'}`}/> Próspera ZEDE Info
                </a>
              </li>
            </ul>
          </div>

        </aside>

      </div>

      {/* Footer / Impressum */}
      <footer id="impressum" className="bg-white text-slate-500 py-12 mt-12 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h4 className="text-[11px] uppercase text-teal-600 tracking-[2px] mb-4 font-bold">{t.footer.imprint}</h4>
            <div className={`bg-sky-50 p-4 rounded-xl border border-sky-100 inline-block ${isRtl ? 'border-r-4 border-r-teal-500' : 'border-l-4 border-l-teal-500'}`}>
              <address className="not-italic text-[13px] space-y-1 text-slate-600 font-mono">
                <p className="font-bold text-slate-800 mb-2 font-sans">CYBERMOBBING-UNTERSUCHUNG</p>
                <p>Sacharias Christian Hemd (S.C.H.)</p>
                <p>St. John's Bay</p>
                <p>Próspera ZEDE</p>
                <p>Bay Islands</p>
                <p>Honduras</p>
              </address>
            </div>
          </div>
          <div>
            <h4 className="text-[11px] uppercase text-teal-600 tracking-[2px] mb-4 font-bold">{t.footer.network}</h4>
            <p className="text-[13px] mb-4 font-mono">
              {t.footer.networkText}
            </p>
            <div className={`flex space-x-4 ${isRtl ? 'space-x-reverse' : ''}`}>
              <div className="bg-sky-50 p-2 rounded-xl border border-sky-100 hover:border-teal-400 hover:bg-teal-50 cursor-pointer transition-all">
                <Bitcoin className="h-5 w-5 text-amber-500" />
              </div>
              <div className="bg-sky-50 p-2 rounded-xl border border-sky-100 hover:border-teal-400 hover:bg-teal-50 cursor-pointer transition-all">
                <Terminal className="h-5 w-5 text-teal-600" />
              </div>
              <div className="bg-sky-50 p-2 rounded-xl border border-sky-100 hover:border-teal-400 hover:bg-teal-50 cursor-pointer transition-all">
                <Shield className="h-5 w-5 text-teal-600" />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 mt-8 pt-8 border-t border-slate-200 text-[12px] text-center font-mono flex flex-col items-center">
          <p className="mb-6">&copy; {new Date().getFullYear()} Cybermobbing-Untersuchung. {t.footer.rights}</p>
          <div className="h-1 bg-sky-100 w-full relative max-w-md rounded-full overflow-hidden">
            <div className={`absolute top-0 h-full bg-teal-500 w-[76%] ${isRtl ? 'right-0' : 'left-0'}`}></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
