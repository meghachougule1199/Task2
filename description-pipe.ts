import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name:'myMainNews'
})


export class DescriptionPipe implements PipeTransform {
    transform(value: any) {
        let about:string = value+'';

        let formattedabout:string = '';

        formattedabout = about.slice(0,50)+'...';
                                   
                                          
        console.log('pipe method '+formattedabout);
        return formattedabout;

    }
}