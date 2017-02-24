function showCells() {
//Spinning sign hidden when products are loaded 
    $('.loader').hide();
//Instead of showing empty cells, products are shown at once after all info is loaded
    $('.product-cells').fadeIn();
};
//Enough time until all DOM elements are loaded
setTimeout(showCells, 4500);


function domobj(){
  var self        =this;
  self.products   = [];

  self.getproducts = function(url){
    $.getJSON(url, function(response){
        for(i=0; i<response.sales.length ; i++){
          self.products.push( new productobj(response.sales[i], i)  );
        }
    });
  }
    
  self.updateproducthtml = function(){
    for( i=0; i< self.products.length ; i++){
      self.products[i].updatehtml();
    }
  }
    self.updatedom = function(){
    var i=0
    thishtml='';
    for( i=0; i< self.products.length ; i++){
      
      //Resposive bootstrap grids added instead of original row tag
        thishtml += "<div class='display-cell col-md-4 col-sm-6 col-xs-12'>";         
        thishtml += self.products[i].htmlview;      
        thishtml += "</div>";         
    }

    $("#content").append(thishtml)
  }
  
}

function productobj(product, i){
  var self          = this;
  self.photo        = product.photos.medium_half
  self.title        = product.name
  self.tagline      = product.tagline
  self.url          = product.url
  self.htmlview     = ""
  self.prodDescription = product.description

  self.updatehtml= function(){
    $.get('product-template.html', function(template){
      self.htmlview = template.replace('{image}', self.photo)
      .replace('{title}', self.title)
      .replace('{tagline}', self.tagline)
      .replace('{url}', self.url)
      .replace('{custom_class}', self.custom_class)
      .replace('{description}', self.prodDescription);
    });

//Close button to remove each product with fade out effect
$("body").on("click", ".closeBtn", function(){
    $(this).closest('div.display-cell').fadeOut(900, function() { 
    $(this).remove(); 
});
    });
  }
}


var page=new domobj();
page.getproducts('data.json');
setTimeout("console.log('building html');page.updateproducthtml();",2000);
setTimeout("page.updatedom()",3000);




