import create from 'zustand';
import { persist } from 'zustand/middleware';

type StorageItemType = {
    id: string;
    label: string;
    amount: number;
};
type StorageStateType = {
    items: StorageItemType[];
    addItemToStorage: (item: StorageItemType) => void;
    addToItemInStorage: (item: StorageItemType) => void;
    removeItemFromStorage: (item: StorageItemType) => void;
    deductFromItemInStorage: (item: StorageItemType) => void;
    clearStorage: () => void;
};

const useStorage = create<StorageStateType>()(
    persist(
        (set) => ({
            items: [],
            addItemToStorage: (item) =>
                set((state) => ({ items: [...state.items, item] })),
            addToItemInStorage: (item) => {
                set((state) => {
                    let updateIndex = 0;
                    const updateItem = state.items.find((findItem, index) => {
                        if (item.id === findItem.id) {
                            updateIndex = index;
                            return true;
                        }
                        return false;
                    });
                    if (updateItem) {
                        updateItem.amount += item.amount;
                        state.items[updateIndex] = updateItem;
                    }
                    return { items: state.items };
                });
            },
            removeItemFromStorage: (item) =>
                set((state) => ({
                    items: state.items.splice(state.items.indexOf(item), 1),
                })),
            deductFromItemInStorage: (item) => {
                set((state) => {
                    let updateIndex = 0;
                    const updateItem = state.items.find((findItem, index) => {
                        if (item.id === findItem.id) {
                            updateIndex = index;
                            return true;
                        }
                        return false;
                    });
                    if (updateItem) {
                        updateItem.amount -= item.amount;
                        state.items[updateIndex] = updateItem;
                    }
                    return { items: state.items };
                });
            },
            clearStorage: () => set({ items: [] }),
        }),
        { name: 'storage' }
    )
);
export default useStorage;
