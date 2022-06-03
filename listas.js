// Una variable que contenga la lista de la compra (mínimo 5 elementos)
const listaCompra = ["Leche", "Huevos", "Salsa", "Arroz", "Carne"];
console.log(listaCompra);

// Modifica la lista de la compra y añádele "Aceite de Girasol"
listaCompra.push("Aceite de Girasol");
console.log(listaCompra);

// Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompra.splice(5, 1);
console.log(listaCompra);

// Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const peliculas = [
  {
    titulo: "El Padrino",
    director: "Francis Ford Coppola",
    fecha: 1972,
  },
  {
    titulo: "El Padrino 2",
    director: "Francis Ford Coppola",
    fecha: 1974,
  },
  {
    titulo: "The contractor",
    director: "Steven Speilberg",
    fecha: 2020,
  },
];
console.log(peliculas);

// Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const peliculasPosteriores = peliculas.filter(
  (pelicula) => pelicula.fecha > 2010
);
console.log(peliculasPosteriores);

//  Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directores = peliculas.map((pelicula) => pelicula.director);
console.log(directores);

// Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titulos = peliculas.map((pelicula) => pelicula.titulo);
console.log(titulos);

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const listaFinal = directores.concat(titulos);
console.log(listaFinal);

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const listaFinal2 = [...directores, ...titulos];
console.log(listaFinal2);
