import React from 'react';
import './App.css';
import Row from './Row';
import Banner from './Banner';
import requests from './requests';

function App() {
  return (
    <div className='App'>
      <Banner />
      <Row
        title='NETFLIX ORIGINALS'
        isLargeRow
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title='Trending' fetchUrl={requests.fetchTrending} />
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
