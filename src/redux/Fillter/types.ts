export enum SortPropertyEnum {
    DPRICE = "price",
    APRICE = "-price",
  }
  export type Item = {
    name: string;
    sortProperty: SortPropertyEnum;
  };
  
  export interface FilterSliceState {
    item: Item;
    open:boolean,
    pageNumber: number,
    snkPerPage: number
}