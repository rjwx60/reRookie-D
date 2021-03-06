import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userinfoActions from '../../../redux/action/userinfo';

import Header from '../../../component/Header';
import Footer from '../../../component/Footer';
import Share from './Share';

class MobileShare extends React.Component {
	constructor (props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render() {
		return (
			<div>
				<Header></Header>
				<Share userinfo={this.props.userinfo}></Share>
				<Footer></Footer>
			</div>
		)
	}
	componentDidMount(){
		// 可以通过 this.props 与 state 和 action 互动
		// console.log(this.props.userinfo)
	}
}
// module.exports = PCShare
function mapStateToProps(state) {
	return {
		userinfo: state.userinfo
	}
}
function mapDispatchToProps(dispatch) {
	return {
		userinfoActions: bindActionCreators(userinfoActions,dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MobileShare)