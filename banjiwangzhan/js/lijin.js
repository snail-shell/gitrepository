
	window.onload=function(){
		var oDiv=document.getElementById('lunbo');
		var oImg=oDiv.getElementsByTagName('img')[0];
		var oSpan=oDiv.getElementsByTagName('span')[0];
		var oP=oDiv.getElementsByTagName('p')[0];
		var oUl=oDiv.getElementsByTagName('ul')[0];
		var aLi=oUl.getElementsByTagName('li');
		var arrUrl=["img/150201.jpg","img/150202.jpg","img/150203.jpg","img/150204.jpg"];
		var arrText=["列队","鼓舞","全体合影","鞠躬"];
		var num=0;
	    

		var timer=null;

		function autoPlay(){
		timer=setInterval(function(){
		num++;
		num%=arrText.length;
		fnTab();
		},3000);
		}

		setTimeout(autoPlay,3000);
		oDiv.onmouseover=function(){
			clearTimeout(timer);
		};
		oDiv.onmouseout=autoPlay;

		for(var i=0;i<arrUrl.length;i++){
		oUl.innerHTML+='<li></li>';
		}
		
		function fnTab(){
		oImg.src=arrUrl[num];
		oSpan.innerHTML=1+num+'/'+arrUrl.length;
		oP.innerHTML=arrText[num];
		for(var i=0;i<aLi.length;i++){
		   aLi[i].className='';
		}
		aLi[num].className='active';
		}
		fnTab();

		for( var i=0; i<aLi.length;i++){
			aLi[i].index=i;
			aLi[i].onclick=function(){
			num=this.index;
			fnTab();
			};
		}

			var oBattenright = document.getElementById('battenright');
	setInterval( fnTime, 1000 );
	


	
};


