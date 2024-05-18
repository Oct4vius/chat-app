import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'default-body',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './default-body.component.html',
  styleUrl: './default-body.component.scss' ,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultBodyComponent { 

  @Input()
  public customStyles: string = ''

}
