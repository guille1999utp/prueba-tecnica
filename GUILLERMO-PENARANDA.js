'use strict';
const paddockManagers = [
    { id: 1, taxNumber: '132254524', name: 'JUAN TAPIA BURGOS'},
    { id: 2, taxNumber: '143618668', name: 'EFRAIN SOTO VERA'},
    { id: 3, taxNumber: '78903228', name: 'CARLOS PEREZ GONZALEZ'},
    { id: 4, taxNumber: '176812737', name: 'ANDRES VIÑALES CIENFUEGOS'},
    { id: 5, taxNumber: '216352696', name: 'OSCAR PEREZ ZUÑIGA'},
    { id: 6, taxNumber: '78684747', name: 'JOAQUIN ANDRADE SANDOVAL' }
  ];
  const paddockType = [
    { id: 1, name: 'PALTOS' },
    { id: 2, name: 'AVELLANOS' },
    { id: 3, name: 'CEREZAS' },
    { id: 4, name: 'NOGALES' },
  ]
  const paddocks = [
    { paddockManagerId: 6, farmId: 1, paddockTypeId: 1, harvestYear: 2019, area: 1200 },
    { paddockManagerId: 1, farmId: 3, paddockTypeId: 4, harvestYear: 2019, area: 500 },
    { paddockManagerId: 5, farmId: 3, paddockTypeId: 2, harvestYear: 2020, area: 20000 },
    { paddockManagerId: 2, farmId: 2, paddockTypeId: 3, harvestYear: 2021, area: 8401},
    { paddockManagerId: 3, farmId: 1, paddockTypeId: 1, harvestYear: 2020, area: 2877 },
    { paddockManagerId: 5, farmId: 2, paddockTypeId: 2, harvestYear: 2017, area: 15902 },
    { paddockManagerId: 3, farmId: 3, paddockTypeId: 2, harvestYear: 2018, area: 1736 },
    { paddockManagerId: 2, farmId: 3, paddockTypeId: 3, harvestYear: 2020, area: 2965 },
    { paddockManagerId: 4, farmId: 3, paddockTypeId: 4, harvestYear: 2018, area: 1651 },
    { paddockManagerId: 5, farmId: 1, paddockTypeId: 1, harvestYear: 2018, area: 700 },
    { paddockManagerId: 1, farmId: 2, paddockTypeId: 1, harvestYear: 2019, area: 7956 },
    { paddockManagerId: 5, farmId: 3, paddockTypeId: 2, harvestYear: 2020, area: 3745 },
    { paddockManagerId: 6, farmId: 1, paddockTypeId: 3, harvestYear: 2021, area: 11362 },
    { paddockManagerId: 2, farmId: 3, paddockTypeId: 3, harvestYear: 2021, area: 300 },
    { paddockManagerId: 3, farmId: 2, paddockTypeId: 2, harvestYear: 2020, area: 19188 },
    { paddockManagerId: 3, farmId: 1, paddockTypeId: 1, harvestYear: 2019, area: 17137 },
    { paddockManagerId: 4, farmId: 3, paddockTypeId: 2, harvestYear: 2020, area: 100 },
    { paddockManagerId: 2, farmId: 1, paddockTypeId: 3, harvestYear: 2019, area: 11845 },
    { paddockManagerId: 5, farmId: 2, paddockTypeId: 1, harvestYear: 2018, area: 15969 },
    { paddockManagerId: 1, farmId: 3, paddockTypeId: 1, harvestYear: 2029, area: 10420 },
    { paddockManagerId: 5, farmId: 2, paddockTypeId: 3, harvestYear: 2010, area: 3200 },
    { paddockManagerId: 6, farmId: 1, paddockTypeId: 2, harvestYear: 2012, area: 10587 },
    { paddockManagerId: 2, farmId: 2, paddockTypeId: 2, harvestYear: 2018, area: 16750 }
  ];
  
  const farms = [
    { id: 1, name: 'AGRICOLA SANTA ANA' },
    { id: 2, name: 'VINA SANTA PAULA' },
    { id: 3, name: 'FORESTAL Y AGRICOLA LO ENCINA' }
  ];

  // 0 Arreglo con los ids de los responsables de cada cuartel
function listPaddockManagerIds() {
  return paddockManagers.map((paddockManager) => paddockManager.id);
};


// 1 Arreglo con los ruts de los responsables de los cuarteles, ordenados por nombre
function listPaddockManagersByName() {
    // CODE HERE
    const arreglosNombres = paddockManagers.sort((a, b)=>{
            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
            return 0;
    });

        return arreglosNombres.map((rut)=>rut.taxNumber)
     
  };
  
  // 2 Arreglo con los nombres de cada tipo de cultivo, ordenados decrecientemente por la suma TOTAL de la cantidad de hectáreas plantadas de cada uno de ellos.
