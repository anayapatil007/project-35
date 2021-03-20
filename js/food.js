class Food {
    constructor(){
        this.foodstock 
        this.lastfed
        this.milk = loadImage("images/Milk.png");
    }
    display(){
        var posx = 40;
        var posy = 100;
        imageMode (CENTER);
        for(var i = 1 ; i <=this.foodstock; i++){
            posx = posx + 20
            image(this.milk, posx,posy,50,50);
        }
    }
    getfoodstock(){
       var refrence = database.ref("/") ;
       refrence.on("value",(data) =>{
           this.foodstock = data.val().food;
           this.lastfed = data.val().lastfed;
       } )
    }
    updatefoodstock(quantity){
        this.foodstock = quantity;
        database.ref("/").update({
            lastfed : hour(),
            food : this.foodstock,
        });

    }
}
