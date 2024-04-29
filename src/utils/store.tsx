import { create } from "zustand";

type TeamCountType = {
  count: number;
  increment: () => void;
  reset: () => void;
};

export const useTeamCount = create<TeamCountType>((set) => ({
  count: 3,
  increment: () =>
    set((state) => {
      return { count: state.count + 3 };
    }),
  reset: () => {
    set({ count: 3 });
  },
}));