function sortPaddockTypeByTotalArea() {
    // CODE HERE
    let id = [];
    for( let i = 0 ; i < paddocks.length; i++){
      if( id[paddocks[i].paddockTypeId-1] === undefined){
        id[paddocks[i].paddockTypeId-1] = 0;
      }
       id[paddocks[i].paddockTypeId-1] += paddocks[i].area;
    }
    const unir = paddockType.map(function(paddock,i){
     let unir = {name : paddock.name ,valor : id[i]};
     return unir;
    });
    unir.sort(function (a, b) {
        if (a.valor > b.valor) {
          return -1;
        }
        if (a.valor < b.valor) {
          return 1;
        }
        return 0;
      });
      return unir.map((paddock)=>paddock.name)

  }

// 3 Arreglo con los nombres de los administradores, ordenados decrecientemente por la suma TOTAL de hectáreas que administran.
function sortFarmManagerByAdminArea() {
    // CODE HERE
    let idManager = [];
    for( let i = 0 ; i < paddocks.length; i++){
      if( idManager[paddocks[i].paddockManagerId-1] === undefined){
        idManager[paddocks[i].paddockManagerId-1] = 0;
      }
       idManager[paddocks[i].paddockManagerId-1] += paddocks[i].area;
    }
    const unir = paddockManagers.map(function(paddock,i){
     let unir = {name : paddock.name ,valor : idManager[i]};
     return unir;
    });
    unir.sort(function (a, b) {
        if (a.valor > b.valor) {
          return -1;
        }
        if (a.valor < b.valor) {
          return 1;
        }
        return 0;
      });
      return unir.map((paddock)=>paddock.name)
  }


  // 4 Objeto en que las claves sean los nombres de los campos y los valores un arreglo con los ruts de sus administradores ordenados alfabéticamente por nombre.
function farmManagerNames() {
    // CODE HERE
    let idManager = [[],[],[],[],[],[]];
    let NameManager = paddockManagers.map((name)=>name.name);
    let farm1 = []
    let farm2 = []
    let farm3 = []

    for( let i = 0 ; i < paddocks.length; i++){
        if(!(idManager[paddocks[i].paddockManagerId-1].includes(paddocks[i].farmId)))
        idManager[paddocks[i].paddockManagerId-1].push(paddocks[i].farmId);
     }

     idManager.map(function(Manager,index){
        for( let i = 0 ; i < Manager.length; i++){
            if(!(farm1.includes(Manager[i])) && Manager[i] === 1){
              farm1.push(NameManager[index])
            }
            if(!(farm2.includes(Manager[i]))&& Manager[i] === 2){
                farm2.push(NameManager[index])
              }
              if(!(farm3.includes(Manager[i]))&& Manager[i] === 3){
                farm3.push(NameManager[index])
              }
         }
    })
    const datos1 = farm1.sort().map(function(name){
        let codigosRut = [];
        for( let i = 0 ; i < paddockManagers.length; i++){
         if(name === paddockManagers[i].name ){
             codigosRut = [...codigosRut,paddockManagers[i].taxNumber];
         }
         }
        return codigosRut;
    });
    const datos2 = farm2.sort().map(function(name){
        let codigosRut = [];
        for( let i = 0 ; i < paddockManagers.length; i++){
         if(name === paddockManagers[i].name ){
             codigosRut = [...codigosRut,paddockManagers[i].taxNumber];
         }
         }
        return codigosRut;
    });
    const datos3 = farm3.sort().map(function(name){
        let codigosRut = [];
        for( let i = 0 ; i < paddockManagers.length; i++){
         if(name === paddockManagers[i].name ){
             codigosRut = [...codigosRut,paddockManagers[i].taxNumber];
         }
         }
        return codigosRut;
    });
  
    let object = {};

    farms.map(function(farm,i){
        if(i === 0){
            let unir = {[farm.name] : datos1};
            object = Object.assign(object,unir);
        }
        if(i === 1){
          let unir = {[farm.name] : datos2};
          object = Object.assign(object,unir);
        }
        if(i === 2){
          let unir = {[farm.name] : datos3};
          object = Object.assign(object,unir);
        }
    })
    
    return object;
  }
  
  // 5 Arreglo ordenado decrecientemente con los m2 totales de cada campo que tengan más de 2 hectáreas en Paltos
function biggestAvocadoFarms() {
    // CODE HERE
    const Paltos = paddocks.filter((paddock)=> paddock.paddockTypeId === 1 );
    let respuesta = [];
    let farm1 = 0;
    let farm2 = 0;
    let farm3 = 0;
    
    for( let i = 0 ; i < Paltos.length; i++){
      if(Paltos[i].farmId === 1){
        farm1 += Paltos[i].area
      }
      }
      respuesta.push(farm1);
    for( let i = 0 ; i < Paltos.length; i++){
       if(Paltos[i].farmId === 2){
        farm2 += Paltos[i].area
       }
       }
       respuesta.push(farm2);

    for( let i = 0 ; i < Paltos.length; i++){
       if(Paltos[i].farmId === 3){
        farm3 += Paltos[i].area
      }
       }
       respuesta.push(farm3);

return respuesta.map(function(farma,i){
  if(farma > 20000){
    return  farma
  } 
}).filter((mostrar)=> mostrar !== undefined).sort().reverse();     
   
  }
  
  // 6 Arreglo con nombres de los administradores de la FORESTAL Y AGRÍCOLA LO ENCINA, ordenados por nombre, que trabajen más de 1000 m2 de Cerezas
