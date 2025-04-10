import { create } from "zustand";

const useProfileStore = create((set) => ({
  profile: null,
  setProfile: (profileData) => set({ profile: profileData }),
}));

export default useProfileStore;
