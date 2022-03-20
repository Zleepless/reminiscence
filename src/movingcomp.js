class App extends React.Component {
  componentDidMount () {
    let left = document.getElementById('left');
    let right = document.getElementById('right');
    dragula([left, right]);

  }
  
  render () {
    return (
      <div className="container">
        <div id="left" className="container">
					<Card name="URS" body="User Requirements Specification Template 1" type="Design" cat="In Development (0.1)"/>
          <Card name="Design 1" body="Design investigation - Automation" cat="Subject categories: Views1, Views2" type="Design"/>
          <Card name="FAT" body="Factory Acceptance Test" type="Test"/>
          <Card name="SAT" body="Site Acceptance Test" type="Test" cat="In Development (1.0)" extra="Occurrences: 2"/>
        </div>
        
      </div>
    );
  }
}

class Card extends React.Component {
  constructor (props) {
    super(props);
  }
  
  render () {
    return (
      <div className="card">
				<div className="card-left">
					<span className="drag-handle"></span>
					
					<i className={"fal fa-file-alt card-icon " + this.props.type}></i>
					
					<p>{this.props.type}</p>
				</div>
				<div className="card-right">
				
        <div className="card-header">
          <h3>{this.props.name}</h3>
        </div>
        <div className="card-body">
					<p>{this.props.body}</p>
        </div>
				<div className="card-info">
					<p>{this.props.cat}</p>
					<p>{this.props.extra}</p>
					
				</div>	
				</div>
      </div>
    );
  }
}

export default movingcomp;