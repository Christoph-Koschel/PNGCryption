const {ConfigBuilder} = require("./engine/config");
let builder = new ConfigBuilder();

builder.add_module("pngencryption", [
    "./pngencryption"
]).add_loader("./pngencryption/main.ts");

exports.default = builder.build();