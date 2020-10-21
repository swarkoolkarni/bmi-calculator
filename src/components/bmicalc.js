import React from 'react';

class BMICalc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age:'',
            height:'',
            weight:'',
            BMIndex:'',
            errorHeight:'',
            errorWeight:''
        }
    }

    validation() {
        let allOk = true;

        if(this.state.height === "") {
            allOk = false;
            this.setState({
                errorHeight:'Enter Height'
            })
        }
        else if(this.state.weight === "") {
            allOk = false;
            this.setState({
                errorWeight:'Enter Weight'
            })
        }

        if(allOk) {
            this.calcBMI();
        }
    }

    calcBMI() {
       
        let weight = (this.state.weight);
        let height = (this.state.height);
        
        var bmi = Math.round(weight / Math.pow(height, 2) * 10000);

        this.setState({
            BMIndex: bmi
        }, console.log(bmi))
    }

    clearData() {
        this.setState({
            height:'',
            weight:'',
            BMIndex:''
        })
    }

    render() {
        return (
            <div className="container" style={{border:'1px solid gray',backgroundColor:'#E5E7F0', borderRadius:10, height: document.documentElement.clientHeight - 90}}>
                <div className="row" style={{marginTop: 10, marginBottom: 10}}>
                    <div className="col-xs-12 col-sm-12 sol-md-12 col-lg-6 m-b-15">
                        <label>Height(CM):</label>
                        <label style={{color:'red'}}>{this.state.errorHeight}</label>
                        <input value={this.state.height}
                               type="text"
                               onChange={(event) => {
                                   this.setState({
                                       height: event.target.value,
                                       errorHeight:''
                                   })
                               }}
                               className="form-control"
                        />
                    </div>
                    <div className="col-xs-12 col-sm-12 sol-md-12 col-lg-6 m-b-15">
                        <label>Weight(KG):</label>
                        <label style={{color:'red'}}>{this.state.errorWeight}</label>
                        <input value={this.state.weight}
                               type="text"
                               onChange={(event) => {
                                    this.setState({
                                        weight: event.target.value,
                                        errorWeight:''
                                    })
                               }}
                               className="form-control"
                        />
                    </div>
                </div>    
            
                <div className="row" style={{marginTop: 20}}> 
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 m-b-15">
                        <button style={{width: '10rem', backgroundColor:'#5466f4', color:'#ffffff',
                                        height: 35, float:'right'}}
                                onClick={()=> this.validation()}>
                                    CALCULATE
                        </button>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 m-b-15">
                        <button style={{width: '10rem', height: 35,backgroundColor:'#5466f4', color:'#ffffff',
                                float:'left'}}
                                onClick={()=> this.clearData()}>
                                    CLEAR
                        </button>
                    </div>
                </div>

                <h4 style={{marginTop: 10}}>BMI = {this.state.BMIndex} </h4>
                     
            </div>
        )
    }
}

export default BMICalc;