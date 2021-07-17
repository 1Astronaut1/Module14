let Obj={
    name:'Alex',
    age:23,
    location:'UK'
};
let NewObj=Object.create(Obj);
NewObj.job='developer';
NewObj.gender='male'
for(key in NewObj){
    if(NewObj.hasOwnProperty(key)){
        console.log(key);
    }
}