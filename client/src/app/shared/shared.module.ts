import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';

@NgModule({
  declarations: [SpinnerComponent, ErrorMessageComponent],
  imports: [CommonModule],
  exports: [],
})
export class SharedModule {}
