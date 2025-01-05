import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-default-login-layout',
  imports: [],
  templateUrl: './default-login-layout.component.html',
  styleUrl: './default-login-layout.component.scss'
})
export class DefaultLoginLayoutComponent {

  @Input() title!: string;
  @Input() primaryButtonText!: string;
  @Input() secondaryButtonText!: string;

  @Output() submitedForm = new EventEmitter();

  submit(): void {
    this.submitedForm.emit();
  }

}
