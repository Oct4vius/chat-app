import { CommonModule } from '@angular/common';
import { AfterViewChecked, ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './auth-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthLayoutComponent implements AfterViewChecked {

  @ViewChild('title') titleElenmt?: ElementRef<HTMLHeadingElement>;
  @ViewChild('thediv') theDiv?: ElementRef<HTMLDivElement>

  ngAfterViewChecked(): void {

    // if(!this.titleElenmt?.nativeElement || !this.theDiv?.nativeElement) return

    // const divRect = this.theDiv?.nativeElement.getBoundingClientRect();
    // const h1Rect = this.titleElenmt?.nativeElement.getBoundingClientRect();

    // // Check if the div overlaps the h1
    // const overlap = !(divRect.right < h1Rect.left ||
    //                   divRect.left > h1Rect.right ||
    //                   divRect.bottom < h1Rect.top ||
    //                   divRect.top > h1Rect.bottom);

    // // If they overlap, change the color of the h1
    // if (overlap) {
    //   this.titleElenmt.nativeElement.style.color = 'white'; // Replace 'newColor' with your desired color
    // }

  }
}
