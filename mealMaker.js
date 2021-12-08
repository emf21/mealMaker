// This project creates a programme for random three course meal

const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get desserts() {
    return this._courses.desserts;
  },

  set appetizers(appetise) {
    return (this._courses.appetizers = appetise);
  },
  set mains(main) {
    return (this._courses.mains = main);
  },
  set desserts(dessert) {
    return (this._courses.desserts = dessert);
  },

  get courses() {
    return this.appetizers, this.mains, this.desserts;
  },

  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    this._courses[courseName].push(dish);
  },

  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },

  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse("appetizers");
    const main = this.getRandomDishFromCourse("mains");
    const dessert = this.getRandomDishFromCourse("desserts");
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. With a total price of $${totalPrice}.`;
  },
};

menu.addDishToCourse("appetizers", "Baileys", 5.45);
menu.addDishToCourse("appetizers", "Lemonade", 3.0);
menu.addDishToCourse("appetizers", "Fanta", 2.25);

menu.addDishToCourse("mains", "Banku", 10.0);
menu.addDishToCourse("mains", "Tillapia", 12.0);
menu.addDishToCourse("mains", "Jollof", 15.0);

menu.addDishToCourse("desserts", "Sobolo", 4.1);
menu.addDishToCourse("desserts", "Asana", 2.15);
menu.addDishToCourse("desserts", "Fruit Salad", 8.0);

const meal = menu.generateRandomMeal();
console.log(meal);
