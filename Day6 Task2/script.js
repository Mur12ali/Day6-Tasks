class Circle{
    constructor(...args){
        [this.radius, this.color] = args;
    }
    getRadius(){
        return this.radius;
    }
    getcolor(){
        return this.color; 
    }
    setRadius(value){
        this.radius = value; 
    }
    setColor(value){
        this.color = value; 
    }
    toString(){
        return `radius= ${this.radius}, color= ${this.color}`;
    }
    getArea(){
      return Math.PI * Math.pow(this.radius,2); 
  }

    getCircumference(){
        return Math.PI * 2 * this.radius; 
    }
  }

  let mycircle = new Circle(15,"red");
  console.log(mycircle); 
  mycircle.setRadius(5.5); 
  console.log(mycircle.getRadius()); 
  mycircle.setColor("black"); 
  console.log(mycircle.getcolor()); 
  console.log(mycircle.getArea()); 
  console.log(mycircle.getCircumference()); 
  console.log(mycircle.toString());