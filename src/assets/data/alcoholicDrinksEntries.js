// Used to assign our alcoholic drinks with all the information that we will need later on
// This includes things like the name of the drink, the picture of the drink, the price, calories, ingredients and allergens
export const entires = [
  {
    "foodType": "Non-Alcoholic-Drinks", //Type of food item this is
    "name": "White Russian", // The name of the drink
    "image": require("@/assets/img/WhiteRussian.jpg"), // The image and its location that is associated with this drink
    "price": "$8.99", // The price of this drink in a string
    "priceFloat": 8.99, // The price of this drink in a float for mathmatical modifications later (like in the checkout)
    "calories": "610", //How many calories the drink has
    "carbs": "610",
    "fat": "610",
    "ingredients": [ // ingridents in said drink
      "Vodka",
      "Fresh Cream",
      "Coffee Liqeur"
    ],
    "allergens": [ // allergens associated with this drink
      "Milk"
    ]
  },
  {
    "name": "Mai Tai",
    "foodType": "Non-Alcoholic-Drinks",
    "image": require("@/assets/img/MaiTai.jpg"),
    "price": "$8.99",
    "priceFloat": 8.99,
    "calories": "610",
    "carbs": "610",
    "fat": "610",
    "ingredients": [
      "White Rum",
      "Lime Juice",
      "Orange Curacao",
      "Orgeat Syrup",
      "Dark rum"
    ],
    "allergens": [
        "No Allergens",
    ]
  },
  {
    "name": "Gin and Tonic",
    "foodType": "Non-Alcoholic-Drinks",
    "image": require("@/assets/img/Gin.jpg"),
    "price": "$8.99",
    "priceFloat": 8.99,
    "calories": "610",
    "carbs": "610",
    "fat": "610",
    "ingredients": [
      "Gin",
      "Tonic Water"
    ],
    "allergens": [
      "No Allergens"
    ]
  },
  {
    "name": "Long Island Iced Tea",
    "foodType": "Non-Alcoholic-Drinks",
    "image": require("@/assets/img/Tea2.jpg"),
    "price": "$8.99",
    "priceFloat": 8.99,
    "calories": "610",
    "carbs": "610",
    "fat": "610",
    "ingredients": [
      "Gomme Syrup",
      "Lemon Juice",
      "Gin",
      "Tequila",
      "Triple Sec",
      "Vodka",
      "White Rum",
      "Splash Of Soda"
    ],
    "allergens": [
      "No Allergens"
    ]
  },
  {
    "name": "Pina Colada",
    "foodType": "Non-Alcoholic-Drinks",
    "image": require("@/assets/img/Pina.jpg"),
    "price": "$8.99",
    "priceFloat": 8.99,
    "calories": "610",
    "carbs": "610",
    "fat": "610",
    "ingredients": [
      "Coconut Cream",
      "White Rum",
      "Pineapple Juice"
    ],
    "allergens": [
      "No Allergens"
    ]
  },
  {
    "name": "Whiskey Coke",
    "foodType": "Non-Alcoholic-Drinks",
    "image": require("@/assets/img/Whiskey Coke.jpg"),
    "price": "$8.99",
    "priceFloat": 8.99,
    "calories": "610",
    "carbs": "610",
    "fat": "610",
    "ingredients": [
      "Whiskey",
      "Coke"
    ],
    "allergens": [
      "No Allergens"
    ]
  },
  {
    "name": "Daiquiri",
    "foodType": "Non-Alcoholic-Drinks",
    "image": require("@/assets/img/Daiquiri.jpg"),
    "price": "$8.99",
    "priceFloat": 8.99,
    "calories": "610",
    "carbs": "610",
    "fat": "610",
    "ingredients": [
      "White Rum",
      "Simple Syrup",
      "Lime Juice"
    ],
    "allergens": [
      "No Allergens"
    ]
  },
  {
    "name": "Bloody Mary",
    "foodType": "Non-Alcoholic-Drinks",
    "image": require("@/assets/img/Bloody.jpg"),
    "price": "$8.99",
    "priceFloat": 8.99,
    "calories": "610",
    "carbs": "610",
    "fat": "610",
    "ingredients": [
      "Vodka",
      "Lemon Juice",
      "Tomato Juice",
      "Pepper",
      "Salt",
      "Tabsaco",
      "Worcestershire Sauce"
    ],
    "allergens": [
      "No Allergens"
    ]
  }
  ]