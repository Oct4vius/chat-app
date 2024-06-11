import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ImgBoxComponent } from '../../../shared/img-box/img-box.component';
import { UsersSideBar } from '../../../interfaces/sidebar.interfaces';
import { usersMuck } from './muck-data';

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

export class SidebarComponent { 


  public usersChat = signal<UsersSideBar[]>(usersMuck)


}
