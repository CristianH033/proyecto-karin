/**
 * javascript comment
 * @Author: Cristian David Home
 * @Date: 2019-09-09 22:06:17
 * @Desc: Coleccion de endpoints API del aplicativo.
 */

const baseDomain = "";

const apiVersion = "api";

const baseUrl = `${baseDomain}/${apiVersion}`;

const endpoints = {
  // Auth
  login: `${baseUrl}/login`,
  otpVerify: `${baseUrl}/otp/verify`,
  otpResend: `${baseUrl}/otp/sendotp`,
  logout: `${baseUrl}/logout`,
  register: `${baseUrl}/register`,
  refreshToken: `${baseUrl}/refresh-token`,
  requestPasswordReset: `${baseUrl}/password/email`,
  passwordReset: `${baseUrl}/password/reset`,
  loggedUser: `${baseUrl}/current-user`,
  checkAuth: `${baseUrl}/auth-check`,
  verifyEmail: `${baseDomain}/email/verify`,
  resendEmail: `${baseUrl}/verification/resend`,
  // App
  users: `${baseUrl}/users`,
  cargos: `${baseUrl}/cargos`,
  ciudades: `${baseUrl}/ciudades`,
  contratos: `${baseUrl}/contratos`,
  dispositivos: `${baseUrl}/dispositivos`,
  estacionTrabajos: `${baseUrl}/estacion-trabajos`,
  estados: `${baseUrl}/estados`,
  funcionarios: `${baseUrl}/funcionarios`,
  garantias: `${baseUrl}/garantias`,
  modelos: `${baseUrl}/modelos`,
  operadores: `${baseUrl}/operadores`,
  paises: `${baseUrl}/paises`,
  personas: `${baseUrl}/personas`,
  productos: `${baseUrl}/productos`,
  proovedores: `${baseUrl}/proovedores`,
  sedes: `${baseUrl}/sedes`,
  servicios: `${baseUrl}/servicios`,
  tags: `${baseUrl}/tags`,
  terceros: `${baseUrl}/terceros`,
  tipoProductos: `${baseUrl}/tipo-productos`,
  tipoServicios: `${baseUrl}/tipo-servicios`
};

// Auth
export const login = endpoints.login;
export const otpVerify = endpoints.otpVerify;
export const otpResend = endpoints.otpResend;
export const logout = endpoints.logout;
export const register = endpoints.register;
export const refreshToken = endpoints.refreshToken;
export const requestPasswordReset = endpoints.requestPasswordReset;
export const passwordReset = endpoints.passwordReset;
export const resendEmail = endpoints.resendEmail;
export const loggedUser = endpoints.loggedUser;
export const checkAuth = endpoints.checkAuth;
// APP
export const users = endpoints.users;
export const cargos = endpoints.cargos;
export const ciudades = endpoints.ciudades;
export const contratos = endpoints.contratos;
export const dispositivos = endpoints.dispositivos;
export const estacionTrabajos = endpoints.estacionTrabajos;
export const estados = endpoints.estados;
export const funcionarios = endpoints.funcionarios;
export const garantias = endpoints.garantias;
export const modelos = endpoints.modelos;
export const operadores = endpoints.operadores;
export const paises = endpoints.paises;
export const personas = endpoints.personas;
export const productos = endpoints.productos;
export const proovedores = endpoints.proovedores;
export const sedes = endpoints.sedes;
export const servicios = endpoints.servicios;
export const tags = endpoints.tags;
export const terceros = endpoints.terceros;
export const tipoProductos = endpoints.tipoProductos;
export const tipoServicios = endpoints.tipoServicios;

export default endpoints;
