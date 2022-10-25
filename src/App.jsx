import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Solutions from './Components/solucoes/Solutions';
import Contatos from './Components/contatos/Contatos';
import Blog from './Components/Blog/Blog';
import Servicos from './Components/servicos/Servicos';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solucoes" element={<Solutions />} />
          <Route path="/contatos" element={<Contatos />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/servicos" element={<Servicos />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
