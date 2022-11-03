"use strict";

let imageBox = document.getElementById("nasaImage");
let dateBox = document.getElementById("dateBox");

dateBox.onchange = async function() {   
let dateStr=dateBox.value;
let url = "https://api.nasa.gov/planetary/apod?api_key=";
let key = 'DEMO_KEY';

    try{
       let response= await fetch(`${url}${key}&date=${dateStr}`)
        if(response.ok){
            let json= await response.json();
            showPicture(json);
        }
        else{
            throw new Error('An error occurred while fetching');
        }
    }catch(error){
        console.log(error);
    }
}

function showPicture(json){
    if(json.media_type==='video'){
        imageBox.innerHTML=  `<iframe src='${json.url}'></iframe><h1>${json.title}</h1><p>${json.explanation}</p>`;  
    }
    else if(json.media_type==='image'){
        imageBox.innerHTML=`<img src='${json.url}'/><h1>${json.title}</h1><p>${json.explanation}</p>`;
    }
    else{
        imageBox.innerHTML='Image not Available';
    }
}



