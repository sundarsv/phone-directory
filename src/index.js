import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ShowSubscribers from './ShowSubscribers';
import registerServiceWorker from './registerServiceWorker';
import AddSubscriber from './AddSubscriber';
import './common/common.css';
import PhoneDirectory from './PhoneDirectory';

ReactDOM.render(<PhoneDirectory />, document.getElementById('root'));
registerServiceWorker();
