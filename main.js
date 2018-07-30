$(clickMe).on('click',function(){
  if(popover.style.display ==='block'){
    $(popover).hide()
  }else{
    $(popover).show()
  }
  setTimeout(function(){
    console.log('添加 one click')
    $(document).one('click',function(){
      console.log('hide')
      $(popover).hide()
    })
  },0)
})

$(wrapper).on('click',function(e){
  e.stopPropagation()
})
$(document).on('click',function(){
  console.log('事件到达了 document')
})

