export function pow(x: number, n:number){
    if (x > 0 && n == 0) {
        return 1;
    }
    if (n < 0){
        return 0;
    }
    let y = x;
    while (n > 1) {
        y = x*y;
        n--;
    }
    return y;
}