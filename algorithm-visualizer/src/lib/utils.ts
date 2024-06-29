import { generateBubbleSortAnimation } from "@/algorithms/bubbleSort";
import { AnimationArrayType, SortingAlgorithmType } from "./types";

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

export function generateAnimationArray(
    selectedAlgorithm: SortingAlgorithmType,
    isSorting: boolean,
    array: number[],
    runAnimation: (animations: AnimationArrayType) => void,
) {
    switch (selectedAlgorithm) {
        case "bubble":
            generateBubbleSortAnimation(isSorting, array, runAnimation);
            break;
        case "selection":
            // return selectionSort(array);
            break;
        case "insertion":
            // return insertionSort(array);
            break;
    }
}