import { AnimationArrayType } from "@/lib/types";

export function generateBubbleSortAnimation(
    isSorting: boolean,
    array: number[],
    runAnimation: (animations: AnimationArrayType) => void,
) {
    if (isSorting) return;
    if (array.length <= 1) return [];

    const animations: AnimationArrayType = [];
    const auxiliaryArray = array.slice();
    runBubbleSort(auxiliaryArray, animations);
    runAnimation(animations);
}

function runBubbleSort(auxiliaryArray: number[], animations: AnimationArrayType) {
    for (let i = 0; i < auxiliaryArray.length; i++) {
        for (let j = 0; j < auxiliaryArray.length - i - 1; j++) {
            animations.push([[j, j + 1], false]);
            if (auxiliaryArray[j] > auxiliaryArray[j + 1]) {
                animations.push([[j, auxiliaryArray[j + 1]], true]);
                animations.push([[j + 1, auxiliaryArray[j]], true]);
                [auxiliaryArray[j], auxiliaryArray[j + 1]] = [auxiliaryArray[j + 1], auxiliaryArray[j]];
            }
        }
    }
}
