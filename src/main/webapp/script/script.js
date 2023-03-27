class Vehiculo{
	constructor(valorMarca,valorModelo,valorCilindrada){
		this._marca = valorMarca;
		this._modelo = valorModelo;
		this._cilindrada = valorCilindrada;
	}
	get marca(){
		return this._marca;
	}
	set marca(valor){
		this._marca=valor;
	}
	get modelo(){
		return this._modelo;
	}
	set modelo(valor){
		this._modelo = valor;
	}
	
	get cilindrada(){
		return this._cilindrada;
	}
	set cilindrada(valor){
		this._cilindrada = valor;
	}

}

class Coche extends Vehiculo{
	constructor(valorNPuertas,valorNOcupantes,marca,modelo,cilindrada){
		super(marca,modelo,cilindrada);
		this._nPuertas = valorNPuertas;
		this.nOcupantes = valorNOcupantes;
	}
	get nPuertas(){
		return this._nPuertas;
	}
	set nPuertas(valor){
		this._nPuertas = valor;
	}
}

class Moto extends Vehiculo{
	constructor(anyoDisenio,carnet,marca,modelo,cilindrada){
		super(marca,modelo,cilindrada);
		this._anyoDisenio = anyoDisenio;
		this.carnet = carnet;
	}
	get anyoDisenio(){
		return this._anyoDisenio;
	}
	set anyoDisenio(valor){
		this._anyoDisenio = valor;
	}
}

var c = new Coche("5", "5", "Audi", "A6", "150");
var m = new Moto("2010", "A", "Kawasaki", "Ninja", "1100");
document.write(c.marca + " " +c.modelo + " " + c.nPuertas+ " " + c.nOcupantes+ " " + c.cilindrada);
document.write("<br>" + m.marca+ " " + m.modelo+ " " + m.anyoDisenio+ " " + m.cilindrada+ " " + m.carnet);