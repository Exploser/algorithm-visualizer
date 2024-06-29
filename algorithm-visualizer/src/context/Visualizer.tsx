import { SortingAlgorithmType } from "@/lib/types";
import { MAX_ANIMATION_SPEED } from "@/lib/utils";
import { useContext } from "react";
import { createContext, useState } from "react";

interface SortingAlgorithmContextType {
    arrayToSort: number[];
    setArrayToSort: React.Dispatch<React.SetStateAction<number[]>>;
    selectedAlgorithm: SortingAlgorithmType;
    setSelectedAlgorithm: React.Dispatch<React.SetStateAction<SortingAlgorithmType>>;
    isSorting: boolean;
    setIsSorting: React.Dispatch<React.SetStateAction<boolean>>;
    animationSpeed: number;
    setAnimationSpeed: React.Dispatch<React.SetStateAction<number>>;
    isAnimationComplete: boolean;
    setIsAnimationComplete: React.Dispatch<React.SetStateAction<boolean>>;
    resetArrayAndAnimation: () => void;
    runAnimation: () => void;
}

const SortingAlgorithmContext = createContext<SortingAlgorithmContextType | undefined>( undefined );

export const SortingAlgorithmProvider = ({ Children }: { Children: React.ReactNode }) => {
    const [arrayToSort, setArrayToSort] = useState<number[]>([]);
    const [selectedAlgorithm, setSelectedAlgorithm] = useState<SortingAlgorithmType>("bubble");
    const [isSorting, setIsSorting] = useState<boolean>(false);
    const [animationSpeed, setAnimationSpeed] = useState<number>(MAX_ANIMATION_SPEED);
    const [isAnimationComplete, setIsAnimationComplete] = useState<boolean>(false);

    const resetArrayAndAnimation = () => { }

    const runAnimation = () => { }

    const value = {
        arrayToSort,
        setArrayToSort,
        selectedAlgorithm,
        setSelectedAlgorithm,
        isSorting,
        setIsSorting,
        animationSpeed,
        setAnimationSpeed,
        isAnimationComplete,
        setIsAnimationComplete,
        resetArrayAndAnimation,
        runAnimation,
    }



    return (
        <SortingAlgorithmContext.Provider value={value}>
            {Children}
        </SortingAlgorithmContext.Provider>
    )
}

export const useSortingAlgorithmContext = () => {
    const context = useContext(SortingAlgorithmContext);
    if (context === undefined) {
        throw new Error("useSortingAlgorithmContext must be used within a SortingAlgorithmProvider");
    }
    return context;
}