import {ISneakers} from "@data/sneakersTypes";

export interface ICartItem {
  id: number
  product: ISneakers
  quantity: number
}

export interface IAddToCartPayload extends Omit<ICartItem, 'id'> { }

export interface IChangeQuantityPayload extends Pick<ICartItem, 'id'> {
  type: 'minus' | 'plus'
}