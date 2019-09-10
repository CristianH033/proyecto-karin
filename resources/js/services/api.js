/**
 * javascript comment
 * @Author: Cristian David Home
 * @Date: 2019-09-09 22:06:17
 * @Desc: Coleccion de endpoints API del aplicativo.
 */

const baseDomain = process.env.MIX_APP_URL;

const apiVersion = "1.0";

const baseUrl = `${baseDomain}/${apiVersion}`;

const endpoints = {
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