export const guests = [
  {
    id: 1,
    name: "George Bluth",
    plusOne: true,
    rsvp: "confirmed",
    mealSelection: [
      { dish: "filet mignon", selected: true },
      { dish: "tuna", selected: false },
      { dish: "vegetarian", selected: true }
    ]
  },
  {
    id: 2,
    name: "Tobias Fünke",
    plusOne: true,
    rsvp: "confirmed",
    mealSelection: [
      { dish: "filet mignon", selected: false },
      { dish: "tuna", selected: false },
      { dish: "vegetarian", selected: true }
    ]
  },
  {
    id: 3,
    name: "Maeby Fünke",
    plusOne: false,
    rsvp: "unconfirmed",
    mealSelection: [
      { dish: "filet mignon", selected: false },
      { dish: "tuna", selected: false },
      { dish: "vegetarian", selected: false }
    ]
  },
  {
    id: 4,
    name: "Gob Bluth",
    plusOne: false,
    rsvp: "confirmed",
    mealSelection: [
      { dish: "filet mignon", selected: true },
      { dish: "tuna", selected: true },
      { dish: "vegetarian", selected: false }
    ]
  },
  {
    id: 5,
    name: "Lucille Two",
    plusOne: false,
    rsvp: "unconfirmed",
    mealSelection: [
      { dish: "filet mignon", selected: false },
      { dish: "tuna", selected: false },
      { dish: "vegetarian", selected: true }
    ]
  },
];