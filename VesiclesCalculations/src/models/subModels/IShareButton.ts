export interface IShareButton {
    id: string;
    className: string;
    iconComponent: string;
    tooltipClassName: string;
    tooltipText: string;
    iconColor: string;
    iconSize: number;
    iconClick: () => void
}