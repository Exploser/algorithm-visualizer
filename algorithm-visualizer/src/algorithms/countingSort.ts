import { AnimationArrayType } from "@/lib/types";

export function generateCountingSortAnimation(
    isSorting: boolean,
    array: number[],
    runAnimation: (animations: AnimationArrayType) => void,
) {
    if (isSorting) return;
    if (array.length <= 1) return [];

    const animations: AnimationArrayType = [];
    const auxiliaryArray = array.slice();
    runCountingSort(auxiliaryArray, animations);
    runAnimation(animations);
}

function runCountingSort(auxiliaryArray: number[], animations: AnimationArrayType) {
    const max = Math.max(...auxiliaryArray);
    const min = Math.min(...auxiliaryArray);
    const range = max - min + 1;
    const count = new Array(range).fill(0);
    const output = new Array(auxiliaryArray.length).fill(0);

    // Store count of each element
    for (let i = 0; i < auxiliaryArray.length; i++) {
        count[auxiliaryArray[i] - min]++;
        animations.push([[i, auxiliaryArray[i]], false]); // Highlight the current element
    }

    // Modify count array such that each element at each index stores the sum of previous counts
    for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }

    // Build the output array
    for (let i = auxiliaryArray.length - 1; i >= 0; i--) {
        output[count[auxiliaryArray[i] - min] - 1] = auxiliaryArray[i];
        count[auxiliaryArray[i] - min]--;
        animations.push([[count[auxiliaryArray[i] - min], auxiliaryArray[i]], true]); // Position the element
    }

    // Copy the output array to auxiliaryArray, so that auxiliaryArray contains sorted numbers
    for (let i = 0; i < auxiliaryArray.length; i++) {
        auxiliaryArray[i] = output[i];
        animations.push([[i, output[i]], true]); // Update the auxiliary array with sorted values
    }
}
