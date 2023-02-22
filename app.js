document.querySelector('.openoption').addEventListener('click', function(){
    document.querySelector('.options').classList.remove('negative');
    document.querySelector('.openoption').classList.add('negative');
    document.querySelector('.closeoption').classList.remove('negative');
})
document.querySelector('.closeoption').addEventListener('click', function(){
    document.querySelector('.options').classList.add('negative');
    document.querySelector('.closeoption').classList.add('negative');
    document.querySelector('.openoption').classList.remove('negative');
})
document.querySelector(".opt").addEventListener('click', function(){
    document.querySelector('.addme').classList.add('selected');
})
document.querySelector('.button-more-left').addEventListener('click',function(){
    document.querySelector('.more-table1').classList.remove('negative');
    document.querySelector('.more-table2').classList.remove('negative');
    document.querySelector('.more-table3').classList.remove('negative');
    document.querySelector('.more-table4').classList.remove('negative');
    document.querySelector('.button-more-left').classList.add('negative');
    document.querySelector('.button-more-right').classList.add('negative');
})
document.querySelector('.button-more-right').addEventListener('click',function(){
    document.querySelector('.more-table1').classList.remove('negative');
    document.querySelector('.more-table2').classList.remove('negative');
    document.querySelector('.more-table3').classList.remove('negative');
    document.querySelector('.more-table4').classList.remove('negative');
    document.querySelector('.button-more-left').classList.add('negative');
    document.querySelector('.button-more-right').classList.add('negative');
})

