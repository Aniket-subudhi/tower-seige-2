class String {
    constructor(bodyA,bodyB){
var options = {
bodyA:bodyA,
bodyB:bodyB,
length:4,
stiffness : 0.4


}
//console.log(Constrained)
this.string=Constraint.create(options)
World.add(world,this.string)

 

    }
display(){
var point_a  = this.string.bodyA.position
var point_b = this.string.bodyB.position
line(point_a.x,point_a.y,point_b.x,point_b.y)
 
}

fly(){
    this.sling.bodyA=null;
    
    
        }


}