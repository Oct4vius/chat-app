import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CutNamesPipe } from '../../../pipes/cut-names.pipe';

@Component({
  selector: 'shared-img-box',
  standalone: true,
  imports: [
    CommonModule,
    CutNamesPipe
  ],
  styleUrls: ['./img-box.component.scss'],
  templateUrl: './img-box.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImgBoxComponent {

  @Input({ required: true })
  public src: string = ''

  @Input()
  public alt: string = ''

  @Input()
  public classes: string = ''

  @Input()
  public userName?: string;

}
