import { PipeTransform, Pipe } from '@angular/core';
import {IAeroplane} from './aeroplane'
 
@Pipe({
    name: 'aeroplaneFilter'
})
export class AeroplaneFilterPipe implements PipeTransform {
    transform (value: IAeroplane[], filterBy: string): IAeroplane[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter(function(value){return (value.type.toLocaleLowerCase().indexOf(filterBy) !== -1)}) : value;
    }

}