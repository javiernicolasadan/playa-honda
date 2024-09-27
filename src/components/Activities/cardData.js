const cardData = [
  {
    imageSrc: "/Buceo1.jpg",
    title: {
      es: "Deportes Nauticos",
      en: "Water Sports",
      fr: "Sports Nautiques",
      nl: "Watersporten",
      de: "Wassersportarten",
      pt: "Esportes Aquáticos",
    },
    description: {
      es: "Escuela de deportes nauticos para alquilar tablas de windsurf, patines, barcos de vela, clases...",
      en: "Water sports school for renting windsurf boards, skates, sailboats, classes...",
      fr: "École de sports nautiques pour louer des planches à voile, patins, bateaux à voile, cours...",
      nl: "Watersportschool voor het huren van windsurfplanken, schaatsen, zeilboten, lessen...",
      de: "Wassersportschule zum Mieten von Windsurfbrettern, Skates, Segelbooten, Kursen...",
      pt: "Escola de esportes aquáticos para alugar pranchas de windsurf, patins, veleiros, aulas...",
    },
    button: "KSURF",
    path: "https://www.google.com/maps/place/KSURF+LA+MANGA/@37.6333893,-0.7479462,17z/data=!3m1!4b1!4m6!3m5!1s0xd6322a8ee5c830b:0x6bb819a51fc01cbb!8m2!3d37.6333851!4d-0.7453713!16s%2Fg%2F12hkpx764?entry=ttu",
    button2: "La Manga Surf School",
    path2: "https://lamangasurfschool.es/",
    button3: "Planeta Azul",
    path3: "https://planeta-azul.com/",
  },
  {
    imageSrc: "/Miaya5.jpg",
    title: {
      es: "Espacios de ocio.",
      en: "Leisure Spaces",
      fr: "Espaces de Loisirs",
      nl: "Vrijetijdsruimtes",
      de: "Freizeiträume",
      pt: "Espaços de Lazer",
    },
    description: {
      es: "Cerca del apartamento puedes encontrar espacios de ocio tranquilos para relajarse con una bebida y/o comida.",
      en: "Near the apartment, you can find quiet leisure spaces to relax with a drink and/or food.",
      fr: "Près de l'appartement, vous pouvez trouver des espaces de loisirs tranquilles pour vous détendre avec une boisson et/ou de la nourriture.",
      nl: "In de buurt van het appartement vind je rustige vrijetijdsruimtes om te ontspannen met een drankje en/of eten.",
      de: "In der Nähe der Wohnung finden Sie ruhige Freizeiträume, um sich bei einem Getränk und/oder Essen zu entspannen.",
      pt: "Perto do apartamento, você pode encontrar espaços de lazer tranquilos para relaxar com uma bebida e/ou comida.",
    },
    button: "Miaya Beach",
    path: "https://www.google.com/maps/place/Miaya+Beach/@37.6321939,-0.7383953,17z/data=!4m14!1m7!3m6!1s0xd6322a6caaa3423:0xe9f4920688d617a2!2sPlaya+Honda!8m2!3d37.6319714!4d-0.7355354!16s%2Fg%2F11clwn6l_4!3m5!1s0xd632348a6eec18d:0x1ed95d41c502b088!8m2!3d37.6315502!4d-0.7388016!16s%2Fg%2F11s3ydhp32?entry=ttu",
    button2: "Trips",
    path2: "https://www.tripslamanga.com/main-room",
  },
  {
    imageSrc: "/BarcoSolaz.jpg",
    title: {
      es: "Paseos en barco",
      en: "Boat Tours",
      fr: "Tours en Bateau",
      nl: "Boottochten",
      de: "Bootstouren",
      pt: "Passeios de Barco",
    },
    description: {
      es: "Puedes dar paseos en barco desde varios puntos del Mar Menor.",
      en: "You can take boat tours from various points in the Mar Menor.",
      fr: "Vous pouvez faire des tours en bateau depuis plusieurs points du Mar Menor.",
      nl: "Je kunt boottochten maken vanaf verschillende punten in de Mar Menor.",
      de: "Sie können Bootstouren von verschiedenen Punkten im Mar Menor aus unternehmen.",
      pt: "Você pode fazer passeios de barco a partir de vários pontos no Mar Menor.",
    },
    button: "Chapi Taxi",
    path: "https://chapitaxi.com/",
    button2: "Cruc. Mar Menor",
    path2: "https://www.crucerosmarmenor.com/",
    button3: "Solaz Lines",
    path3: "https://www.solazlines.com/index.php/es/rutas-regulares/desde-la-manga/2-mares-isla-grosa",
    button4: "Flippa Boat",
    path4: "https://flippaboat.es/",
  },
  {
    imageSrc: "/david.jpeg",
    title: {
      es: "Gastronomía",
      en: "Gastronomy",
      fr: "Gastronomie",
      nl: "Gastronomie",
      de: "Gastronomie",
      pt: "Gastronomia",
    },
    description: {
      es: "Gastronomía para disfrutar de la vida en la Costa.",
      en: "Gastronomy for enjoying life in the Costa.",
      fr: "Gastronomie pour profiter de la vie sur la côte.",
      nl: "Gastronomie om te genieten van het leven aan de kust.",
      de: "Gastronomie, um das Leben an der Küste zu genießen.",
      pt: "Gastronomia para aproveitar a vida na Costa.",
    },
    button: "Malvasia",
    path: "https://restaurantemalvasia.com/",
    button2: "Scabetti",
    path2: "http://scabetti.es/",
  },
  {
    imageSrc: "/masaje.jpg",
    title: {
      es: "Experiencias",
      en: "Experiences",
      fr: "Expériences",
      nl: "Ervaringen",
      de: "Erfahrungen",
      pt: "Experiências",
    },
    description: {
      es: "Disfruta de multitud de experiencias inolvidables en la zona.",
      en: "Enjoy a multitude of unforgettable experiences in the area.",
      fr: "Profitez d'une multitude d'expériences inoubliables dans la région.",
      nl: "Geniet van een veelvoud aan onvergetelijke ervaringen in de omgeving.",
      de: "Genießen Sie eine Vielzahl unvergesslicher Erlebnisse in der Region.",
      pt: "Desfrute de uma infinidade de experiências inesquecíveis na região.",
    },
    button: "Masaje Thailandes",
    path: "https://yayathai.com/",
    button2: "BikingLaManga",
    path2: "https://bikinglamanga.com/wordpress/",
  },
];

export default cardData;