document.querySelector('.item1').addEventListener('click',function(){
    document.querySelector('.item1').classList.add('deleted');
})
document.querySelector('.item2').addEventListener('click',function(){
    document.querySelector('.item2').classList.add('deleted');
})
document.querySelector('.item3').addEventListener('click',function(){
    document.querySelector('.item3').classList.add('deleted');
})
document.querySelector('.item4').addEventListener('click',function(){
    document.querySelector('.item4').classList.add('deleted');
})
document.querySelector('.t-item5').addEventListener('click',function(){
    document.querySelector('.item5').classList.add('deleted');
    document.querySelector('.item10').classList.add('deleted');
})
document.querySelector('.t-item6').addEventListener('click',function(){
    document.querySelector('.item11').classList.add('deleted');
    document.querySelector('.item6').classList.add('deleted');
})
document.querySelector('.t-item7').addEventListener('click',function(){
    document.querySelector('.item12').classList.add('deleted');
    document.querySelector('.item7').classList.add('deleted');
})
document.querySelector('.t-item8').addEventListener('click',function(){
    document.querySelector('.item13').classList.add('deleted');
    document.querySelector('.item8').classList.add('deleted');
})
document.querySelector('.t-item9').addEventListener('click',function(){
    document.querySelector('.item9').classList.add('deleted');
})
document.querySelector('.ques').addEventListener('click',function(){
    document.querySelector('.helptext').classList.remove('negative');
})
document.querySelector('.helptext').addEventListener('click',function(){
    document.querySelector('.helptext').classList.add('negative');
})
document.querySelector('.right-top').addEventListener('click',function(){
    window.location.reload()
})
document.querySelector('.addme').addEventListener('click',function(){
    document.querySelector('.added1').classList.remove('negative');
    document.querySelector('.deleted1').classList.add('negative');
    document.querySelector('.addme').classList.add('negative');
    document.querySelector('.addme2').classList.remove('negative');
})
document.querySelector('.addme2').addEventListener('click',function(){
    document.querySelector('.added2').classList.remove('negative');
    document.querySelector('.deleted2').classList.add('negative');
    document.querySelector('.addme2').classList.add('negative');
    document.querySelector('.addme').classList.remove('negative');

})
let indexNum = 0;
document.querySelector('.court-item1').addEventListener('click',function(){
    indexNum = 1;
    document.querySelector('.court-item1').classList.add('background-gr');
    document.querySelector('.court-item2').classList.remove('background-gr');
    document.querySelector('.court-item3').classList.remove('background-gr');
    document.querySelector('.court-item4').classList.remove('background-gr');
    document.querySelector('.court-item5').classList.remove('background-gr');
    document.querySelector('.court-item6').classList.remove('background-gr');
    document.querySelector('.court-item7').classList.remove('background-gr');
    document.querySelector('.court-item8').classList.remove('background-gr');
})
document.querySelector('.court-item2').addEventListener('click',function(){
    indexNum = 2;
    document.querySelector('.court-item1').classList.remove('background-gr');
    document.querySelector('.court-item2').classList.add('background-gr');
    document.querySelector('.court-item3').classList.remove('background-gr');
    document.querySelector('.court-item4').classList.remove('background-gr');
    document.querySelector('.court-item5').classList.remove('background-gr');
    document.querySelector('.court-item6').classList.remove('background-gr');
    document.querySelector('.court-item7').classList.remove('background-gr');
    document.querySelector('.court-item8').classList.remove('background-gr');
})
document.querySelector('.court-item3').addEventListener('click',function(){
    indexNum = 3;
    document.querySelector('.court-item1').classList.remove('background-gr');
    document.querySelector('.court-item2').classList.remove('background-gr');
    document.querySelector('.court-item3').classList.add('background-gr');
    document.querySelector('.court-item4').classList.remove('background-gr');
    document.querySelector('.court-item5').classList.remove('background-gr');
    document.querySelector('.court-item6').classList.remove('background-gr');
    document.querySelector('.court-item7').classList.remove('background-gr');
    document.querySelector('.court-item8').classList.remove('background-gr');
})
document.querySelector('.court-item4').addEventListener('click',function(){
    indexNum = 4;
    document.querySelector('.court-item1').classList.remove('background-gr');
    document.querySelector('.court-item2').classList.remove('background-gr');
    document.querySelector('.court-item3').classList.remove('background-gr');
    document.querySelector('.court-item4').classList.add('background-gr');
    document.querySelector('.court-item5').classList.remove('background-gr');
    document.querySelector('.court-item6').classList.remove('background-gr');
    document.querySelector('.court-item7').classList.remove('background-gr');
    document.querySelector('.court-item8').classList.remove('background-gr');
})
document.querySelector('.court-item5').addEventListener('click',function(){
    indexNum = 5;
    document.querySelector('.court-item1').classList.remove('background-gr');
    document.querySelector('.court-item2').classList.remove('background-gr');
    document.querySelector('.court-item3').classList.remove('background-gr');
    document.querySelector('.court-item4').classList.remove('background-gr');
    document.querySelector('.court-item5').classList.add('background-gr');
    document.querySelector('.court-item6').classList.remove('background-gr');
    document.querySelector('.court-item7').classList.remove('background-gr');
    document.querySelector('.court-item8').classList.remove('background-gr');
})
document.querySelector('.court-item6').addEventListener('click',function(){
    indexNum = 6;
    document.querySelector('.court-item1').classList.remove('background-gr');
    document.querySelector('.court-item2').classList.remove('background-gr');
    document.querySelector('.court-item3').classList.remove('background-gr');
    document.querySelector('.court-item4').classList.remove('background-gr');
    document.querySelector('.court-item5').classList.remove('background-gr');
    document.querySelector('.court-item6').classList.add('background-gr');
    document.querySelector('.court-item7').classList.remove('background-gr');
    document.querySelector('.court-item8').classList.remove('background-gr');
})
document.querySelector('.court-item7').addEventListener('click',function(){
    indexNum = 7;
    document.querySelector('.court-item1').classList.remove('background-gr');
    document.querySelector('.court-item2').classList.remove('background-gr');
    document.querySelector('.court-item3').classList.remove('background-gr');
    document.querySelector('.court-item4').classList.remove('background-gr');
    document.querySelector('.court-item5').classList.remove('background-gr');
    document.querySelector('.court-item6').classList.remove('background-gr');
    document.querySelector('.court-item7').classList.add('background-gr');
    document.querySelector('.court-item8').classList.remove('background-gr');
})
document.querySelector('.court-item8').addEventListener('click',function(){
    indexNum = 8;
    document.querySelector('.court-item1').classList.remove('background-gr');
    document.querySelector('.court-item2').classList.remove('background-gr');
    document.querySelector('.court-item3').classList.remove('background-gr');
    document.querySelector('.court-item4').classList.remove('background-gr');
    document.querySelector('.court-item5').classList.remove('background-gr');
    document.querySelector('.court-item6').classList.remove('background-gr');
    document.querySelector('.court-item7').classList.remove('background-gr');
    document.querySelector('.court-item8').classList.add('background-gr');
})
document.querySelector('.button').addEventListener('click',function(){
    if(indexNum=1){
        document.querySelector('.court-item1').classList.add('negative');
        document.querySelector('.item9').classList.remove('negative');
        indexNum = 0;
    }else if(indexNum=2){
        document.querySelector('.court-item2').classList.add('negative');
        document.querySelector('.item9').classList.remove('negative');
        indexNum = 0;
    }
    else if(indexNum=3){
        document.querySelector('.court-item3').classList.add('negative');
        document.querySelector('.item9').classList.remove('negative');
        indexNum = 0;
    }
    else if(indexNum=4){
        document.querySelector('.court-item4').classList.add('negative');
        document.querySelector('.item9').classList.remove('negative');
        indexNum = 0;
    }
    else if(indexNum=5){
        document.querySelector('.court-item5').classList.add('negative');
        document.querySelector('.item9').classList.remove('negative');
        indexNum = 0;
    }
    else if(indexNum=6){
        document.querySelector('.court-item6').classList.add('negative');
        document.querySelector('.item9').classList.remove('negative');
        indexNum = 0;
    }
    else if(indexNum=7){
        document.querySelector('.court-item7').classList.add('negative');
        document.querySelector('.item9').classList.remove('negative');
        indexNum = 0;
    }
    else if(indexNum=8){
        document.querySelector('.court-item8').classList.add('negative');
        document.querySelector('.item9').classList.remove('negative');
        indexNum = 0;
    }
})

