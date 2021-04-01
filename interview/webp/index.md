### 判断是否支持

```javascript
function isSupportWebp() {
    // save the results supported by the browser
    var flag = "0";
    // get canvas element
    var canvasEL = document.createElement("canvas");
    // get html element
    var docEl =
        document.documentElement || document.getElementsByTagName("html")[0];
    // determine whether the browser supports canvas elements
    if (canvasEL.getContext && canvasEL.getContext("2d")) {
        flag =
            canvasEL.toDataURL("image/webp").indexOf("image/webp") > -1
                ? "1"
                : "0";
    }
    // set data-webp attribute for html
    docEl.setAttribute("data-webp", flag);
    // return supported result
    return flag;
}

isSupportWebp();
```
