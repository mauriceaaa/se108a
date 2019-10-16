//遞迴不查表
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return 3 * factorial(n - 1) + 2 *factorial(n - 2);
}