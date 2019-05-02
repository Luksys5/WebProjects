export default ([
  {
      name: 'joinWedding',
      type: 'checkbox',
      className: 'a-checkbox',
      title: 'Ar planuojate dalyvauti mūsų Vestuvėse?',
      placeHolder: 'Taip/Ne',
      value: ''
  },
  {
      name: 'memberSize',
      type: 'text',
      className: 'a-checkbox',
      title: 'Būsite vienas ar su antra puse/vaikais?',
      placeHolder: 'Būsiu vienas/dviese/...',
      value: ''
  },
  {
      name: 'overnightSleep',
      type: 'checkbox',
      className: 'a-checkbox',
      title: 'Ar planuojate likti nakvynei? Ar liksite nakvoti',
      placeHolder: 'Taip/ne',
      value: ''
  },
  {
      name: 'transportationToFeast', 
      type: 'checkbox',
      className: 'a-checkbox',
      title: 'Ar Jums reikalingas transportas nuvykimui į Šventės vietą po Ceremonijos bažnyčioje? ', 
      placeHolder: 'Taip/Ne', 
      value: ''
  },
  {
      name: 'transportationFromFeast',
      type: 'checkbox',
      className: 'a-checkbox',
      title: 'Ar Jums reikalingas transportas grįžimui į Vilnių 2019 m. liepos 7 d.?', 
      placeHolder: 'Taip/Ne',
      value: ''
  },
]);


export enum RegFieldNamesEnum {
  joinWedding = 0,
  memberSize = 1,
  overnightSleep = 2,
  transportationToFeast = 3,
  transportationFromFeast = 4
}