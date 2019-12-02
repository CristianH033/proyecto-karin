// Importar componentes de páginas
const Error404Page = () =>
  import(
    /* webpackChunkName: "js/pages/Error404Page" */ "@pages/errors/404.vue"
  );

const routes = [
  {
    path: "*",
    name: "notfound",
    component: Error404Page
  }
];

export default routes;
