import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elementRef: ElementRef) { }

  @HostListener('click')
  onClick() {
    this.highlightTask();
  }

  private highlightTask() {
    this.elementRef.nativeElement.style.backgroundColor = 'yellow';
  }

}
