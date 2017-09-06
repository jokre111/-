window.onload = function(){
  var picarr = [' apple',' pineapple',' pineapple',' pineapple',' pineapple',' pineapple',' pineapple',' pineapple',' pineapple',' pineapple']
			function listcircle(){
				for(var j =0;j<list1.length;j++){
					list1[j].style.display = 'none'
				}
			}
			var button1 = document.querySelectorAll('.button1');
			var list1 =document.querySelectorAll('.list1');
			for(var i = 0;i < button1.length;i++){
				button1[i].onmouseover = (function(i){
					return function(){
						for(var j = 0;j<button1.length;j++){
							button1[j].style.backgroundColor = '';
						}
						button1[i].style.backgroundColor = '#2277da';
						document.querySelector('.middlewrap_pic').className = 'middlewrap_pic';
						document.querySelector('.middlewrap_pic').className += picarr[i];
					listcircle();
					
					list1[i].style.display = 'block'
					};
				})(i)
				button1[i].onclick = (function(i){
					return function(){
						document.querySelector('.middlewrap_pic').className = 'middlewrap_pic';
						document.querySelector('.middlewrap_pic').className += picarr[i];
					listcircle();
					
					list1[i].style.display = 'block'
					};
				})(i)
			};
			var page = document.getElementsByClassName('mysteryone');
			for(var i = 0;i<page.length;i++){
            page[i].onmouseenter = function(e){
            	
            	for(var j = 0;j<page.length;j++){
           	page[j].className = 'mysteryone';
           	}
           	this.className += ' mysteryonee'
           }
           }
            
            
            
           
			var btn = document.getElementsByClassName('btn');
			var folder = document.getElementById('folder');
			folder.onmouseover = function(){
				folder.className += ' folder_one'
			}
			folder.onmouseout = function(){
				folder.className = 'folder'
			}
			var cucumber = document.querySelectorAll('.cucumber');
			var i = 1;
			function abc(){
				i++;
			};
			function bca(){
				i--;
			};
			function rightlunbo(){
				btn[i].className += ' selected';
				if(i==0){
					btn[4].className = 'btn';
				};
				if(i>=1){
				btn[i-1].className = 'btn';
				}
			}

			function leftlunbo(){
				if(i==1){
					btn[0].className = 'btn';
					btn[4].className += ' selected';
				}else if(i>1){
				btn[i-2].className += ' selected';
				btn[i-1].className = 'btn';
				}
			};
			function rightBtn(){
				if(i==5){
					cucumber[i-1].style.zIndex = '';
					i=0;
				};
				cucumber[i].style.zIndex = '1';
				if(i>=1){
				cucumber[i-1].style.zIndex = ''
				};
				rightlunbo();
				abc();
				if(i==6){
					i--;
				}
			};
			function leftBtn(){
				leftlunbo();
				if(i==1){
					i=6;
					cucumber[0].style.zIndex = '';
				}
				cucumber[i-2].style.zIndex = '1';
				if(i<=5){
			    cucumber[i-1].style.zIndex = '';
			  };
			    bca();
			}
			var list = document.querySelector('.picture_area');
			var listt = document.getElementsByClassName('cucumber');
			for(var j = 0 ; j < btn.length ; j++){
//				btn[i].index = i;
				btn[j].onclick = function(e){
					
					for(var z = 0 ; z < btn.length ; z++){
					btn[z].setAttribute('class','btn');
					listt[z].setAttribute('style','');
					};
					i = this.getAttribute('index');
					rightBtn();
				}
			}
		
			document.querySelector('.choice2').onclick = function(){
//				clearInterval(timer);
				rightBtn();
			}
			
			document.querySelector('.choice1').onclick = function(){
//				clearInterval(timer);
				leftBtn()
			}
			
			var timer = setInterval(rightBtn,2000);
}
