import { Directive, HostBinding, HostListener } from '@angular/core'

@Directive({
	selector: '[imageHover]',
})

export class ImageHover {

  @HostBinding('class.hovered') isHovered = false;
  
  @HostListener('mouseenter') onMouseEnter() {
  	this.isHovered = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
  	this.isHovered = false;
  }

}