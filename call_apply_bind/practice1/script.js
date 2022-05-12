console.log("call apply bind")


let name1={
    firstname:"Akshay",
    lastname:"Saini",
    
}

let name2={
    firstname:"Sachin",
    lastname:"Tendulkar"
}

//correct approach
let fullNames=function(town,home){
    console.log(this.firstname+ " "+ this.lastname+" "+town +" "+home)
}
fullNames()
//call

fullNames.call(name1,"X","Y")
fullNames.call(name2,"A","B")

//apply
fullNames.apply(name1,["A","C"])
fullNames.apply(name2,["D","E"])

//bind
let newNames=fullNames.bind(name1,"G","T")
console.log(newNames)

newNames();
newNames();

let newNames2=fullNames.bind(name2,"P","Q")
console.log(newNames2)
newNames2();