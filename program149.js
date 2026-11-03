function sumFactors(ino)
{
    let icnt = 0 
    let iSum = 0 

    console.log("Factor of :", ino )

     for (icnt = 1 ; icnt <= ino/2 ; icnt++)
     {
         if((ino % icnt)==0)
        {
             iSum = iSum + icnt 
            
        }
    }
  return iSum 
}

function main()
{
   let iret = 0 
   iret =sumFactors(12)

   console.log("summation of factors :", iret)
}

main()