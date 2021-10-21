class Microfone {
    constructor(color = "black") {
        this.color = color;
        this.isOn = true;
    }

    toggleOnOff() {
        if(this.isOn){
            console.log("desligar")
        } else {
            console.log("ligar")
        }
        this.isOn = !this.isOn
    }
}

const microfone = new Microfone();
console.log(microfone)
console.log(microfone.color.toUpperCase())
microfone.toggleOnOff()
microfone.toggleOnOff()
microfone.toggleOnOff()
microfone.toggleOnOff()

