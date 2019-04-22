import { FaPlaceOfWorship, FaClock } from 'react-icons/fa';

export default ([
    {
      title: 'Vieta',
      icon: FaPlaceOfWorship,
      content: "Ceremonijos vieta – Lietuvos kariuomenės Šv. Ignoto bažnyčia", 
      link: { text: "Daugiau informacijos čia", href: "http://www.svignotas.lt/" },
      map: {
        apiKey: 'AIzaSyAKRXuVfaPQp_csiVerD4Xs1O89kpIBH7Y',
      }
    },
    {
      title: "Laikas",
      icon: FaClock,
      content: "Ceremonijos laikas – 2019 m. Liepos 6 d. 14:00 val. \
        Vėluoti į ceremoniją privilegiją turi Jaunoji, todėl svečių ",
      contentEnding: "prašome susirinkti anksčiau.",
      contentEndingClass: 'a-attention',
    },
    {
      content: "Labai lauksime visų ir tikimės, kad galėsite prisijungti ir pamatyti, kaip vienas kitam tariame „TAIP“! \
                Po ceremonijos kviečiame visus pabendrauti į šalia bažnyčios esantį Technikos bibliotekos kiemelį. ",
    }
]);
