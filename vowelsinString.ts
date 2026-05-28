function VowelsinString(str:string)
{
let count:number=0
const vowels="aeiouAEIOU"
for (let char of str) {
if(vowels.includes(char))
{
      count++;
}
}
 return count;

}
VowelsinString("Mekala")