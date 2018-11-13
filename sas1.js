var ar = ["HTML", 11, "JavaScript", 2, "CSS", 23, 12];

ar.push(-3);
console.log('new ar = ', ar)

ar.unshift(1000);
console.log('new ar = ', ar)

ar.push("Last array element");
console.log('new ar = ', ar)

ar.splice(3, 1);
console.log('new ar = ', ar)

var newAr = ar.filter(function(item){
    return typeof (item) === "number";
});
console.log('new ar = ', newAr)

var mapMeth = newAr.map(function(newOne) {
    return Math.pow(newOne, 2); 
});
console.log('new ar = ',mapMeth)

var last = Math.max(1000000, 121, 4, 529, 144, 9);
console.log('last array = ',last)