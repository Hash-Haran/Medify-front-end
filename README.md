**Weather App 🌦️**

   This is a simple Weather App built using HTML, CSS, and JavaScript. The app allows users to enter a city name and fetch real-time weather data for that location. The weather data is retrieved from the OpenWeatherMap API and displayed on the webpage. The app also features basic error handling to inform the user if the city name is invalid or missing.

**Features:**
1) City Search: Enter a city name and retrieve the current weather data for that city.

2) Weather Information: Display the weather description (e.g., sunny, rainy), temperature (in Celsius), and humidity.

3) Error Handling: If the city name is invalid or no input is provided, an error message will be shown.

4) Stylish Design: The app has a modern design with a 3D box shadow effect for the weather display and a background animation.

**Technologies Used:**
1) HTML: Structure of the webpage and elements.

2) CSS: Styling the layout, including animations and responsive design.

3) JavaScript: Fetching data from the OpenWeatherMap API and dynamically updating the page with weather information.

4) OpenWeatherMap API: A third-party API that provides real-time weather data based on the city name entered by the user.

**How to Run the Code:**
1) Clone the Repository: Clone this repository to your local machine:

bash
Copy code
git clone https://github.com/Hash-Haran/Medify-front-end.git

2) Set the API Key: In the script.js file, replace the placeholder API key with this key:

javascript
Copy code
const API_KEY = '3c962f744c57e6627827a795c9173491'; 

3)Open the App: Navigate to the project folder and open the index.html file in a web browser.

4) Use the App: Enter a city name and click "Get Weather" to fetch weather details.

**Folder Structure:**
graphql
Copy code
/Medify-front-end
  ├── index.html        # Main HTML file
  ├── style.css         # Styles for the app
  ├── script.js         # JavaScript to handle API calls and dynamic content

**Troubleshooting:**
1) Ensure the city name is correct if the weather is not found.
2) Verify that the API key is properly set in the script.js file if no data shows up.
