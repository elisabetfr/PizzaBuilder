
//Ejercicio 1: Add and remove ingredients

$(document).ready(function(){
    //Captura de botones y escucha evento click
    $('.btn-pepperonni').click(ingredients);
    $('.btn-mushrooms').click(ingredients);
    $('.btn-green-peppers').click(ingredients);
    $('.btn-sauce').click(ingredients);
    $('.btn-crust').click(ingredients);

    var total = 13; //Actualizar precio de pizza(strong)
    var price = $('aside.price > strong');
    var listItems = $("aside.price > ul > li");

    function ingredients(){
        var self = $(this);

        $(this).toggleClass('active');

        if($(this).hasClass('btn-pepperonni')){
            $('.pep').toggle('.pep');

            if(self.hasClass("active")){
                total += 1;
            }else {
                total -= 1;
            }

            $(listItems[0]).toggle();


        } else if($(this).hasClass('btn-mushrooms')){
            $('.mushroom').toggle('.mushroom');

            if(self.hasClass("active")) {
                total += 1;
            } else{
                total -=1;
            }

            $(listItems[1]).toggle();

        } else if($(this).hasClass('btn-green-peppers')){
            $('.green-pepper').toggle('.green-pepper');

            if(self.hasClass("active")){
                total += 1;
            } else {
                total -= 1;
            }

            $(listItems[2]).toggle();

        } else if($(this).hasClass('btn-sauce')){
            $('.sauce').toggleClass('sauce-white');

            if(self.hasClass("active")){
                total += 3;
            } else {
                total -= 3;
            }

            $(listItems[3]).toggle();

        } else if($(this).hasClass('btn-crust')){
            $('.crust').toggleClass('crust-gluten-free');

            if(self.hasClass("active")) {
                total += 5;
            } else {
                total -= 5;
            }

            $(listItems[4]).toggle();
        }

        price.text("$"+total) //Actualizar precio de pizza(strong)

    };

    //Ejercicio 2: Sauce-white and crust-gluten-free options
        //Se quite la clase quitando el punto a sauce-white y crust-gluten-free
    $('.crust-gluten-free').toggleClass('crust-gluten-free');
    $('.sauce-white').toggleClass('sauce-white');
    //Ejercicio 3: Cambiar de estado los botones
    $('.btn-sauce').toggleClass('active');
    $('.btn-crust').toggleClass('active');
    $(listItems[3]).toggle();
    $(listItems[4]).toggle();
    price.text("$"+total);


});