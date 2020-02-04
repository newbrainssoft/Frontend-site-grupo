import React, { Component } from "react";

import "./Home.css";
import Carousel from "../Carousel";
import RecentPosts from "../RecentPosts"

// image, thumbnail, title, content, rating, alt
let data = [
  {
    image:
      "https://img.ibxk.com.br/2020/02/03/03111115387183.jpg?w=1120&h=420&mode=crop&scale=both",
    thumbnail:
      "https://img.ibxk.com.br/2020/02/03/03111115387183.jpg?w=540&h=300&mode=crop&scale=both",
    title: "App espião? Saiba como evitar ter sua privacidade violada",
    description:
      "O Brasil é o 3º país com maior número de usuários afetados por stalkerware, afirmou a Karpersky, perdendo somente para a Rússia e a Índia.",
    link:
      "https://www.tecmundo.com.br/seguranca/149928-app-espiao-saiba-evitar-ter-privacidade-violada.htm",
    date: "04/02/2020"
  },
  {
    image:
      "https://img.ibxk.com.br/2020/02/03/03153520159022.jpg?w=1120&h=420&mode=crop&scale=both",
    thumbnail:
      "https://img.ibxk.com.br/2020/02/03/03153520159022.jpg?w=540&h=300&mode=crop&scale=both",
    title: "Luminária esterilizadora da Xiaomi pretende combater Coronavírus",
    description:
      "Em mais uma tacada contra a epidemia de Coronavírus, a Xiaomi anunciou uma nova luminária esterilizadora para ajudar na luta contra o vírus que tem assustado o planeta.",
    link:
      "https://www.tecmundo.com.br/produto/149946-luminaria-esterilizadora-xiaomi-promete-combater-coronavirus.htm",
    date: "03/02/2020"
  },
  {
    image:
      "https://img.ibxk.com.br/2020/02/02/02212618397080.jpg?w=1120&h=420&mode=crop&scale=both",
    thumbnail:
      "https://img.ibxk.com.br/2020/02/02/02212618397080.jpg?w=540&h=300&mode=crop&scale=both",
    title: "3 impressoras baratinhas para você ter em casa",
    description:
      "Pensando em você, nós aqui listamos três impressoras feitas para uso doméstico, recomendadas às pessoas que trabalham em casa e também para estudantes.",
    link:
      "https://www.tecmundo.com.br/produto/149936-3-impressoras-baratinhas-voce-ter-casa.htm",
    date: "03/02/2020"
  },
  {
    image:
      "https://img.ibxk.com.br/2020/02/03/03162138049079.jpg?w=1120&h=420&mode=crop&scale=both",
    thumbnail:
      "https://img.ibxk.com.br/2020/02/03/03162138049079.jpg?w=540&h=300&mode=crop&scale=both",
    title: "Anúncio do Google Assistente no Super Bowl leva a web às lágrimas",
    description:
      "Uma boa parte das quase três mil pessoas que deixaram comentários confessou ter chorado com o comercial sobre o Google Assistente que a gigante de tecnologia preparou para apresentar nos intervalos dos jogos do Super Bowl. ",
    link:
      "https://www.tecmundo.com.br/software/149957-anuncio-google-assistente-super-bowl-leva-web-lagrimas.htm",
    date: "03/02/2020"
  },
  {
    image:
      "https://img.ibxk.com.br/2020/02/03/03100821685162.jpg?w=1120&h=420&mode=crop&scale=both",
    thumbnail:
      "https://img.ibxk.com.br/2020/02/03/03100821685162.jpg?w=540&h=300&mode=crop&scale=both",
    title: "Artista cria engarrafamento no Google Maps usando carrinho de mão",
    description:
      'Recentemente, um artista alemão chamado Simon Weckert publicou um vídeo mostrando que supostamente conseguiu "hackear" a plataforma.',
    link:
      "https://www.tecmundo.com.br/software/149942-artista-cria-engarrafamento-google-maps-usando-carrinho-mao-video.htm",
    date: "03/02/2020"
  },
  {
    image:
      "https://img.ibxk.com.br/2020/01/31/31000614830626.jpg?w=1120&h=420&mode=crop&scale=both",
    thumbnail:
      "https://img.ibxk.com.br/2020/01/31/31000614830626.jpg?w=540&h=300&mode=crop&scale=both",
    title:
      "Física quântica pode explicar dificuldade de humanos em tomar decisões",
    description:
      "Se nós, humanos, somos – de longe – as criaturas mais inteligentes do planeta, como é possível que a gente tome tantas decisões erradas?",
    link:
      "https://www.tecmundo.com.br/ciencia/149874-fisica-quantica-explicar-dificuldade-humanos-tomar-decisoes.htm",
    date: "01/02/2020"
  },
  {
    image:
      "https://img.ibxk.com.br/2020/02/03/03102601387167.jpg?w=1120&h=420&mode=crop&scale=both",
    thumbnail:
      "https://img.ibxk.com.br/2020/02/03/03102601387167.jpg?w=540&h=300&mode=crop&scale=both",
    title: "Zuckerberg quer monetizar o WhatsApp, mas sem anúncios",
    description:
      "O CEO do Facebook, Mark Zuckerberg, acha que está na hora de começar a lucrar com o aplicativo de mensagens instantâneas mais popular do mundo, e não será com anúncios.",
    link:
      "https://www.tecmundo.com.br/software/149925-zuckerberg-quer-monetizar-whatsapp-anuncios.htm",
    date: "03/02/2020"
  }
];

export default function Home(props) {
  return (
    <main>
      {/* slide de imagens  */}
      <Carousel data={data.slice(0, 3)} id="main" />

      <div className="container mt-2">
        <div className="row">
          <RecentPosts data={data.slice(3)} />

          <aside className="col-lg-3">sdasdad</aside>
        </div>

        <div className="row" style={{ height: "500px" }}></div>
      </div>
    </main>
  );
}
