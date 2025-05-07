import { ReactElement } from 'react';

interface technologiesType {
    id: number,
    icon: ReactElement | any,
}


export interface CardType{
    id: number,
    mainIcon?: string,
    text?:  string | any,
    link?: string,
    backgroundColor?: string,
    textColor?: string,
    description? : string,
    technologies?: technologiesType[],
}

export interface ViewProps{
    onClose?: () => void;
}