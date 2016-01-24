import {Component} from "angular2/core"

@Component({
    selector: "hello-world",
    templateUrl: "src/hello_world.html",
    styles: [`
        .name {
            color: blue;
        }
    `], //primeiro a ser colcado na head
    styleUrls: ["src/style.css"] //último a ser colocado na head
})

export class HelloWorld{
    yourName: string = "";
    public reset() : void{
        this.yourName = "";
    }
}