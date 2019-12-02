// Importar rutas
import auth from "@routes/auth";
import dashboard from "@routes/dashboard";
import others from "@routes/others";
import errors from "@routes/errors";

const routes = [...auth, ...dashboard, ...others, ...errors];

export default routes;
