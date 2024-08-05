import { Component } from '@angular/core';

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.css']
})
export class JavaComponent {
  selectedInfo: string | null = null;

  showInfo(category: string) {
    this.selectedInfo = category;
  }
}
