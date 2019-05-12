import { FaPlaceOfWorship, FaClock, FaHandHoldingHeart } from 'react-icons/fa';

export default ([
    {
      title: 'Vieta',
      icon: FaPlaceOfWorship,
      iconProps: {
        color: "#634030"
      },
      content: "Ceremonijos vieta – Lietuvos kariuomenės Šv. Ignoto bažnyčia", 
      map: {
        apiKey: 'AIzaSyAKRXuVfaPQp_csiVerD4Xs1O89kpIBH7Y',
        title: "Bažnyčia",
        location: {
          lat: 54.682564,
          lng: 25.281937
        }
      }
    },
    {
      title: "Laikas",
      icon: FaClock,
      iconProps: {
        color: "#fff"
      },
      content: "Ceremonijos laikas – 2019 m. Liepos 6 d. 14:00 val. \
        Vėluoti į ceremoniją privilegiją turi Jaunoji, todėl svečių ",
      contentEnding: "prašome susirinkti anksčiau.",
      contentEndingClass: 'a-attention',
    },
    {
      content: "Labai lauksime visų ir tikimės, kad galėsite prisijungti ir pamatyti, kaip vienas kitam tariame „TAIP“! \
                Po ceremonijos kviečiame visus pabendrauti į šalia bažnyčios esantį ",
      contentEnding: "Technikos bibliotekos kiemelį.",
      contentEndingClass: 'a-important',
    },
    {
      title: "Geles bei dovanos",
      icon: FaHandHoldingHeart,
      iconProps: {
        color: "#FF5154"
      },
      content: "\
      Mūsų Šventės data sutampa su Lietuvos Valstybės diena, ta proga siūlome prisidėti prie mūsų krašto \
aplinkos puoselėjimo bei gražinimo ir galvojantiems apie gėlių dovanojimą, siūlome gražią alternatyvą – \
norėtume po vestuvių išsirinkti ir nusipirkti medžių ar vaismedžių sodinukų, kuriuos vėliau asmeniškai \
pasodinsime mums svarbioje vietoje. Augantys medeliai primins šią ypatingą dieną ir kiekvieną jūsų, kurie \
buvote šalia."
    },
    {
      content: "Patogumo dėlei, kad nereiktų sodinukų ir medelių nešiotis su savimi, galite internetu \
      išsirinkti kuponus šiuose medelynuose:",
      link: { text: "Augalų centras", href: "https://www.augalucentras.lt/dovanu-kuponas-2" }
    },
    {
      content: "",
      link: { text: "Puošmedis", href: "https://www.puosmedis.lt/naujienos/pagaliau-turime-grazius-dovanu-kuponus/"}
    },
    {
      content: "P.S. Svečiams, gavusiems kvietimus į vakarinę dalį, prašome dovanas pasaugoti iki vakaro! \
        Bučkius priimame visada!",
      class: "a-first-word-text"
    }
]);
