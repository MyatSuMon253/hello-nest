import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
   async transform(value: any, {metatype}: ArgumentMetadata) {
        if (!metatype || !this.toValidate(metatype)) {
            return value
        }

        const object= new metatype(value)
        const errors = await validate(object)
    }

    private toValidate (metatype: Function): boolean {
        const types: Function[] = [String, Boolean, Number, Array, Object]

        return !types.includes(metatype)
    }
}
