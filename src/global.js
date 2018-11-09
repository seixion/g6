/**
 * @fileOverview global config
 * @author huangtonger@aliyun.com
 */
const version = require('./version');

module.exports = {
  track: true,
  defaultNodeSize: 40,
  labelStyle: {
    fill: '#595959',
    textAlign: 'center',
    textBaseline: 'middle'
  },
  groupStyle: {
    stroke: '#CED4D9',
    fill: '#F2F4F5',
    radius: 2
  },
  groupBackgroundPadding: [ 40, 10, 10, 10 ],
  updateDuration: 800,
  enterDuration: 800,
  leaveDuration: 800,
  updateEasing: 'easeQuadOut',
  enterEasing: 'easeQuadOut',
  leaveEasing: 'easeQuadOut',
  version
};
