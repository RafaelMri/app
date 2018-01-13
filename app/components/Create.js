import React from 'react';

import {Grid} from 'react-uikit3';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import NumberFormat from 'react-number-format';

export default class Create extends React.Component {

  constructor() {

    super()

    this.state = {
      data: {
        testnet: false,
        tokenType: 'ALPHA4',
        copied: false
      }
    }

    this.handleChange = this.handleChange.bind(this);
    this.setTokenType = this.setTokenType.bind(this);
    this.setTestnet = this.setTestnet.bind(this);
    this.generateURL = this.generateURL.bind(this);

    // title: "",
    // transactionMemo: "",
    // sourceAccount: "",
    // tokenCode: "",
    // tokenCodeLong: "",
    // tokenDescription: "",
    // url: "",
    // amount: 0,
    // network: "public",
  }

  setTestnet(state) {
    var data = this.state.data;
    data.testnet = state;
    this.setState(data)
  }

  setTokenType(type) {
    var data = this.state.data
    data.tokenType = type
    this.setState(data)
  }

  handleChange(event) {
    var data = this.state.data
    data[event.target.name] = event.target.value
    this.setState(data)
  }

  generateURL(e) {
    var s = btoa(JSON.stringify(this.state.data))
    this.setState({ link: location.protocol + '//' + location.host + "/" + s })
    e.preventDefault()
  }

  onCopy() {
    console.log("Copied!")
  }

  render() {
    return (
      <Grid className="uk-child-width-1-2@m uk-flex-center uk-padding">
        <div className='uk-padding uk-light'>
          <h2><b>Create</b> <small>new Token Trust Form</small></h2>

          <h4>Instructions</h4>

          <ol>
            <li>Populate the form</li>
            <li>Copy your unique URL</li>
            <li>Share with your end users</li>
            <li>Donate</li>
          </ol>

          <form onChange={this.handleChange} onSubmit={this.generateURL} method="POST">
              <fieldset className="uk-fieldset">

                  <h3>Form Page Info</h3>

                  <div className="uk-margin-bottom">
                      <input className="uk-input" type="text" placeholder="Title" name="title" value={this.state.data.title} />
                  </div>

                  <div className="uk-margin-bottom">
                      <input className="uk-input" type="text" placeholder="Logo URL" name="logoUrl" value={this.state.data.logoUrl} />
                  </div>

                  <div className="uk-margin-bottom">
                      <input className="uk-input" type="text" placeholder="Message" name="message" value={this.state.data.message} />
                  </div>

                  <div className="uk-margin-bottom">
                      <input className="uk-input" type="text" placeholder="Company" name="company" value={this.state.data.company} />
                  </div>

                  <div className="uk-margin-bottom">
                      <input className="uk-input" type="text" placeholder="http://.." name="companyUrl" value={this.state.data.companyUrl} />
                  </div>

                  <h3>Asset Info</h3>

                  <Grid className="uk-button-group uk-margin-bottom uk-child-width-1-2@m">
                    <div>
                      <a className={ 'uk-button uk-width-1-1 ' + (!this.state.data.testnet ? 'uk-button-default' : '')} onClick={() => this.setTestnet(false)}>Public</a>
                    </div>
                    <div>
                      <a className={ 'uk-button uk-width-1-1 ' + (this.state.data.testnet ? 'uk-button-default' : '')} onClick={() => this.setTestnet(true)}>Testnet</a>
                    </div>
                  </Grid>

                  <div className="uk-margin-bottom">
                      <input className="uk-input" type="text" placeholder="Account" name="account" value={this.state.data.account} />
                  </div>


                  <Grid className="uk-button-group uk-margin-bottom uk-child-width-1-2@m">
                    <div>
                      <a className={ 'uk-button uk-width-1-1 ' + (this.state.data.tokenType=='ALPHA4' ? 'uk-button-default' : '')} onClick={() => this.setTokenType('ALPHA4')}>Alphanumeric 4</a>
                    </div>
                    <div>
                      <a className={ 'uk-button uk-width-1-1 ' + (this.state.data.tokenType=='ALPHA12' ? 'uk-button-default' : '')} onClick={() => this.setTokenType('ALPHA12')}>Alphanumeric 12</a>
                    </div>
                  </Grid>

                  <div className="uk-margin-bottom">
                      <input className="uk-input" type="text" placeholder="Token Code" name="tokenCode" value={this.state.data.tokenCode} />
                  </div>

                  <div className="uk-margin-bottom">
                      <NumberFormat thousandSeparator={true} className="uk-input" type="text" placeholder="Trust Amount" name="trustAmount" value={this.state.data.trustAmount} />
                  </div>

                  {/* <div className="uk-margin">
                      <select className="uk-select">
                          <option>Option 01</option>
                          <option>Option 02</option>
                      </select>
                  </div>

                  <div className="uk-margin">
                      <textarea className="uk-textarea" rows="5" placeholder="Textarea"></textarea>
                  </div>

                  <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                      <label><input className="uk-radio" type="radio" name="radio2" checked /> A</label>
                      <label><input className="uk-radio" type="radio" name="radio2" /> B</label>
                  </div>

                  <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                      <label><input className="uk-checkbox" type="checkbox" checked /> A</label>
                      <label><input className="uk-checkbox" type="checkbox" /> B</label>
                  </div>

                  <div className="uk-margin">
                      <input className="uk-range" type="range" value="2" min="0" max="10" step="0.1" />
                  </div> */}

                  <div className="uk-margin-bottom">
                    <button className="uk-button uk-button-primary uk-button-large uk-width-1-1"><b>Generate Unique URL</b></button>
                  </div>

              </fieldset>
          </form>

          { this.state.link && (
            <div className="uk-margin">
              <div className="uk-inline copy-field">
                  <CopyToClipboard onCopy={this.onCopy} text={this.state.link} className="uk-form-icon uk-form-icon-flip uk-form-icon-clickable" >
                    <span><i className="material-icons">&#xE14D;</i></span>
                  </CopyToClipboard>
                  <input className="uk-input uk-width-1-1" type="text" placeholder="Your unique URL" value={this.state.link} disabled />
              </div>
            </div>
          )}

          {/* <div className="uk-margin uk-margin-top">
            <Grid className="uk-alert-transparent uk-padding-small">
              <div className="uk-width-2-2">
                <input className="uk-input" type="text" placeholder="Your unique URL" value={this.state.link} disabled />
              </div>
              <div className="uk-width-1-2">
                <CopyToClipboard onCopy={this.onCopy} text={this.state.link}>
                  <button className="uk-button uk-button-default>Copy to Clipboard</button>
                </CopyToClipboard>
              </div>
            </Grid>
          </div> */}

        </div>
      </Grid>
    )
  }
}
