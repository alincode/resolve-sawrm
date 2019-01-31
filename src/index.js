module.exports = {
  type: 'sawrm',
  parser: require('./parser'),
  resolver: require('./resolver'),
  match: /^(bzz[ri]?:\/\/?(.*))$/
};