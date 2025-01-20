var FX=(function(FX,$){FX.ScrollReveal={init:function(){var config={mobile:!1,delay:'once'}
window.sr=new scrollReveal(config)}};FX.Preloader={init:function(){$(window).load(function(){$('.page-preloader').fadeOut('slow',function(){$(this).remove()})})}};FX.ImagePopUp={init:function(){$('.js-image-popup').magnificPopup({type:'image'});$('.js-virtual-showroom').magnificPopup({type:'iframe',mainClass:'fx-virtual-showroom'})}};FX.VideoPopUp={init:function(){$('.js-video-popup').magnificPopup({type:'iframe',iframe:{markup:'<div class="mfp-iframe-scaler">'+'<div class="mfp-close"></div>'+'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+'</div>',patterns:{youtube:{index:'youtube.com/',id:'v=',src:'//www.youtube.com/embed/%id%?autoplay=1'},vimeo:{index:'vimeo.com/',id:'/',src:'//player.vimeo.com/video/%id%?autoplay=1'},gmaps:{index:'//maps.google.',src:'%id%&output=embed'}},srcAction:'iframe_src',}})}};FX.Promo={init:function(){if(!$('.js-promo').length)
return;$(window).on('scroll',this.windowScrolled);$('body').on('click','.js-promo-close',this.close)},windowScrolled:function(event){if(Cookies.get('PromoSubscribed'))
return;if(!Cookies.get('PromoClosed')){$('.js-promo').removeClass('hidden')}},close:function(event){event.preventDefault();Cookies.set('PromoClosed','1',{expires:7});$('.js-promo').addClass('hidden')},subscribed:function(){Cookies.set('PromoSubscribed','1',{expires:365});$('.js-promo-content').html('<p>Your Discount-code</p><h3 class="discount-code">THOMPSONTEST</h3><a href="#" class="email-promo-popup__close-link js-promo-close">Close</a>')}};FX.HomeSlideshow={init:function(){$('.js-masthead-homepage-slider').slick({slidesToShow:1,slidesToScroll:1,dots:!0,arrows:!1,autoplay:!0,fade:!0,autoplaySpeed:5000})}};$(window).load(function(){var slideHeight=$('.js-masthead-homepage-slider .slick-track').height();$('.js-masthead-homepage-slider .slick-slide').css('height',slideHeight+'px')});$(window).load(function(){var slideHeight=$('.rental-slideshow .royalSlider .slick-track').height();$('.rental-slideshow .royalSlider .slick-slide').css('height',slideHeight+'px')});FX.PageSlideshow={init:function(){$('.sc-slider').slick({autoplay:!0,autoplaySpeed:10000,speed:1500,pauseOnHover:!1,arrows:!0,variableWidth:!0,responsive:[{breakpoint:1200,settings:{arrows:!1}}]});$(".rental-slideshow .royalSlider").slick({autoplay:!0,autoplaySpeed:10000,speed:1500,pauseOnHover:!1,arrows:!1,variableWidth:!1,responsive:[{breakpoint:1200,settings:{arrows:!0}}]})}};FX.HomepageDeals={$slider:null,init(){this.$slider=$('.js-home-deals-slider')
if(this.$slider.length){this.applySlick()}},applySlick(){this.$slider.slick({dots:!1,arrows:!0,fade:!0,autoplay:!1,autoplaySpeed:5000,adaptiveHeight:!0})}};FX.HomepageImageButtons={$slider:null,init(){this.$slider=$('.js-image-button')
if(this.$slider.length){this.applySlick()}},applySlick(){this.$slider.slick({dots:!0,arrows:!1,autoplay:!1,autoplaySpeed:5000,centerMode:!0,centerPadding:'45px',mobileFirst:!0,responsive:[{breakpoint:767,settings:'unslick'}]})}};FX.HomepageTestimonials={$slider:null,init(){this.$slider=$('.home-testimonials-slider-homepage');if(this.$slider.length){this.applySlick()}},applySlick(){this.$slider.slick({infinite:!0,speed:300,dots:!1,arrows:!0,slidesToShow:2,slidesToScroll:1,variableWidth:!0,responsive:[{breakpoint:1200,settings:{slidesToShow:2,slidesToScroll:1,variableWidth:!1,arrows:!0,dots:!1,}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1,variableWidth:!1,arrows:!0,dots:!1,}},]})}}
FX.FeaturedEquipment={init:function(){if(!$('.js-featured-equipment').length)
return;$('.js-featured-equipment').slick({infinite:!0,slidesToShow:3,slidesToScroll:1,respondTo:'slider',arrows:!0,responsive:[{breakpoint:1025,settings:{slidesToShow:2}},{breakpoint:600,settings:{slidesToShow:1}}]})}}
FX.MobileNavigation={init:function(){$(".js-mobile-trigger-button--menu").click(function(){$(".js-mobile-trigger-button--menu").toggleClass("js-active");$(".nav--primary").toggleClass("js-visible")});$('.nav--primary li.menu-item-has-children > a').after('<span class="sub-menu-toggle icon-chevron-down hidden-md hidden-lg"></span>');$('.js-mobile-navigation-trigger').on('click',this.toggleMenu);$('.sub-menu-toggle').on('click',this.toggleSubMenu)},toggleMenu:function(){$('.nav--primary__wrapper').toggleClass('active');$('.js-mobile-navigation-trigger').toggleClass('toggled')},toggleSubMenu:function(){var $this=$(this),$parent=$this.parent("li"),$wrap=$parent.children(".sub-menu");$wrap.toggleClass("toggled");$parent.toggleClass("toggled");$this.toggleClass("toggled")}};FX.MobileSearch={init:function(){$(".js-mobile-trigger-button--search").click(function(){$(".js-mobile-trigger-button--search").toggleClass("js-active");$(".mobile-search-form").toggleClass("js-visible");$(".page-header").toggleClass("js-move-down")})}};FX.Forms={init:function(){$('select').selectric();$('#add_attachment').on('change','input[type="checkbox"]',function(event){$('.js-add-attachment').toggleClass('hidden')})}};FX.UsedFilterSearch={init:function(){$(".js-equipment-search-title").on('click',function(){$(".js-search-form").toggleClass("active")})}};FX.ExternalLinks={init:function(){$('a[href$=".pdf"]').attr('target','_blank')}}
FX.StickyPageHeader={init:function(){$(window).scroll(function(){var $body=$(document.body);var value=$(this).scrollTop();if(value>[1]){$body.addClass('page-header-is-sticky');$('.sticky-page-header').addClass('active')}else{$body.removeClass('page-header-is-sticky');$('.sticky-page-header').removeClass('active')}})}}
FX.Social={init:function(){$(".js-social-share").on("click",this.open)},open:function(event){event.preventDefault();FX.Social.windowPopup($(this).attr("href"),500,300)},windowPopup:function(url,width,height){var left=(screen.width/2)-(width/2),top=(screen.height/2)-(height/2);window.open(url,"","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width="+width+",height="+height+",top="+top+",left="+left)}}
FX.ImAHuman={num:"0xFF9481",forms:void 0,init:function(){this.setup()},setup:function(){this.forms=document.getElementsByTagName("form");this.bind()},bind:function(){for(var i=0;this.forms.length>i;i++){$(this.forms[i]).on("focus click",this.markAsHuman)}},markAsHuman:function(){$(this).find('.imahuman, [name="imahuman"]').attr("value",parseInt(FX.ImAHuman.num,16))}}
FX.Affix={windowHeight:0,init:function(){this.windowHeight=$(window).height();this.bind()},bind:function(e){$(window).on('scroll',this.scroll);$(window).on('resize',this.updateWindowHeight)},scroll:function(e){var scrolltop=$(this).scrollTop(),fixPoint=FX.Affix.windowHeight-$('#masthead').height();if(scrolltop>=fixPoint){$('body').addClass('affix-head')}else{$('body').removeClass('affix-head')}},updateWindowHeight:function(e){FX.Affix.windowHeight=$(window).height()}};FX.Parallax={init:function(){this.bind()},bind:function(){$(window).scroll(this.scroll)},scroll:function(e){$('[parallax]').each(function(){var $this=$(this),$speed=$this.data('speed')||6,$window=$(window);var yPos=-($window.scrollTop()/$speed);var coords='center '+yPos+'px';$this.css({backgroundPosition:coords})})}};FX.SmoothAnchors={init:function(){this.bind()},bind:function(){$('a[href^=#]').on('click',this.scrollToSmooth)},scrollToSmooth:function(event){if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')&&location.hostname==this.hostname){var $target=$(this.hash);$target=$target.length&&$target||$('[name='+this.hash.slice(1)+']');if($target.length){var targetOffset=$target.offset().top;$('html,body').animate({scrollTop:targetOffset},600);return!1}}}}
FX.Tabs={init:function(){$('.js-tabs').on('click touchstart','a',this.switchTab)},switchTab:function(event){event.preventDefault();var $this=$(this),tab=$($this.attr('href'));$this.parent().addClass('active').siblings().removeClass('active');tab.addClass('active').siblings().removeClass('active')}}
FX.MediaViewer={init:function(){this.bind()},bind:function(){$('.js-media-tabs').find('a').on('click touchstart',this.setMediaView);$('.js-media-thumbnail').slick({slidesToShow:3,slidesToScroll:1,variableWidth:!0,arrows:!0,draggable:!1,focusOnSelect:!0,infinite:!0,mobileFirst:!0,responsive:[{breakpoint:600,settings:{slidesToShow:4}},{breakpoint:768,settings:{slidesToShow:6}},{breakpoint:1024,settings:{slidesToShow:8}}]})
$('.js-media-thumbnail--used-rental').slick({slidesToShow:3,slidesToScroll:1,variableWidth:!0,arrows:!0,draggable:!1,focusOnSelect:!0,infinite:!0,mobileFirst:!0,responsive:[{breakpoint:600,settings:{slidesToShow:4}},{breakpoint:1024,settings:{slidesToShow:5}}]})
$('.js-media-thumbnail, .js-media-thumbnail--used-rental').on('focus','li',this.switchMediaVisible)},switchMediaVisible:function(event){event.preventDefault();var $clicked=$(this).children('img').first();switch($clicked.data('type')){case "image":FX.MediaViewer.switchToImage($clicked);break;case "video":FX.MediaViewer.switchToVideo($clicked);break;case "vpt":FX.MediaViewer.switchToVPT($clicked);break}},switchToImage:function($image){var $view=$('#image-viewer'),$largeImg=$view.children('img').first(),preview=$image.data('preview'),full=$image.data('full');console.log($view,$largeImg);$largeImg.data({'full':full,'preview':preview});$largeImg.attr('src',$image.data('full'));$view.attr('href',$image.data('full'))},switchToVideo:function($video){$('#'+$video.data('target')).show().siblings().hide()},switchToVPT:function($vpt){$('#'+$vpt.data('target')).show().siblings().hide()},setMediaView:function(event){event.preventDefault();var $clicked=$(this),view='';switch($clicked.data('type')){case "image":view=$('#image-viewer');break;case "video":view=$('#video-viewer');break;case "vpt":view=$('#vpt-viewer');break;case "virtual_showroom_view":view=$("#virtual-showroom-viewer");break}
if(view!==''&&!view.is(':visible')){view.show().siblings().hide()}}};FX.Chat={init:function(){$('.js-chat-hide').on('click',$.proxy(this.hide,this));if('hidden'==Cookies.set('chat')){this.hide()}},onClicked:function(event){this.hide()},hide:function(event){$('.js-chat').addClass('hidden')}};FX.CategorySelect={init:function(){if($(window).width()>1024){return}else{$('.js-category-button').click(function(){if($(this).hasClass('clicked')){$(this).removeClass('clicked');return}else{$('.js-category-button').removeClass('clicked');$(this).addClass('clicked')}})}}};FX.CustomerEffects={columnWidth:$('.customer-container').outerWidth(),init:function(){this.applyMasonry();this.bindPopup();this.bindSelect();$(window).on('resize',this.applyMasonry)},applyMasonry:function(){var self=this,$customers=$('.customers');if(window.innerWidth>769){$customers.masonry({columnWidth:self.columnWidth,itemSelector:'.customer-container',gutter:30})}else{if(typeof($customers.data('masonry'))!=='undefined'){$customers.masonry('destroy')}}},bindPopup:function(){$('.customer__media-container--video').magnificPopup({type:'iframe'})},bindSelect:function(){var self=this;$('.customer-filter__select').on('selectric-change',function(event,element,selectric){var selected=$('.customer-filter__select').val();if(selected!==''){$('.customer-container').each(function(){if($(this).attr('data-customer-category')===selected){$(this).show()}else{$(this).hide()}})}else{$('.customer-container').show()}
self.applyMasonry()})}};FX.EqualHeights={init(){$(document).on('ready',this.applySameHeights);$(window).on('load resize',this.applySameHeights)},applySameHeights(){const $root=$('.js-equal-heights');const $items=$root.find('.js-equal-heights-item');const heights=$items.map((i,el)=>parseInt($(el).height()));const maxHeights=Math.max(...heights);$items.height(maxHeights)}}
$(window).resize(function(){if($(window).width()>1024){return}else{$('.js-category-button').click(function(){if($(this).hasClass('clicked')){$(this).removeClass('clicked');return}else{$('.js-category-button').removeClass('clicked');$(this).addClass('clicked')}})}});$(function(){FX.Preloader.init();FX.HomeSlideshow.init();FX.PageSlideshow.init();FX.HomepageDeals.init();FX.HomepageImageButtons.init();FX.HomepageTestimonials.init();FX.Chat.init();FX.ScrollReveal.init();FX.FeaturedEquipment.init();FX.ExternalLinks.init();FX.Promo.init();FX.MobileSearch.init();FX.MobileNavigation.init();FX.Social.init();FX.Forms.init();FX.ImAHuman.init();FX.Tabs.init();FX.MediaViewer.init();FX.VideoPopUp.init();FX.ImagePopUp.init();FX.UsedFilterSearch.init();FX.StickyPageHeader.init();FX.CategorySelect.init();FX.CustomerEffects.init();FX.EqualHeights.init();if($('.tab-link').length){$('.tab-link').on('click',function(e){e.preventDefault();var shouldOpen=$(this).find('a').attr('href');$(this).addClass('active');$(this).siblings().removeClass('active');console.log(shouldOpen);$.each($('.tabs__tab'),function(){console.log($(this).attr('id'));if('#'+$(this).attr('id')==shouldOpen){$(this).addClass('active')}else{$(this).removeClass('active')}})})}});return FX}(FX||{},jQuery))