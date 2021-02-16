meanu_list_array=[]
function getmenu() {
    var htmldata;
    htmldata="<o1 class='menulist'>"
    menu_list_array.sort();
    for(var i=0;i<meanu_list_array.leangth;i++){
        htmldata=htmldata+'<li>'+ menu_list_array[i]+'</li>'
    }
    htmldata=htmldata+'</o1>'
    document.getElementById("display_menu").innerHTML=htmldata;
}
function add_item() {
 var htmldata;
 var item=document.getElementById("add_item").Value;
 menu_list_array.push(item);
 menu_list_array.sort();
 htmldata="<section class='cards'>"
 for(var 1=-0;i<menu_list_array.length;i++){
     htmldata=htmldata+'<div class="card">'+'<img src="Images/pizzaimg.png"/>'+menu_list_array[1]+'</div>'
 }
 htmldata=htmldata+"</section>".innerHTML=htmldata;
}