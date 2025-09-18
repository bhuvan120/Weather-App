const apikey="87a67e019c9cdff30e8352f0b1e0e8a6"

function getweather(){
    const city=document.getElementById("input").value;
    if(!city){
        alert("Please Enter City Name:")
    }
    

const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`

fetch(url)
.then(function(response){
    return response.json();
})
.then(function(data){  
    
    if(data.cod==="404"){
        document.getElementById("result").innerHTML="<p>City Not Found</p>"
        return;
    }
    document.getElementById("result").innerHTML=
    "<h3>"+ data.name + ", "+ data.sys.country+"</h3>"+
    "<p> Temperature:" + data.main.temp + "C </p>" +
    "<p>Weather:"+ data.weather[0].description + "</p>"+
    "<p>Wind Speed:"+data.wind.speed + "m/s </p>"; 
})
.catch(function(error){
    document.getElementById("result").innerHTML="<p>Error Fetching Data</p> "
})

}


