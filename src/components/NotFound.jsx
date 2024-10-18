import React from "react";
import { Link } from "react-router-dom"; // Para incluir un enlace de retorno a la página principal

const NotFound = ({ language }) => {
  console.log("not found language:", language);
  const isSpanish = language === "es";
  //console.log("isSpanish:", isSpanish);

  return (
    <div className="not-found-beach-container">
      <main className="not-found-content">
        {/* Imagen SVG de una playa */}
        <figure className="beach-scene">
          <svg
            width="300"
            height="200"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className="beach-svg"
          >
            {/* Sol */}
            <circle cx="80" cy="20" r="12" fill="yellow" />
            {/* Agua */}
            <rect x="0" y="60" width="100" height="40" fill="#00aaff" />
            {/* Arena */}
            <rect x="0" y="80" width="100" height="20" fill="#f4d6a0" />
            {/* Sombrilla */}
            <line
              x1="50"
              y1="80"
              x2="50"
              y2="60"
              stroke="brown"
              strokeWidth="1"
            />
            <polygon points="45,60 55,60 50,50" fill="red" />
            {/* Silla */}
            <rect x="30" y="75" width="10" height="5" fill="brown" />
            <line
              x1="30"
              y1="75"
              x2="40"
              y2="80"
              stroke="brown"
              strokeWidth="1"
            />
            <line
              x1="40"
              y1="75"
              x2="30"
              y2="80"
              stroke="brown"
              strokeWidth="1"
            />
            {/* Nube */}
            <ellipse cx="20" cy="25" rx="10" ry="5" fill="white" />
            <ellipse cx="25" cy="25" rx="10" ry="5" fill="white" />
            <title id="beach-scene-title">
              {isSpanish ? "Escena de playa" : "Beach scene"}
            </title>
          </svg>
          <figcaption>
            {isSpanish
              ? "Una escena de playa para relajarte mientras buscas la página."
              : "A beach scene to relax while you find the page."}
          </figcaption>
        </figure>
        {/* Mensaje de error */}
        <h1>
          {isSpanish ? "¡Oh no! Página no encontrada" : "Oops! Page Not Found"}
        </h1>
        <p>
          {isSpanish
            ? "Parece que te has perdido en la playa."
            : "It seems you're lost on the beach."}
        </p>
        <Link to="/" className="not-found-link">
          {isSpanish ? "Volver al inicio" : "Go back home"}
        </Link>
      </main>
    </div>
  );
};

export default NotFound;
