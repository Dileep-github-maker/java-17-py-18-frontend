
function myFunction(a){
    if(a<=1) return false;
    for(let i=2;i<=Math.sqrt(a);i++)
    {
        if(a%i==0) return false;
    }
    return true;
}
for(i=1;i<=10;i++)
{
    if(myFunction(i)==true)
        console.log(i);
}