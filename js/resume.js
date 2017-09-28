$(document).ready(function(){
 	let li1=$('aside .content > ul > li')
 	let li2=$('main > ul >li')
 	let header=$('main > ul li > header.right')
 	let main=$('main > ul li>.main')
 	let li3=$(' main > ul li:nth-child(2) >.main >nav >ul >li')
 	let section=$('main > ul li:nth-child(2) >.main section')
 	let li4=$(' main > ul li:nth-child(3) >.main >nav >ul >li')
 	let section2=$('main > ul li:nth-child(3) >.main section')
	li1.click(function(){
	 		li1.removeClass('selected').eq($(this).index()).addClass('selected')
	 		li2.removeClass('shownow').eq($(this).index()).addClass('shownow')
	 		// header.css({'top':100,
	 		// 	'index':100}).animate({ 'top':0}, 600)
	 		// main.css({'height':0,'top':0}).animate({ 'height':440}, 900 );
	 })
    li3.click(function(){
	 		li3.removeClass('selected').eq($(this).index()).addClass('selected')
	 		section.removeClass('active').eq($(this).index()).addClass('active')
   })
    li4.click(function(){
	 		li4.removeClass('selected').eq($(this).index()).addClass('selected')
	 		section2.removeClass('active').eq($(this).index()).addClass('active')
   })

});