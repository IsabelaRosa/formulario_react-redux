import React from 'react';
import './App.css';
import Input from './Input';
import { connect } from 'react-redux';
import { addInfo } from './actions';

const estados = ['Rio de Janeiro', 'Minas Gerais', 'Amapá', 'Amazonas', 'São Paulo', 'Ceará', 'Distrito Federal'];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      ciddade: '',
      estado: '',
      complemento: '',
      resumo: '',
      cargo: '',
      descricao: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const {target: { name, value }} = event;
    this.setState({
      [name]: value,
    })
  }

  render() {
    const { nome, email, cpf } = this.state;
    return (
      <div className="App">
        <form>
          <fieldset>
            <legend>Dados Pessoais</legend>
            <Input
              placeholderText="Nome Completo"
              name="nome"
              onChange={(e) => this.setState({nome: e.target.value})}
            />
            <br />
            <Input
              placeholderText="Email"
              name="email"
            />
            <br />
            <Input
              placeholderText="CPF"
              name="cpf"
            />
            <br />
            <Input
              placeholderText="Endereço"
              name="endereco"
            />
            <br />
            <Input
              placeholderText="Cidade"
              name="cidade"
            />
            <br />
            <select name="estado" value={this.state.estado} required>
              {estados.map((estado, index) => <option  key={index}>{estado}</option>)}
            </select>
            <legend>Complemento</legend>
            <label>Casa</label>
            <input onChange={this.handleChange} type="radio" name="complemento" value="Casa" />
            <label>Apartamento</label>
            <input onChange={this.handleChange} type="radio" name="complemento" value="Apartamento" />
          </fieldset>
          <fieldset>
            <legend>Último Emprego</legend>
            <textarea onChange={this.handleChange} name="resumo" value={this.state.resumo}  cols="20" rows="10" maxLength="1000" required placeholder="Resumo do Currículo" />
            <br />
            <input onChange={this.handleChange} name="cargo" value={this.state.cargo} type="text" placeholder="Cargo" maxLength="40" required />
            <br />
            <textarea onChange={this.handleChange} name="descricao" value={this.state.descricao} rows="5" cols="20" placeholder="Descrição do Cargo" maxLength="500" required />
          </fieldset>
          <button type="submit" onClick={() => this.props.addInfo({nome, email, cpf})}>Salvar</button>
          <button type="reset">Limpar</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addInfo: e => dispatch(addInfo(e)),
});

const mapStateToProps = state => ({
  info: state.saveState
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
