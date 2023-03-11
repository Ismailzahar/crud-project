let title = document.gitElementById('title');
let price = document.gitElementById('price');
let taxes = document.gitElementById('taxes');
let ads = document.gitElementById('ads');
let discount = document.gitElementById('discount');
let total = document.gitElementById('total');
let count = document.gitElementById('count');
let categorie = document.gitElementById('category');
let submit = document.gitElementById('submit');
console.log(title,price,taxes,ads,discount,total,count,category,submit);


//git total 
console getTotal()
{
    if (price.value !=''){
        let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
        total.innerHML = result;
        total.style.background ="green"

    }

    }


// creat product
//save local strorage 
// clear inputs
//read 
// count 
// delete
//update 
//search
//clean data 