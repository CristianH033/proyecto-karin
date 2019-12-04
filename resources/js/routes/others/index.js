// Importar componentes de páginas

import AuthLayout from "@layouts/AuthLayout.vue";
const VerifyEmailPage = () =>
  import(
    /* webpackChunkName: "js/pages/VerifyEmailPage" */ "@pages/others/VerifyEmail.vue"
  );
const SendEmailPage = () =>
  import(
    /* webpackChunkName: "js/pages/SendEmailPage" */ "@pages/others/SendEmail.vue"
  );

const routes = [
  {
    path: "/",
    name: "especial",
    component: AuthLayout,
    children: [
      {
        path: "/email/verify",
        name: "Verificar correo",
        component: VerifyEmailPage
      },
      {
        path: "/email/resend",
        name: "Enviar correo de verificación",
        component: SendEmailPage
      }
    ]
  }
];

// about
// admin
// admin/index
// admin/users
// costumer
// costumer/devices
// costumer/head-quarters
// costumer/staff
// costumer/suppliers
// costumer/work-stations
// events
// home
// inventory
// organizations
// support-and-services
// support-and-services/contact-and-monitoring
// support-and-services/contracts-and-services
// support-and-services/devices-lending
// support-and-services/reports
// support-and-services/support-and-diagnostics
// support-and-services/warranty
// errors

export default routes;
