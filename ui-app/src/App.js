import React from 'react';
import './App.css';

function Header() {
  return (
    <header className="App-header">
      <div className="header-title">Open3DIY DAO POC</div>
      <div className="header-buttons">
        <button>Conectar wallet</button>
        <button>Opciones</button>
        <button>Perfil</button>
      </div>
    </header>
  );
}

function Body() {
  return (
    <div className="App-body">
      <LeftPanel />
      <MainContent />
    </div>
  );
}

function LeftPanel() {
  return (
    <aside className="App-left-panel">
      <p>Perfil</p>
      <p>Desarrollando</p>
      <p>Mis solicitudes</p>
      <p>Mercado</p>
      <p>Normas de la comunidad</p>
      <p>Soporte</p>
      <p>Recursos</p>
    </aside>
  );
}

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

function MainContent() {

  const images = importAll(require.context(process.env.PUBLIC_URL + '../public/demo-catalog', false, /\.(webp)$/));
  const imageEntries = Object.entries(images);

  return (
    <main className="App-main-content">
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {imageEntries.map(([filename, path], index) => (
          <div key={index} style={{ flexBasis: '16.666%', boxSizing: 'border-box', padding: '10px' }}>
            <img src={path} alt={filename} style={{ width: '100%' }} />
            <p style={{ textAlign: 'center' }}>{filename}</p>
          </div>
        ))}
      </div>
    </main>
  );

}

function Footer() {
  return (
    <footer className="App-footer">
      <p>Este es el pie de página.</p>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
