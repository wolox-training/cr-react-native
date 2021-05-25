import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { reactotronRedux } from 'reactotron-redux';
import tronsauce from 'reactotron-apisauce';
import api from '@config/api';

const reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure({
    name: 'WBooks'
  })
  .use(reactotronRedux())
  .use(tronsauce())
  .useReactNative()
  .connect();

api.addMonitor(Reactotron.apisauce);

export default reactotron;
