import { Directive, ElementRef, HostListener, Input, input } from '@angular/core';

@Directive({
  selector: '[appHighlightColor]',
  standalone: true
})
export class HighlightColorDirective {
@Input() defaultColor:string="yellow"
@Input() highlightColor:string=""
  constructor(private el:ElementRef) { }
  @HostListener("mouseenter")onMouseEnter(){
    this.highlight(this.defaultColor || this.highlightColor  )  }

 @HostListener("mouseleave") onMouseLeave(){
  this.highlight("")
 }



    highlight(color: string) {
    this.el.nativeElement.style.backgroundColor=color;
    }
}
