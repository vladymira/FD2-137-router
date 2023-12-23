import { ProductInfo } from "../models/ProductInfo";

export function htmlElementPars(template: string, el: ProductInfo): string {
    return template
    .replace(/(:)##([A-zА-я]*?)id##/i, (_, gr1, gr2) =>  el.id.toString())
    .replace(/##id##/, el.id.toString())
    .replace('##title##', el.title
    .replace(/^[A-zА-я]/,
        (res) => res.toUpperCase()))
        .replace('##price##', new Intl.NumberFormat('ru-by', { style: 'currency', currency: 'BYN' }).format(
            Number(el.price),
        ))
        .replace('Br', 'BYN').replaceAll('##','');
}