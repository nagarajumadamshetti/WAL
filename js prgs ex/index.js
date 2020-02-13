function Quadrilateral(l,b)
{
  this.l=l;
  this.b=b;
  // this.h=h;
  //  function area()
  // {

  
    
  // }
}



Quadrilateral.prototype.perimeter=function(l,b)
{
  return 2*(l+b);
}
function rectangle()
{
  // this.l=l;
  // this.b=b;
  Quadrilateral.call(this)
  // this.l=l;
  // this.b=b
}
rectangle.prototype=Object.create(Quadrilateral.prototype);
//rectangle.prototype.constructor=rectangle;
let rec=new Quadrilateral(1,2);
console.log(rec.perimeter(1,2));
let rec2=new rectangle();
console.log(rec2.perimeter(1,2));
//console.log(rectangle.perimeter(2,3));
function square()
{
  //this.l=l;
  Quadrilateral.call(this);
}
square.prototype=Object.create(Quadrilateral.prototype);
square.prototype.constructor=square;
let sq=new square();
console.log(sq.perimeter(5,5));