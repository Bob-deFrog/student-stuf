array_students=[]; 
var display_array_students=[];
function show_students(){
for(var i=1;i<=3;i++)
{
    array_students.push(document.getElementById("text"+i).value);
    console.log(array_students);
}
for(var j=0;j<array_students.length;j++) {
display_array_students.push("<h4> name-"+array_students[j]+"</h4>")
}
document.getElementById("hi").innerHTML=display_array_students;
document.getElementById("bye").innerHTML=display_array_students.join(" ");
document.getElementById("sort").style.display="inline-block";
} 
function sort_students(){
    var sort_array=display_array_students.sort();
    document.getElementById("bye").innerHTML=sort_array;
}

