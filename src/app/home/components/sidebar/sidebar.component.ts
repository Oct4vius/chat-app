import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ImgBoxComponent } from '../../../shared/img-box/img-box.component';
import { UsersSideBar } from '../../../interfaces/sidebar.interfaces';
import { usersMuck } from './muck-data';
import { Router } from '@angular/router';

@Component({
  selector: 'home-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    ImgBoxComponent,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SidebarComponent { 

  private router = inject(Router)
  
  public currentUser = computed<string>(() => "Octavio Luperón ")
  public usersChat = computed<UsersSideBar[]>(() => usersMuck)

  public handleClickUser = (index: number) => {
    this.router.navigate([`chat/${index}`])
  }

}
