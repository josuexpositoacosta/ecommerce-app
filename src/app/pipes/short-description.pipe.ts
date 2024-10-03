import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'shortDescription' })
export class ShortDescriptionPipe implements PipeTransform {
    transform(valor: string, longitudMaxima: number = 15): string {
        return valor.length > longitudMaxima ? valor.substring(0, longitudMaxima) + '...' : valor;
    }
} 