import { ReactElement } from 'react';

interface technologiesType {
    id: number,
    icon: ReactElement | any,
}


export interface CardType{
    mainIcon?: string,
    text?:  string | any,
    link?: string,
    backgroundColor?: string,
    description? : string,
    technologies?: technologiesType[],
}