import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'text-box',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './text-box.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextBoxComponent { 
  @Input()
  public customStyles: string = ''

  
}
