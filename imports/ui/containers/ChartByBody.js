import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Documents from '../../api/documents/documents.js';
import ChartByBody from '../components/ChartByBody';
import Loading from '../components/Loading.js';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('documents.list');
  if (subscription.ready()) {
    const documents = Documents.find().fetch();
    onData(null, { documents });
  }
};

export default composeWithTracker(composer, Loading)(ChartByBody);
