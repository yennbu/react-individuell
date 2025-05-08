import { create } from 'zustand';

const useEventIdStore = create((set) => ({
  selectedEventId: null,
  setSelectedEventId: (id) => set({ selectedEventId: id }),
}));

export default useEventIdStore;
