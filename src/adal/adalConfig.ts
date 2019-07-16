import { AuthenticationContext, adalFetch, withAdalLogin } from 'react-adal';

export const adalConfig: any = {
  clientId: 'wertt',
  endpoints: {
    api: 'http://localhost:8080' // Necessary for CORS requests, for more info see https://github.com/AzureAD/azure-activedirectory-library-for-js/wiki/CORS-usage
  },
  // 'tenant' is the Azure AD instance.
  tenant: '1234',
  // 'cacheLocation' is set to 'sessionStorage' by default (see https://github.com/AzureAD/azure-activedirectory-library-for-js/wiki/Config-authentication-context#configurable-options.
  // We change it to'localStorage' because 'sessionStorage' does not work when our app is served on 'localhost' in development.
  cacheLocation: 'localStorage'
};

export const authContext = new AuthenticationContext(adalConfig);

export const getToken = authContext.getCachedToken(adalConfig.clientId);

export const logout = (e: any) => {
  e.preventDefault();
  return authContext.logOut();
};

export const userInfo = () => {
  let user: any = authContext.getCachedUser();
  return user && user.userName ? user.userName : '';
};

export const adalApiFetch = (fetch: any, url: any, options: any) =>
  adalFetch(authContext, adalConfig.endpoints.api, fetch, url, options);

export const withAdalLoginApi = withAdalLogin(authContext, adalConfig.endpoints.api);
