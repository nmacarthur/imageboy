# ImageBoy

Imageboy takes your images and wraps them in a container that resizes nicely.

## Installation

`npm install @nmacarthur/imageboy`

## Usage

The data-replace tag will place the image within the responsive container.

`<img data-replace src="..." alt="..." />`

The default ratio is 16 / 9.

Adding the ratio tag will set the ratio on the image container

`<img data-replace data-ratio="1/1" src="..." alt="..." />`

Classes that are added to the image will be placed on the parent component.

`<img class="className" data-replace src="..." alt="..." />`
