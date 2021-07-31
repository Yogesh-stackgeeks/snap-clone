import { GET_CHILD } from '../../config/urls';
import { showError } from '../../helper/helperFunctions';
import {apiGet , apiPut } from '../../utils/utils';




export function getChild() {
    return new Promise((resolve, reject) => {
      apiGet(GET_CHILD)
        .then(res => {
          resolve(res);
        })
        .catch(error => {
          reject(error);
        });
    });
  }