export class SkiresortsName{
	_id: string;
	name: string;

	constructor(obj? :any){
		this._id = obj && obj._id || null;
		this.name = obj && obj.name || null;
	}
}
