export interface IShareButton {
    id: string;
    className: string;
    tooltipClassName: string;
    iconComponent: any;
    tooltipText: string;
    iconColor: string;
    iconSize: number;
    iconClick: () => void
}