#### What are some differences between interfaces and types in TypeScript?

টাইপস্ক্রিপ্টে কাস্টম ডাটা স্ট্রেচার দেখানোর জন্য Interfaces  এবং type ব্যবহার করা হয়। তাদের মধ্যে ব্যবহার এর কিছু পার্থক্য রয়েছে। Interfaces এবং type এর পার্থক্য গুলো দেওয়া হল:
Interfaces:
1. Declaration Merging:
টাইপস্ক্রিপ্টে Interfaces support করে  এর মানে হল। একই নামের যদি ২টি  Interfaces লিখতে পারা যায় এবং তা একটি হিসেবে গণ্য হয়।
## Example
// Interface Declaration Merging
 interface Detail{
    firstName:string;
 }
 interface Detail{
    latsName:string
 }
 const details:Detail ={firstName:'Banala',latsName:'Khan'};
//  {firstName:'Banala',latsName:'Khan'}

2. Extending Interfaces:
চাইলে extend keyword ব্যবহার করে অন্য interface বাড়ানো যায়।
 ## Example
 interface Fruit {
    Name:string;
}
interface FruitDetail extends Fruit{
    isDeshi: boolean;
}
const deshiFruits:FruitDetail={Name:'Champa Kola',isDeshi:true};
// { Name: 'Champa Kola', isDeshi: true }

Types:
1.Union and Intersction:
Typescript এর Union এবং Intersction দিয়ে একাধিক type কে একত্রিত করতে পারে।
## Example
// Union Types
type Person = string | number
// Intersction Types
type Details = { name: string } & { age: number };

2. Types সরাসরি primitive  types দেখাতে পারে।
## Example
type Age = number;
3. Mapped types.
Mapped types ব্যবহার করে types এর property পরিবর্তন করা যায়.
type CopyName<T> ={
    [K in keyof T]:T[K];
}
type Name = {
    fName: string,
    lName:string,
}


const PersonName:CopyName<Name> = {fName:'tanim',lName:'Islam'}

4.Tuple Types.
Tuple হলো একটি array এর মতো কিন্তু fixed.
এবং  index-এর type আলাদা হতে পারে।
## Example
type Point = [number, number];


#### What is the use of the keyof keyword in TypeScript? Provide an example.
 
TypeScript এর keyof দিয় যে কোনো object type-এর সব key এর property দেখা যদয়।


# Example
type Person ={
    name:string;
    age:number;
    city:string;
};
type PersonKeys = keyof Person;
const persons:Person = {name:'Ronaldo',age:40,city:'Riyadh'};
console.log(persons['age'])