import { Injectable, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../components/dialog/dialog.component';
import { firstValueFrom, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) { }

  openDialog(html: TemplateRef<HTMLElement>, title?: string, btnClass?: string) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {html: html, title: title, btnClass: btnClass },
      width: '40vw',
    });

    dialogRef.afterOpened().subscribe(() => {
      console.log(title);
      
    });

    /* dialogRef.afterClosed().subscribe((confirm: boolean | undefined) => { // No es necesario desuscribirse, ya que se completan solos como en HttpClient
      if(confirm) {
        console.log('The dialog was closed', confirm);
      } else {
        console.log('Adios');
      }
    }); */

    return firstValueFrom(dialogRef.afterClosed()); // Convertimos el observable en una promesa, el cual se ejecuta al cerrar el modal
  }

}
