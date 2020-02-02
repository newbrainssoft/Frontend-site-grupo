import React, { Component } from "react";

import "./Home.css";
import Carousel from "../Carousel";

// image, thumbnail, title, content, rating, alt
let data = [
  {
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    title: 'primeiro slide'
  },
  {
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    title: 'segundo slide'
  },
  {
    image: 'https://images.pexels.com/photos/97077/pexels-photo-97077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    title: 'terceiro slide'
  },
]


function RecentPostItem() {
  return (
    <div className="container row justify-content-center">
      <figure className="col-5">
        <img
          className="figure-imagem img-fluid rounded"
          src="https://img.ibxk.com.br/2020/01/27/27123811337052.jpg?w=164&h=118&mode=crop&scale=both"
          alt=""
        />
      </figure>
      <div className="col-7">
        <h2 className="font-weight-bold text-info" style={{ fontSize: "1em" }}>
          Coronavírus: mapa mostra em tempo real países afetados
        </h2>
        <p className="text-muted" style={{ fontSize: "0.8em" }}>
          postado em: 28/01/2020
        </p>
      </div>
    </div>
  );
}

function BestRatedItem(params) {
  return (
    <li>
      <h3>Coronavírus: mapa mostra em tempo real países afetados</h3>
      <div className="d-flex">
        <p className="mr-2 text-muted"> postado em: 28/01/2020 </p>
        <p>
          <i className="fa fa-sm fa-star text-muted" aria-hidden="true"></i>
          <i className="fa fa-sm fa-star text-muted" aria-hidden="true"></i>
          <i className="fa fa-sm fa-star text-muted" aria-hidden="true"></i>
          <i className="fa fa-sm fa-star text-muted" aria-hidden="true"></i>
          <i className="fa fa-sm fa-star text-muted" aria-hidden="true"></i>
        </p>
      </div>
    </li>
  );
}

function MainContent() {
  return (
    <section className="row mt-3">
      {/* Post recentes  */}
      <article className="col-xl-8 mb-2">
        <div id="lastest-post">
          <RecentPostItem />
          <RecentPostItem />
          <RecentPostItem />
          <RecentPostItem />
          <RecentPostItem />
          <RecentPostItem />
        </div>
      </article>
      <aside>
        <BestRatedItem />
        <BestRatedItem />
        <BestRatedItem />
        <BestRatedItem />
        <BestRatedItem />
        <BestRatedItem />
      </aside>

      {/* Mais votados  */}
    </section>
  );
}

export default class Home extends Component {
  render() {
    return (
      <main>
        {/* slide de imagens  */}
        <Carousel 
          data={data}
          id="mainimage"
        />

        <div className="container-fluid d-flex flex-column align-items-center">
          {/* Conteudo principal  */}
          <MainContent />
        </div>
      </main>
    );
  }
}
