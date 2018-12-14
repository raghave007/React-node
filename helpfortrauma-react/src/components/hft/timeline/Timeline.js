import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Timeline, TimelineEvent } from 'react-event-timeline';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import AuthService from '../../../services/AuthService';
import DCanvasService from '../../../services/DCanvasService';
import EventService from '../../../services/EventService';
import './Timeline.css';

const Auth = new AuthService();
const event = new EventService();
const DCanvasSer = new DCanvasService();


class TimeLine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      showModalDialog: false,
      eventTitleHd: 'Add Event',
      eventButton: 'Create',
      eventIdForDel: '',
      id: '',
      name: '',
      age: '',
      description: '',
      events: []
    };

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.openDialog = this.openDialog.bind(this);

    this.addEventVo = this.addEventVo.bind(this);
    this.getAllEvent = this.getAllEvent.bind(this);
    this.getDateFormat = this.getDateFormat.bind(this);
    this.confirmBtn = this.confirmBtn.bind(this);
    this.closeDialog = this.closeDialog.bind(this);

  }

  componentDidMount() {
    if (!Auth.loggedIn()) {
      this.props.history.replace('/login');
    } else {
      this.getAllEvent();
    }
  }

  openAddEvent() {

    this.setState({

      id: '',
      name: '',
      age: '',
      description: '',
      eventTitleHd: 'Add Event',
      eventButton: 'Create',

    });
    this.open();


  }
  openDialogEvent(id, index) {
    this.setState({ eventIdForDel: id })
    this.openDialog();
  }

  _downloadPdf(eventId) {
    DCanvasSer.getDrawingPdf(eventId);
  }

  openEditEvent(event) {
    this.setState({

      id: event.id,
      name: event.name,
      age: event.age,
      description: event.description,
      eventTitleHd: 'Update Event',
      eventButton: 'Update',
    });

    this.open();

  }

  launchCnavs(event) {
    localStorage.setItem('event', JSON.stringify({
      eventId: event.id,
      eventTitle: event.name
    }));
  }

  getDateFormat(date) {
    const eventDate = new Date(date)
    const month = eventDate.getMonth() + 1;
    const day = eventDate.getDate();
    const year = eventDate.getFullYear();
    return month + "/" + day + "/" + year;

  }

  confirmBtn() {
    this._deleteEventById(this.state.eventIdForDel);
  }

  openDialog() {
    this.setState({ showModalDialog: true });
  }

  closeDialog() {
    this.setState({ showModalDialog: false, eventIdForDel: '' });
  }

  open() {
    this.setState({ showModal: true });
  }

  close() {
    this.setState({ showModal: false });
  }

  getAllEvent() {
    event.getEventsById(event.getProfile().id)
      .then(res => {
        this.setState({ events: res.data.body.reverse() });
      }).catch(err => {
        console.log('xxxxxxx xxxxxxxxxxxx xxxxxxxxxxxxxx error from comp ', err);
      });
  }

  _deleteEventById(id, index) {
    event.deleteEventById(id)
      .then(res => {
        this.getAllEvent();
        this.closeDialog();
      }).catch(err => {
        console.log('xxxxxxxxxx xxxxxxxxx err from com ' + err)
      });
  }

  addEventVo() {
    const eventVo = {
      'id': this.refs.id.value,
      'usrid': event.getProfile().id,
      'name': this.refs.name.value,
      'age': this.refs.age.value,
      'description': this.refs.description.value
    }




    event.addEvent(eventVo)
      .then(data => {
        this.getAllEvent();
        this.close();
      }).catch(err => {
        console.log('xxxxx xxxxx ', err);
      });
  }



  render() {

    return (
      <div>
        <div className="row form-group head_div">
          <div className="pull-left"><span className="head_title">Timeline</span></div>
          <div className="pull-right event_btn"><button type="button" onClick={this.openAddEvent.bind(this)} className="btn btn-info">
            <i className="fa fa-plus"> </i> <span>Add Event To Timeline</span>
          </button></div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="panel-group">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a >About the Trauma Timeline</a>
                  </h4>
                </div>
                <div className="panel-collapse collapse in">
                  <div className="panel-body panel-body-video">
                    <div style={{ padding: "56.25% 0 0 0", position: "relative" }}><iframe src="https://player.vimeo.com/video/224860735?byline=0&portrait=0" style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }} frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                  </div>
                </div>
              </div>
            </div>
            <div className="panel-group">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a >Frequest Trauma Events</a>
                  </h4>
                </div>
                <div className="panel-collapse collapse in">
                  <p className="panel-body text_cont">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                </div>
              </div>
            </div>


          </div>
          <div className="col-md-8">
            {this.state.events.map((event, index) =>
              <Timeline className="form-group timeline-list" key={index}>
                <TimelineEvent
                  title={this.getDateFormat(event.created)}

                  createdAt={<div>
                    <span></span>{event.name}
                    <span>,&nbsp; Age: &nbsp;</span>{event.age}

                  </div>}

                  icon={<i className="fas fa-calendar-alt"></i>}
                  iconColor="#757575"
                  buttons={<span className="icon_font">

                    <Link to={'/drawing-canvas'} target='_blank' onClick={this.launchCnavs.bind(this, event)} data-tip='Canvas' data-for='canvas' ><span className="icon-span"><i className="far fa-pencil-paintbrush"></i></span>
                      <ReactTooltip id='canvas' getContent={() => { return }} />

                    </Link>

                    <span className="icon-span" data-tip='Delete' data-for='delete' onClick={this.openDialogEvent.bind(this, event.id, index)}><i className="fal fa-trash-alt"></i>
                      <ReactTooltip id='delete' getContent={() => { return }} />
                    </span>
                    <span className="icon-span" data-tip='Play' data-for='play'><i className="far fa-play-circle" aria-hidden="true"></i>
                      <ReactTooltip id='play' getContent={() => { return }} />
                    </span>


                    <span className="icon-span" data-tip='PDF' data-for='pdf' onClick={this._downloadPdf.bind(this, event.id)}><i className="fal fa-file-pdf" aria-hidden="true"></i>
                      <ReactTooltip id='pdf' getContent={() => { return }} />
                    </span>


                    <span className="icon-span" data-tip='Edit' data-for='edit' onClick={this.openEditEvent.bind(this, event)}><i className="fal fa-calendar-edit" aria-hidden="true"></i>
                      <ReactTooltip id='edit' getContent={() => { return }} />
                    </span>


                  </span>}
                  container="card"
                  style={{ boxShadow: "0 0 6px 1px rgb(189, 185, 185)", border: "1px solid #ddd", borderRadius: "3" }}
                  cardHeaderStyle={(index % 2) ? { backgroundColor: '#8bc34a', color: '#000' } : null}>
                  <p>{event.description}</p>
                  <div className="portlet-content">
  
                  </div>
                </TimelineEvent>
              </Timeline> 
            )}
          </div>

        </div>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.eventTitleHd}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="rowcol-md-10" align="center">
              <div className="form-group">
                <input type="hidden" className="form-control" defaultValue={this.state.id} name="id" ref="id" tabIndex="1" />

                <input type="text" required="required" className="form-control validate" placeholder="Name of the event" defaultValue={this.state.name} name="name" ref="name" tabIndex="2" />
              </div>
              <div className="form-group">
                <input type="number" required="required" className="form-control validate" placeholder="Age at the time of publish event" defaultValue={this.state.age} name="age" ref="age" tabIndex="3" />
              </div>
              <div className="form-group">
                <textarea className="form-control" name="description" placeholder="Description" ref="description" id="description" defaultValue={this.state.description} tabIndex="4"></textarea>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
            <button type="button" className="btn btn-success" onClick={this.addEventVo}>{this.state.eventButton}</button>
          </Modal.Footer>
        </Modal>



        <Modal className="static-modal-confirm" show={this.state.showModalDialog} onHide={this.closeDialog}>

          <Modal.Body>

            <Modal.Title>Are you sure ?</Modal.Title>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.closeDialog}>Cancel</Button>
            <Button onClick={this.confirmBtn} bsStyle="primary">Proceed</Button>
          </Modal.Footer>
        </Modal>


      </div>
    );
  }
};
export default TimeLine;