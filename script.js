class FoodFactory {
    constructor() {
      this.preparefood = function(type) {
        let food;
        if (type === 'pizza') food = new Pizza();
        else if (type === 'tacos') food = new Tacos();
        return food;
      };
    }
  }
  
  class Pizza {
    constructor() {
      this._type = 'pizza';
      this.prepare = function() {
        return 'adding cheese, tomato, ham... pizza prepared';
      };
    }
  }
  
  class Tacos {
    constructor() {
      this._type = 'tacos';
      this.prepare = function() {
        return 'adding meat, tortilla, lettuce... tacos prepared';
      };
    }
  }
  
  // creating objects
  const factory = new FoodFactory();
  
  const myPizza = factory.preparefood('pizza');
  const myTacos = factory.preparefood('tacos');
  
  console.log(myPizza.prepare());
  console.log(myTacos.prepare());
