export const SelectTravelesList=[
    {
        id:1,
        title:'Just Me',
        desc:'A sole Travels in exploration',
        icon:"✈️",
        people:'1'
    },
    {
        id:2,
        title:'A Couple',
        desc:'Two travels in tandem',
        icon:"🥂",
        people:'2 People'
    },
    {
        id:3,
        title:'Familiy',
        desc:'A group of fun loving adv',
        icon:"🏡",
        people:'3 to 5 people'
    },
    {
        id:4,
        title:'Friends',
        desc:'A bunch of thrilll-seekes',
        icon:"⛵",
        people:'5 to 10 people'
    },

]

export const SelectBudgetOptions=[
    {
        id:1,
        title:"Cheap",
        desc:"Stay conscious of costs",
        icon:"💵",
    },
    {
        id:2,
        title:"Moderate",
        desc:"Keep cost on the average side",
        icon:"💰",
    },
    {
        id:3,
        title:"Luxury",
        desc:"Don't Worry about Costs",
        icon:"💸",
    },
]

export const AI_PROMPT="Generate Travel Plan for Location : {location} for {totalDays} Days for {traveler} with a with a {budget} budget, give me a 5 Hotels options list with HotelName, Hotel address, Price with currency, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, PLace image Url, Geo Coordinates, Ticket Pricing,Time travel of each location for {totalDays} days with each day plan with best time to visit in JSON format."