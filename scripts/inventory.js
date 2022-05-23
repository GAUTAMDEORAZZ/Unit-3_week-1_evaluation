var dataArray=JSON.parse(localStorage.getItem("products"))
// console.log(dataArray)
displayData(dataArray)

function displayData(data){

    data.forEach(function(elem,index){

        let div=document.createElement("div")

        let image=document.createElement("img")
        image.src=elem.image
        
        let type=document.createElement("h3")
        type.innerText=elem.type

        let desc=document.createElement("p")
        desc.innerText= "Description :" + elem.desc
        desc.style.color="gray"

        let price=document.createElement("p")
        price.innerText= "Price :" + "₹"   +elem.price 
        price.style.color="green"
        
        let remove=document.createElement("button")
        remove.setAttribute("id","remove_product")
        remove.innerText="Remove"
        remove.style.color="red"
        remove.addEventListener("click",function(){
            removeItem(elem,index)
        })
         
      div.append(image,type,desc,price,remove)

        let all_product=document.querySelector("#all_products")
        all_product.append(div)



    })

}

function removeItem(elem,index){
    dataArray.splice(index,1)
    localStorage.setItem("products",JSON.stringify(dataArray))
    window.location.reload()

}