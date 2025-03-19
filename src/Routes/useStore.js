import { create } from "zustand";

const useStoreLogin = create((set) => ({
  isAuthenticated:
    localStorage.getItem("isAuthenticated") === "true" ||
    sessionStorage.getItem("isAuthenticated") === "true",
  setIsAuthenticated: (status) => {
    set({ isAuthenticated: status });
    localStorage.setItem("isAuthenticated", status);
    sessionStorage.setItem("isAuthenticated", status);
  },
  logout: () => {
    set({ isAuthenticated: false });
    localStorage.removeItem("access_token");
    localStorage.setItem("isAuthenticated", false);
    sessionStorage.removeItem("access_token");
    sessionStorage.setItem("isAuthenticated", false);
  },
  login: () => {
    set({ isAuthenticated: true });
    localStorage.setItem("isAuthenticated", true);
    sessionStorage.setItem("isAuthenticated", true);
  },
}));

export default useStoreLogin;
