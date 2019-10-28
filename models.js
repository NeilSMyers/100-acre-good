export class QuoteModel {
  constructor(id, quote, author, image, favorite) {
    this.id = id
    this.quote = quote
    this.author = author
    this.image = image
    this.favorite = favorite
  }
}

export default {
  "Christopher Robin": require("./assets/winnie/ChristopherRobin.jpg"),
  "Winnie The Pooh": require("./assets/winnie/WinnieThePooh.png"),
  Piglet: require("./assets/winnie/Piglet.jpeg"),
  Eeyore: require("./assets/winnie/Eeyore.jpg")
}

//   new Quote(
//     7,
//     "Forever isn't long at all, Christopher, when I'm with you.",
//     "Winnie the Pooh",
//     true
//   ),
//   new Quote(
//     8,
//     "Love is taking a few steps backward, maybe even more, to give way to the happiness of the person you love.",
//     "Winnie the Pooh",
//     false
//   ),
//   new Quote(
//     9,
//     "Sometimes the smallest things take up the most room in your heart.",
//     "Winnie the Pooh",
//     false
//   ),
//   new Quote(
//     10,
//     "If you live to be a hundred, I hope I live to be a hundred minus one day, so that I never have to live a day without you.",
//     "Winnie the Pooh",
//     true
//   ),
//   new Quote(
//     11,
//     "The most important thing is, even when we're apart, I'll always be with you.",
//     "Christopher Robin",
//     false
//   ),
//   new Quote(
//     12,
//     "A day without a friend is like a pot without a single drop of honey left inside.",
//     "Winnie the Pooh",
//     false
//   ),
//   new Quote(
//     13,
//     "How lucky I am to have something that makes saying goodbye so hard.",
//     "Winnie the Pooh",
//     false
//   ),
//   new Quote(
//     14,
//     "Any day spent with you is my favorite day.",
//     "Winnie the Pooh",
//     false
//   )
// ]
