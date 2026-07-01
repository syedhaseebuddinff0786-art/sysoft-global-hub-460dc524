import { useEffect, useState } from "react";

const KEY = "sysoft.portal.user";

export type PortalUser = {
  email: string;
  name: string;
  company: string;
  loggedInAt: string;
};

export function getPortalUser(): PortalUser | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as PortalUser) : null;
  } catch {
    return null;
  }
}

export function setPortalUser(user: PortalUser) {
  window.localStorage.setItem(KEY, JSON.stringify(user));
  window.dispatchEvent(new Event("sysoft-portal-auth"));
}

export function clearPortalUser() {
  window.localStorage.removeItem(KEY);
  window.dispatchEvent(new Event("sysoft-portal-auth"));
}

export function usePortalUser(): PortalUser | null {
  const [user, setUser] = useState<PortalUser | null>(() => getPortalUser());
  useEffect(() => {
    const sync = () => setUser(getPortalUser());
    window.addEventListener("sysoft-portal-auth", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("sysoft-portal-auth", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);
  return user;
}