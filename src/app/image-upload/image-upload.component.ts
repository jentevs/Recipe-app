import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent {
  @Output() fileSelected = new EventEmitter<string>();

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    const imageFileName: string = file.name;
    const imageFilePath: string = `./assets/images/${imageFileName}`;

    this.fileSelected.emit(imageFilePath);
  }
}
