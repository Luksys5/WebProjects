export default ([
  {
      name: 'joinWedding',
      type: 'checkbox',
      title: 'Ar dalyvausite mūsų Vestuvėse?',
      placeHolder: 'Taip/Ne',
  },
  {
      name: 'memberSize',
      type: 'text',
      title: 'Žemiau įrašykite keliese planuojate atvykti',
      placeHolder: 'vienas, du...',
  },
  {
      name: 'overnightSleep',
      type: 'checkbox',
      title: 'Ar liksite nakvynei?',
      placeHolder: 'Taip/ne',
  },
  {
      name: 'transportationToFeast', 
      type: 'checkbox',
      title: 'Ar Jums reikalingas transportas nuvykimui į Šventės vietą po Ceremonijos bažnyčioje? ', 
      placeHolder: 'Taip/Ne', 
  },
  {
      name: 'transportationFromFeast',
      type: 'checkbox',
      title: 'Ar Jums reikalingas transportas grįžimui į Vilnių 2019 m. liepos 7 d.?', 
      placeHolder: 'Taip/Ne',
  },
  {
    name: 'specialFoodNeeds',
    type: 'text',
    title: "Ar turite ypatingų pageidavimų maistui? Jei taip tai parašykite kokių",
    placeHolder: "Netoleravimas/alergijos..."
  },
]);


export enum RegFieldNamesEnum {
  joinWedding = 0,
  memberSize = 1,
  overnightSleep = 2,
  transportationToFeast = 3,
  transportationFromFeast = 4
}