AFRAME .registerComponent("cars",{
    schema: {
        moveX:{type:"number",default:1},
        timesClicked:{type:"number",default:0}
    },
    update:function(){
        window.addEventListener("click",e=>{
            this.data.timesClicked = this.data.timesClicked+1;
            if(this.data.timesClicked===1){
                const rotation={x:0,y:20,z:0};
                this.el.setAttribute("rotation",rotation);
            }else if (this.data.timesClicked===2){
                const rotation={x:0,y:100,z:0}
                this.el.setAttribute("rotation",rotation);
            }
        })
    },
    tick:function(){
        window.addEventListener("click",(e)=>{
            this.data.moveX = this.data.moveX+0.1;
        })
        var pos=this.el.getAttribute("position");
        pos.x=this.data.moveX;
        this.el.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z})
    }
})