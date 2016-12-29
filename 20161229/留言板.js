let Parent=React.createClass({
    getInitialState(){
        return {words:[]};
    },
    fn(){

       var a= this.refs.myTxt.value;
        this.state.words.push(a);
       this.setState({words:this.state.words})
        this.refs.myTxt.value=null
    },
    render(){
        return (
            <div className="panel-default">
                <div className="panel-heading">
                    <h1>留言板</h1>
                </div>
                <div className="panel-body">
                    <ul className="list-group">
                        {
                            this.state.words.map(function (item,index)
                            {
                               return <li key={index} className="list-group-item">{item}</li>
                            })
                        }
                    </ul>
                </div>
                <div className="panel-footer">
                    <input type="text" ref="myTxt"/>
                    <button onClick={this.fn}>提交</button>
                </div>
            </div>
        )
    }
});
ReactDOM.render(<Parent/>,div)
