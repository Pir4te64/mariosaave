export const BASE_URL = "https://mariosaave.cruznegradev.com/api/";

export const APIURL = {
  login: `${BASE_URL}usuario/login`,
  register: `${BASE_URL}usuario`,
  crearEvento: `${BASE_URL}calendar/createEvent`,
  obtenerEventos: `${BASE_URL}calendar/listEvents`,
  horarios: `${BASE_URL}horario`,
  reservas: `${BASE_URL}reservas`,
  reservasprofesor: `${BASE_URL}reservas/me`,
  perfil_me: `${BASE_URL}perfil/me`,
  profesor: `${BASE_URL}usuario/rol/4`,
  listar_reservas_pendientes: `${BASE_URL}reservas/pendientes`,
  listar_roles: `${BASE_URL}rol`,
  listar_por_rol: `${BASE_URL}usuario/rol/`,
  perfil: `${BASE_URL}perfil`,
  restablecer_password: `${BASE_URL}usuario/`,
};
