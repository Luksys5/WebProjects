import { FaPlaceOfWorship, FaClock } from 'react-icons/fa';

export default ([
    {
      title: 'Vieta',
      icon: FaPlaceOfWorship,
      content: "Ceremonijos vieta – Lietuvos kariuomenės Šv. Ignoto bažnyčia", 
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
                Po ceremonijos kviečiame visus pabendrauti į šalia bažnyčios esantį ",
      contentEnding: "Technikos bibliotekos kiemelį.",
      contentEndingClass: 'a-important',
    },
    {
      title: "Geles bei dovanos",
      content: "\
        Žinome, kad gėlės yra sveikinimų dalis, tačiau jos – nors ir gražus, bet labai laikinas dalykas. \
        Mūsų Šventės data sutampa su Lietuvos Valstybės diena, ta proga siūlome prisidėti prie mūsų \
        šalies aplinkos puoselėjimo bei gražinimo ir galvojantiems apie gėlių dovanojimą, \
        siūlome gražią alternatyvą – atsinešti lietuviško medžio/vaismedžio sodinuką, kurį \
        mes pasodinsime garbingoje vietoje. Užaugę medžiai ir po daugelio meto primins šią ypatingą \
        dieną ir kiekvieną jūsų, kurie buvote šalia."
    },
    {
      content: "P.S. Svečiams, gavusiems kvietimus į vakarinę dalį, prašome dovanas pasaugoti iki vakaro! \
        Bučkius priimame visada!",
      class: "a-first-word-text"
    }
]);
