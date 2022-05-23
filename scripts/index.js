//store the products array in localstorage as "products"

var arrData= JSON.parse(localStorage.getItem("products")) || []

document.querySelector("#products").addEventListener("submit",myfunction)

function myfunction(){
    event.preventDefault();
    var objData={
        type:products.type.value,
        desc:products.desc.value,
        price:products.price.value,
        image:products.image.value
    }

    arrData.push(objData)
   
    localStorage.setItem("products",JSON.stringify(arrData))
    window.location.reload();

}