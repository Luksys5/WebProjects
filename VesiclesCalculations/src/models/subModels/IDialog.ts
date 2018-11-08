export interface IDialog {
    header: string;
    info: JSX.Element;
    content: JSX.Element[];
    buttons: any[];
    overlay: boolean;
}