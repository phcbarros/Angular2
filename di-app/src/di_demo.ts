import {Component} from "angular2/core";
import {UiTabs, UiPane} from "./ui_tabs";
import {Detail} from "./detail"

@Component({
    selector: 'di-demo',
    template: `
        <h4>Tabs Demo</h4>
        <ui-tabs>
            <template ui-pane title="Overview" active="true">
                You have {{details.length}} details;
            </template>
            <template *ngFor="#detail of details" ui-pane [title]="detail.title">
                {{detail.text}} <br><br>
                <button class="btn" (click)="removeDetail(detail)">Remove</button>
            </template>
            <template ui-pane title="Summary">
                Next Last ID is {{id}}.
            </template>
        </ui-tabs>
        <hr>
        <button class="btn" (click)="addDetail()">Add Detail</button>
    `,
    directives: [UiTabs, UiPane]
})

export class DiDemo {
    details: Array<Detail> = [];
    id: number = 0;
    
    addDetail(): void {
        this.id++;
        this.details.push({
            title: `Detail ${this.id}`,
            text: `Some detail text for ${this.id}...`
        });
    }
    
    removeDetail(detail) {
        this.details = this.details.filter((d) => d !== detail);
    }
}