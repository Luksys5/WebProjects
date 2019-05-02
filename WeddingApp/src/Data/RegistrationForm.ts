export default ([
  {
      name: 'joinWedding',
      type: 'checkbox',
      className: 'a-checkbox',
      title: 'Ar dalyvausite mūsų Vestuvėse?',
      placeHolder: 'Taip/Ne',
  },
  {
      name: 'overnightSleep',
      type: 'checkbox',
      className: 'a-checkbox',
      title: 'Ar liksite nakvynei?',
      placeHolder: 'Taip/ne',
  },
  {
      name: 'transportationToFeast', 
      type: 'checkbox',
      className: 'a-checkbox',
      title: 'Ar Jums reikalingas transportas nuvykimui į Šventės vietą po Ceremonijos bažnyčioje? ', 
      placeHolder: 'Taip/Ne', 
  },
  {
      name: 'transportationFromFeast',
      type: 'checkbox',
      className: 'a-checkbox',
      title: 'Ar Jums reikalingas transportas grįžimui į Vilnių 2019 m. liepos 7 d.?', 
      placeHolder: 'Taip/Ne',
  },
  {
      name: 'memberSize',
      type: 'text',
      className: 'a-checkbox',
      title: 'Parašykite po apačią kiek žmonių atvyks kartu su jumis',
      placeHolder: 'Nei vieno, vienas, du...',
  },
]);


export enum RegFieldNamesEnum {
  joinWedding = 0,
  memberSize = 1,
  overnightSleep = 2,
  transportationToFeast = 3,
  transportationFromFeast = 4
}