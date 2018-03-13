
const Tesseract  = require('tesseract.js');

const extractText = () => {

};

const readImage = (imagePath) => {
	// console.log(imagePath)
	return Tesseract.recognize(imagePath, {
		lang: 'por' 
	})
		.then(function(result){console.log('result is: ', result)})
    // .progress(message => console.log(message))
    // .then(result => console.log(result))
    // .finally(resultOrError => console.log(resultOrError))
    // .catch(err => console.error(err))
};

module.exports = {
	extractText,
	readImage,
};