export const MIN_ANIMATION_SPEED = 100;
export const MAX_ANIMATION_SPEED = 400;

export function generateRandomNumberFromInterval(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export const sortingAlgorithms = [
    {
        value: "bubble",
        label: "Bubble Sort",
    },
    {
        value: "selection",
        label: "Selection Sort",
    },
    {
        value: "insertion",
        label: "Insertion Sort",
    },
    {
        value: "quick",
        label: "Quick Sort",
    },
    {
        value: "merge",
        label: "Merge Sort",
    },
    {
        value: "heap",
        label: "Heap Sort",
    },
    {
        value: "shell",
        label: "Shell Sort",
    },
    {
        value: "radix",
        label: "Radix Sort",
    },
    {
        value: "counting",
        label: "Counting Sort",
    },
];