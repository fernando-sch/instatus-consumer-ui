import axios from 'axios';

import { apiBaseUrl } from 'config';

export const axiosClient = axios.create({ baseURL: apiBaseUrl });
