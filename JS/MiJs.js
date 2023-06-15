console.log("Hola Mi JS.js")

function declararVar() {
    var materia = "WEB";
    if (true) {
        var materia = "BD";
        console.log(materia);
    }
    console.log(materia)
}
function declararLet(){
    let materia = "WEB";
    if (true) {
        let materia = "BD";
        console.log(materia);
    }
    console.log(materia)
}
function declararConst(){
    const materia = "WEB";
    if (true) {
        const materia = "BD";
        console.log(materia);
    }
    console.log(materia)
}
function declararObj(){
    const persona = {
        nombre: "Lizbeth",
        apellido: "Santibañez",
        edad: 19,
        sexo: "M",
        direccion:{
            calle: "1 de Mayo",
            numero: 3,
            municipio: "Temixco"
        }
    }
    console.log (persona);
    console.log(persona.nombre);
    persona.nombre="Lizzz";
    console.log(persona);
    console.log(persona.direccion.municipio);

    const{ nombre, apellido, edad, sexo, direccion:{calle, numero, municipio}} = persona;
   // const {calle, numero, municipio}=direccion;
    console.log(municipio);
    console.log(`Hola ${nombre} tienes ${edad} y vives en 
    ${municipio}`);

    let numeros = [1,2,3,4,5]
    console.log(numeros);
    console.log(...numeros);

    function sumar(a,b,c){
        console.log("La suma es: "+(a+b+c))
    }
    sumar(3,4,5);
    sumar(...numeros);

    let numeros2 = [...numeros,7,8,9]
    console.log(numeros2);
 }
 function tradicional(){
    console.log("Hola Tradicional")
    console.log("Adios Tradicional")
 }
 tradicional();

 let tradicional2 = ()=> {
    console.log("Hola Tradicional2");
    console.log("Adios Tradicional2");
 }
 tradicional2();

 function x(a,b,d){
    console.log(a+b+d);
 }

 let x2=(a,b,d)=> console.log(a+b+d);

 ///////////////////// ASYNC /////////////////////////////////////

 const peliculas =[
    {
        id:1,
        nombre:"Yo antes de ti",
        duracion: 120,
        genero:"Romantica",
        descripcion:"Está en silla de ruedas"
    },
    {
        id:2,
        nombre:"Sherk",
        duracion: 120,
        genero:"Animada",
        descripcion:"Tiene capas"
    },
    {
        id:3,
        nombre:"Moana",
        duracion: 90,
        genero:"Animada",
        descripcion:"Hay un gallo loco"
    },
    {
        id:4,
        nombre:"Harry Potter",
        duracion: 150,
        genero:"Fantasia",
        descripcion:"Le mataron a sus jefes :("
    }
 ]

const obtenerPeliculas = ()=> {
return new Promise((resolve, reject)=>{
setTimeout(()=> {
resolve(peliculas);
 }, 3000);
 });
};

 //const obtenerPeliculas = () => peliculas;
//obtenerPeliculas().then((peliculas)=>console.log(peliculas))

async function listarpelis(){
    const lista= await obtenerPeliculas();
    console.log(lista);
}
listarpelis();
