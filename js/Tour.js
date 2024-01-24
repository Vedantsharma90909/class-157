AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards()
    
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "taj-mahal",
        title: "Taj Mahal",
        url: "./assets/thumbnails/taj_mahal.png",
      },
      {
        id: "budapest",
        title: "Budapest",
        url: "./assets/thumbnails/budapest.jpg",
      },

      {
        id: "eiffel-tower",
        title: "Eiffel Tower",
        url: "./assets/thumbnails/eiffel_tower.jpg",
      },
      {
        id: "new-york-city",
        title: "New York City",
        url: "./assets/thumbnails/new_york_city.png",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const border_even=this.border_ring(position, item.id)
      
      // Thumbnail Element
      var thumbnail = this.create_thumbnail(item)
     
      // Title Text Element
      var title = this.create_title(position, item)

      
      this.placesContainer.appendChild(border_even);
      border_even.appendChild(thumbnail)
      border_even.appendChild(title)
    }
  },
  
  border_ring:function(position, id){
    const entity_ring = document.createElement("a-entity")
    entity_ring.setAttribute("id",id)
    entity_ring.setAttribute("visible",true)
    entity_ring.setAttribute("geometry",{
      primitive:"ring", radiusInner:9.5, radiusOuter:10,
    })
    entity_ring.setAttribute("position",position)
    entity_ring.setAttribute("material",{color:"#000000", opacity:1})
    return entity_ring
  },
  
  create_thumbnail:function(item){
    var thumbnail_entity=document.createElement("a-entity")
    thumbnail_entity.setAttribute("visible",true)
    thumbnail_entity.setAttribute("geometry",{primitive:"circle", radius:9})
    thumbnail_entity.setAttribute("material",{src:item.url})

    return thumbnail_entity

  },

  create_title:function(position,item){
    var title_entity=document.createElement("a-entity")
    title_entity.setAttribute("visible",true)
    title_entity.setAttribute("text",{
      font:"exo2bold", align:"center", width:70, color:"black", value:item.title

    })
    const position1 = position
    position1.y = -20
    title_entity.setAttribute("position",position1)


    return title_entity
  }


});

