
fetch("https://ipinfo.io/json")
.then((response) => response.json())
.then((data) => {
     console.log(data);
    console.log(data.ip);
    let loc=data.loc.split(",")
    console.log(loc[0]);
    console.log(loc[1]);
    
    let lat = loc[0];
    let lon = loc[1];
    3;

    get_wether();

    async function get_wether() {
        let api_key = "ccfcf7321ac74ed37c7b0cb0fd2d57ea";
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`;
        try {
            let res = await fetch(url);
            if(!res.ok) {
                throw new Error(res.status);   
            }
            let data = await res.json();
            console.log(res);
            console.log(data);
            console.log(data.base);
            console.log(data.clouds);
            console.log(data.cod);
            console.log(data.coord);
            console.log(data.dt);
            console.log(data.id);
            console.log(data.main.temp);
            console.log(data.main.feels_like);
            console.log(data.main.temp_min);
            console.log(data.main.temp_max);
            console.log(data.name);
            console.log(data.sys.type);
            console.log(data.sys.id);
            console.log(data.sys.country);
            console.log(data.sys.sunrise);
            console.log(data.sys.sunset);
            console.log(data.timezone);
            console.log(data.visibility);
            console.log(data.wind);
            
    
        } catch (e) {
            console.log(e);   
        }
    }      
})
.catch((e) => {
    console.log(e);
    
})
