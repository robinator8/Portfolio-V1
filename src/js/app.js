if (module.hot) {
  module.hot.accept();
}

$("#lights").click(() => {
  $("body").toggleClass("dark")
  $("body").toggleClass("light")
})

// function randomBetween(a, b) {
//   return Math.floor(Math.random() * (b + 1 - a)) + a
// }

// function chooseRandomElement(list) {
//   return list[randomBetween(0, list.length - 1)]
// }

// // function reverse(string) {
// //   var output = ""
// //   for (var i = string.length - 1; i >= 0; --i) {
// //     output += string[i]
// //   }
// //   return output
// // }


// /**
//  * @class Controller
//  */
// class Controller {
//   constructor() {
//     this.currentSurprise = new EmptySurprise();
//     $("#surprise").click(() => this.handleSurpriseClick())
//     this.index = 0
//     this.surpriseToggled = false
//     this.surpriseClasses = [
//       LinearGradientBackgroundSurprise,
//       ReverseSurprise
//     ]
//   }

//   handleSurpriseClick() {
//     if (this.surpriseToggled) {
//       this.currentSurprise.undo()
//     } else {
//       this.currentSurprise = this.generateNextSurprise()
//     }
//     this.surpriseToggled = !this.surpriseToggled
//   }

//   generateNextSurprise() {
//     // var surpriseClass = chooseRandomElement(this.surpriseClasses)
//     var surpriseClass = this.surpriseClasses[this.getIndexAndAdvance()]
//     return new surpriseClass()
//   }

//   getIndexAndAdvance() {
//     var returnValue = this.index
//     this.index = (this.index + 1) % this.surpriseClasses.length
//     return returnValue
//   }
// }

// /**
//  * @class LinearGradientBackgroundSurprise
//  * @extends {Surprise}
//  */
// class LinearGradientBackgroundSurprise {
//   constructor() {
//     this.previousBackground = $("body").css("background")
//     $("body").css("background", this.getRandomBackground())
//   }

//   undo() {
//     $("body").css("background", this.previousBackground)
//   }

//   getRandomBackground() {
//     return "linear-gradient(90deg," + 
//       "hsl(" + this.getRandomHue() + ", 100%, 40%) 0%, " +
//       "hsl(" + this.getRandomHue() + ", 100%, 30%) 50%, " + 
//       "hsl(" + this.getRandomHue() + ", 100%, 40%) 100%)"
//   }
  
//   getRandomHue() {
//     return randomBetween(0, 360)
//   }
// }

// /**
//  * @class ReverseSurprise
//  * @extends {Surprise}
//  */
// class ReverseSurprise {
//   constructor() {
//     this.oldTransform = $("body").css("transform")

//     var xScale = 0
//     var yScale = 1
//     switch(randomBetween(0,2)) {
//       case 0:
//         xScale = 1
//         yScale = -1
//         break;
//       case 1:
//         xScale = -1
//         yScale = 1
//         break;
//       case 2:
//         xScale = -1
//         yScale = -1
//         break;
//     }
//     $("body").css("transform", "scale(" + xScale +"," + yScale + ")")
//     // this.reverseElementText()
//   }

//   undo() {
//     $("body").css("transform", this.oldTransform)
//     // this.reverseElementText()
//   }

//   reverseElementText() {
//     const ids = [
//       "#name", "#title", "#headline", "#resume", "#email", "#surprise"
//     ]
//     ids.map(id => {
//       const reversedText = this.reverse($(id).html())
//       $(id).html(reversedText)
//     })
//   }

//   reverse(string) {
//     var output = ""
//     for (var i = string.length - 1; i >= 0; --i) {
//       output += string[i]
//     }
//     return output
//   }
// }

// /**
//  * @class EmptySurprise
//  * @extends {Surprise}
//  */
// class EmptySurprise {
//   constructor() {}
//   undo() {}
// }

// /**
//  * @abstract
//  * @class Surprise
//  */
// class Surprise {
//   constructor() {
//     if (this.constructor == Suprise) {
//       throw new Error("cannot construct abstract class \"Surprise\"")
//     }
//   }

//   undo() {
//     throw new Error("not implemented")
//   }
// }

// var controller = new Controller()