export enum ApiPath {
  // DataPath = '/backend/records/allRecords'
  DataPath = '/backend/informationtype',
  PolicyForInformationTypePath = '/policy/policy'
}

export interface ApiError {
  readonly message: string;
}
