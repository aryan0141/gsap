gsap.registerPlugin("SplitText");
// gsap.fromTo("h1", { x: -200, y: 100,ease:"linear"}, { x:innerWidth+100, y: 100, duration:8,ease:"linear",repeat:-1 })

// gsap.to("h1", { y: 100, stagger: {
//     each:0.1,
//     from:"center"
// } });

let roll = document.getElementById("roll");
let pause = document.getElementById("pause");
let reverse = document.getElementById("reverse");
let kill = document.getElementById("kill");
// var tl = gsap.timeline().splitText("#split", { type: "words,chars" });
// console.log(t1)

const start = () => {
    console.log(Date());
}


const end = () => {
    console.log(Date());

}

let tween = gsap.timeline({ paused: true }).to("img", { repeat: 3, rotation: 800, ease: "linear", duration: 5, y: 350, stagger: { each: 0.2, from: "center" }, yoyo: true });



roll.onclick = () => tween.play();
pause.onclick = () => tween.pause();
reverse.onclick = () => tween.reverse();
kill.onclick = () => tween.kill();

gsap.to(".box", { rotation: 27, duration: 2, yoyo: true, repeat: -1, ease: 'sine', x: innerWidth-150 })
gsap.to("#rect", { duration: 1, repeat: -1, yoyo: true, repeatDelay: 0.3, attr: { x: 100, y: 100, width: 100, height: 100 }, ease: "linear" });

// gsap.to("#changetext", { duration: 4, text: { value: "Learning GSAP/Text Plugin", delimiter: "", speed: 0.1, newClass: "Ohhhh" }, ease: "linear" })

