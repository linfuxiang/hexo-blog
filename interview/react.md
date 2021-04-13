挂载时，触发 constructor，创建 reactroot，创建虚拟 dom 树，然后使用时间分片的方式，逐个生成 fiber 节点；
如果触发更新，会自动生成一个新的 workinprogress fiber 树，对同级的节点进行比较

1.  -如果组件或元素不一样，会从上往下全部替换成新的，标记副作用为替换 -如果是同一类型的元素，比对属性是否一致 -如果是同个父元素下的子节点，会对他们进行 key 属性的对比，如果存在在之前的树中，就直接移位置，如果不是，就直接生成新的子节点 3.向上回溯，生成最终的 side-effect 的 effectList，最终一次性更新所有需要更新的节点，workinprogress fiber 变成 current fiber
    最终会一次性生成或更新 dom

组件的生命周期： 1.在事件或生命周期 setState 触发更新时，通过队列的方式实现把多次 setState 合并成一次，如果不是在这种事务机制下调用 setState 就是同步更新 2.接着调用 shouldComponentUpdate 方法进行数据浅比对判断是否需要更新，如果是 purecomponent，则会自动进行浅比对 3.如果需要更新组件，进行 render，生成最终的 fiber 树，然后触发 getSnapshotBeforeUpdate 生命周期，然后同步更新 dom，更新完成后，触发 componentDidUpdate 生命周期
