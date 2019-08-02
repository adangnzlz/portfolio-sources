const fs = require('fs');
// const folders = ['./src/courses/public_economics35/prj/', './src/courses/public_economics90/prj/', './src/courses/public_mag/prj/', , './src/courses/public_cops/prj/'];

function checkFolder(folder) {
    var array = [];
    fs.readdir(folder, (err, files) => {
        files.forEach(file => {
            if (file != '.DS_Store') {
                array.push(file)
            }
        });
        fs.writeFile('./src/assets/image-names.json', JSON.stringify(array),
            function (err) {
                if (err) {
                    console.error('Crap happens', err);
                }
            }
        );
    })
}




checkFolder('./src/assets/img-gallery');
console.log("********************************");
console.log("Image names created successfully");
console.log("********************************");






