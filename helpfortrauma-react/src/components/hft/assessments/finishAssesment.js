import React, { Component } from 'react';
import EventService from '../../../services/EventService';
const AssService = new EventService();
class FinishAssesment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }

    componentDidMount() {
        this.setState({
            result: this.props.location.state.result,
            assId: this.props.location.state.assId,
            assName: this.props.location.state.assName
        }, function () {
            console.log('xxxxx xxxxxxxxxx xxxxxxxxxxx ', this.state.assName
            );
            this.setState({
                keys: [...this.state.result.keys()]
            }, function () {
                this.setState({
                    loading: false
                })
            })
        })
    }

    submitAss = () => {
        console.log('xxxx xxx xx xx map is ', this.state.result);
        let ansMap = this.state.result
        let reqData = {
            ansMap: JSON.stringify([...ansMap]),
            assId: this.state.assId,
            assName: this.state.assName
        }

        AssService.saveAssResult(reqData)
            .then(res => {
                console.log('xxxxx xxxxx xxxxxxx res is ', res);
            }).catch(err => {
                console.log('xxxxx xxxxx xxxxxxx err is ', err);
            });
    }

    render() {
        if (this.state.loading) {
            return 'Loading...'
        }
        return (
            <div>
                <div className="row form-group head_div">
                    <div className="pull-left"><span className="head_title">Summary</span></div>
                </div>

                <table className="table table-bordered">
                    <tbody>
                        {
                            this.state.keys.map((val, index) =>
                                <tr key={index}>
                                    <th>Ques.{index + 1}</th> <th> {this.state.result.get(val).ques}</th>
                                    <td> {this.state.result.get(val).ans} </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <div className="text-center">
                    <button className="button btn btn-success" onClick={this.submitAss}>Submit</button>
                </div>
            </div>
        );
    }
}

export default FinishAssesment;
