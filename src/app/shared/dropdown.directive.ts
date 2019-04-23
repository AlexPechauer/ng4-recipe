import { Directive, HostListener, HostBinding } from '@angular/core';

// Must be added to app.module in order to use this directive.
@Directive ({
    selector: '[appDropdown]'
})

export class DropdownDirective {
    // Attaches the directive to the class.open element.
    @HostBinding('class.open') isOpen = false;

    // Listens to the DOM for a 'click' event and runs func toggleOpen()
    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }
}
