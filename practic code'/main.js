



function checkForm (el) {
    
   

    var a = el.A.value;
    document.write( '  a= ',+a)
     
    var b = el.B.value;
    document.write('  b= ',+b)

    var c = el.C.value;
    document.write('  c= ',+c)

   
    var D = (b * b) - (4 * a * c)
    var X1 = (-b - Math.sqrt(D)) / (2 * a);
    var X2 = (-b + Math.sqrt(D)) / (2 * a);

    
    
    if (D === 0) {
    var  X1 = (-b ) /2*a
    document.write('   D=0,    X1=  ',X1)
    
    }
    
    
    else if (D < 0) {
    document.write(' нет корней')
    }
    else if ( D > 0) {
    document.write(' D = ', D);
    document.write('   X1= ', X1,',');
    document.write('   X2= ', X2);
    
    }

   
   

    return false;


}


setTimeout = ((a,b,c) => {
   f = a.el.A.value; //a
   h = b.el.B.value; //b
   t = c.el.C.value; //c

    let hab = document.getElementsByTagName('rehJS').value;
    rehJS.innerHTML = h*h;
    console.log(hab)
    
  

},2000)

