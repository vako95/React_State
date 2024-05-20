import {Component} from 'react'
import './App.css'

class Name extends Component{
constructor(props) {
    super(props)
    this.state = {
        years:0,
        color:'red'
    }
    
}

onChange = () => {
    this.setState(state=>({
        years:state.years +1
    }))
}

oncolor = (e) => {
    this.setState({
        color:e.target.value
    })

}

render(){

    const{name,surname,age} = this.props
    const{years,color} = this.state
    return(
        <div className="app" style={{background:color}}>
            <button onClick={this.onChange}>clicl</button>
            <h1>My Name {name} surname {surname} age {age}</h1>
            <mark>{years}</mark>
            <input type="text"  onChange={(e) => this.oncolor (e,color)} />
        </div>
    )
}
}

function App(){
    return(
        <div className="items">
            <Name name="Vaqif" surname="Huseynov" age="29"/>
        </div>
    )
}

export default App;