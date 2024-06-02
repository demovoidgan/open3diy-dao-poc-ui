import React from 'react';
import './App.css';

function Header() {
  return (
    <header className="App-header">
      <div className="header-title">Open3DIY DAO POC</div>
      <div className="header-buttons">
        <button>Modo Claro / oscuro</button>
        <button>Login</button>
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
      <p>Este es el panel izquierdo.</p>
    </aside>
  );
}

function MainContent() {
  return (
    <main className="App-main-content">
      <p>Hola mundo</p>

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
