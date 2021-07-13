let button = document.getElementById("button");
const title = document.getElementById("title");
const price = document.getElementById("price");
const body = document.getElementsByTagName("body");
const img = document.getElementById("img");
i=1;


document.addEventListener("click", Product)
function  Product(){    
    fetch('https://fakestoreapi.com/products')
    .then((Response)=>Response.json())
    .then((data)=>
    {console.log(data);
        
            i=i+1;
    price.innerText= "Price: $"+data[i].price;    
    title.innerHTML="Title: "+data[i].title;
    img.innerHTML="<img src="+ data[i].image+" style = 'height:150px;'>";
        
})
.catch(()=>renderError())
}


function renderError(){
    const Error = document.getElementById("Error");
    Error.innerText="Some error has occured";
}


// Product()