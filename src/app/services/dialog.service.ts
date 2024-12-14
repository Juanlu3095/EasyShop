import { Injectable, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../components/dialog/dialog.component';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { SpinnerComponent } from '../components/spinner/spinner.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) { }

  openDialog(html: TemplateRef<HTMLElement>, title?: string, btnClass?: string, btnCancel?: string) { // Le pasamos como parámetro la referencia del componente a abrir como modal(html)
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {html: html, title: title, btnClass: btnClass, btnCancel: btnCancel },
      width: '40vw',
    });

    dialogRef.afterOpened().subscribe(() => {
      //console.log(title);
      
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

  // Muestra la ventana con el spinner cargando
  openSpinner() {
    this.dialog.open(SpinnerComponent, { disableClose: true }) // true hace que no se pueda cerrar el dialog pulsando fuera del mismo
  }

  // Cerrar dialogs
  closeAll() {
    this.dialog.closeAll();
  }

}
