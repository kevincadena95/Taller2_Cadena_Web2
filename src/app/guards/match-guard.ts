import { CanMatchFn } from '@angular/router';

export const matchGuard: CanMatchFn = (route, segments) => {
  const isAuth = localStorage.getItem("userAuth") !== null;
  return isAuth;
};
