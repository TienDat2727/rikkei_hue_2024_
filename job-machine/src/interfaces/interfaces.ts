
export enum CurrencyTypeEnum {
  USD = 'USD',
  ETH = 'ETH',
  BTC = 'BTC',
}
 
export interface PaymentCard {
  cvc: string;
  expiry: string;
  name: string;
  number: string;
  // eslint-disable-next-line
  focused: any;
  background: string;
  isEdit: boolean;
}
