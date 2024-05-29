const form = document.querySelector("#myform");
const input = document.querySelector("#inputdata");
const bttn = document.querySelector("#button");
const temp = document.querySelector("#temp");
const humidity = document.querySelector("#humidity");
const apikey = "3d04c49d11563d1f41f02723e18b6324";
const message = document.querySelector("#message");
const degree = document.querySelector("#degree");
const speed = document.querySelector("#speed");
const pressure = document.querySelector("#pressure");
// const feelslike = document.querySelector("#feelslike");

// form.addEventListener("submit",(event)=>{
//     event.preventDefault();
//     console.log("output", input.value);
// })

const formhandler = async (event) => {
  try {
    event.preventDefault();

    const city = input.value;
    console.log("Temperature of", city);

    message.innerHTML = "Loading..."
    temp.innerHTML = "";
    humidity.innerHTML = "";
    degree.innerHTML = "";
    speed.innerHTML = "";
    pressure.innerHTML = "";
    // feelslike.innerHTML = "";
    bttn.disabled = true;

    // const response = await fetch(
    //   `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
    // );
    const response = await axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
    );

    message.innerHTML = "";

    form.reset();

    // const data = await response.json();

    temp.innerHTML = "Temperature = " + response.data.main.temp + "°C";
    humidity.innerHTML = "Humidity = " + response.data.main.humidity + "%";
    degree.innerHTML = "Wind : degree = " + response.data.wind.deg + "°";
    speed.innerHTML = "Wind : speed = " + response.data.wind.speed + "km/h";
    pressure.innerHTML = "Pressure = " + response.data.main.pressure + "mb";
    // feelslike.innerHTML = "Feels like = " + data.main.feels_like;
    

    console.log("🚀 ~ formHandler ~ response:", response.data);
  } catch (error) {
    console.log(error);
    message.innerHTML = error?.response?.message || "City not found!";
  } finally {
    bttn.disabled = false;
    form.reset();
  }
};

form.addEventListener("submit", formhandler);

const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})