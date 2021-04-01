// 常用正则表达式

/**
 * ?: ?:x 匹配x但不捕获
 * 
 * ?= x(?=y) 先行断言，匹配y前面的x
 * ?<= (?<=y)x 后行断言，匹配前面是y的x
 * 
 * ?! x(?!y) 正向否定查找，匹配后面不是y的x
 * ?<! (?<!y)x 反向否定查找，匹配前面不是y的x
 */

// 千分位
function replaceThousand(num) {
    const numStr = "" + num;
    const arr = numStr.split(".");

    arr[0] = arr[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");
    return arr.join(".");
}
