var CSE=(function(CSE,$){CSE.form='';CSE.loaded=!1;CSE.jqXHR=!1;CSE.current=[];CSE.previous=[];CSE.fetch=function(){if(!$('#masthead .front').length){console.log('here');$('html').addClass('loading');$('.page-content').append('<div class="loading-icon"></div>')}
if(CSE.jqXHR&&CSE.jqXHR.readyState!==4){CSE.jqXHR.abort()}
CSE.previous=CSE.current;CSE.current=CSE.form.serializeArray();var postData={'action':'equipment_search_refresh','data':{'current':JSON.stringify(CSE.current),'previous':JSON.stringify(CSE.previous),}};if(CSE.form.find('#source').val()==='used'){var order=$('#product-filter__dropdown').val()||'';order=order.split(':');var sort={};sort.field=order[0]||'price';sort.order=order[1]||'DESC';postData.sort=sort}
CSE.jqXHR=$.post(wp.ajaxurl,postData,function(response){var json=$.parseJSON(response);CSE.render(json)})}
CSE.parse_fields=function(json){if(CSE.jqXHR&&CSE.jqXHR.readyState!==4){CSE.jqXHR.abort()}
CSE.previous=CSE.current;CSE.current=CSE.form.serializeArray();$.post(wp.ajaxurl,{'action':'equipment_search_fields','changed':CSE.changed,'data':{'current':JSON.stringify(CSE.current),'previous':JSON.stringify(CSE.previous),}},function(response){var json=$.parseJSON(response);if(new URL(window.location.href).searchParams.get('dev'))
console.log(json);CSE.update_field_options(json)})}
CSE.update_field_options=function(json){console.log('update_field_options');console.debug(json);$.each(json.values,function(name,values){var select=CSE.form.find('[name="'+name+'"]');if(select.is('select')){select.html(values).selectric('refresh')}})}
CSE.inject=function(){if(!$('#search-inject').length)
return;CSE.form=$('.js-search-form');CSE.fieldStates();CSE.parse_fields();CSE.fetch()}
CSE.render=function(json){$(window).trigger('CSE::beforeRender');$('.page-content').html(json.template);$(window).trigger('CSE::afterRender');$('html').removeClass('loading');$('html,body').animate({scrollTop:$('.page-content').offset().top-200},1000);$('#product-filter__dropdown').selectric()}
CSE.fieldStates=function(){var fields=CSE.form.find('[data-enabled-field]');fields.each(function(){var f=$(this),src=CSE.form.find('[name="'+f.data('enabled-field')+'"]').val(),val=f.data('enabled-value'),Selectric=f.data('selectric');if(src==val){f.removeAttr('disabled')}else{f.attr('disabled','disabled')}
if(Selectric){if(typeof Selectric.refresh!=="undefined"){Selectric.refresh()}}})}
$(function(){CSE.form=$('.js-search-form').first();CSE.parse_fields();$('.js-search-form').on('change','select, input',function(event){CSE.form=$(this).closest('.js-search-form');CSE.changed=$(this).attr('name');CSE.parse_fields();if(new URL(window.location.href).searchParams.get('dev'))
return});$('.js-search-form').on('submit',function(event){if(window.location.pathname==='/equipment/search'||window.location.pathname.substring(1,15)==='used-equipment'){event.preventDefault();CSE.fetch()}});$('.js-slider').ionRangeSlider({onFinish:function(data){data.input.next().val(data.from+'-'+data.to);CSE.changed=data.input.attr('name');CSE.parse_fields();CSE.form.submit()},});$('body').on('change','#product-filter__dropdown',function(){CSE.form.submit()});CSE.inject()});return CSE})(CSE||{},jQuery)