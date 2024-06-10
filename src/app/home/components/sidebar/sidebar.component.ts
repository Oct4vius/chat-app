import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ImgBoxComponent } from '../../../shared/img-box/img-box.component';

@Component({
  selector: 'home-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    ImgBoxComponent
  ],
  templateUrl: './sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent { }
