function Star(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
  
    this.render = function (parent) {
      const star = document.createElement("div");
      star.classList.add("star");
  
      this.element = star;
  
      this.element.style.setProperty("top", `${this.y}px`);
      this.element.style.setProperty("left", `${this.x}px`);
      this.element.style.setProperty("background", this.color);
  
      parent.appendChild(this.element);
  
      return this;
    };
    
  //hide function
    this.hide = function () {
      this.element.style.display = "none"; 
    };
  
    return this;
  }
  
  const space = document.getElementById("space");
  const starsMover = document.getElementById("stars-mover");
  
  const starColors = ["white", "violet", "lightskyblue", "blue"];
  
  function generateStars(quantity = 500) {
    for (let i = 0; i < quantity; i++) {
      const x = Math.floor(Math.random() * window.innerWidth * 2);
      const y =
        Math.floor(Math.random() * window.innerHeight * 3) -
        Math.floor(Math.random() * window.innerHeight * 3);
  
      const randomStarColor =
        starColors[Math.floor(Math.random() * starColors.length)];
  
      const star = new Star(x, y, randomStarColor);
      star.render(starsMover);
    }
  }
  
  generateStars(1500);
  
  window.scrollTo({ left: 0, top: 0 });
  


  function Car(brand, model, year, horsepower) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.horsepower = horsepower;

    
    this.displayInfo = function() {
        console.log(`Car: ${this.brand} ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Horsepower: ${this.horsepower} HP`);
    };

    this.calculateTax = function() {
        // Припустимо, що податок залежить від кількості кінських сил
        const taxRate = 0.05;
        const tax = this.horsepower * taxRate;
        console.log(`Tax for ${this.brand} ${this.model}: $${tax.toFixed(2)}`);
    };
}

const car1 = new Car('Toyota', 'Camry', 2022, 200);
const car2 = new Car('Honda', 'Civic', 2023, 180);

car1.displayInfo();
car1.calculateTax();

console.log('\n'); 

car2.displayInfo();
car2.calculateTax();

