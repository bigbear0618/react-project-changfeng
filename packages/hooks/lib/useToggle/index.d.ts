interface Actions<T> {
    toggle: () => void;
    set: (value: T) => void;
    setLeft: () => void;
    setRight: () => void;
}
declare function useToggle<T = boolean>(): [boolean, Actions<T>];
declare function useToggle<T>(defaultValue: T): [T, Actions<T>];
declare function useToggle<T, U>(defaultValue: T, reverseValue: U): [T | U, Actions<T | U>];

export { useToggle as default };
export type { Actions };
