
var course =[
    {
        id : 1,
        name: 'js',
        coin: 3
    },
    {
        id : 12,
        name: 'C#',
        coin: 3
    },
    {
        id : 13,
        name: 'C+',
        coin: 3
    },
    {
        id : 4,
        name: 'Java',
        coin: 3
    }
    
]
function courseFt(item){
    return{
        id: item.id,
        name: `khoa hoc: ${item.name}`,
        coin: item.coin,
        coinText: 'gia: '+ item.coin
    }

};
var total=0;
var i=0;
for( var item of course)
{
 total += item.coin;
}
function SumOfCoin(accumulator, currentValue, currentIndex){
  i++;
    var sum= accumulator + currentValue.coin
    console.table({
        'Luot chay': i,
        'bien tich tru' : accumulator,
        'coin': currentValue.coin,
        'sum': sum
    })
    return sum;

}
var sumCoin = course.reduce(SumOfCoin, 0)

var newcouse = course.map(courseFt);
 var sumCoin2 = course.reduce(function(Item, currentItem){
     return Item + currentItem.coin;
     
 },0)
 console.log(sumCoin2)
 var mang=[1,'a',2,3,3]
 var newmang = mang.filter(function(item){
    return typeof item === 'string'

 })
 console.log(newmang)
 var depltArray = [1,1,3,5,[5,6],7]
 var platArray = depltArray.reduce(function(output, valuea){
     return output.concat(valuea)
 },[])
 console.log(platArray)
 const numbes = [1,2,3,4,5,6,7] 
var sum =0;
for(var i=0; i< numbes.length;i++ ){
 sum += numbes[i]
}
var check = numbes.filter(function(item){
    if(item>3){
        return item
    }
})
var kiemtra = numbes.includes(6)
var ramdom = Math.floor(Math.random()*10)
var bonus=[
    '30 coin',
    '0 coin',
    '0 coin',
    '0 coin',
    '0 coin',
    '0 coin',
    '0 coin',
    '0 coin',
    '0 coin',
    '0 coin',

]
function myfuntoin(param){
    param('hoc lap trinh')
}
function myfuntn(value){
    console.log('ban nen', value)
}
var array=[
    'C#',
    'HTML',
    'C++'
]
var Courses = array.map(function(course){
    return `<h2>${course}</h2>`;
})
//HTML DOM
var headd= document.getElementById("language") 
document.getElementById("demo") = "Hello World!";
console.log(array[0])