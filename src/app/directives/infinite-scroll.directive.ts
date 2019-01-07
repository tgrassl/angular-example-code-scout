import { Directive, HostListener, Input, Output, ElementRef, EventEmitter } from '@angular/core';

@Directive({
  selector: '[infiniteScroll]'
})
export class InfiniteScrollDirective {

  @Output()
  canGetNewData: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input()
  data: any[];

  @Input()
  limit: number;

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const scrollPosition = window.pageYOffset;
    const currentItemsAmount = this.data.length;

    if (window.innerHeight + scrollPosition >= document.body.offsetHeight && currentItemsAmount < this.limit) {
        this.canGetNewData.emit(true);
    }
  }
}
