import { ISneakers } from "../../models/models";

export enum SneakersStatus {
    ERROR = 'Error',
    SUCCES = 'Succes',
    LOADING = 'Loading'

}

export interface SneakersSliceState {
    items: ISneakers[],
    status: string,
    modalActive: boolean
}