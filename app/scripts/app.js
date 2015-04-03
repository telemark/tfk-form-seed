'use strict';

var React = require('react/addons');
var doSubmitForm = require('./utils/submitform');

var App = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function() {
    return {
      personnummer: '',
      navn: '',
      adresse: '',
      klagegrunnlag: '',
      fagkode: '',
      fag: '',
      dato: '',
      skolenavn: '',
      skoleadresse: '',
      skoletelefon: '',
      skolemail: ''
    }
  },
  submitForm: function(e) {
    e.preventDefault();
    var payload = {
      personnummer: this.state.personnummer,
      navn: this.state.navn,
      adresse: this.state.adresse,
      klagegrunnlag: this.state.klagegrunnlag,
      fagkode: this.state.fagkode,
      fag: this.state.fag,
      dato: this.state.dato,
      skolenavn: this.state.skolenavn,
      skoleadresse: this.state.skoleadresse,
      skoletelefon: this.state.skoletelefon,
      skolemail: this.state.skolemail
    };
    doSubmitForm(payload, function(err, data){
      if (err) {
        console.error(err);
      } else {
        console.log('Posted!');
        console.log(data);
      }
    });
  },
  render: function(){
    return (
      <div>
      <h1>Klage på karakter</h1>
        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Personalia</legend>
          <label htmlFor="personnummer">Personnummer (11 siffer)</label>
          <input type="text" name="personnummer" placeholder="18119169298" id="personnummer" valueLink={this.linkState('personnummer')} />
            <label htmlFor="navn">Navn</label>
            <input type="text" name="navn" placeholder="Fornavn, mellomnavn og etternavn" id="navn" valueLink={this.linkState('navn')} />
            <label htmlFor="adresse">Adresse</label>
            <input type="text" name="adresse" placeholder="Gateadresse, postnummer og poststed" id="adresse" valueLink={this.linkState('adresse')} />
          </fieldset>
          <fieldset>
            <legend>Klagen gjelder</legend>
            <select name="klagegrunnlag" valueLink={this.linkState('klagegrunnlag')}>
              <option value="Eksamenskarakter skriftlig">Eksamenskarakter skriftlig</option>
              <option value="Muntlig eksamen">Muntlig eksamen</option>
              <option value="Standpunktkarakter">Standpunktkarakter</option>
              <option value="Karakter ved lokalgitt eksamen">Karakter ved lokalgitt eksamen</option>
            </select>
          </fieldset>
          <fieldset>
            <legend>Faginformasjon</legend>
            <label htmlFor="fagkode">Fagkode</label>
            <input type="text" name="fagkode" placeholder="Fagkode" id="fagkode" valueLink={this.linkState('fagkode')} />
            <label htmlFor="fag">Fag</label>
            <input type="text" name="fag" placeholder="Fag" id="fag" valueLink={this.linkState('fag')} />
            <label htmlFor="dato">Eksamensdato</label>
            <input type="date" name="dato" placeholder="Eksamensdato" id="dato" valueLink={this.linkState('dato')} />
          </fieldset>
          <fieldset>
            <legend>Skoleinformasjon</legend>
            <label htmlFor="skolenavn">Skolens navn</label>
            <input type="text" name="skolenavn" placeholder="Skolens navn" id="skolenavn" valueLink={this.linkState('skolenavn')} />
            <label htmlFor="skoleadresse">Skolens adresse</label>
            <input type="text" name="skoleadresse" placeholder="Skolens adresse" id="skoleadresse" valueLink={this.linkState('skoleadresse')} />
            <label htmlFor="skoletelefon">Skolens telefonnummer</label>
            <input type="text" name="skoletelefon" placeholder="Skolens telefonnummer" id="skoletelefon" valueLink={this.linkState('skoletelefon')} />
            <label htmlFor="skolemail">Skolens e-postadresse</label>
            <input type="text" name="skolemail" placeholder="skolemail" id="skolemail" valueLink={this.linkState('skolemail')} />
          </fieldset>
          <button className="btn">Send klage</button>
        </form>
      </div>
    );
  }
});

React.render(
  <App />,
  document.getElementById('app')
);