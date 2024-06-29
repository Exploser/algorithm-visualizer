export type SortingAlgorithmType = 
    | "bubble"
    | "selection"
    | "insertion"
    | "quick"
    | "merge"
    | "heap"
    | "shell"
    | "radix"
    | "counting";

export type SelectOptionType = {
    value: string;
    label: string;
};

export type AnimationArrayType = [number[],boolean][]; // [array, isSwapping]