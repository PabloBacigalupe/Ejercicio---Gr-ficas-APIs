



function paintGraph(dataset){
  // 2 - Tratamiento de datos
  // Forma 1. Ineficiente con 2 iteraciones
  // const listIdProducts = dataset.map((product) => `prod${product.id}`);
  // const listPrices = dataset.map((product) => product.price);
  // Forma 2. Eficiente con 1 iteración
  const listMovies = [];
  const listYears = [];
  dataset.forEach((movies) => {
      listMovies.push(movies.title);
      let año = (movies.release_date.split("-"))
      listYears.push(año[0]);
  });
  // 3 - Representación de datos en una gráfica
  var data = {
      labels: listMovies,
        series: [
          listYears,
      ]
    };
    var options = {
      seriesBarDistance: 15,
      high: 2010,
      low: 1950
    };
    var responsiveOptions = [
      ['screen and (min-width: 641px) and (max-width: 1024px)', {
        seriesBarDistance: 10,
        axisX: {
          labelInterpolationFnc: function (value) {
            return value;
          }
        }
      }],
      ['screen and (max-width: 640px)', {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          }
        }
      }]
    ];
    new Chartist.Line('.movies2', data, options, responsiveOptions);
}
async function getData() {
try {
  // 1 - Obtención de datos
  const response = await fetch("https://swapi.dev/api/films");
  // Verificar si la respuesta es exitosa
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("Recurso no encontrado (404)");
    } else if (response.status === 500) {
      throw new Error("Error en el servidor (500)");
    } else {
      throw new Error(`Error HTTP: ${response.status}`);
    }
  }
  const data = await response.json();
  console.log(data);
  // Tratamiento + representar gráficamente los datos. Pasos 2-3
  paintGraph(data.results);
} catch (error) {
  // Manejar el error de manera personalizada
  if (error.message.includes("404")) {
    console.error("Error: No se encontró el recurso solicitado.");
  } else if (error.message.includes("500")) {
    console.error("Error: Problemas con el servidor.");
  } else {
    console.error("Hubo un problema:", error.message);
  }
}
}
getData();








//SEGUNDA GRAFICA

function paintGraphCharacter(dataset){

  // 2 - Tratamiento de datos

  // Forma 1. Ineficiente con 2 iteraciones
  // const listIdProducts = dataset.map((product) => `prod${product.id}`);
  // const listPrices = dataset.map((product) => product.price);


  // Forma 2. Eficiente con 1 iteración
  const listCharacter = [];
  const numMovies = [];
  dataset.forEach((character) => {
      listCharacter.push(character.name);
      numMovies.push(character.films.length);
      
      
  });


  

  // 3 - Representación de datos en una gráfica
  var data = {
      labels: listCharacter,
        series: [
          numMovies,
      ]
    };
    
    var options = {
      seriesBarDistance: 10,
      high: 8,
      


    };
    
    var responsiveOptions = [
      ['screen and (min-width: 641px) and (max-width: 1024px)', {
        seriesBarDistance: 10,
        axisX: {
          labelInterpolationFnc: function (value) {
            return value;
          }
        }
      }],
      ['screen and (max-width: 640px)', {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          }
        }
      }]
    ];
    
    new Chartist.Line('.movies1', data, options, responsiveOptions);

}

async function getDataCharacter() {
try {
  // 1 - Obtención de datos
  const response = await fetch("https://swapi.dev/api/people");

  // Verificar si la respuesta es exitosa
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("Recurso no encontrado (404)");
    } else if (response.status === 500) {
      throw new Error("Error en el servidor (500)");
    } else {
      throw new Error(`Error HTTP: ${response.status}`);
    }
  }

  const data = await response.json();
  console.log(data);

  // Tratamiento + representar gráficamente los datos. Pasos 2-3
  paintGraphCharacter(data.results);

} catch (error) {
  // Manejar el error de manera personalizada
  if (error.message.includes("404")) {
    console.error("Error: No se encontró el recurso solicitado.");
  } else if (error.message.includes("500")) {
    console.error("Error: Problemas con el servidor.");
  } else {
    console.error("Hubo un problema:", error.message);
  }
}
}


getDataCharacter();





function paintGraph(dataset){
    // 2 - Tratamiento de datos
    // Forma 1. Ineficiente con 2 iteraciones
    // const listIdProducts = dataset.map((product) => `prod${product.id}`);
    // const listPrices = dataset.map((product) => product.price);
    // Forma 2. Eficiente con 1 iteración
    const listMovies = [];
    const listYears = [];
    dataset.forEach((movies) => {
        listMovies.push(movies.title);
        let año = (movies.release_date.split("-"))
        listYears.push(año[0]);
    });
    // 3 - Representación de datos en una gráfica
    var data = {
        labels: listMovies,
          series: [
            listYears,
        ]
      };
      var options = {
        seriesBarDistance: 15,
        high: 2010,
        low: 1950
      };
      var responsiveOptions = [
        ['screen and (min-width: 641px) and (max-width: 1024px)', {
          seriesBarDistance: 10,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value;
            }
          }
        }],
        ['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];
      new Chartist.Bar('.movies2', data, options, responsiveOptions);
}
async function getData() {
  try {
    // 1 - Obtención de datos
    const response = await fetch("https://swapi.dev/api/films");
    // Verificar si la respuesta es exitosa
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("Recurso no encontrado (404)");
      } else if (response.status === 500) {
        throw new Error("Error en el servidor (500)");
      } else {
        throw new Error(`Error HTTP: ${response.status}`);
      }
    }
    const data = await response.json();
    console.log(data);
    // Tratamiento + representar gráficamente los datos. Pasos 2-3
    paintGraph(data.results);
  } catch (error) {
    // Manejar el error de manera personalizada
    if (error.message.includes("404")) {
      console.error("Error: No se encontró el recurso solicitado.");
    } else if (error.message.includes("500")) {
      console.error("Error: Problemas con el servidor.");
    } else {
      console.error("Hubo un problema:", error.message);
    }
  }
}
getData();


