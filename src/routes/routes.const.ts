type AllowedPath = string;

interface Routes {
  [key: string]: AllowedPath;
}

export const ROUTES: Routes = {
  HOME: '/',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
};
