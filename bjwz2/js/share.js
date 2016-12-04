window.onload = function (){
	var oPopup = document.getElementById('Popup');
	
	setTimeout( function(){
		oPopup.style.display = 'inline-block';
		
		setTimeout(function(){
			oPopup.style.display = 'none';
		}, 5000);
		
	},  2000);
};