import { CommonModule } from '@angular/common';
import { AfterContentChecked, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
})
export class HomeComponent implements AfterContentChecked  {
  
  @ViewChild('P5body')
  public fatherDiv?: ElementRef<HTMLDivElement>;

  public childDivHeight: number = 0;

  ngAfterContentChecked(): void {
    console.log(this.fatherDiv?.nativeElement.offsetHeight)

    if(this.fatherDiv)

    // this.childDivHeight = this.fatherDiv.nativeElement.offsetHeight
    
    // this.fatherDiv.nativeElement.style.borderBottomWidth = this.childDivHeight + 'px'
    
    console.log(this.fatherDiv.nativeElement.offsetHeight)
  }


  

}
