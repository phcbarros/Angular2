import { Injectable } from "@angular/core";

import { Aba } from "app/data-binding/aba";

@Injectable()
export class DataBindingService {
    getAbas(): Aba[] {
        return [
            { id: 1, texto: 'Property binding' },
            { id: 2, texto: 'Event binding' },
            { id: 3, texto: 'Two-Way Data binding' },
            { id: 4, texto: 'Input property' },
            { id: 5, texto: 'Output property' }
        ];
    }
}