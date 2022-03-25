let arr_school = [
    {
        school: 'wepro',
        budget: 800000,
        tax: 13,
        students: 190,

        expenses: [
            {
                title: 'furniture',
                price: 2000
            },
            {
                title: 'water',
                price: 800
            },
            {
                title: 'electricity',
                price: 5000
            }
        ]
    },
    {
        school: 'Amir',
        budget: 30000000,
        tax: 0000001,
        students: 700,
        expenses: [
            {
                title: 'furniture',
                price: 90000
            },
            {
                title: 'compi',
                price: 100000
            },
            {
                title: 'electricity',
                price: 50000
            },
            {
                title: 'close',
                price: 9999
            },
            {
                title: 'svechi',
                price: 50000
            },
            {
                title: 'Amir',
                price: 1
            },
            {
                title: 'anime',
                price: 999999
            },
        ]
    },
    {

        school: 'IT',
        budget: 9999999,
        tax: 15,
        students: 100,
        expenses: [
            {
                title: 'furniture',
                price: 20000
            },
            {
                title: 'water',
                price: 1000
            },
            {
                title: 'electricity',
                price: 5000
            },
        ]
    },
    {   
        school: '34',
        budget: 1500000,
        tax: 15,
        students: 3000,
        expenses: [
            {
                title: 'internet',
                price: 1500
            },
            {
                title: 'computers',
                price: 2000
            },
            {
                title: 'electricity',
                price: 8000
            }
        ]
    },
    {   
        school: 51,
        budget: 800000,
        tax: 13,
        students: 2100,
        expenses: [
            {
                title: 'television',
                price: 2000
            },
            {
                title: 'comp',
                price: 4000
            },
            {
                title: 'aspalt',
                price: 2500
            }
        ]
    },
    {   
        school: 'GLC',
        budget: 400000,
        tax: 13,
        students: 530,
        expenses: [
            {
                title: 'tables',
                price: 4000
            },
            {
                title: 'trips',
                price: 80000
            },
            {
                title: 'electricity',
                price: 8000
            }
        ]
    }
]

let total = arr_school.reduce((prev,item) =>{
    let temp = prev.tax * prev.budget /100
    let temp2 = item.tax * item .budget /100
    if(temp > temp2){
        return prev
    } else{
        return item
    }
})
console.log(total);