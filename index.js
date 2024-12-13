let testimonial_data =[
    {
        name:"Jaya Vignesh",
        image:"https://picsum.photos/200/200?random=2",
        text_content:"I am very happy with the service provided by the company. They are very professional and nice"
    },
    {
        name:"Sharath Kumar",  
        image:"https://picsum.photos/200/200?random=3",
        text_content:"I am very happy with the service provided by the company. They are very professional and super"
    },
    {
        name:"Vignesh",
        image:"https://picsum.photos/200/200?random=4",
        text_content:"I am very happy with the service provided by the company. They are very professional and better"
    },
    {
        name:"Sharath",
        image:"https://picsum.photos/200/200?random=5",
        text_content:"I am very happy with the service provided by the company. They are very professional and better"
    }
    
        

]

let data = 0
let name = document.querySelector(".container_name")
let image = document.querySelector(".container_image")
let text_content = document.querySelector(".container_content")

function testimonial(){
    let current =testimonial_data[data]
    name.innerHTML = current.name
    image.src = current.image
    text_content.innerHTML = current.text_content
    data++

    if(data===testimonial_data.length){
        data = 0
    }
}

setInterval(()=>{testimonial()},1000);
testimonial()
