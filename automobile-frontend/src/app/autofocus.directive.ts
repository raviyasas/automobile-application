import { AfterViewInit, Directive, ElementRef, Input } from "@angular/core";

@Directive({
    selector: '[autofocus]'
})
export class AutoFocusDirective implements AfterViewInit {

    @Input() public appAutoFocus!: boolean;

    public constructor(private el: ElementRef) {
    }

    public ngAfterViewInit() {
        this.el.nativeElement.focus();
    }

}