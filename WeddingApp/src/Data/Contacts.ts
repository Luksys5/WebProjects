import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { ContactBlock } from '../react/components/Molecules/ContactBlock';

export default ([
  {
    content: "Jei neradote informacijos mes visada pasiruošę atsakyti į iškilusius klausimus!",
    componentClass: 'm-contacts-block',
    components: [
      {
        component: ContactBlock,
        props: {
          icon: FaPhone,
          text: "Vytautė",
          value: "+37062224162"
        }
      },
      {
        component: ContactBlock,
        props: {
          icon: FaEnvelope,
          value: "vytaute.tutkute@gmail.com"
        }
      }
    ]
  },
  {
    content: "Šventės dieną planuojame praleisti be mobiliųjų, todėl prašome kreiptis į Šventės koordinatores",
    compoenentClass: 'm-contacts-block',
    components: [
      {
        component: ContactBlock,
        props: {
          icon: FaPhone,
          text: "Gretė ir Monika",
          value: "+37063570432"
        }
      }
    ]
  }
]);