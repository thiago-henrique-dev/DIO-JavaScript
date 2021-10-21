function createMicrofone(color = "black") {
    let isOn = true;

    function toggleOnOff() {
        if(isOn){
            console.log("desligar")
        } else {
            console.log("ligar")
        }
        isOn = !isOn
    }

    return {color,toggleOnOff}
}

const microfoneBlack = createMicrofone("Black")
const microfoneWhite = createMicrofone("White")
console.log(microfoneBlack.color)
console.log(microfoneWhite.color)
