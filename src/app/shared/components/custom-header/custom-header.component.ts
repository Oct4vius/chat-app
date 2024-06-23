import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'shared-custom-header',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './custom-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomHeaderComponent { 

  @Input({required: true}) title!: string;

}
