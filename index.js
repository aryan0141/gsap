// gsap.fromTo("h1", { x: -200, y: 100,ease:"linear"}, { x:innerWidth+100, y: 100, duration:8,ease:"linear",repeat:-1 })

// gsap.to("h1", { y: 100, stagger: {
//     each:0.1,
//     from:"center"
// } });

let roll = document.getElementById("roll");
let pause = document.getElementById("pause");
let reverse = document.getElementById("reverse");
let kill = document.getElementById("kill");

const start = () => {
    console.log(Date());
}


const end = () => {
    console.log(Date());

}

let tween = gsap.to("img", { repeatDelay: 1, repeat: 1, rotation: 800, ease: "bounce", duration: 5, y: 400, paused: true, onComplete: end, onStart: start, stagger: { each: 0.3 }, yoyo: true });



roll.onclick = () => tween.play();
pause.onclick = () => tween.pause();
reverse.onclick = () => tween.reverse();
kill.onclick = () => tween.kill();

