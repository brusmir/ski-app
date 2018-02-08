export class SkiWeather {
	_id: string;
	mountain_id: string;
	date: string;
	temperature_min: string;
	temperature_max: string;
	wind: string;
	outlook: string;

	constructor(obj? :any){
		this._id = obj && obj._id || null;
		this.mountain_id = obj && obj.mountain_id || null;
		this.date = obj && obj.date || null;
		this.temperature_min = obj && obj.temperature_min || null;
		this.temperature_max = obj && obj.temperature_max || null;
		this.wind = obj && obj.wind || null;
		this.outlook = obj && obj.outlook || null;
	}
}