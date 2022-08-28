const x = require('prompt-sync');
const prompt = x();
var count=0;
const n=prompt("Enter the Range : ")
for(i=1;i<=100;i++)
{
    if(i%2 != 0){
        console.log(i);
        count=count+1;
    }
    if(count==n)
    break;
}