import createNewCounter from "./Countdown";

const newCounter = createNewCounter(5,() => {
    console.log("Test");
});

console.log(newCounter.getTime());