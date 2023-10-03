export type Point = {
    readonly x: number;
    readonly y: number;
}

export function getRndPoint(min: number, max: number): Point {
    return {
        x: getRndInteger(min, max),
        y: getRndInteger(min, max)
    }
}

function getRndInteger(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
}