let canva= document.querySelector("#myCanvas")
let ctx= canva.getContext("2d")
ctx.fillStyle="yellow"
ctx.strokeStyle="black"
ctx.beginPath()
ctx.rect(100,150,100,300)
ctx.stroke()
ctx.fill()

ctx.fillStyle="gray"
ctx.strokeStyle="black"
ctx.beginPath()
ctx.rect(100,100,100,50)
ctx.stroke()
ctx.fill()

ctx.fillStyle="pink"
ctx.strokeStyle="black"
ctx.beginPath()
ctx.moveTo(100,450)
ctx.lineTo(150,550)
ctx.lineTo(200,450)
ctx.lineTo(100,450)
ctx.stroke()
ctx.fill()

ctx.fillStyle="black"
ctx.strokeStyle="black"
ctx.beginPath()
ctx.moveTo(125,500)
ctx.lineTo(150,550)
ctx.lineTo(175,500)
ctx.lineTo(125,500)
ctx.stroke()
ctx.fill()

ctx.fillStyle="#f2c3aa"
ctx.strokeStyle="black"
ctx.beginPath()
ctx.arc(150,100,50,1*Math.PI, 2*Math.PI)
ctx.stroke()
ctx.fill()

//ctx.fillStyle="gray"
//ctx.strokeStyle="black"
//ctx.beginPath()
//ctx.moveTo(250,350)
//ctx.lineTo(250,350)
//ctx.lineTo(250,350)
//ctx.lineTo(250,350)
//ctx.stroke()
//sctx.fill()
