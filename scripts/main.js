$(document).ready(function(){

//

var base = [
  {
    title : 'Tasty pancakes',
    text : 'Tall and fluffy. These pancakes are just right. Topped with strawberries and whipped cream, they are impossible to resist.',
    slideImg : '/bakery-website/images/images/slide1.png',
    slideImgSm : '/bakery-website/images/images/slide1-sm.png',
    slidePrev : '/bakery-website/images/images/slideshow1.png',
    min: 15,
    rating : 4
  },
  {
    title : 'Cobb sandwich',
    text: 'This is a delicious sandwich that went over with a bang at a luncheon. A few "secret" ingredients and this is a perfect combination for a slightly unique sandwich.',
    slideImg : '/bakery-website/images/images/slide2.png',
    slideImgSm : '/bakery-website/images/images/slide2-sm.png',
    slidePrev : '/bakery-website/images/images/slideshow2.png',
    min: 10,
    rating: 5
  },
  {
    title : 'Caesar Salad',
    text: 'A wonderful, rich, anchovy dressing makes this salad a meal. Serve with crusty Italian Bread',
    slideImg : '/bakery-website/images/images/slide3.png',
    slideImgSm : '/bakery-website/images/images/slide3-sm.png',
    slidePrev : '/bakery-website/images/images/slideshow3.png',
    min: 5,
    rating: 1
  },
  {
    title : 'Fruit Pizza',
    text: 'This tasty sugar cookie crust topped with a creamy spread is the base for the sliced fruit toppings of your choice.',
    slideImg : '/bakery-website/images/images/slide4.png',
    slideImgSm : '/bakery-website/images/images/slide4-sm.png',
    slidePrev : '/bakery-website/images/images/slideshow4.png',
    min: 35,
    rating: 2
  },
  {
    title : 'Taste of Paris',
    text: 'Authentic French croissants.',
    slideImg : '/bakery-website/images/images/slide5.png',
    slideImgSm : '/bakery-website/images/images/slide5-sm.png',
    slidePrev : '/bakery-website/images/images/slideshow5.png',
    min: 25,
    rating: 3
  },
  {
    title : 'Empire Cookies',
    text: 'Jam filled shortbread cookies have been a longtime favorite on Scottish and English tea tables.',
    slideImg : '/bakery-website/images/images/slide6.png',
    slideImgSm : '/bakery-website/images/images/slide6-sm.png',
    slidePrev : '/bakery-website/images/images/slideshow6.png',
    min: 30,
    rating: 5
  }
];

var num = 0;

function foodWidget(x){

  if(num > 0 && num < base.length-1){
    if (x){
      num=num+1;
    }else {
      num=num-1;
    }
  }else if(num == 0 && x){
    num++;
  }else if(num == base.length-1 && !(x)){
    num--;
  }
  console.log('num: '+num);
  outputRender();


  function outputRender(){
    var title = base[num].title;
    var text = base[num].text;
    var img = base[num].slideImg;
    var imgSm = base[num].slideImgSm;
    var images = '<source media="screen and (min-width: 992px)" srcset="'+img+'">'+'<source media="screen and (min-width: 320px)" srcset="'+imgSm+'">'+'<img src="'+img+'" alt="">';
    var minutes = base[num].min;
    var slide1,slide2,slide3;
    if(num > 2){
      console.log('3');
      slide1 = base[3].slidePrev;
      slide2 = base[4].slidePrev;
      slide3 = base[5].slidePrev;
    }else{
      slide1 = base[0].slidePrev;
      slide2 = base[1].slidePrev;
      slide3 = base[2].slidePrev;
    }
    var stars = function(){
      var number = base[num].rating;
      var outputStars='';
      for(var i = 0; i<6;i++){
        if(i < number){
          outputStars +='<div class="star"></div>';
        }else if(i > number){
          outputStars +='<div class="empty-star"></div>';
        }else if(i == 6){
          outputStars += '<div class="clearfix"></div>';
        }
      }
      return outputStars;
    }

    $('#food-widget h2').html(title);
    $('#food-widget-text').html(text);
    $('#food-widget-picture').html(images);
    $('#food-widget-minutes').html(minutes);
    $('#slide1').attr('src',slide1);
    $('#slide2').attr('src',slide2);
    $('#slide3').attr('src',slide3);
    $('#star-rating').html(stars);
    $('#gold-star-rating').html(stars);
    $('.preview img').removeClass('current');
    if(num > 2){
      $('#slide'+((num+1)-3)).addClass('current');

    }else{
      $('#slide'+(num+1)).addClass('current');
    }


  }

  outputRender();
  console.log('clicked: '+x);
}

$('.left-arrow').click(function(){
  foodWidget(false);
});

$('.right-arrow').click(function(){
  foodWidget(true);
});
/*$("#food-widget").on("swipeleft",function(){
  foodWidget(false);
});
$("#food-widget").on("swiperight",function(){
  foodWidget(true);
});*/
});
