console.log("call apply bind")


let name={
    firstname:"Akshay",
    lastname:"Saini",
    printFullName:function(hometown,state){
        console.log(this.firstname+" "+this.lastname + " from "+hometown +","+state)
    }
}
name.printFullName();

let name2={
    firstname:"Sachin",
    lastname:"Tendulkar"
}
//call
name.printFullName.call(name2)
// with para
name.printFullName.call(name2,"Dehardun","Uttarakhand")
//apply
name.printFullName.apply(name2,["Mumbai","Maharshatra"])


// bind

let printMyName=name.printFullName.bind(name2,"Mumbai","Maharashtra")
printMyName()


//correct approach

let printNames=function(hometown,state){
    console.log(this.firstname+" "+this.lastname + " from "+hometown +","+state)
}
printNames()
//call

printNames.call(name,"Dehradhun","Uttarakhand")
printNames.call(name2,"Mumbai","Maharashtra")

//apply
printNames.apply(name,["Dehradhun","Uttarakhand"])
printNames.apply(name2,["Mumbai","Maharashta"])

//bind
let printBindNames=printNames.bind(name,"Dehradhun","UttaraKhand")
printBindNames()

let printBindNamesnew=printNames.bind(name2,"Mumbai","Maharashtra")
printBindNamesnew()


