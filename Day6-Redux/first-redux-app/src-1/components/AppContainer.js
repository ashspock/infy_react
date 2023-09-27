//can be present in AppContainer.js file
import AppRedux  from './AppRedux';
import { connect } from 'react-redux';

import { debitAction , creditAction } from './redux';

const mapStatetoProps = state => ({
    pAccountBalance : state.accountBalance
});
const mapDispatchToProps = {
    debit: debitAction,
    credit: creditAction
}
export default connect(mapStatetoProps,mapDispatchToProps)(AppRedux);
