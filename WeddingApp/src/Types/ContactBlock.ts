import { IconType } from "react-icons/lib/iconBase";

export interface IContactsBlock {
  text: string;
  contacts: IContacts[];
}

export interface IContacts {
  icon: IconType;
  text: string;
  value: string;
}