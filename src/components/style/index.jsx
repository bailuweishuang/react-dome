import createReactClass from 'create-react-class';
import hoistNonReactStatics from 'hoist-non-react-statics';

export default target => {
  return Component => hoistNonReactStatics(createReactClass({
  	componentWillMount() {
  		if(target && target.use){
  			target.use();
  		}
  	},
  	componentWillUnmount() {
  		if(target && target.unuse){
  			target.unuse();
  		}
  	},
  	render() {
      const { ref } = React.forwardRef((props, ref) => ({ ref }));
  		return <Component ref={ref} {...this.props}/>
  	}
  }), Component)
}
