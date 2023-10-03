# PNGCryption

Encode text into an image and decode it back using TypeScript and HTML.

## Overview

This project allows you to convert plain text into images and then decode those images back into text. It's a simple yet fun experiment in encoding and decoding data using web technologies.

## Features


- Encode ASCII text (zero-terminated) into an image.
- Decode images back into ASCII text.
- Current capacity of a single image: 255 x 255 - 1 characters (minus 1 for zero termination).
- To handle larger text, consider chunking the data into separate parts, each fitting within the 255 x 255 - 1 capacity, and encode/decode them separately.


## Libraries/Frameworks Used

- [cdb](https://github.com/Christoph-Koschel/code-database): My Code Database with built-in functions like LINQ for TypeScript, designed to facilitate data manipulation.
- [tsb](https://github.com/Christoph-Koschel/tsb): TypeScript bundler, a bundler designed by me for this project to optimize and bundle TypeScript code.

## Usage

1. Clone this repository.
2. Install the required libraries/frameworks.
3. Follow the documentation to start encoding and decoding text.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.txt) file for details.

---

Feel free to contribute, report issues, or suggest improvements!
