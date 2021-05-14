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
          if (typeof func === 'function') this.value = func(this.value);
          else this.value = undefined;
        });
      }, []);
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
      }, []);
    };

    try {
      cb(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  then(fulfilledCb, rejectedCb) {
    this.fulfillArr.push(fulfilledCb);
    if (rejectedCb) this.rejectArr.push(rejectedCb);
    return this;
  }

  catch(rejectedCb) {
    this.rejectArr.push(rejectedCb);
    return this;
  }
}

new MyPromise((resolve, reject) => {
  resolve(1);
})
  .then(res => console.log(1, res))
  .then(res => console.log(2, res))
  .catch(err => console.log(3, err));
