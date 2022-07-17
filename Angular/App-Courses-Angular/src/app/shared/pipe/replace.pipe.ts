import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'space'
})
export class ReplacePipe implements PipeTransform{

    transform(value: string, char: string, ValueToReplace: string) {
        return value.replace(char, ValueToReplace)
    }
}