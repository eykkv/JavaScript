

const valores = [ 18.0,80,43,18.888, "teste"]
valores[10]= 967

console.log(`
${valores[0]}
${valores[3].toFixed(1)}
${valores[10]}
${valores[0]}
${valores.length}
`);

const pushArray = ['girafa', 'leão','coala', 'camaleão']

console.log(pushArray);

const deleArray = ['banana','maca','pera','uva','salada mista']

console.log(deleteArray);

delete deleteArray[1]

console.log(deleteArray);

deleteArray.splice( 1    ,   1        , 'melão')

console.log(deleteArray) ;

const filterArray = (1,50,20,35,60)

console.log(filterArray);

const arrayFiltrado = filterArray.filter( (findArray) => {
    return findArray > 20
} )

console.log(arrayFiltrado);

const mapArray = [10,15,20,25,30,35]

const arraymodificado = mapArray.map((mapArrayModificado) => {
    return mapArrayModificado * 2
})

console.log(mapArray);
console.log(arrayModificado);

const forArray = ['jubileu','eyk','jabes','ane']

forArray.forEach((listarArray) => {
    return console.log(listarArray)
})

const sortArray = ['janeiro','feveireiro','março','abril','maior']

console.log(sortArray);

sortArray.sort();

console.log(sortArray);

const arraySortNumber = [10,23205,542,871,1050]
console.log(arraySortNumber);

arraySortNumber.sort()

console.log(arraySortnumber);


