export class SkiTracks{
	_id: string;
	mountain_id: string;
	name: string;
	length_km: string;
	rating: string;
	color: string;

	constructor(obj? :any){
		this._id = obj && obj._id || null;
		this.mountain_id = obj && obj.mountain_id || null;
		this.name = obj && obj.name || null;
		this.length_km = obj && obj.length_km || null;
		this.rating = obj && obj.rating || null;
		this.color = obj && obj.color || null;
	}
}
