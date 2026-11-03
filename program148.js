//Q.accept number and dispplay its all factors 

function displayFactors(ino)
{
    let icnt = 0 

    console.log("Factor of :", ino )

     for (icnt = 1 ; icnt <= ino/2 ; icnt++)
     {
         if((ino%icnt)==0)
        {
            console.log("its factors are ",icnt)
        }
    }

}

function main()
{
   displayFactors(12)


}

main()