export enum ApiPath {
  InformationType = '/backend/informationtype',
  PolicyForInformationTypePath = '/policy/policy'
}

export interface ApiError {
  readonly message: string;
}
