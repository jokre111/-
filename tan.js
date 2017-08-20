;(function($){
	
	var Tab = function(tab){
		
	var _this = this;
	
	this.tab = tab;
	
	this.config = {
			         "triggerType":"mouseover",
			         "effect":"default",
			         "invoke":"1",
			         "auto":"false"
		}
	
	if(this.getConfig()){
		$.extend(this.config,this.getConfig());
	};
	
	var config = this.config;
	this.tab.bind(config.triggerType,function(){
		_this.invoke($(this));
	})
	};
	
	Tab.prototype = {
		
		invoke:function(a){
			a.fadeOut()
		},
		getConfig:function(){
			var config = this.tab.attr('data-config');
			
			if(config&&config!=""){
				return $.parseJSON(config);
			}else{
				return null
			}
		}
	}
	
	window.Tab = Tab
	
})(jQuery)
