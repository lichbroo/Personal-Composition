let objBall = {
    x: 10,
    y: 10,
    ballColor: "#990000",
    size: 25,
};

function setup() {
    createCanvas(500, 400);

    // create circle w above stats
    circle(objBall.x, objBall.y, objBall.size);
    fill(objBall.ballColor);
}