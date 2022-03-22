

// for(let i = 1; i <= 10; i++ ){
//     console.log(`1*${i}=${1*i}`);
// }



// for( let i = 1; i <= 10; i++){
//     console.log(`2*${i} = ${2*i}`);
// }


// for(let i = 1; i <= 10; i++){
//     console.log(`9*${i} = ${9*i}`);
// }





// for(let i = 1; i <= 10; i++){
//     console.log(`5*${i} = ${5*i}`);
// }



// for( let i = 1; i<= 10; i++){
//     console.log(`6*${i} = ${6*i}`);
// }



let arr_cars = [
    {
        name: 'malibu',
        price: 30000
    },
    {
        name: 'matiz',
        price: 3000
    },
    {
        name: 'spark',
        price: 7500
    },
    {
        name: 'gentra',
        price: 140000
    },
    {
        name: 'santaferro',
        price: 80000
    },
    {
        name: 'tahoe',
        price: 80000
    },
    {
        name: 'tesla model y',
        price: 30000
    }
]



let name = prompt('Какая у Вас машина ?')
let price = +prompt('Цена Вашего машины ?')
let year = +prompt('Год Вашего машины ? ')

let newCar = {
    name: name,
    price:price,
    

}

 

    if (year >= 2010){
        let opros = confirm(`
        Ваша машина ${newCar.name}
        
        Цена машины ${newCar.price}

        Год Вашей машины ${year}

        Для размещение нажмите: ОК
        
        `)
        if(opros === true){
        
          arr_cars.push(newCar)
        } else{
            alert('Извините вы нажали на <<Отмена>>')
        }

    } else if ( 
        
        newCar.price = newCar.price - (newCar.price*20/100)
    ) {
       
        let opros2 = confirm(`
        Ваша машина ${newCar.name} 

        Цена машины (Извините, если год машины ниже чем 2010 года уценка состовляет 20%) ${newCar.price}

        Год Вашей машины ${year}

        Для размещение нажмите: ОК
       ` )
      if (opros2 === true){
        arr_cars.push(newCar)
    } else{
        alert('Извините вы нажали на <<Отмена>>')
    }
}


console.log(arr_cars);