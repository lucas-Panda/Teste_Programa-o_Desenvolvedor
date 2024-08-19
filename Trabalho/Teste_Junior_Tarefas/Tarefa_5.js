const array1 = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 }
  ];
  
  const array2 = [
    { id: 1, age: 26, email: 'alice@example.com' },
    { id: 3, name: 'Charlie', age: 22 }
  ];



function mergeArrays(array1,array2){
    const array3 = [];
    
    array1.forEach(item1 => {
        const item2 = array2.find(item => item.id === item1.id);
        array3.push(item2 ?{ ...item1, ...item2 } :item1);
    });

    array2.forEach(item2 =>{
        const item1 = array1.find(item => item.id === item2.id);
        if (!item1) {
            array3.push(item2);
        }
    });

    return array3

}

let array3 = mergeArrays(array1,array2);

console.log(array3)