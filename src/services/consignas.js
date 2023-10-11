export const consignas = [
  {
    id: 1,
    titulo: "Ejercicio 1",
    consigna:
      "Ingresar por medio de un programa HTML un valor entero N. Luego llamar por el método POST a un programa PHP, que genere un vector $vec de N elementos, el cual contenga los primeros N números naturales primos. Realizar este procedimiento dentro de una función. Finalmente imprimir el vector enel script original. (código PLA-04).",
    resumen: "Generar numeros primos",
    resolucion: [
      "1. Realizar el formulario",
      "2. Procesar los valores del input",
      "3. Enviar a php el valor del input",
      "4. Configurar PHP para peticiones POST",
      "5. Realizar la funcion",
      "6. Recibir en el front el resultado de la funcion",
    ],
  },
  {
    id: 2,
    titulo: "Ejercicio 2",
    consigna:
      "La N.A.S.A. está realizando un proyecto sobre el estudio de las partículas H en nuestro Sistema Solar. Para ello han colocado unas antenas especiales en cada uno de los nueve planetas. Realizar un programa php con una función llamada planeta_con_mas_particulasH , que recibiendo como parámetro de entrada un array (llamado $particulas, cargarlo con nueve números que usted desee) con el total de partículas H que han impactado en cada uno de los 9 planetas, devuelva, como valor de retorno, el número del planeta (entre 0 y 8) donde se han detectado más partículas H. Realizar otra función llamada planeta_con_menos_particulasH igual que la anterior, pero donde devuelva el planeta donde se detectó menos partículas H. Por último, otra función en donde devuelva el promedio de partículas en los 9 planetas. En el script principal deberá imprimir: El planeta X es donde se detectaron más partículas H. El planeta Y es donde se detectaron menos partículas H. El promedio de partículas H es NNNN.",
    resumen: "Ejercicio de la nasa",
    resolucion: [
      "1. Armar el front con su formulario",
      "2. Procesar valores de los inputs",
      "3. Realizar peticion a php",
      "4. Configurar php para recibir el array",
      "5. Realizar funciones en php y retornar cada valor",
      "6. Convertir respuestas en JSON",
      "7. Recibir JSON en el front",
      "8. Mostarlo en pantalla",
    ],
  },
  {
    id: 3,
    titulo: "Ejercicio 3",
    consigna:
      "Cargar dos vectores con números al azar de 6 elementos cada uno. El primer vector se llama $origen y el segundo $destino. Debe realizar una función que informe la cantidad de elementos repetidos que hay en cada vector, y además la posición que ocupa en ambos vectores. Un ejemplo sería: origen contiene los elementos 1, 4, 6, 8, 12 y 17. destino contiene los elementos 3, 6, 0, 4, 5 y 1. La salida debería ser la siguiente: El elemento 1 está en la posición 1 de origen y en la posición 6 de destino El elemento 4 está en la posición 2 de origen y en la posición 4 de destino El elemento 6 está en la posición 3 de origen y en la posición 2 de destino Se encontraron 3 repeticiones",
    resumen: "Comparar dos vectores",
    resolucion: [
      "1. Armar el front con su formulario",
      "2. Procesar valores de los inputs",
      "3. Realizar peticion a php",
      "4. Configurar php para recibir los arrays",
      "5. Realizar funciones en php y retornar cada valor",
      "6. Convertir respuestas en JSON",
      "7. Recibir JSON en el front",
      "8. Mostarlo en pantalla",
    ],
  },
  {
    id: 4,
    titulo: "Ejercicio 4",
    consigna:
      "Escribir un programa en PHP que cargue en un array las notas de 30 alumnos de un curso (hacerlo con números al azar entre 0 y 10). Luego deberá armar una función llamada Abanderado que devolverá la nota de los 3 mejores alumnos. Fuera de la función, deberá imprimir las 3 notas y la ubicación de cada una dentro del array.",
    resumen: "Numeros random y abanderados",
    resolucion: [
      "1. Realizar front dandole interactividad a un boton",
      "2. Enviar la peticicion a php",
      "3. Generar las 30 notas",
      "4. Operar con las 30 notas",
      "5. Convertir en JSON",
      "6. Recibirlo en el front",
      "7. Mostarlo en pantalla",
    ],
  },
  {
    id: 5,
    titulo: "Ejercicio 5/Practica 3",
    consigna:
      "Crearemos una tabla de valores de seno y coseno de 0 a 2 en incrementos de 0.01. Los valores negativos que resulten los queremos mostrar en rojo, y los valores positivos en azul. Un color diferente cada fila que se imprima.",
    resumen: "Tabla de seno y coseno",
    resolucion: [
      "1. Realizar el front",
      "2. Realizar peticion",
      "3. Realizar las funciones en php y retornarlas como un JSON",
      "4. Recibirla y mostrarla en el front",
    ],
  },
  {
    id: 6,
    titulo: "EJercicio 6/Practica 4",
    consigna:
      "Escribir un programa en HTML que pida dos números. El primero será un número entero que indica el número en base 10 (decimal) que vamos a querer convertir. El segundo número será la base (validar que sea entero de 1 a 9) a la que queremos convertir el primer número ingresado. Luego llamar a un programa php con el método POST, que convierta el número en base 10, a la base que indica el segundo número.",
      resumen:"Elevar un numero a su base",
    resolucion: [],
  },
];

export const conbd = [
  {
    id: 7,
    titulo: "Viajes y sucursales",
    consigna:"Una empresa tiene una sucursal en cada localidad diferente. No en todas las localidades tiene sucursal, pero en las que tiene, hay sólo una. Se dedica a realizar viajes periódicos entre cada sucursal llevando materiales. Para ello, cuenta con una base de datos donde asienta datos de los viajes realizados.",
    resolucion: [],
  },
  {
    id: 8,
    titulo: "Concesionaria",
    consigna:
      "Desarrollar un sitio en PHP donde muestre el capital acumulado por la concesionaria por cada marca de auto. Aplicar estilos en archivo aparte. Mostrar los resultados en una tabla y con un link para volver a ejecutar el programa.",
    resolucion: [],
  },
  {
    id: 9,
    titulo: "Escuela",
    consigna:
      "Realizar una página web, en HTML, con un solo botón que diga procesar. Al hacer click sobre el mismo debe llamar a una página PHP que dispare el programa.",
    resolucion: [],
  },
  {
    id: 10,
    titulo: "Fabrica",
    consigna:
      "Ingresando por teclado un número de empleado, muestre el nombre del mismo junto a la cantidad total de horas trabajadas y el importe neto cobrado por el total de horas trabajadas.",
    resolucion: [],
  },
  {
    id: 11,
    titulo: "Telefonia",
    consigna:
      "Crearemos una tabla de valores de seno y coseno de 0 a 2 en incrementos de 0.01. Los valores negativos que resulten los queremos mostrar en rojo, y los valores positivos en azul. Un color diferente cada fila que se imprima.",
    resolucion: [],
  },
];
