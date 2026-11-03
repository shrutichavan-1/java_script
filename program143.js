function CheckEven(ino) // not need specify let , var , constat 
{

    if(ino % 2 == 0)
    {
        console.log("it is even number")
    }
    else
    {
        console.log("it is odd number ")
    }
}


function main()
{
    let iValue = 10    // block scope 
    CheckEven(iValue)
}

main()