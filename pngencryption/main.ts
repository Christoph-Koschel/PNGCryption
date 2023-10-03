import * as crypto from "./crypto";

window.addEventListener("load", () => {
    encode();
    decode();
});

function encode(): void {
    let wrapper: HTMLElement = document.getElementById("encoding");
    if (!wrapper) {
        return;
    }

    let input: HTMLTextAreaElement = wrapper.querySelector("textarea");
    let button: HTMLButtonElement = wrapper.querySelector("button");
    let min: HTMLSpanElement = wrapper.querySelector("span.min");
    let max: HTMLSpanElement = wrapper.querySelector("span.max");
    let canvas: HTMLCanvasElement = wrapper.querySelector("canvas");

    canvas.width = 255;
    canvas.height = 255;

    button.addEventListener("click", () => {
        let text: string = input.value;
        if (text.length == 0) {
            return;
        }
        max.innerHTML = text.length.toString();
        min.innerHTML = "0";
        let context: CanvasRenderingContext2D = canvas.getContext("2d");
        crypto.encode255(context, text, () => min.innerHTML = (parseInt(min.innerHTML) + 1).toString(), {x: 0, y: 0});
    });
}

function decode(): void {
    let wrapper: HTMLElement = document.getElementById("decoding");
    if (!wrapper) {
        return;
    }

    let output: HTMLTextAreaElement = wrapper.querySelector("textarea");
    let button: HTMLButtonElement = wrapper.querySelector("button");
    let canvas: HTMLCanvasElement = wrapper.querySelector("canvas");
    let fileInput: HTMLInputElement = wrapper.querySelector(`input[type="file"]`);
    let min: HTMLSpanElement = wrapper.querySelector("span.min");
    let max: HTMLSpanElement = wrapper.querySelector("span.max");

    canvas.width = 255;
    canvas.height = 255;

    fileInput.addEventListener("change", () => {
        if (fileInput.files.length == 0) {
            return;
        }
        let img: HTMLImageElement = new Image();
        img.onload = function () {
            let context: CanvasRenderingContext2D = canvas.getContext("2d");
            context.drawImage(img, 0, 0);
        }
        img.src = URL.createObjectURL(fileInput.files[0]);
    });

    button.addEventListener("click", () => {
        if (fileInput.files.length == 0) {
            return;
        }

        let context: CanvasRenderingContext2D = canvas.getContext("2d");
        output.value = "";
        max.innerHTML = (255 * 255 - 1).toString();
        crypto.decode255(context, (c) => {
            output.value += c;
            min.innerHTML = output.value.length.toString()
        }, {x: 0, y: 0});
    });
}