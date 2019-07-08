import "./main.css"
import Fireworks from "fireworks-canvas"

export default () => {
    const container = document.getElementById("container")
    const fireworks = new Fireworks(container)
    fireworks.start()
}