import { atom, selector, selectorFamily } from "recoil";

export const counterState = atom<number>({
  key: "counterState",
  default: 0,
});

export const multipleCounterState = selectorFamily<number, number>({
  key: "multipleCounterState",
  get: multipricand => ({ get }) => {
    const count = get(counterState);
    return count * multipricand;
  },
});
