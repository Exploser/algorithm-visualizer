import { AnimationArrayType } from "@/lib/types";

export function generateHeapSortAnimation(
    isSorting: boolean,
    array: number[],
    runAnimation: (animations: AnimationArrayType) => void,
) {
    if (isSorting) return;
    if (array.length <= 1) return [];

    const animations: AnimationArrayType = [];
    const auxiliaryArray = array.slice();
    runHeapSort(auxiliaryArray, animations);
    runAnimation(animations);
}

function runHeapSort(auxiliaryArray: number[], animations: AnimationArrayType) {
    const n = auxiliaryArray.length;

    // Build a max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(auxiliaryArray, n, i, animations);
    }

    // Extract elements from heap one by one
    for (let i = n - 1; i > 0; i--) {
        // Swap current root with the end
        animations.push([[0, auxiliaryArray[i]], true]);
        animations.push([[i, auxiliaryArray[0]], true]);
        [auxiliaryArray[0], auxiliaryArray[i]] = [auxiliaryArray[i], auxiliaryArray[0]];

        // Call heapify on the reduced heap
        heapify(auxiliaryArray, i, 0, animations);
    }
}

function heapify(auxiliaryArray: number[], n: number, i: number, animations: AnimationArrayType) {
    let largest = i; 
    const left = 2 * i + 1; 
    const right = 2 * i + 2; 

    // If left child is larger than root
    if (left < n) {
        animations.push([[left, largest], false]);
        if (auxiliaryArray[left] > auxiliaryArray[largest]) {
            largest = left;
        }
    }

    // If right child is larger than largest so far
    if (right < n) {
        animations.push([[right, largest], false]);
        if (auxiliaryArray[right] > auxiliaryArray[largest]) {
            largest = right;
        }
    }

    // If largest is not root
    if (largest !== i) {
        animations.push([[i, auxiliaryArray[largest]], true]);
        animations.push([[largest, auxiliaryArray[i]], true]);
        [auxiliaryArray[i], auxiliaryArray[largest]] = [auxiliaryArray[largest], auxiliaryArray[i]];

        // Recursively heapify the affected sub-tree
        heapify(auxiliaryArray, n, largest, animations);
    }
}
