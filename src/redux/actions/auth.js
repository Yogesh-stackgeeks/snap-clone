import store from '../store';
import {
  setUserData,
  apiPost,
  clearUserData,
  apiPut,
  apiGet,
} from '../../utils/utils';
import types from '../types';
import {
  LOGIN_API,
  SIGNUP_API,
  FORGOT_PASSWORD,
  VERIFY_OTP,
  RESEND_OTP,
  IMAGE_UPLOAD,
  ADD_CHILD,
  SEARCH_CHILD,
  GET_POLICY,
  PROFILE_UPDATE,
  SEARCH_PARENT,
  ADD_PARENT,
  UPDATE_PASSWORD,
} from '../../config/urls';
import {showError, showSuccess} from '../../helper/helperFunctions';
import { showMessage } from 'react-native-flash-message';
const {dispatch} = store;

export const saveUserData = data => {
  dispatch({
    type: types.LOGIN,
    payload: data,
  });
};

export const userRegister = (data, props) => {
  return new Promise((resolve, reject) => {
    apiPost(SIGNUP_API, data)
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
        showError(error.message);
      });
    // return Promise;
  });
};

export const userLogin = data => {
  return new Promise((resolve, reject) => {
    apiPost(LOGIN_API, data)
      .then(res => {
        setUserData(res.data).then(suc => {
          resolve(res);
          saveUserData(res.data);
        });
      })
      .catch(error => {
        reject(error);
      });
  });
};

export function forgotPassword(data) {
  return new Promise((resolve, reject) => {
    apiPost(FORGOT_PASSWORD, data)
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
        showError(error.message);
      });
  });
}

export function verifyOtp(data, headers) {
  return new Promise((resolve, reject) => {
    apiPut(VERIFY_OTP, data, headers)
      .then(res => {
        resolve(res);
        showSuccess('OTP Verified');
      })
      .catch(error => {
        reject(error);
        showError(error.message);
      });
    // return Promise;
  });
}

export function profileUpdate(data, headers) {
  return new Promise((resolve, reject) => {
    apiPut(PROFILE_UPDATE, data, headers)
      .then(res => {
        setUserData(res.data).then(suc => {
          resolve(res);
          // saveUserData(res.data);
        });
      })

      .catch(error => {
        reject(error);
        showError(error.message);
      });
    // return Promise;
  });
}

export function resendOtp(data2, headers) {
  return new Promise((resolve, reject) => {
    apiPut(RESEND_OTP, data2, headers)
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
        showError(error.message);
      });
    // return Promise;
  });
}

export function uploadImage(data) {
  const headers = {'Content-Type': 'multipart/form-data'};
  return new Promise((resolve, reject) => {
    apiPost(IMAGE_UPLOAD, data, headers)
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
        showError(error.message);
      });
    // return Promise;
  });
}

export function addChild(data, headers) {
  return new Promise((resolve, reject) => {
    apiPost(ADD_CHILD, data, headers)
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
        showError(error.message);
      });
    // return Promise;
  });
}

export function addParent(data, headers) {
  return new Promise((resolve, reject) => {
    apiPost(ADD_PARENT, data, headers)
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);

      });
    // return Promise;
  });
}

export function parentSearch(data, headers) {
  return new Promise((resolve, reject) => {
    apiGet(SEARCH_PARENT + '?search=' + data, headers)
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
        showError(error.message);
      });
    // return Promise;
  });
}

export function childSearch(data, headers) {
  return new Promise((resolve, reject) => {
    apiGet(SEARCH_CHILD + '?search=' + data, headers)
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
        showError(error.message);
      });
    // return Promise;
  });
}

export function getPolicy() {
  return new Promise((resolve, reject) => {
    apiGet(GET_POLICY)
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
    // return Promise;
  });
}

export function updatePassword(data) {
  return new Promise((resolve, reject) => {
    apiPut(UPDATE_PASSWORD , data)
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
    // return Promise;
  });
}







export function logout() {
  dispatch({type: types.CLEAR_REDUX_STATE});
  clearUserData();
}
