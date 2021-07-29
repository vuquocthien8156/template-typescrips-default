import axios from 'axios';
import {Settings} from '../resources';

const api = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: Settings.BASE_URL,
});

export const $axios = {api};
