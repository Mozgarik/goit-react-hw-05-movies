import { toast } from 'react-hot-toast';
import PropTypes from 'prop-types';

export const ErrorToast = (msg) => toast.error(msg)

Notification.ErrorToast = {
  msg: PropTypes.string.isRequired,
};