import React, { useState, useEffect } from 'react';
import './Banner.css';
import axios from './axios.js';
import requests from './Request';

function Banner() {

  const [movie, setMovie] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData()
  }, []);

  console.log(movie)

  function truncate(string, n){
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  } 

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">Movie Name</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">
          {truncate(
          `This is a test description
          Instituto de Tecnologia de Massachusetts (em inglês: Massachusetts Institute of Technology - MIT) é uma universidade privada de pesquisa localizada em Cambridge, Massachusetts, Estados Unidos. Fundada em 1861, em resposta à crescente industrialização dos Estados Unidos, o MIT adotou um modelo europeu de universidade politécnica e salientou a instrução laboratorial em ciência aplicada e engenharia. Segundo o ranking de 2022 da QS (Quacquarelli Symonds), um dos mais conceituados do mundo, o MIT é a melhor universidade do mundo, posição que ocupa há dez anos consecutivos.

Os afiliados do Instituto trabalharam em computadores, radares e em sistemas de navegação inercial durante a Segunda Guerra Mundial e da Guerra Fria. A pesquisa de defesa pós-guerra contribuiu para a rápida expansão do corpo docente e do campus sob o comando de James Killian. O atual campus de 68 hectares foi inaugurado em 1916 e se estende por 1,6 quilômetro ao longo da margem norte da bacia do rio Charles.

O MIT, com cinco escolas e uma faculdade que contêm um total de 32 departamentos, frequentemente ocupa o topo dos rankings das melhores universidades do mundo.[2][3][4][5] É também classificado como a melhor universidade do mundo para 12 áreas distintas: Arquitetura e Planejamento Urbano; Ciência da Computação; Química; Engenharia Química; Engenharia Civil;`,

           150)} 
          </h1>;   
      </div>
      <div className="fade_botton" /> {/*efeito fade*/}
    </header>
  );
}

export default Banner;
