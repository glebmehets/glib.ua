let number = 0

$('.banan').click(function () {
    number++
    $('.kliker').text(number)
    if(number==10){
    }
    let newEl = $('<h1 class="h1">+1</h1>')

    $('body').append(newEl)


    setTimeout( function () {
        newEl.remove()

    }, 1000)
    
 

    
})


$('.settings').click(function(){
    $('.settings-block').css('display', 'block')
}

)

$('.close').click(function(){
    $('.settings-block').css('display', 'none')
}

)

$('.autokliker').click(function(){
    $('.autokliker').css('background', 'yellow')
    setInterval(function () {
        $('.banan').click()
    }, 100)
}

)










