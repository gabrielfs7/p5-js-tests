/**
 *
 * Animation showing buble sort algorithim using p5 js.
 *
 * https://p5js.org/examples/math-random-chords.html
 *
 */

let ramdomLines;
let ramdomLinesOrdered = [];
let continueLoop = false;

function setup() {
  createCanvas(400, 400);

  randomLines = getRandomLines();
}

function draw() 
{
  	background(0);

    randomLines = iterate(randomLines);

    for (let i = 0; i < randomLines.length; i++) {
      	stroke(randomLines[i].color[0], randomLines[i].color[1], randomLines[i].color[2]);
      	line(randomLines[i].wLeft, randomLines[i].hBottom, randomLines[i].wRight, randomLines[i].hTop);
    }
}

function iterate(randomLines) 
{
    for (let i = 0; i < randomLines.length - 1; i++) {
        if (randomLines[i].hTop > randomLines[i + 1].hTop) {
            let temp = randomLines[i].hTop;

            randomLines[i].hTop = randomLines[i + 1].hTop;
            randomLines[i + 1].hTop = temp;

            continueLoop = true;
        }
    }

    return randomLines;
}


function getRandomLines() 
{
    let out = [];

    for (let i = 0; i < 400; i++) {
        let item = {
            wLeft: i,
            wRight: i,
            hTop: random(400),
            hBottom: 400,
            color: [random(255), random(255), random(255)]
        };

        out.push(item);
    }

    return out;
}
