AFRAME.registerComponent("bullets", {
    init: function () {
        this.showBullet()

    },

    // show Bullet
    showBullet: function () {
        window.addEventListener("keydown", (e) => {
            if (e.key === "k") {
                var bullet = document.createElement("a-entity")
                bullet.setAttribute("geometry", {
                    primitive: "sphere",
                    radius: 0.1
                })
                bullet.setAttribute("material", {
                    color: "black"
                })

                //  add sound
                this.shotsound()
                // adding bullet wth camera position
                var cam = document.querySelector("#camera")
                pos = cam.getAttribute("position")

                bullet.setAttribute("position", {
                    x: pos.x,
                    y: pos.y,
                    z: pos.z
                })

                // dynamic body
                bullet.setAttribute("dynamic-body", {
                    shape: "sphere",
                    mass: 0
                })


                // cam.appendChild(bullet)
                //  to access the camera entity to three.js 
                var camera = document.querySelector("#camera").object3D
                // get the camera direction as three.js vector
                var direction = new THREE.Vector3()


                //  To get the direction of the camera element
                camera.getWorldDirection(direction)
                //  console.log(direction)

                bullet.setAttribute("velocity", direction.multiplyScalar(-10))
                //set the bullet as the dynamic entity
                bullet.setAttribute("dynamic-body", {
                    shape: "sphere",
                    mass: "0",
                });
                // appending bullet to  scene

                var scene = document.querySelector("#scene")
                scene.appendChild(bullet)
                // console.log(bullet)


                bullet.addEventListener("collide", this.removeBullet)
               
            }
        })

    },
    removeBullet: function (e) {
        // console.log(e.detail.target.el)
        // console.log(e.detail.body.el)

        //   bulletelement
        var bulletElement = e.detail.target.el

        // bodyElement
        var bodyElement = e.detail.body.el

        if (bodyElement.id.includes("box")) {
            bodyElement.setAttribute("material", {
                opacity: 1,
                transparent: true,
            })


            //    intalizing Cannon.js
            var myforce = new CANNON.Vec3(-2, 2, 1)
            // copying body positions
            var mybulletPoint = new CANNON.Vec3().copy(
                bodyElement.getAttribute("position")
            )


            // applyImpulse(impulse, worldPoint)
            bodyElement.body.applyImpluse(myforce, mybulletPoint)

            //  remove bulletelement  from scene
            bulletElement.removeEventListener("collide",this.removeBullet)

            var scene = document.querySelector("#scene")
            scene.removeChild(bulletElement)




        }

    },

    shotsound:function(){
      var entity= document.querySelector("#sound1")
      entity.components.sound.playSound()      
    }




})