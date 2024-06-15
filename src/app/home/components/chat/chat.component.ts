import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, effect, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersSideBar } from '../../../interfaces/sidebar.interfaces';
import { usersMuck } from '../sidebar/muck-data';
import { CutNamesPipe } from '../../../pipes/cut-names.pipe';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    CommonModule,
    CutNamesPipe
  ],
  templateUrl: './chat.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatComponent implements OnInit {
  
  private router = inject(ActivatedRoute)
  public curretChat = signal<UsersSideBar>({} as UsersSideBar)


  ngOnInit(): void {
    this.router.params.subscribe({
      next: (value) => {
        const { id } = value
        this.curretChat.set(usersMuck[id])
      },
    })    
  
  } 
}
