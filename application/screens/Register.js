import React,{Component} from 'react';
import {View} from 'react-native';
import BackgroundImage from '../components/BackgroundImage';
import AppButton  from '../components/AppButton';
import t from 'tcomb-form-native';
import FormValidation from '../utils/validations';
import {Card} from 'react-native-elements';
const Form = t.form.Form;
import * as firebase from 'firebase';
import Toast from 'react-native-simple-toast';

export default class Register extends Component {
  constructor () {
    super();
    this.state = {
      user: {
        email: '',
        password: ''
      }
    };
    this.samePassword = t.refinement(t.String, (s) => {
      return s === this.state.user.password
    });
    this.user = t.struct({
      email: FormValidation.email,
      password: FormValidation.password,
      confirmar_password: this.samePassword
    });
    this.options = {
      fields: {
        email: {
          help: 'Introduce tu email',
          error: 'Email incorrecto',
          autoCapitalize: 'none',
        },
        password: {
          help: 'Introduce tu password',
          error: 'Password incorrecto',
          password: true,
          secureTextEntry: true,
        },
        confirmar_password: {
          help: 'Repite tu password',
          error: 'Los password no coinciden',
          password: true,
          secureTextEntry: true,
        }
      }
    };
    this.validate = null;
  }

  register(){
    if (this.validate) {
      firebase.auth().createUserWithEmailAndPassword(this.validate.email, this.validate.password)
      .then(()=> {
        Toast.showWithGravity("Registro correcto, Bienvenido!", Toast.LONG, Toast.BOTTOM);
      })
      .catch((error) => {
        Toast.showWithGravity(error.message, Toast.LONG, Toast.BOTTOM);
      })
    }
  }

  onChange (user){
    this.setState({user});
    this.validate = this.refs.form.getValue();
  }

  render () {
    return (
      <BackgroundImage source={require('../../assets/images/login-bg.png')}>
      <View >
        <Card wrapperStyle={{paddingLeft: 10}} title="Regístrate">
          <Form
            ref="form"
            type={this.user}
            options={this.options}
            onChange={(v) => this.onChange(v)}
            value={this.state.user}
            />
            <AppButton
              bgColor="rgba(111, 38, 74, 0.7)"
              title="Registrarme "
              action={this.register.bind(this)}
              iconName="user-plus"
              iconSize={30}
              iconColor="#fff"
            />



        </Card>

      </View>


      </BackgroundImage>

    );

  }



}
