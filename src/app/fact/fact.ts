export function fact(n: number){
    if (n == 0) {
        var r = 1;
        return r;
    }
    if (n < 0 || n >= 16) {
        var r = 0;
        return r;
    }
    var r:number = n * fact(n-1);
    return r;
}