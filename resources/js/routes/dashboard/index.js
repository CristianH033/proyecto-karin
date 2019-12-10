// Importar componentes de páginas

// Componenes de DashBoard
import DashBoardLayout from "@layouts/DashBoardLayout.vue";
const HomePage = () =>
  import(
    /* webpackChunkName: "js/pages/HomePage" */ "@pages/dashboard/Home.vue"
  );

/** Admin */
const UsersPage = () =>
  import(
    /* webpackChunkName: "js/pages/UsersPage" */ "@pages/dashboard/admin/users/Users.vue"
  );
const RolesAndPermissionsPage = () =>
  import(
    /* webpackChunkName: "js/pages/RolesAndPermissionsPage" */ "@pages/dashboard/admin/RolesAndPermissions.vue"
  );

/** Clientes */
const DevicesPage = () =>
  import(
    /* webpackChunkName: "js/pages/DevicesPage" */ "@pages/dashboard/costumer/Devices.vue"
  );
const HeadQuartersPage = () =>
  import(
    /* webpackChunkName: "js/pages/HeadQuartersPage" */ "@pages/dashboard/costumer/HeadQuarters.vue"
  );
const StaffPage = () =>
  import(
    /* webpackChunkName: "js/pages/StaffPage" */ "@pages/dashboard/costumer/Staff.vue"
  );
const SuppliersPage = () =>
  import(
    /* webpackChunkName: "js/pages/SuppliersPage" */ "@pages/dashboard/costumer/Suppliers.vue"
  );
const WorkStationsPage = () =>
  import(
    /* webpackChunkName: "js/pages/WorkStationsPage" */ "@pages/dashboard/costumer/WorkStations.vue"
  );
/** Soporte y servicio */

const AboutPage = () =>
  import(
    /* webpackChunkName: "js/pages/AboutPage" */ "@pages/dashboard/About.vue"
  );

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: DashBoardLayout,
    meta: {
      guest: true
    },
    redirect: { name: "home" },
    children: [
      {
        path: "/home",
        name: "home",
        component: HomePage,
        meta: {
          requiresAuth: true,
          title: "Inicio"
        }
      },
      {
        path: "/admin",
        name: "admin",
        redirect: { name: "admin-users" },
        component: UsersPage,
        meta: {
          requiresAuth: true,
          title: "Administración"
        }
      },
      {
        path: "/admin/users",
        name: "admin-users",
        component: UsersPage,
        meta: {
          requiresAuth: true,
          title: "Usuarios"
        }
      },
      {
        path: "/admin/roles-permissions",
        name: "admin-roles",
        component: RolesAndPermissionsPage,
        meta: {
          requiresAuth: true,
          title: "Roles"
        }
      },
      {
        path: "/admin/permisions",
        name: "admin-permisions",
        component: UsersPage,
        meta: {
          requiresAuth: true,
          title: "Permisos"
        }
      },
      {
        path: "/devices",
        name: "devices",
        component: DevicesPage,
        meta: {
          requiresAuth: true,
          title: "Dispositivos"
        }
      },
      {
        path: "/headquarters",
        name: "headquarters",
        component: HeadQuartersPage,
        meta: {
          requiresAuth: true,
          title: "Sedes"
        }
      },
      {
        path: "/staff",
        name: "staff",
        component: StaffPage,
        meta: {
          requiresAuth: true,
          title: "Personal"
        }
      },
      {
        path: "/suppliers",
        name: "suppliers",
        component: SuppliersPage,
        meta: {
          requiresAuth: true,
          title: "Proveedores"
        }
      },
      {
        path: "/work-stations",
        name: "work-stations",
        component: WorkStationsPage,
        meta: {
          requiresAuth: true,
          title: "Estaciones de trabajo"
        }
      },

      {
        path: "/about",
        name: "about",
        component: AboutPage,
        meta: {
          requiresAuth: true,
          title: "Acerca de nosotros"
        }
      }
    ]
  }
];

export default routes;
