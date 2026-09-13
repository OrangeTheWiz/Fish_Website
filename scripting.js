

var MainContext = Main_Canvas.getContext("2d")

var GeraldImage = new Image()
GeraldImage.src = "Gerald_The_Fish.png"

MainContext.canvas.width = window.innerWidth

MainContext.canvas.height = window.innerHeight

var X = 0

var Y = 0

var angle = 3

var radius = MainContext.canvas.width / 4

var centerx = window.innerWidth / 2

var centery = window.innerHeight / 2





var LoopHelper = setTimeout(AnimationLoop, 16)

function AnimationLoop()
{

  clearTimeout(LoopHelper)

  // function code stuff goes here

  MainContext.reset()

  if (angle >= 3000) { angle = 3 }

  angle += 0.009

  X = centerx + radius * Math.cos(angle)
  Y = centery + radius * Math.sin(angle)

  MainContext.drawImage(GeraldImage, X, Y)

  LoopHelper = setTimeout(AnimationLoop, 16)


}
