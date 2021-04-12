Function.prototype.myCall = function (context, ...args) {
  context = context || window;
  const key = Symbol();
  context[key] = this;
  const result = context[key](...args);
  delete context[key];
  return result;
};

Function.prototype.myApply = function (context, args) {
  context = context || window;
  const key = Symbol();
  context[key] = this;
  let result;
  if (args) {
    result = context[key](...args);
  } else {
    result = context[key]();
  }
  delete context[key];
  return result;
};

Function.prototype.myBind = function (context, ...args) {
  const originFunc = this;
  // 返回一个函数
  return function F(..._args) {
    // 因为返回了一个函数，我们可以 new F()，所以需要判断
    if (this instanceof F) {
      return new originFunc(...args, ..._args);
    }
    return originFunc.apply(context, [...args, ..._args]);
  };
};
