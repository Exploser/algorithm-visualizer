import { AnimationArrayType } from "@/lib/types";

export function generateShellSortAnimation(
    isSorting: boolean,
    array: number[],
    runAnimation: (animations: AnimationArrayType) => void,
) {
    if (isSorting) return;
    if (array.length <= 1) return [];

    const animations: AnimationArrayType = [];
    const auxiliaryArray = array.slice();
    runShellSort(auxiliaryArray, animations);
    runAnimation(animations);
}

function runShellSort(auxiliaryArray: number[], animations: AnimationArrayType) {
    const n = auxiliaryArray.length;
    let gap = Math.floor(n / 2);

    while (gap > 0) {
        for (let i = gap; i < n; i++) {
            const temp = auxiliaryArray[i];
            let j;
            for (j = i; j >= gap && auxiliaryArray[j - gap] > temp; j -= gap) {
                animations.push([[j, j - gap], false]);
                animations.push([[j, auxiliaryArray[j - gap]], true]);
                auxiliaryArray[j] = auxiliaryArray[j - gap];
            }
            animations.push([[j, temp], true]);
            auxiliaryArray[j] = temp;
        }
        gap = Math.floor(gap / 2);
    }
}
