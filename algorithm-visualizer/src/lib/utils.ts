import { generateBubbleSortAnimation } from "@/algorithms/bubbleSort";
import { AnimationArrayType, SortingAlgorithmType } from "./types";
import { generateSelectionSortAnimationArray } from "@/algorithms/selectionSort";
import { generateInsertionSortAnimationArray } from "@/algorithms/insertionSort";
import { generateQuickSortAnimationArray } from "@/algorithms/quickSort";
import { generateMergeSortAnimationArray } from "@/algorithms/mergeSort";
import { generateHeapSortAnimation } from "@/algorithms/heapSort";
import { generateShellSortAnimation } from "@/algorithms/shellSort";
import { generateRadixSortAnimation } from "@/algorithms/radixSort";
import { generateCountingSortAnimation } from "@/algorithms/countingSort";

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
            generateSelectionSortAnimationArray(isSorting, array, runAnimation);
            break;
        case "insertion":
            generateInsertionSortAnimationArray(isSorting, array, runAnimation);
            break;
        case "quick":
            generateQuickSortAnimationArray(isSorting, array, runAnimation);
            break;
        case "merge":
            generateMergeSortAnimationArray(isSorting, array, runAnimation);
            break;
        case "heap":
            generateHeapSortAnimation(isSorting, array, runAnimation);
            break;
        case "shell":
            generateShellSortAnimation(isSorting, array, runAnimation);
            break;
        case "radix":
            generateRadixSortAnimation(isSorting, array, runAnimation);
            break;
        case "counting":
            generateCountingSortAnimation(isSorting, array, runAnimation);
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
    heap: {
      title: "Heap Sort",
      description:
        "Heap sort works by first building a max heap from the array, then repeatedly extracting the maximum element from the heap and rebuilding the heap until all elements are sorted. This algorithm uses the heap data structure to efficiently find and remove the largest element.",
      worstCase: "O(n log n)",
      averageCase: "O(n log n)",
      bestCase: "O(n log n)",
    },
    shell: {
      title: "Shell Sort",
      description:
        "Shell sort is a generalization of insertion sort that allows the exchange of items that are far apart. The algorithm sorts elements at a specific gap and gradually reduces the gap until it becomes 1, where it effectively turns into an insertion sort.",
      worstCase: "O(n²)",
      averageCase: "O(n log n)",
      bestCase: "O(n log n)",
    },
    radix: {
      title: "Radix Sort",
      description:
        "Radix sort processes integer keys by grouping them based on the individual digits which share the same significant position and value. This process is repeated for each digit, from least significant to most significant, until the array is sorted.",
      worstCase: "O(nk)",
      averageCase: "O(nk)",
      bestCase: "O(nk)",
    },
    counting: {
      title: "Counting Sort",
      description:
        "Counting sort is an integer sorting algorithm that operates by counting the number of objects that have each distinct key value. It then uses arithmetic to determine the positions of each key in the output sequence, effectively sorting the array.",
      worstCase: "O(n + k)",
      averageCase: "O(n + k)",
      bestCase: "O(n + k)",
    },
  };
