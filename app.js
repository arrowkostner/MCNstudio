const audioCtx = new (window.AudioContext || window.webkitAudioContext)()

const sequencer = document.getElementById("sequencer")

const steps = []

for(let i=0;i<16;i++){

const step=document.createElement("div")
step.className="step"

step.onclick=()=>{
step.classList.toggle("active")
}

sequencer.appendChild(step)
steps.push(step)

}

document.getElementById("playBtn").onclick=()=>{

steps.forEach(s=>{
if(s.classList.contains("active")){

const osc = audioCtx.createOscillator()
osc.connect(audioCtx.destination)
osc.start()
osc.stop(audioCtx.currentTime+.1)

}
})

}
