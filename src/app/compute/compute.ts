export function compute(n: number){
    if (n < 2) {
        const nmberIncremet = n++;
        return 2;
    } else {
        return -1;
    }
}