import { focus } from "./focus.js";
function formOnInput(event) {
    const focale = document.querySelector("#focale");
    const distanceSujet = document.querySelector("#distance-sujet");
    const lens = {
        focal: Number(focale.value),
        diameter: 51
    };
    const subject = {
        size: 1000,
        distance: Number(distanceSujet.value)
    };
    console.log(focus(lens, subject.distance));
}
export { formOnInput };
