/*
  * picker
  */
(function($){
	var Picker = function(config){
		var _this = this
		this.config = {
			  cid:"",
			  onConfirm: function(result){}
		  }
		$.extend(this.config,config)
		//弹出
		this.pickerPop(this.config.cid)
		//确定
		this.confirm(this.config.cid)
		//取消
		this.cancel(this.config.cid)
	}

	Picker.prototype = {
		//弹出
		pickerPop:function(cid){
			var _this = this
			$(".trigger[data-case=" + cid + "]").on("click", function(e){
				$(".picker[data-case=" + cid + "]").show()
			})
		},
		//确定
		confirm:function(cid){
			var _this = this
			$(".picker[data-case=" + cid + "]").find(".pick-list a").each(function(e){
				$(this).on("click", function(){
					var result =  $(this).text()
					_this.config.onConfirm(result) //传递结果到实例变量中
					$(".picker[data-case=" + cid + "]").hide()
				})
			})
		},
		//取消
		cancel:function(cid){
			var _this = this
			$(document).on("click", ".cancel", function(e){
				e.stopPropagation()
				$(".picker[data-case=" + cid + "]").hide()
			})
		}
	}

	window.Picker = Picker
})(jQuery)
