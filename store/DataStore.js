import { makeAutoObservable } from 'mobx'

export default class DataStore {
	constructor() {
		this._dataZapisi = []
		this._resDataZapisi = []
		this._newOtzyvy = []

		
		makeAutoObservable(this)
	}

	setResDataZapisi(data) {
		this._resDataZapisi = data
	}
	setNewOtzyvy(data) {
		this._newOtzyvy = data
	}
	setDataZapisi(data) {
		this._dataZapisi = data
	}
	get dataZapisi() {
		return this._dataZapisi
	}
	get dataNewOtzyvy() {
		return this._newOtzyvy
	}
	get resDataZapisi() {
		return this._resDataZapisi
	}

}

// {
// 	id: 1,
// 	title: 'Fox',
// 	start: new Date('2023-02-11T13:00'),
// 	end: new Date('2023-02-11T17:00'),
// 	allDay: false,
// 	tel: '+375333511597',
// 	zapros: 'индивидуальная',
// 	type:'online'
// },
// {
// 	id: 2,
// 	title: 'Fox2',
// 	start: new Date('2023-02-12T13:00'),
// 	end: new Date('2023-02-12T17:00'),
// 	allDay: false,
// 	tel: '+375333511597',
// 	zapros: 'индивидуальная',
// 	type:'offline'
// },