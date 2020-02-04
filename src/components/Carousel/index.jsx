import React from "react";

import "./Carousel.css";

function CarouselItem(props) {
  // props: src, title, href, alt
  return (
    <div
      className={props.index === 0 ? "carousel-item active" : "carousel-item"}
    >
      <img
        className="d-block w-100"
        src={props.src}
        alt={props.alt ? props.alt : ""}
      />

      <div className="carousel-caption d-none d-md-block">
        <a className="h2 text-white" href={props.href}>
          <h2>{props.title}</h2>
        </a>
      </div>
    </div>
  );
}

function CarouselIndicatorItem(props) {
  // props: id, index
  return (
    <li
      data-target={"#" + props.id}
      data-slide-to={props.index}
      className={props.index === 0 ? "active" : ""}
    ></li>
  );
}

export default function Carousel(props) {
  // carrega as imagens no carousel
  let CarouselList = props.data.map((elem, index) => (
    <CarouselItem
      key={index}
      src={elem.image}
      title={elem.title}
      href={elem.link}
      alt={elem.alt}
      index={index}
    />
  ));

  // carrega o indicador do slide
  let CarouselIndicatorList = props.data.map((_, index) => (
    <CarouselIndicatorItem key={index} id={props.id} index={index} />
  ));

  // props: data, id
  return (
    <section>
      <div id={props.id} className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">{CarouselIndicatorList}</ol>
        <div className="carousel-inner">{CarouselList}</div>
      </div>
    </section>
  );
}