function biggestCherriesManagers() {
  // CODE HERE
  const Cerezas = paddocks.filter((paddock)=> paddock.paddockTypeId === 3 &&  paddock.farmId === 3);
  let nombres = [];
  let datos = [];
  for( let index = 0 ; index < paddockManagers.length; index++){
for( let ind = 0 ; ind < Cerezas.length; ind++){
   if(paddockManagers[index].id === Cerezas[ind]?.paddockManagerId && !(nombres.includes(paddockManagers[index].name))){
    let contador = 0;
    for( let i = 0 ; i < Cerezas.length; i++){
      if(paddockManagers[index].id === Cerezas[i].paddockManagerId){
         contador += Cerezas[i].area
      }
      }
      nombres.push(paddockManagers[index].name)
      datos.push({[paddockManagers[index].name]:contador});

  }
}
    }
  return datos.map(function(nombre){
    if(Object.values(nombre)>1000){
      return `${Object.keys(nombre)}` 
    }

  }).sort();
}

// 7 Objeto en el cual las claves sean el nombre del administrador y el valor un arreglo con los nombres de los campos que administra, ordenados alfabéticamente
function farmManagerPaddocks() {
  // CODE HERE
  const arreglo = paddockManagers.map(function(manage){
  let padocktype = [];
  paddocks.map(function(paddock){
      if(paddock.paddockManagerId === manage.id){
          const clase = paddockType.filter((clase)=>clase.id === paddock.paddockTypeId);
          if(!(padocktype.includes(clase[0].name))){
          padocktype.push(clase[0].name);
          }
      }
  
  });
  return {[manage.name]: padocktype}
  });

   let object = {};
   for(let i = 0  ; i < arreglo.length; i++ ){
     object = Object.assign(object,arreglo[i]);
   }
  return object;
}

// 8 Objeto en que las claves sean el tipo de cultivo concatenado con su año de plantación (la concatenación tiene un separador de guión ‘-’, por ejemplo AVELLANOS-2020) y el valor otro objeto en el cual la clave sea el id del administrador y el valor el nombre del administrador
function paddocksManagers() {
  // CODE HERE
  let arreglo = {}; 
  for(let i = 0  ; i < paddocks.length; i++ ){
    const Categoria = paddockType.map(function(categoria){
         if(categoria.id === paddocks[i].paddockTypeId){
           return categoria.name
         }
    } ).filter((dato)=>dato !== undefined);

    const CategoriaLlave = paddockManagers.map(function(Manager){
      if(Manager.id === paddocks[i].paddockManagerId){
        return Manager
      }
 } ).filter((dato)=>dato !== undefined);

    if(!(Object.keys(arreglo).includes(`${Categoria}-${paddocks[i].harvestYear}`))){
      arreglo = Object.assign(arreglo,{[`${Categoria}-${paddocks[i].harvestYear}`]: {[CategoriaLlave[0].id]:CategoriaLlave[0].name }});
    }

   if(Object.keys(arreglo).includes(`${Categoria}-${paddocks[i].harvestYear}`) && !Object.keys(arreglo[`${Categoria}-${paddocks[i].harvestYear}`]).includes(paddocks[i].paddockManagerId)){
     arreglo = {...arreglo,[`${Categoria}-${paddocks[i].harvestYear}`] : {...arreglo[`${Categoria}-${paddocks[i].harvestYear}`],[CategoriaLlave[0].id]:CategoriaLlave[0].name }};

   }

  } 
  return arreglo;

 
}

// 9 Agregar nuevo administrador con datos ficticios a "paddockManagers" y agregar un nuevo cuartel de tipo NOGALES con 900mts2, año 2017 de AGRICOLA SANTA ANA, administrado por este nuevo administrador 
// Luego devolver el lugar que ocupa este nuevo administrador en el ranking de la pregunta 3.
// No modificar arreglos originales para no alterar las respuestas anteriores al correr la solución
function newManagerRanking() {
  // CODE HERE
  paddockManagers.push({ id: 7, taxNumber: '4564567832453', name: 'GUILLERMO PEÑARANDA HERNANDEZ' });
  paddocks.push({ paddockManagerId: 7, farmId: 1, paddockTypeId: 4, harvestYear: 2017, area: 900 });
  return sortFarmManagerByAdminArea();
}

console.log('Pregunta 0');
console.log(listPaddockManagerIds());
console.log('Pregunta 1');
console.log(listPaddockManagersByName());
console.log('Pregunta 2');
console.log(sortPaddockTypeByTotalArea());
console.log('Pregunta 3');
console.log(sortFarmManagerByAdminArea());
console.log('Pregunta 4');
console.log(farmManagerNames());
console.log('Pregunta 5');
console.log(biggestAvocadoFarms());
console.log('Pregunta 6');
console.log(biggestCherriesManagers());
console.log('Pregunta 7');
console.log(farmManagerPaddocks());
console.log('Pregunta 8');
console.log(paddocksManagers());
console.log('Pregunta 9');
console.log(newManagerRanking());
