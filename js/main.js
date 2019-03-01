$(function(){
    //document.getElementsByTagName('h1')[0].style.display = 'none';
    /* Změny zobrazení v sekci ustava */
    $('#ustava h4').click(function(){
        if ($(this).nextUntil('h4').is(':hidden')) {
            $(this).css({'background-color':'#048'});
        } else {
            $(this).css({'background-color':'#444'});
        }
        $(this).nextUntil('h4').toggle(1000);
    });

    /* Vykreslení prezidentů */
    var kviz = $('#kviz div.row');
    var odkazy = $('#odkazy ul');
    prezidenti.forEach(function(obj,idx){
        /*kviz.append('<div class="col-sm-4"><figure><img src="img/'
        +obj.photo+'" alt="'+obj.name+'"><figcaption>'
        +obj.name+'</figcaption></figure></div>');*/
        kviz.append('<div class="col-sm-4"><figure><img src="img/prezident0.jpg" alt="prezident"><figcaption>'
        +obj.name+'</figcaption></figure></div>');
        odkazy.append('<li><a href="'+ obj.link +'">'+ obj.name +'</a></li>');
    });

    /* Po kliknutí na obrázek se náhodně mění fotky prezidentů */
    var foto = $('#kviz img');
    foto.on('click', function(){
        var index = Math.floor(Math.random()*prezidenti.length);
        $(this).attr('src','img/'+prezidenti[index].photo)
               .attr('alt',prezidenti[index].name);
    });

    /* Po kliknutí na tlačítko Ověřit se barevně ohraničí fotky */
    $('#kviz .btn-success').on('click', function(){
        $('#kviz figure').each(function(idx,obj) {
            var alt = $(obj).find('img').attr('alt');
            var figcaption = $(obj).find('figcaption').text();
            if (alt == figcaption) {
                $(obj).find('img').css({'border':'2px solid green'}); 
            } else {
                $(obj).find('img').css({'border':'2px solid red'}); 
            }
        });
    });

    var i = 0;
    window.setInterval(function(){
        $('#sidlo img').attr('src','img/'+sidla[i].photo);
        $('#sidlo figcaption').text(sidla[i].place);
        i<sidla.length-1 ? i++ : i=0; 
    }, 3000);

    function zmenaTextu(i){
        $('#perlicky article h4').text(perlicky[i].title);
        $('#perlicky article p').text(perlicky[i].text);
    }

    var a = 0;
    zmenaTextu(a);
    $('#perlicky button').on('click',function(){
        a < perlicky.length - 1 ? a++ : a = 0;
        zmenaTextu(a);
    })
})