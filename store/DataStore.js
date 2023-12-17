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
