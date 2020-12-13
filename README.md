# phi-css
a CSS framework based on golden raito.

#### Desciption
This project is still in the alpha phase. This framework is built using the SASS (a css preprocessor).

---
#### Installation and Usage
Use below installation steps to use the css files in your project / to test it out.

You can use either of the following cdn links to use the css file in your project
Full version:
```<link href="https://unpkg.com/phi-css@0.1.1/dist/phi.css" rel="stylesheet">```

or
Minified version:

```<link href="https://unpkg.com/phi-css@0.1.1/dist/phi.min.css" rel="stylesheet">```

If you don't need the cdn links and you want to utilize the npm package, then run following command in your project directory:
```npm i phi-css```

And then, in your js file you can use it as:

```import 'phi-css/dist/phi.css'```

or
```import 'phi-css/dist/phi.min.css'```

The framework is divided into different files, so if you don't want to use specific feature you can just exclude the file while importing or while linking it to the html file.

Segregated file list:
1. ```base.css/base.min.css```:
    This framework is based on the normalized css, which acts as browser default setting resetter, it is optimized to reduce the file size, also contains some other basic features.
2. ```grid.css/grid.min.css```:
    This file contains the grid structure for the framework.
3. ```typography.css/typography.min.css```:
   This file contains typography features.
4. ```components.css/components.min.css```:
   This contians styling for UI components such as text fields, buttons, etc.
5. ```dark.css/dark.min.css```:
   This file contains styling for enabling the dark mode in your website.
6. ```utilities.css/utilities.min.css```:
   This framework has some utility features which you can use on the go, which might come in handy while developing the website.

All above files are combined into one as ```phi.css/phi.min.css```,

---
#### Contribution
Want to collaborate with me on this project? Slide into my [DMs](https://www.instagram.com/prathamesh.koshti).

If you want to contribute into the project then please clone this github repo, do not use the npm package as it doen't contain the sass files. Package only contains dist folder.

Follow these steps to setup this repo in your machine:

1. Clone this repo.

2. While in the project folder, run npm installation ```npm install```

3. Now run ```gulp``` in the termainal after npm installs necessary packages. You'll have compiled css files in the '**dist**' folder. Test it out and see how it works for you!

4. If you find any bugs in the project, you can create a pull request.