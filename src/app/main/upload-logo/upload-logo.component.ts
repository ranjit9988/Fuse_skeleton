import { Component, OnInit } from '@angular/core';
import { UploadEvent, UploadFile, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { HttpHeaders, HttpClient, HttpRequest, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-upload-logo',
  templateUrl: './upload-logo.component.html',
  styleUrls: ['./upload-logo.component.scss']
})
export class UploadLogoComponent implements OnInit {

  constructor(private http: HttpClient) { }
  public files: UploadFile[] = [];
  public progress: number;
  public message: string;

  public dropped(event: UploadEvent) {
    this.files = event.files;
    for (const droppedFile of event.files) {
 
      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
 
          // Here you can access the real file
          console.log(droppedFile.relativePath, file);
 
          
          // You could upload it like this:
          const formData = new FormData()
          formData.append('logo', file)
 
          // Headers
          const headers = new HttpHeaders({
            // 'security-token': 'mytoken'
          })
 
          this.http.post('http://localhost:63405/api/Upload', formData, { headers: headers })
          .subscribe(data => {
            // Sanitized logo returned from backend
          })
          
 
        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  public fileOver(event) {
    console.log(event);
  }

  public fileLeave(event) {
    console.log(event);
  }

  ngOnInit() {
  }

}
