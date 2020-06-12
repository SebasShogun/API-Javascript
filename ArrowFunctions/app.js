
let aprendiendo;

aprendiendo = function(){
    console.log('Aprendiendo Javascript');
}

aprendiendo = () => {
    console.log('Aprendiendo Javascript');
}
//bo requiere llave
aprendiendo = () => console.log('Aprendiendo Javascript');
//retorna valor
aprendiendo = () => 'Aprendiendo Javascript';
//retorna objeto
aprendiendo = () => ({aprendiendo: 'Aprendiendo Javascript'});
//pasar parametros
aprendiendo = (tecnologia) => console.log(`Aprendiendo ${tecnologia}`);
//pasando un parametro
aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`);
//pasando un parametro
aprendiendo = (tecn1, tecn2) => console.log(`Aprendiendo ${tecn1} y ${tecn2}`);

aprendiendo('Javascript', 'Python')

const productos = ['Disco', 'Camisa', 'Guitarra'];

productos.forEach(producto => console.log(producto));