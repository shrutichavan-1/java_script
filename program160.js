class demo 
{
    constructor( a , b)           //parameterised constructor 
    {

        this.no1 =a 
        this.no2 = b

        console.log("inside constructor")
    }

    display()
    {
       console.log("inside display")
    }

}

function main()
{
   dobj = new demo(51,101)      
       
   console.log(dobj.no1)
   console.log(dobj.no2)

   dobj.display()
          
    
}

main()