

export function createTextLayer(font, text) {


    return function drawDashboard(context ) {
        const size = font.size
       const textW = text.length
     
       const screenW = Math.floor(context.canvas.width/size)
       const screenH = Math.floor(context.canvas.height/size)
   
       const x = screenW/2 - textW/2
        const y = screenH/2 
       font.print(text, context, x*size, y*size)
         }
}