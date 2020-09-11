import React, {Component} from 'react';

class Bodymass extends React.Component {
    constructor(){
        super();
        this.state = {
            tinggi: null,
            berat: null,
            bmi: null,
            status: ""
        }
    }

    hitung = (e) => {
        e.preventDefault();
        const tinggi = parseInt(this.refs.tinggi.value)/100;
        const berat = parseInt(this.refs.berat.value);
        let bmi;
        let status;

        bmi = berat / Math.pow(tinggi,2);
        console.log(bmi);

        if (bmi >= 30.0){
            status = "Kegemukan / Obesitas"
        } else if (bmi >= 25.0){
            status = "Kelebihan Berat Badan"
        } else if (bmi >= 18.5){
            status = "Normal / Ideal"
        } else {
            status = "Kekurangan Berat Badan"
        }

        this.setState({
            tinggi, berat, bmi, status
        });

        this.refs.tinggi.value = null;
        this.refs.berat.value = null;
    }

    render(){
        return(
            <div className="container">
                <div class="card">
                    <h5>Aplikasi Body Mass Index</h5>
                </div>
                <form onSubmit={this.hitung}>
                    <div class="card">
                        <div class="card-header">
                            Tinggi :
                        </div>
                        <div class="card-body">
                            <input type="number" ref="tinggi" className="form-control"></input>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            Berat :
                        </div>
                        <div class="card-body">
                            <input type="number" ref="berat" className="form-control"></input>
                        </div>
                    </div>
                    
                    <button className="btn btn-dark mb-2">Hasil</button>
                </form>
                <p>{this.state.status}</p>
            </div>
        )
    }
}

export default Bodymass;