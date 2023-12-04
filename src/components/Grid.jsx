const Grid = () => {
  return (
    <>
      <div
        className="container text-center grid-container"
        style={{ marginTop: "4rem" }}
      >
        <div className="row justify-content-evenly " style={{ gap: "2rem" }}>
          <div className="p-3 col-xl-4 col-xl-3 col-md-4 col-sm-6 col-12 grid-item item-1">
            
              <h4>Playa Honda</h4>
              <img src="/DSCF2706.JPG" className="mb-3"/>
            
            <p>
              Playa Honda es una localidad ubicada cerca del extremo inferior
              del Mar Menor. Es mayormente plana, lo que la convierte en un
              lugar ideal para pasear y andar en bicicleta. Cuenta con un largo
              paseo marítimo desde el cual se pueden admirar las maravillosas
              vistas hacia La Manga. En los meses de mayor afluencia, puedes
              alquilar un patín o simplemente relajarte en una tumbona. La playa
              tiene una arena fina y bordea las aguas tranquilas y poco
              profundas del Mar Menor. Durante el verano, la zona es muy
              concurrida por muchos visitantes. Fuera de la temporada estival,
              el área es más tranquila, pero cada año más personas descubren la
              belleza del lugar, junto con las suaves temperaturas invernales.
            </p>
          </div>
          <div className="p-3 col-xl-4 col-xl-3 col-md-4 col-sm-6 col-12 grid-item item-2">
            <h4>Cabo de palos</h4>
            <div>
              <img src="/DSCF2776.JPG" className="mb-3"/>
            </div>
            <p>
              Cabo de Palos es un encantador pueblo en el extremo sur de La
              Manga, junto al Mar Mediterráneo. Es perfecto para los amantes de
              la naturaleza y el mar, con su faro y puerto pesquero
              emblemáticos. Es famoso por sus restaurantes con deliciosos platos
              de mariscos y pescado fresco. Además, es ideal para bucear y hacer
              snorkel gracias a su excepcional vida marina. Durante el verano,
              sus playas de aguas transparentes son populares, y fuera de la
              temporada alta ofrece tranquilidad y belleza natural. También
              tiene mercados con productos frescos y actividades como
              equitación, senderismo y degustación de vinos regionales.
            </p>
          </div>
          <div className="p-3 col-xl-4 col-xl-3 col-md-4 col-sm-6 col-12 grid-item item-3">
            <h4>La Manga del Mar Menor</h4>
            <div>
              <img src="/DSCF2864.JPG" className="mb-3"/>
            </div>
            <p>
              La Manga del Mar Menor es una zona hermosa que alberga esta gran
              laguna de agua salada separada del Mediterráneo por La Manga. A lo
              largo del Mar Menor se encuentran pueblos desde San Javier hasta
              Cabo de Palos. La franja de La Manga, de 21 km de largo, crea una
              entrada desde el Mediterráneo hacia la laguna. Esta laguna es
              ideal para deportes acuáticos con aguas cálidas y poco oleaje. Hay
              kilómetros de playas doradas con temperaturas agradables casi todo
              el año. La región tiene poca lluvia, ideal para vacaciones durante
              todo el año. Ofrece restaurantes de pescado, bares con tapas
              asequibles y mercados con productos locales. Hay actividades como
              buceo, vela, golf, entre otras, y lugares para relajarse con
              masajes y vinos regionales.
            </p>
          </div>
          <div className="p-3 col-xl-4  col-xl-3  col-md-4  col-sm-6 col-12 grid-item item-4">
            <h4>Calblanque</h4>
            <div>
              <img src="/DSCF2982.JPG" className="mb-3"/>
            </div>
            <p>
              Calblanque es una reserva natural espectacular situada en la
              región. Con sus playas vírgenes y paisajes impresionantes, es un
              paraíso para los amantes de la naturaleza. Sus costas ofrecen
              playas de arena dorada y aguas cristalinas ideales para relajarse
              y disfrutar del entorno. Esta reserva es perfecta para practicar
              senderismo, ciclismo y observación de aves, además de ser un lugar
              ideal para escapar del bullicio y disfrutar de la tranquilidad.
              Con sus senderos naturales, playas prístinas y un entorno natural
              incomparable, Calblanque es un lugar perfecto para disfrutar de la
              belleza natural y la serenidad.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Grid;
