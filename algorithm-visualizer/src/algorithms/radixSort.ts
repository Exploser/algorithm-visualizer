import { AnimationArrayType } from "@/lib/types";

export function generateRadixSortAnimation(
    isSorting: boolean,
    array: number[],
    runAnimation: (animations: AnimationArrayType) => void,
) {
    if (isSorting) return;
    if (array.length <= 1) return [];

    const animations: AnimationArrayType = [];
    const auxiliaryArray = array.slice();
    runRadixSort(auxiliaryArray, animations);
    runAnimation(animations);
}

function runRadixSort(auxiliaryArray: number[], animations: AnimationArrayType) {
    const maxNum = Math.max(...auxiliaryArray);
    let exp = 1;

    while (Math.floor(maxNum / exp) > 0) {
        countingSort(auxiliaryArray, exp, animations);
        exp *= 10;
    }
}

function countingSort(auxiliaryArray: number[], exp: number, animations: AnimationArrayType) {
    const n = auxiliaryArray.length;
    const output = new Array(n).fill(0);
    const count = new Array(10).fill(0);

    for (let i = 0; i < n; i++) {
        const index = Math.floor(auxiliaryArray[i] / exp) % 10;
        count[index]++;
        animations.push([[i, auxiliaryArray[i]], false]); // Highlight the current element
    }

    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    for (let i = n - 1; i >= 0; i--) {
        const index = Math.floor(auxiliaryArray[i] / exp) % 10;
        output[count[index] - 1] = auxiliaryArray[i];
        count[index]--;
    }

    for (let i = 0; i < n; i++) {
        animations.push([[i, output[i]], true]); // Update the auxiliary array with sorted values
        auxiliaryArray[i] = output[i];
    }
}
