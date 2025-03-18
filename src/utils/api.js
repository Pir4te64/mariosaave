export const BASE_URL = "https://jmiyptptrvyyqqujshwb.supabase.co";
export const apikey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptaXlwdHB0cnZ5eXFxdWpzaHdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE1NjU2NTEsImV4cCI6MjA1NzE0MTY1MX0.m_JwWpJWWzLuUo4JGPUPcGlBl8impWVkCboku3ktHiQ";

export const APIURL = {
  login: `${BASE_URL}/auth/v1/token?grant_type=password`,
  register: `${BASE_URL}/auth/v1/signup`,
};
