

let typeN = prompt('Do you love Space? yes or no');
console.log(typeN);
alert('the answer is :'+ typeN);

let stu1= parseInt(prompt('please enter number of student 1:'));
console.log('please enter number of student 1:'+ stu1);
let stu2 = parseInt(prompt('please enter number of student 2:'));
console.log('please enter number of student 2:'+stu2);
alert('the number of student 1 is: ' + stu1+ ' the number of student 2 is: ' + stu2);

let sum = stu1 + stu2;
console.log('sum= ' , sum);
document.writeln('sum= ' , sum);

let NF = prompt('please enter type: (Space of the moon ,Intergalactic space)?');
console.log('(Space of the moon ,Intergalactic space)? '+ NF);


if(NF == 'Space of the moon')
{
    let image1 ='<img src="https://th.bing.com/th/id/OIP.Sd2GZNfifzyv2LvnPSAPTwHaH4?w=177&h=189&c=7&o=5&pid=1.7"/>' ;
    document.writeln('<p>This is Space of the moon</p>' + image1  + "<br>");
}
else if(NF == 'Intergalactic space'){
    let image2 = '<img src="https://th.bing.com/th/id/OIP.6rrlxMr4EMKe0v16gNvjWgHaEo?w=297&h=185&c=7&o=5&pid=1.7" /> ';
    document.writeln("<p>This is Intergalactic space </p>" + image2+ "<br>");
}
console.log('(Space of the moon ,Intergalactic space)? '+ NF);
alert('answer is: ' + NF); 
