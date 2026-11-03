class demo 
{
    constructor( a , b)           //parameterised constructor 
    {

        this.no1 =a 
        this.no2 = b

        console.log("inside constructor")
    }

}

function main()
{
   dobj1 = new demo(51,101)      
       
   console.log(dobj1.no1)
   console.log(dobj1.no2)
          
    
}

main()