export default(WrappedComponent) => {
    class Third extends Component {
        constructor(props){
            super(props);
            this.state={
                ac: "王八"
            };
        };
        componentWillMount();
        render(){
            return <WrappedComponent useName={this.state.ac}></WrappedComponent>
        }
    };
    return Third
}