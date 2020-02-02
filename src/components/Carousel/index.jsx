import React from "react";

function CarouselItem(props) {
  // props: src, alt
  return (
    <div
      className={props.index === 0 ? "carousel-item active" : "carousel-item"}
    >
      <img
        className="d-block w-100"
        src={props.src}
        alt={props.alt ? props.alt : ""}
      />
    </div>
  );
}

function CarouselIndicatorItem(props) {
  // props: id, index
  return (
    <li
      data-target={props.id}
      data-slide-to={props.index}
      className={props.index === 0 && "active"}
    ></li>
  );
}

export default function Carousel(props) {
  let CarouselList = props.data.map((elem, index) => (
    <CarouselItem src={elem.image} alt={elem.alt} index={index} />
  ));
  let CarouselIndicatorList = props.data.map((elem, index) => (
    <CarouselIndicatorItem id={props.id} index={index} />
	));
	
	// props: data, id
  return (
    <section>
      <div id={props.id} class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">{CarouselIndicatorList}</ol>
        <div class="carousel-inner">{CarouselList}</div>
      </div>
    </section>
  );
}
