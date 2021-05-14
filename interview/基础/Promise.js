class MyPromise {
  constructor(cb) {
    this.status = 'pending';
    this.value = null;
    this.fulfillArr = [];
    this.rejectArr = [];

    const resolve = result => {
      if (this.status !== 'pending') return;
      setTimeout(() => {
        this.value = result;
        this.status = 'fulfilled';
        this.fulfillArr.forEach(func => {
          if (typeof func === 'function') {
            try {
              this.value = func(this.value);
            } catch (error) {
              this.value = error;
              this.rejectArr.forEach(func => {
                if (typeof func === 'function') this.value = func(this.value);
                else this.value = undefined;
              });
            }
          } else this.value = undefined;
        });
      }, 0);
    };

    const reject = error => {
      if (this.status !== 'pending') return;
      setTimeout(() => {
        this.value = error;
        this.status = 'rejected';
        this.rejectArr.forEach(func => {
          if (typeof func === 'function') this.value = func(this.value);
          else this.value = undefined;
        });
      }, 0);
    };

    try {
      cb(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  then(fulfilledCb, rejectedCb) {
    if (fulfilledCb) this.fulfillArr.push(fulfilledCb);
    if (rejectedCb) this.rejectArr.push(rejectedCb);
    return this;
  }

  catch(rejectedCb) {
    this.then(null, rejectedCb);
    return this;
  }
}

MyPromise.resolve = value => {
  // if (value instanceof MyPromise) {
  //   return value;
  // }

  return new MyPromise(function (resolve, reject) {
    resolve(value);
  });
};

MyPromise.reject = err => {
  return new MyPromise(function (resolve, reject) {
    reject(err);
  });
};

new MyPromise((resolve, reject) => {
  resolve(1);
})
  .then(res => {
    console.log(1, res);
    return 123;
  })
  .then(res => console.log(2, res))
  .catch(err => console.log(3, err));
