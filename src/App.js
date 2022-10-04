import React from 'react';
import './App.css';
import Nav from './Nav';
import HomeScreen from './HomeScreen';
import Banner from './Banner';
import Row from './Row';
import requests from './Request';


function App() {
  return (
    <div className="App">
      
      <Nav />

      
      <Banner  />

      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} /> 
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} /> 
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
