'use client'
import { SortingAlgorithmType } from "@/lib/types";
import { MAX_ANIMATION_SPEED, generateRandomNumberFromInterval } from "@/lib/utils";
import { useContext, useEffect } from "react";
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
    requireReset: boolean;
}

const SortingAlgorithmContext = createContext<SortingAlgorithmContextType | undefined>( undefined );

export const SortingAlgorithmProvider = ({ children }: { children: React.ReactNode }) => {
    const [arrayToSort, setArrayToSort] = useState<number[]>([]);
    const [selectedAlgorithm, setSelectedAlgorithm] = useState<SortingAlgorithmType>("bubble");
    const [isSorting, setIsSorting] = useState<boolean>(false);
    const [animationSpeed, setAnimationSpeed] = useState<number>(MAX_ANIMATION_SPEED);
    const [isAnimationComplete, setIsAnimationComplete] = useState<boolean>(false);

    useEffect(() => {
        resetArrayAndAnimation();
        window.addEventListener("resize", resetArrayAndAnimation);
        return () => {
            window.removeEventListener("resize", resetArrayAndAnimation);
        };
    }, []);

    const requireReset = isAnimationComplete || isSorting;


    const resetArrayAndAnimation = () => {
        const contentContainer = document.getElementById("content-container");
        if (!contentContainer) return;

        const contentContainerWidth = contentContainer.clientWidth;
        const tempArray: number[] = [];
        const numLines = contentContainerWidth / 8;
        const containerHeight = window.innerHeight;
        const maxLineHeight = Math.max(containerHeight - 420, 100);
        for (let i = 0; i < numLines; i++) {
            tempArray.push(generateRandomNumberFromInterval(5, maxLineHeight));
        }

        setArrayToSort(tempArray);
        setIsAnimationComplete(false);
        setIsSorting(false);
     }

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
        requireReset,
    }



    return (
        <SortingAlgorithmContext.Provider value={value}>
            {children}
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