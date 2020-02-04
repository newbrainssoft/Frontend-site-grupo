import React from "react";

function RecentPostItem(props) {
  // props: src, href, title, date, description
  return (
    <div
      className="container p-0 m-0 row pb-4 mt-4"
      style={{ borderBottom: "solid #ccc 0.001em" }}
    >
      <figure className="figure col-5" style={{ margin: 0, padding: 0 }}>
        {/* 540x300  */}
        <img className="img-fluid" src={props.src} />
      </figure>

      <div className="col-7">
        <a className="text-info" href={props.href}>
          <h1 style={{ fontSize: "1.3em" }}>{props.title}</h1>
        </a>
        <p className="text-muted" style={{ fontSize: "0.8em" }}>
          {props.description}
        </p>
        <p className="text-muted" style={{ fontSize: "0.6em" }}>
          {props.date}
        </p>
      </div>
    </div>
  );
}

export default function RecentPosts(props) {
  let RecentPostList = props.data.map(elem => (
    <RecentPostItem
      src={elem.thumbnail}
      href={elem.link}
      title={elem.title}
      date={elem.date}
      description={elem.description}
    />
  ));

  return <section className="col-lg-9">{RecentPostList}</section>;
}
