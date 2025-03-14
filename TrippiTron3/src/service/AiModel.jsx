import { GoogleGenerativeAI } from "@google/generative-ai";

  const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
    // systemInstruction: "Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for 3 days with each day plan with best time to visit in JSON format.",
  });
  
  const generationConfig = {
    temperature: 0.7,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  

    export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget, Give me a 5 Hotels options list with HotelName, Hotel address, Price with currency, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for 3 days with each day plan with best time to visit in JSON format."},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"hotelOptions\": [\n    {\n      \"hotelName\": \"Circus Circus Hotel & Casino\",\n      \"hotelAddress\": \"2880 S Las Vegas Blvd, Las Vegas, NV 89109\",\n         \"price\": {\n        \"currency\": \"USD\",\n        \"amount\": \"50-80\" \n      },\n      \"hotelImageUrl\": \"https://www.circuscircus.com/wp-content/uploads/2023/04/CC-Hero-Image-1.jpg\", \n      \"geoCoordinates\": {\n        \"latitude\": 36.1215,\n        \"longitude\": -115.1739\n      },\n      \"rating\": 3.5,\n      \"description\": \"A classic Vegas hotel with a circus theme, offering budget-friendly rooms and family-friendly entertainment.\"\n    },\n    {\n      \"hotelName\": \"Main Street Station Casino, Brewery & Hotel\",\n      \"hotelAddress\": \"200 S. Main Street, Las Vegas, NV 89101\",\n      \"price\": {\n        \"min\": 40,\n        \"max\": 100\n      },\n      \"hotelImageUrl\": \"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/a4/06/0c/main-street-station.jpg?w=1200&h=-1&s=1\",\n      \"geoCoordinates\": {\n        \"latitude\": 36.1667,\n        \"longitude\": -115.1401\n      },\n      \"rating\": 4.0,\n      \"description\": \"Downtown hotel with a historic feel, offering affordable rooms and a brewery.\"\n    },\n    {\n      \"hotelName\": \"The D Las Vegas\",\n      \"hotelAddress\": \"300 Fremont Street, Las Vegas, NV 89101\",\n      \"price\": {\n        \"min\": 50,\n        \"max\": 120\n      },\n      \"hotelImageUrl\": \"https://www.thedlasvegas.com/wp-content/uploads/2023/08/The-D-Las-Vegas-Hotel-Exterior.jpg\",\n      \"geoCoordinates\": {\n        \"latitude\": 36.1673,\n        \"longitude\": -115.1417\n      },\n      \"rating\": 3.8,\n      \"description\": \"Modern hotel in the Fremont Street Experience, offering stylish rooms at a reasonable price.\"\n    }\n  ],\n  \"itinerary\": {\n    \"day1\": {\n      \"plan\": [\n        {\n          \"placeName\": \"Fremont Street Experience\",\n          \"placeDetails\": \"Free walking area with light shows and street performers.\",\n          \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Fremont_Street_Experience_at_night.jpg/1280px-Fremont_Street_Experience_at_night.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1673,\n            \"longitude\": -115.1417\n          },\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.5,\n          \"timeTravel\": \"Evening (7 PM - 10 PM)\"\n        }\n      ]\n    },\n    \"day2\": {\n      \"plan\": [\n        {\n          \"placeName\": \"Strip Walk\",\n          \"placeDetails\": \"Walk the Las Vegas Strip, observing the famous hotels and casinos.\",\n          \"placeImageUrl\": \"https://www.tripsavvy.com/thmb/0pG7lK_l-eH7u_OqC4kXhR5f56Y=/750x500/smart/filters:no_upscale()/las-vegas-strip-at-night-5c5c328a46e0fb00016609d4.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1146,\n            \"longitude\": -115.1729\n          },\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.0,\n          \"timeTravel\": \"Morning (9 AM - 1 PM)\"\n        },\n        {\n          \"placeName\": \"Seven Magic Mountains\",\n          \"placeDetails\": \"Colorful art installation south of Las Vegas (requires transportation).\",\n          \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Seven_Magic_Mountains_by_Ugo_Rondinone.jpg/1280px-Seven_Magic_Mountains_by_Ugo_Rondinone.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.0382,\n            \"longitude\": -114.9281\n          },\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.2,\n          \"timeTravel\": \"Afternoon (2 PM - 5 PM)\"\n        }\n      ]\n    },\n    \"day3\": {\n      \"plan\": [\n        {\n          \"placeName\": \"Bellagio Conservatory & Botanical Gardens\",\n          \"placeDetails\": \"Free to enter, stunning seasonal displays.\",\n          \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Bellagio_Conservatory_%26_Botanical_Gardens_2019_04_07.jpg/1280px-Bellagio_Conservatory_%26_Botanical_Gardens_2019_04_07.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1113,\n            \"longitude\": -115.1740\n          },\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.8,\n          \"timeTravel\": \"Morning (10 AM - 12 PM)\"\n        },\n        {\n          \"placeName\": \"High Roller Observation Wheel\",\n          \"placeDetails\": \"Optional paid activity for great views (consider cheaper options like the Stratosphere tower).\",\n          \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/High_Roller_Observation_Wheel_at_night.jpg/1280px-High_Roller_Observation_Wheel_at_night.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1002,\n            \"longitude\": -115.1717\n          },\n          \"ticketPricing\": {\n            \"min\": 25,\n            \"max\": 40 //Prices vary\n          },\n          \"rating\": 4.4,\n          \"timeTravel\": \"Afternoon (2 PM - 4 PM)\"\n        }\n\n      ]\n    }\n  }\n}\n```\n\n**Note:**  Hotel prices are estimates and vary greatly depending on the season and availability.  Always check current prices on booking sites like Booking.com, Expedia, etc.  Similarly,  the High Roller Observation Wheel ticket price is an estimate.  Consider exploring free alternatives if the cost is prohibitive for your budget.  Transportation between locations might require using ride-sharing services or the monorail (which can add to the cost).  This itinerary prioritizes free or low-cost activities.  Remember to factor in food costs; packing snacks and eating at less expensive places will help stick to your budget.\n"},
          ],
        },
      ],
    });
  
  
  
  