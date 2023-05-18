import create from "zustand";

const useFruitStore = create((set) => ({
  data: [],
  isLoading: false,
  fetchData: async () => {
    set({ isLoading: true });
    try {
      const response = await fetch("/api/fruits");
      const data = await response.json();
      set({ data: data.result, isLoading: false });
    } catch (error) {
      console.error("Error fetching data:", error);
      set({ isLoading: false });
    }
  },
  clearData: () => {
    set({ data: [] });
  },
}));

export default useFruitStore;
