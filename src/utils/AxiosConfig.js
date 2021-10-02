import axios from 'axios';
import { Constants } from '../config/appConstants';
import { PrefManager } from '../utils';
import Toast from 'react-native-simple-toast';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.post['Access-Control-Allow-Methods'] ='GET,PUT,POST,PATCH,DELETE,OPTIONS';
axios.defaults.headers.post['Access-Control-Allow-Credentials'] = 'true';
axios.defaults.headers.post['Access-Control-Allow-Headers'] = 'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization';
const instance = axios.create({
  baseURL: Constants.API_BASE_URL_LOCAL,
  timeout: 40000,
});
// async function token(params) {
//   PrefManager.getValue('@token').then(userToken => {
//     console.log('userToken',userToken)
//     instance.defaults.headers.common["x-access-token"] = userToken;
//   }) 
// }
// token()
instance.interceptors.request.use(
  // async (configuration) => {
  //   return PrefManager.getValue('@token')
  //   .then(token => {
  //     axios.defaults.headers.common["ADMIN_TOKEN"]=token;
  //     configuration.timeout = Constants.REQUEST_TIMEOUT;
  //     configuration.timeoutErrorMessage = 'Request Timeout!';
  //     return Promise.resolve(configuration);
  //   })
  //   .catch(() => {
  //     return Promise.resolve(configuration);
  //   });
  async (config) => {
    try {
      var token = await PrefManager.getValue('@token')
    } catch (error) {}
    
    config.headers["x-access-token"] =token
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => {
    if(response.status == 200){
      if(!response.data.flag){
        Toast.show(response.data.message);
      }
    }
    return response;
  },
  (error) => {
    console.log('error axios',error);
    return Promise.reject(error);
  },
);
export default instance;
