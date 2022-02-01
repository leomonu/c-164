AFRAME.registerComponent("wire-fence", {
init:function(){
// staring x and z positions
posx= -20
posz=80


for(var i=0; i<10; i++){
// create wire-fence
var wf1= document.createElement("a-entity")
var wf2= document.createElement("a-entity")
var wf3= document.createElement("a-entity")
var wf4= document.createElement("a-entity")

//set x,y,z positions
posx=posx+5
posy=2
posz=posz-10

// set scale
var scale={x:2, y:2,z:2}

// set id
wf1.setAttribute("id","wf1"+i)
wf2.setAttribute("id","wf2"+i)
wf3.setAttribute("id","wf3"+i)
wf4.setAttribute("id","wf4"+i)

// setting position
wf1.setAttribute("position",{x:posx,y:posy,z:-35})
wf2.setAttribute("position",{x:posx,y:posy,z:85})
wf3.setAttribute("position",{x:30,y:posy,z:posz})
wf4.setAttribute("position",{x:50,y:posy,z:posz})

// settin scale
wf1.setAttribute("scale",scale)
wf2.setAttribute("scale",scale)
wf3.setAttribute("scale",scale)
wf4.setAttribute("scale",scale)

// setting rotation
wf1.setAttribute("rotation",{x:0,y:0,z:0})
wf2.setAttribute("rotation",{x:0,y:0,z:0})
wf3.setAttribute("rotation",{x:0,y:0,z:0})
wf4.setAttribute("rotation",{x:0,y:0,z:0})

// setting static-body
wf1.setAttribute("static-body",{})
wf2.setAttribute("static-body",{})
wf3.setAttribute("static-body",{})
wf4.setAttribute("static-body",{})

// gltf-model
wf1.setAttribute("gltf-model","./models/barbed_wire_fence/scene.gltf"
)
wf2.setAttribute("gltf-model","./models/barbed_wire_fence/scene.gltf"
)
wf3.setAttribute("gltf-model","./models/barbed_wire_fence/scene.gltf"
)
wf4.setAttribute("gltf-model","./models/barbed_wire_fence/scene.gltf"
)

var scene= document.querySelector("#scene")
scene.appendChild(wf1)
scene.appendChild(wf2)
scene.appendChild(wf3)
scene.appendChild(wf4)

console.log(wf1)

}




},
})

AFRAME.registerComponent("boxes",{
    schema:{
        height:{type:"number", default:4},
        depth:{type:"number", default:4},
        width:{type:"number", default:4},
    },
    init:function(){
        for (var i=0; i<20; i++){
          var box= document.createElement("a-entity")
 
         box.setAttribute("id","box"+i)

         posy=2.5
        
            //x position array
            px = [22.86, -17.35, -12.81, 0.44, -30.18,
            -25.89, 15.61, 29.68, 11.95, -15.40,
            -14.09, 34.76, 2.29, 21.77, 1.57,
            34.72, 12.04, -10.90, 6.48, 15.66];

            //z position array
            pz = [54.56, -4.71, 14.91, 56.74, 41.13,
                50.76, 57.84, 7.02, -5.24, -26.82,
                27.59, -35.78, 34.52, 31.32, -9.22,
                26.72, 48.90, 27.24, 9.94, 54.29 ];
 

         position={
             x:px[i],
             y:posy,
             z:pz[i]
         }
         box.setAttribute("position",position)
         box.setAttribute("geometry",{
             primitive:"box",
             height:this.data.height,
             width:this.data.width,
             depth:this.data.depth
         })
         box.setAttribute("static-body",{})
         box.setAttribute("material",{
             src:"./images/boxtexture1.jpg",
             repeat:"1 1 1"
         })
         var scene= document.querySelector("#scene")
         scene.appendChild(box)
 
        }
    }
})