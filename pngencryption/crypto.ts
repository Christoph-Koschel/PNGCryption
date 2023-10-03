import {getRndPoint, Point} from "./math";
import "@lib/cdb/linq";

export async function encode255(ctx: CanvasRenderingContext2D, text: string, cb: () => void, start: Point): Promise<void> {
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, 255, 255);
    const seenPoint: Point[] = [start];
    let lastPoint: Point = start;
    for (let i: number = 0; i < text.length; i++) {
        let ascii: number = text.charCodeAt(i);
        let point: Point = getRndPoint(0, 255);
        while (seenPoint.where(p => p.x == point.x && p.y == point.y).length != 0) {
            point = getRndPoint(0, 255);
        }
        seenPoint.push(point)
        ctx.fillStyle = rgb(ascii, point.x, point.y);
        ctx.fillRect(lastPoint.x, lastPoint.y, 1, 1);
        lastPoint = point;
        cb();
        await wait(0.001);
    }
}

export async function decode255(ctx: CanvasRenderingContext2D, cb: (c: string) => void, start: Point): Promise<void> {
    let currentPoint: Point = start;
    while (true) {
        let data: Uint8ClampedArray = ctx.getImageData(currentPoint.x, currentPoint.y, 1, 1).data;
        console.log(data[0]);
        if (data[0] == 0) {
            break;
        }
        cb(String.fromCharCode(data[0]));
        ctx.fillStyle = "#000000";
        ctx.fillRect(currentPoint.x, currentPoint.y, 1, 1);
        currentPoint = {
            x: data[1],
            y: data[2]
        }
        await wait(0.001);
    }
}

function rgb(r: number, g: number, b: number): string {
    return `rgb(${r}, ${g}, ${b})`;
}

async function wait(t: number): Promise<void> {
    return new Promise(resolve => {
        setTimeout(() => resolve(), t * 1000);
    });
}