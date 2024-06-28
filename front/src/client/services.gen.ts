// This file is auto-generated by @hey-api/openapi-ts

import type { CancelablePromise } from './core/CancelablePromise';
import { OpenAPI } from './core/OpenAPI';
import { request as __request } from './core/request';
import type { AuthGoogleCreateData, AuthGoogleCreateResponse, AuthLoginCreateData, AuthLoginCreateResponse, AuthLogoutCreateResponse, AuthRegisterCreateData, AuthRegisterCreateResponse, AuthRegisterVerifyEmailCreateData, AuthRegisterVerifyEmailCreateResponse, AuthTokenRefreshCreateData, AuthTokenRefreshCreateResponse, AuthTokenVerifyCreateData, AuthTokenVerifyCreateResponse, AuthUserRetrieveResponse, AuthUserUpdateData, AuthUserUpdateResponse, AuthUserPartialUpdateData, AuthUserPartialUpdateResponse } from './types.gen';

/**
 * class used for social authentications
 * example usage for facebook with access_token
 * -------------
 * from allauth.socialaccount.providers.facebook.views import FacebookOAuth2Adapter
 *
 * class FacebookLogin(SocialLoginView):
 * adapter_class = FacebookOAuth2Adapter
 * -------------
 *
 * example usage for facebook with code
 *
 * -------------
 * from allauth.socialaccount.providers.facebook.views import FacebookOAuth2Adapter
 * from allauth.socialaccount.providers.oauth2.client import OAuth2Client
 *
 * class FacebookLogin(SocialLoginView):
 * adapter_class = FacebookOAuth2Adapter
 * client_class = OAuth2Client
 * callback_url = 'localhost:8000'
 * -------------
 * @param data The data for the request.
 * @param data.requestBody
 * @returns SocialLogin
 * @throws ApiError
 */
export const authGoogleCreate = (data: AuthGoogleCreateData = {}): CancelablePromise<AuthGoogleCreateResponse> => { return __request(OpenAPI, {
    method: 'POST',
    url: '/api/auth/google/',
    body: data.requestBody,
    mediaType: 'application/json'
}); };

/**
 * Check the credentials and return the REST Token
 * if the credentials are valid and authenticated.
 * Calls Django Auth login method to register User ID
 * in Django session framework
 *
 * Accept the following POST parameters: username, password
 * Return the REST Framework Token Object's key.
 * @param data The data for the request.
 * @param data.requestBody
 * @returns JWT
 * @throws ApiError
 */
export const authLoginCreate = (data: AuthLoginCreateData): CancelablePromise<AuthLoginCreateResponse> => { return __request(OpenAPI, {
    method: 'POST',
    url: '/api/auth/login/',
    body: data.requestBody,
    mediaType: 'application/json'
}); };

/**
 * Calls Django logout method and delete the Token object
 * assigned to the current User object.
 *
 * Accepts/Returns nothing.
 * @returns RestAuthDetail
 * @throws ApiError
 */
export const authLogoutCreate = (): CancelablePromise<AuthLogoutCreateResponse> => { return __request(OpenAPI, {
    method: 'POST',
    url: '/api/auth/logout/'
}); };

/**
 * @param data The data for the request.
 * @param data.requestBody
 * @returns JWT
 * @throws ApiError
 */
export const authRegisterCreate = (data: AuthRegisterCreateData): CancelablePromise<AuthRegisterCreateResponse> => { return __request(OpenAPI, {
    method: 'POST',
    url: '/api/auth/register/',
    body: data.requestBody,
    mediaType: 'application/json'
}); };

/**
 * @param data The data for the request.
 * @param data.requestBody
 * @returns RestAuthDetail
 * @throws ApiError
 */
export const authRegisterVerifyEmailCreate = (data: AuthRegisterVerifyEmailCreateData): CancelablePromise<AuthRegisterVerifyEmailCreateResponse> => { return __request(OpenAPI, {
    method: 'POST',
    url: '/api/auth/register/verify-email',
    body: data.requestBody,
    mediaType: 'application/json'
}); };

/**
 * Takes a refresh type JSON web token and returns an access type JSON web
 * token if the refresh token is valid.
 * @param data The data for the request.
 * @param data.requestBody
 * @returns TokenRefresh
 * @throws ApiError
 */
export const authTokenRefreshCreate = (data: AuthTokenRefreshCreateData): CancelablePromise<AuthTokenRefreshCreateResponse> => { return __request(OpenAPI, {
    method: 'POST',
    url: '/api/auth/token/refresh/',
    body: data.requestBody,
    mediaType: 'application/json'
}); };

/**
 * Takes a token and indicates if it is valid.  This view provides no
 * information about a token's fitness for a particular use.
 * @param data The data for the request.
 * @param data.requestBody
 * @returns TokenVerify
 * @throws ApiError
 */
export const authTokenVerifyCreate = (data: AuthTokenVerifyCreateData): CancelablePromise<AuthTokenVerifyCreateResponse> => { return __request(OpenAPI, {
    method: 'POST',
    url: '/api/auth/token/verify/',
    body: data.requestBody,
    mediaType: 'application/json'
}); };

/**
 * Reads and updates UserModel fields
 * Accepts GET, PUT, PATCH methods.
 *
 * Default accepted fields: username, first_name, last_name
 * Default display fields: pk, username, email, first_name, last_name
 * Read-only fields: pk, email
 *
 * Returns UserModel fields.
 * @returns UserDetails
 * @throws ApiError
 */
export const authUserRetrieve = (): CancelablePromise<AuthUserRetrieveResponse> => { return __request(OpenAPI, {
    method: 'GET',
    url: '/api/auth/user/'
}); };

/**
 * Reads and updates UserModel fields
 * Accepts GET, PUT, PATCH methods.
 *
 * Default accepted fields: username, first_name, last_name
 * Default display fields: pk, username, email, first_name, last_name
 * Read-only fields: pk, email
 *
 * Returns UserModel fields.
 * @param data The data for the request.
 * @param data.requestBody
 * @returns UserDetails
 * @throws ApiError
 */
export const authUserUpdate = (data: AuthUserUpdateData): CancelablePromise<AuthUserUpdateResponse> => { return __request(OpenAPI, {
    method: 'PUT',
    url: '/api/auth/user/',
    body: data.requestBody,
    mediaType: 'application/json'
}); };

/**
 * Reads and updates UserModel fields
 * Accepts GET, PUT, PATCH methods.
 *
 * Default accepted fields: username, first_name, last_name
 * Default display fields: pk, username, email, first_name, last_name
 * Read-only fields: pk, email
 *
 * Returns UserModel fields.
 * @param data The data for the request.
 * @param data.requestBody
 * @returns UserDetails
 * @throws ApiError
 */
export const authUserPartialUpdate = (data: AuthUserPartialUpdateData = {}): CancelablePromise<AuthUserPartialUpdateResponse> => { return __request(OpenAPI, {
    method: 'PATCH',
    url: '/api/auth/user/',
    body: data.requestBody,
    mediaType: 'application/json'
}); };