import './App.css';
import Header from './components/Header';
import Categories from './components/Categories';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './components/modal/Modal'
import Modal from './components/modal/Modal';
import { useState } from 'react';


function App() {

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <Header />
      <Categories />
      <MainContent setModalOpen={setModalOpen}/>
      <Footer />
      {modalOpen && <Modal setModalOpen={setModalOpen}/>}
    </div>
  );
}

export default App;
