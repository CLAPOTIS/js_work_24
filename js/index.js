var content=document.getElementsByClassName("content")[0];
var square=document.getElementsByClassName("square")[0];
var elem=document.getElementsByClassName("elem");
var final_y=0;
var flag=0;
for(var i=0;i<20;i++){
	square.innerHTML+="<li class='square_li'>\
							<span class='elem'></span>\
						</li>";
}
for(var i=0;i<elem.length;i++){
	elem[i].style.top="0px";
}
content.onclick=function(){
	if(!flag){
		final_y=350;
		flag=1;
	}else{
		final_y=0;
		flag=0;
	}
	var j=0;
	while(j<elem.length){			
		j=add(j);			
	}
}
function add(j){
	moveElement(5,j,final_y);
	j++;	
	movement3=setTimeout("add("+j+")",100);
	if(j==elem.length){
		if(parseInt(elem[j-1].style.top)==350)
			final_y=0;			
		clearTimeout(movement3);
	}				
}
function moveElement(moveNum,index,final_y){
	var ypos=parseInt(elem[index].style.top);	
	if(ypos==final_y){		
		return true;
	}
	if(final_y){
		if(ypos<final_y){
			ypos=ypos+moveNum;
		}
	}else{
		if(ypos>final_y){
			ypos=ypos-moveNum;
		}
	}		
	elem[index].style.top=ypos+"px";	
	movement1=setTimeout("moveElement("+moveNum+","+index+","+final_y+")",10);
}