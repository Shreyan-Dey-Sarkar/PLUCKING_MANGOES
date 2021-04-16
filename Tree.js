class Tree{
    constructor(x,y){
   var options = {
        isStatic: true,
    }
    this.x=x;
		this.y=y;
		this.treeWidth=450;
		this.treeHeight=600;
		this.treeThickness=10;
    this.body = Bodies.rectangle(this.x, this.y, this.treeWidth, this.treeThickness, options);
   
    this.image = loadImage("tree.png");
      
    World.add(world, this.body);
    
    }
    display(){
        var pos = this.body.position;
        
        push();
        translate(pos.x, pos.y+10);
        imageMode(CENTER);
        image(this.image, 0,-this.treeHeight/2,this.treeWidth, this.treeHeight)
        pop();
  }
}