import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class MapService {

    public id = '';

    onCountryClick(pathId: string) {
        this.id = pathId;
        console.log(this.id);
    }
}