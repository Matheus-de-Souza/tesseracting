const {
	expect
} = require('chai');

const tesseracting = require('../src/tesseracting');

describe('Main', function () {

	let imgPath;

	// Roda uma vez antes do bloco
	before(function () {

	});

	// Roda uma vez após o bloco
	after(function () {

	});

	describe('Smoke Tests', function () {
		it('should have the lib tesseracting', function () {
			expect(tesseracting).to.exist;
		});
		it('should have the method extractText', function () {
			expect(tesseracting.extractText).to.exist;
		});
	});

	beforeEach(function () {
		imgPath = './images/img-test.jpg';
	});

	// Ler imagem
	// Obter texto
	// Criar header com primeira frase
	// Criar corpo com o resto
	// Criar pdf

	it('should read image', function () {
		expect(tesseracting.readImage).to.exist;
		expect(tesseracting.readImage(imgPath)).to.be.an('object');
	});
});