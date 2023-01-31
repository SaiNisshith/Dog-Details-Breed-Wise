$(function(){
    // var breads = [];
    var breedSelector = $('#breedSelector');
    function fill(){
        $.get("https://dog.ceo/api/breeds/list/all",function(data){
            var objects = data.message;
            for(let key in objects){
                // console.log(key, ": ", objects[key]);
                var k = [];

                // console.log(objects[key].length);
                for(let i=0; i<objects[key].length; i++){
                    k.push(objects[key][i]);
                }
                if(k.length==0){
                    breedSelector.append(`<option value="${key}">${key}</option>`);
                }else{
                    for(let j=0; j<k.length; j++){
                        breedSelector.append(`<option value="${k[j] + " " + key }">${key +" "+ k[j]}</option>`);
                    }
                }
            }
        })
    }
    fill();
    $('#getImage').click(function(){
        // console.log(breedSelector.val());
        $.get(`https://dog.ceo/api/breed/${breedSelector.val()}/images/random`,function(data){
            let imageURL = data.message;
            $('.image').html(`<img src="${imageURL}" alt="">`);
        });
    });
    $('#next').click(function(){
        $.get(`https://dog.ceo/api/breed/${breedSelector.val()}/images/random`,function(data){
            let imageURL = data.message;
            $('.image').html(`<img src="${imageURL}" alt="">`);
        });
    })
});