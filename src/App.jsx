import { useEffect, useState } from 'react'
import profilePhoto from './unnamed.jpg'

const iconShapes = {
  user: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></>,
  code: <><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/><path d="m14 4-4 16"/></>,
  folder: <><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8l-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z"/><circle cx="16" cy="14" r="2"/><path d="m18 16 2 2"/></>,
  mail: <><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></>,
  sun: <><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/></>,
  moon: <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6.5 6.5 0 0 0 8.268 8.268c.344-.215.825-.003.803.401" />,
}

function Icon({ name }) {
  return <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{iconShapes[name]}</svg>
}

function App() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    document.documentElement.classList.toggle('light', !dark)
  }, [dark])

  return <>
    <button className="theme-toggle-btn" aria-label="Cambiar tema" onClick={() => setDark((current) => !current)}>
      <Icon name={dark ? 'sun' : 'moon'} />
    </button>

    <main className="container">
      <div className="profile-container">
        <div className="profile-circle">
          <img src={profilePhoto} alt="Foto de perfil de Germán Pino" className="profile-img" />
        </div>
      </div>

      <nav className="nav-menu" aria-label="Navegación principal">
        <a href="#informacion" className="nav-link">Información</a>
        <a href="#habilidades" className="nav-link">Habilidades</a>
        <a href="#portafolio" className="nav-link">Portafolio</a>
        <a href="#contacto" className="nav-link">Contacto</a>
      </nav>

      <h1 className="main-title">PORTAFOLIO DE TRABAJO</h1>

      <section id="informacion" className="section-card">
        <h2><Icon name="user" /> Información</h2>
        <p>Germán Pino, estudiante de Ingeniería en Informática. Me dedico al desarrollo de software y aplicaciones web.</p>
      </section>

      <section id="habilidades" className="section-card">
        <h2><Icon name="code" /> Habilidades</h2>
        <div className="skills-tags">
          <span className="tag">HTML / CSS</span>
          <span className="tag">JavaScript</span>
          <span className="tag">Java</span>
          <span className="tag">Oracle SQL</span>
        </div>
      </section>

      <section id="portafolio" className="section-card">
        <h2><Icon name="folder" /> Portafolio</h2>
        <p>Aquí puedes ver mis proyectos y repositorios de código.</p>
      </section>

      <section id="contacto" className="section-card">
        <h2><Icon name="mail" /> Contacto</h2>
        <p>¿Quieres contactarme? Escríbeme a <a href="mailto:germ.pino@duocuc.cl">germ.pino@duocuc.cl</a> o sígueme en Instagram: <a href="https://www.instagram.com/gxrmman" target="_blank" rel="noopener noreferrer">@gxrmman</a>.</p>
      </section>
    </main>
  </>
}

export default App
