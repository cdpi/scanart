
import { focus } from "./focus.js";

function formOnInput(event:Event):void
	{
	const focale = document.querySelector("#focale") as HTMLFormElement;
	const distanceSujet = document.querySelector("#distance-sujet") as HTMLFormElement;

	const lens =
		{
		focal: Number(focale.value),
		diameter: 51
		};

	const subject =
		{
		size: 1000,
		distance: Number(distanceSujet.value)
		};

	console.log(focus(lens, subject.distance));
	}

export
	{
	formOnInput
	};
