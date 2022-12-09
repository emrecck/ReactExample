import React, { useState } from 'react'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import LoginView from './views/Login/LoginView';
import CardsView from './views/Cards/CardsView';
import { FirstScenerio, SecondScenerio, ThirdScenerio } from './components/Hooks/UseEffect'

import './App.css'
import Graph from './components/Graph/Graph';

function App() {
  const [isShowMain, setShowMain] = useState(false);
  const cards = [
    { name: "Samsung S21 Lite", specs: "Long-life battery, 6.15'' screen, 64mps back camera", price: "$800", count: 1906 },
    { name: "Samsung S21 Lite", specs: "Long-life battery, 6.15'' screen, 64mps back camera", price: "$800", count: 1906 },
    { name: "Samsung S21 Lite", specs: "Long-life battery, 6.15'' screen, 64mps back camera", price: "$800", count: 1906 },
    { name: "Samsung S21 Lite", specs: "Long-life battery, 6.15'' screen, 64mps back camera", price: "$800", count: 1906 },
    { name: "Samsung S21 Lite", specs: "Long-life battery, 6.15'' screen, 64mps back camera", price: "$800", count: 1906 },
    { name: "Samsung S21 Lite", specs: "Long-life battery, 6.15'' screen, 64mps back camera", price: "$800", count: 1906 },
    { name: "Samsung S21 Lite", specs: "Long-life battery, 6.15'' screen, 64mps back camera", price: "$800", count: 1906 },
    { name: "Samsung S21 Lite", specs: "Long-life battery, 6.15'' screen, 64mps back camera", price: "$800", count: 1906 },
    { name: "Philips Monitor 1080P", specs: "21'' screen, hdmi input, settings buttons", price: "$500", count: 156 },
    { name: "Asus N50 620 Desktop Computer", specs: "NVIDIA 3060 TI 8 GB, 16 GB RAM, 512 GB SSD, Intel i7 11700F 2.96 Ghz, One side Fan, Small Size", price: "$2000", count: 34 },
    { name: "Asus N50 620 Desktop Computer", specs: "NVIDIA 3060 TI 8 GB, 16 GB RAM, 512 GB SSD, Intel i7 11700F 2.96 Ghz, One side Fan, Small Size", price: "$2000", count: 34 }
  ];

  return (
    <div className="App">
      <Navbar />
      <Header />
      {!isShowMain ? <LoginView isShowMain={isShowMain} setShowMain={setShowMain} /> : null}
      {isShowMain ? <CardsView cards={cards} /> : null}
      <Graph></Graph>
      <FirstScenerio />
      <SecondScenerio />
      <ThirdScenerio />
    </div>
  );
}

export default App;
