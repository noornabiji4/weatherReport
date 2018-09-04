weather = {};
weather.database = [];
weather.loadAssets = function() {
    $.getJSON('/api/hyderabad', function(data){
        weather.database =  data;
       
        weather.init();
    });
};

weather.init = function(){
    weather.generateMarkup();
}

weather.generateMarkup = function(){
    var template = '';

    
    $.each(weather.database["forecast"], function(index){
        var db = weather.database["forecast"];
        var id = db[index]; 
        console.log(db)      
        
        template += '<div class="item">';

        template += '<div class="header">';

        template += '<div class="left">';

        template += '<img src= "'+ id.current.imageUrl +'">';

        template += '</div>';

        template += '<div class = "right" >';

        template += '<h4>'+ id.current.day+ '</h4>';

        template +=  '</div>';

        template += '<div class="date">';

        template += '<div>' + id.current.date;

        template +=  '</div>';

        template += ' <div>' + id.current.temperature;
    
        template += '</div>';

        template +='</div>';

        template += '<div>';
        
        template += '</div>';
    
    });

    $(".content").append(template);
}


weather.loadAssets();
