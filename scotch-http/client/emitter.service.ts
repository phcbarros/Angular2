import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class EmitterService {
    //define a variável que irá armazenar o evento
    private static _emitters: { [ID: string]: EventEmitter<any> } = {};

    //set o evento na variável com o ID como chave
    static get(ID: string): EventEmitter<any> {
        if(!this._emitters[ID])
            this._emitters[ID] = new EventEmitter();
        return this._emitters[ID];
    }
}