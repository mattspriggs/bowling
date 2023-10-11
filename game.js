// Score 64 (simple game):
// const frames = [
//   [2, 0], [4, 2], [6, 0], [2, 4], [1, 5], [7, 0], [5, 2], [7, 0], [2, 6], [8, 1]
// ]

// Score 71 (with spares):
const frames = [
  [6, 1], [4, 0], [6, 4], [2, 7], [3, 5], [5, 0], [5, 5], [0, 0], [1, 6], [7, 2]
]
// Score 104 (with spares and strikes):
// const frames = [
//   [6, 4], [8, 0], [10, 0], [2, 7], [5, 5], [4, 0], [10, 0], [2, 1], [2, 6], [4, 4]
// ]
//
// Score 119 (with spares, strikes and a double strike):
// const frames = [
//   [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
// ]
//
// Score 141 (includes a strike on the last frame):
// const frames = [
//   [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]
// ]
//
// Score 300 (perfect game):
// const frames = [
//   [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10, 10]
// ]

// 

// Take a single frame and score it. //
// 
//  const frame = [6, 3]
function frameScore(frame) {
  let score = frame[0] + frame[1]
  console.log(frames.indexOf(frame)) 
  
  let frameIndex = frames.indexOf(frame)
  console.log(frames[frameIndex + 1])
  if(score === 10){
    score + frames[frameIndex + 1][0]
  }
  return score
}

// Develop game score total function

function gameScore(frames){
  let gameScore = 0
  frames.forEach(frame => {
    gameScore = gameScore + frameScore(frame)
  });
  return gameScore
}
 console.log(gameScore(frames))

// add a function for with a complexending. //
// if frameTotal = 10 add next frame [0] 

