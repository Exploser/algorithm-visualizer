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

export const sortingAlgorithmsData = {
    bubble: {
      title: "Bubble Sort",
      description:
        "A simple comparison-based sorting algorithm. Bubble sort repeatedly compares and swaps adjacent elements if they are in the wrong order, moving larger elements towards the end with each pass through the list. This process continues until the list is sorted and no more swaps are needed.",
      worstCase: "O(n²)",
      averageCase: "O(n²)",
      bestCase: "O(n)",
    },
    insertion: {
      title: "Insertion Sort",
      description:
        "Insertion sort builds the final sorted array one element at a time, by repeatedly taking the next unsorted element and inserting it into its correct position among the previously sorted elements. This process continues until all elements have been inserted into their proper place, resulting in a sorted list.",
      worstCase: "O(n²)",
      averageCase: "O(n²)",
      bestCase: "O(n)",
    },
    selection: {
      title: "Selection Sort",
      description:
        "Selection sort works by repeatedly finding the minimum element from the unsorted portion of the list and swapping it with the element at the current position. This process is continued for each position in the list, moving the boundary of the sorted and unsorted portions one element forward each time until the entire list is sorted.",
      worstCase: "O(n²)",
      averageCase: "O(n²)",
      bestCase: "O(n²)",
    },
    merge: {
      title: "Merge Sort",
      description:
        "Merge sort divides the unsorted list into n sublists, each containing one element (a list of one element is considered sorted), and then repeatedly merges these sublists to produce new sorted sublists until there is only one sublist remaining, which is the sorted list. This algorithm uses a divide-and-conquer approach, splitting the list in half recursively and merging the sorted halves back together.",
      worstCase: "O(n log n)",
      averageCase: "O(n log n)",
      bestCase: "O(n log n)",
    },
    quick: {
      title: "Quick Sort",
      description:
        "Quick sort selects a 'pivot' element from the array and partitions the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively, and the sorted sub-arrays are combined with the pivot to form the sorted array.",
      worstCase: "O(n²)",
      averageCase: "O(n log n)",
      bestCase: "O(n log n)",
    },
  };