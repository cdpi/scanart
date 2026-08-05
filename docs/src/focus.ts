
//const F = [0.5, 0.7, 1, 1.4, 2, 2.8, 4, 5.6, 8, 11, 16, 22, 32, 45, 64, 90, 128, 180, 256, 360, 512];

type Sensor =
	{
	width:number;
	height:number;
	};

function getSensorDiagonal(sensor:Sensor):number
	{
	return Math.sqrt(sensor.width**2 + sensor.height**2);
	}

function getCircleOfConfusion(sensor:Sensor, distance:number, dpi:number|null = null):number
	{
	return getSensorDiagonal(sensor) / distance;
	}

export
	{
	//F,

	type Sensor,

	getSensorDiagonal,
	getCircleOfConfusion
	};
