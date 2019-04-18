export interface IShareButton {
    id: string;
    className: string;
    iconClassName: string;
    tooltipClassName: string;
    tooltipText: string;
    iconColor: string;
    iconSize: number;
    iconClick: () => void
}