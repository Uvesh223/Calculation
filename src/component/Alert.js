import _ from 'lodash';
import {Alert as AL} from 'react-native';

function Alert(message, heading, onOk, onCancel, okMsg, cancelMsg) {
  const buttons = [
    {
      text: _.isString(okMsg) && !_.isEmpty(okMsg) ? okMsg : 'Ok',
      onPress: _.isFunction(onOk) ? onOk : () => {},
    },
  ];
  if (_.isFunction(onCancel)) {
    buttons.push({
      text:
        _.isString(cancelMsg) && !_.isEmpty(cancelMsg) ? cancelMsg : 'Cancel',
      onPress: onCancel,
    });
  }
  AL.alert(heading || 'Alert!', message, buttons, {
    cancelable: false,
  });
}

export default Alert;
