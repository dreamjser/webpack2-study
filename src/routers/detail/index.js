module.exports = {
  path: '/detail(/:id)',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/detail'))
    }, 'detail')
  }
}
