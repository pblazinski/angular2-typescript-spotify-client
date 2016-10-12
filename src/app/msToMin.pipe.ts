import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'msToMin'
})

export class MsToMinPipe implements PipeTransform {

    transform(value: any): string {
        var min = Math.floor((value/1000/60) << 0);
        var sec = Math.floor((value/1000) % 60);

        return min + ":" + ((sec < 10) ? '0' : '') + sec;
    }
}