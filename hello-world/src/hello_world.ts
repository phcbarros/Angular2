import {Component} from "angular2/core"

@Component({
    selector: "hello-world",
    templateUrl: "src/hello_world.html"
})

export class HelloWorld{
    yourName: string = "";
    public reset() : void{
        this.yourName = "";
    }
}