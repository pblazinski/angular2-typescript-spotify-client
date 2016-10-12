import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'msToMin'
})

export class MsToMinPipe implements PipeTransform {
    transform(value: number): string {
        let minutes = Math.floor(value / 60000);
        let seconds = ((value % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }
}