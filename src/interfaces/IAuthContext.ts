export interface IAuthContext {
  auth: {
    user?: string;
    roles?: string[];
  };
  setAuth: Function;
}
