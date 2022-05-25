let welcome = () => {
    let name = prompt(`¡Bienvenido/a! \n En esta pagina podras cotizar tu proximo departamento a alquilar. \n Para ello te pedimos que ingreses tu nombre asi podemos continuar.`)
    alert(`Bienvenido/a ${name}.`);
    console.log(`${name}, debajo iras viendo los detalles con mayor precisión, para que lleves un control de los datos que ingresaste:`);
}

function Rents (name, price, contract, fee) {
    this.name = name;
    this.price = "$" + price / 12;
    this.contract = "$" + price / 12 * 2;
    this.fee = "$" + 4 * price / 100;
}

let options1 = new Rents ("Avellaneda 24576", 600000, 600000, 600000);
let options2 = new Rents ("Av. Colon 817", 400000, 400000, 400000);
let options3 = new Rents ("Santamarina 11871", 500000, 500000, 500000);

let quote = () => {
    let budget = prompt(`Para filtrar y asi poder agilizar la busqueda, te pedimos que ingreses tu presupuesto mensual:`);
    console.log(`Presupuesto mensual ingresado: $${budget}`);

    function select() {
        let options = prompt(`¡Muy bien! Con el presupuesto de $${budget} tenemos tres alternativas para mostrarte: \n 1) ${options1.name} \n 2) ${options2.name} \n 3) ${options3.name} \n Por favor selecciona una opcion mediante su numeración.`)
        if (options == 1) {
            alert(`¡Muy bien! haz seleccionado la opcion 1: ${options1.name} \n La cual cuenta con los siguientes importes: \n Precio mensual: ${options1.price} \n Valor de contrato: ${options1.contract} \n Honorarios: ${options1.fee}`)
            console.log(`Opcion elegida: ${options1.name}`)
        } else if (options == 2) {
            alert(`¡Muy bien! haz seleccionado la opcion 2: ${options2.name} \n La cual cuenta con los siguientes importes: \n Precio mensual: ${options2.price} \n Valor de contrato: ${options2.contract} \n Honorarios: ${options2.fee}`)
            console.log(`Opcion elegida: ${options2.name}`);
        } else if(options == 3){
            alert(`¡Muy bien! haz seleccionado la opcion 3: ${options3.name} \n La cual cuenta con los siguientes importes: \n Precio mensual: ${options3.price} \n Valor de contrato: ${options3.contract} \n Honorarios: ${options3.fee}`)
            console.log(`Opcion elegida: ${options3.name}`);
        } else {
            alert(`Por favor, Recarga la pagina para comenzar de nuevo.`);
        }
    }
    select()

    console.log("Presentando este presupuesto en la inmobiliaria obtienes un 10% de descuento en el pago de los honorarios.");
}

welcome()
quote()

alert("¡Esperamos que estes conforme con tu eleccion! \nPuedes visitar la inmobiliaria de 9hs a 17hs de Lunes a Viernes para visitar la propiedad. \n ¡Muchas Gracias!");
console.log("¡Esperamos que estes conforme con tu eleccion! \nPuedes visitar la inmobiliaria de 9hs a 17hs de Lunes a Viernes para visitar la propiedad. \n ¡Muchas Gracias!");