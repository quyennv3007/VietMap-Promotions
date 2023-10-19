export type getToken = {
  access_token: string | null | undefined;
  encryptedAccessToken: string | null | undefined;
  expireInSeconds: number | null | undefined;
  exp: number | null | undefined;
  userId: string | null | undefined;
};

export type InstanceResponse<T = any> = Promise<T | undefined>;

export interface Response<T = any> {
  isSuccess: boolean;
  data: T | null;
  errorCodes: string[];
}