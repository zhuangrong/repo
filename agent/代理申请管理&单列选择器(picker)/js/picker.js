/*
  * picker
  */
(function($){
	var Picker = function(config){
		var _this = this
		this.config = {
			  cid:"",
			swiperParams: {
				direction: "vertical",
				slidesPerView: 7,
				centeredSlides: true,
				paginationClickable: true,
				spaceBetween: 0,
				onSlideChangeStart: function(){
					return swiper.activeIndex
				}
			},
			onConfirm: function(result){},
			onPrev: function(swp){
				swp.slidePrev()
			},
			onNext: function(swp){
				swp.slideNext()
			},
		 }
		//融合配置项
		$.extend(this.config,config)

		//swiper
		var swiper = new Swiper($(".sm-picker[data-case=" + this.config.cid + "]").find(".swiper-container"), this.config.swiperParams)

		//弹出
		this.pickerPop(this.config.cid)

		//确定
		this.confirm(this.config.cid)

		//取消
		this.cancel(this.config.cid)

		//上一项
		this.sprev(swiper)

		//下一项
		this.snext(swiper)

	}

	Picker.prototype = {
		//弹出
		pickerPop:function(cid){
			var _this = this
			$(":not(div)[data-case=" + cid + "]").on("click", function(e){
				$(".sm-mask[data-case=" + cid + "]").fadeIn(200)
				$(".sm-picker[data-case=" + cid + "]").addClass("toggle")
			})
		},
		//确定
		confirm:function(cid){
			var _this = this
			$(".sm-picker[data-case=" + cid + "]").find(".picker-header a").on("click", function(e){
				var result =  $(".sm-picker[data-case=" + cid + "]").find(".swiper-container .swiper-slide").eq(_this.config.swiperParams.onSlideChangeStart()).text()

				_this.config.onConfirm(result) //传递结果到实例变量中

				$(".sm-mask[data-case=" + cid + "]").fadeOut(200)
				$(".sm-picker[data-case=" + cid + "]").removeClass("toggle")
			})
		},
		//取消
		cancel:function(cid){
			$(document).on("click", ".cancel, .sm-mask", function(e){
				e.stopPropagation()
				$(".sm-mask[data-case=" + cid + "]").fadeOut(200)
				$(".sm-picker[data-case=" + cid + "]").removeClass("toggle")
			})
		},
		//上一项
		sprev:function(swp){
			$(document).on("click", ".icon-prev", function(e){
				swp.slidePrev()
			})
		},
		//下一项
		snext:function(swp){
			$(document).on("click", ".icon-next", function(e){
				swp.slideNext()
			})
		}

	}

	window.Picker = Picker
})(jQuery)
