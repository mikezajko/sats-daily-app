import { create } from "zustand";

interface AppState {
  // User state
  isAuthenticated: boolean;
  email: string;
  refCode: string;

  // Tickets
  purchasedTickets: number;
  referralBonus: number;
  hasBought: boolean;

  // Pool state
  poolPct: number;
  poolSold: number;
  poolTarget: number;
  btcPrice: number;

  // UI state
  selectedQty: number;
  selectedPrice: number;
  activeTab: "home" | "profile";
  toastMessage: string;
  toastVisible: boolean;

  // Actions
  setAuthenticated: (isAuthenticated: boolean) => void;
  setEmail: (email: string) => void;
  purchaseTickets: (qty: number, price: number) => void;
  selectQty: (qty: number, price: number) => void;
  setActiveTab: (tab: "home" | "profile") => void;
  showToast: (message: string) => void;
  hideToast: () => void;
  signOut: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  // Initial state
  isAuthenticated: false,
  email: "",
  refCode: "",

  purchasedTickets: 0,
  referralBonus: 2,
  hasBought: false,

  poolPct: 73,
  poolSold: 13750,
  poolTarget: 18846,
  btcPrice: 94230,

  selectedQty: 5,
  selectedPrice: 25,
  activeTab: "home",
  toastMessage: "",
  toastVisible: false,

  // Actions
  setAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
  setEmail: (email) => set({ email }),

  purchaseTickets: (qty, price) =>
    set((state) => ({
      purchasedTickets: state.purchasedTickets + qty,
      hasBought: true,
      poolPct: Math.min(state.poolPct + (qty / state.poolTarget) * 100, 99),
      poolSold: state.poolSold + qty,
    })),

  selectQty: (qty, price) => set({ selectedQty: qty, selectedPrice: price }),

  setActiveTab: (tab) => set({ activeTab: tab }),

  showToast: (message) => set({ toastMessage: message, toastVisible: true }),
  hideToast: () => set({ toastVisible: false }),

  signOut: () =>
    set({
      isAuthenticated: false,
      email: "",
      purchasedTickets: 0,
      hasBought: false,
      activeTab: "home",
    }),
}));

// Generate a random referral code
export function generateRefCode(): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}
