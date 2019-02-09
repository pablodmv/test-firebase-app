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

export default class Login extends Component {
  constructor () {
    super();
    this.user = t.struct({
      email: FormValidation.email,
      password: FormValidation.password,
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
        }
      }
    };
  }

  login () {
    const validate = this.refs.form.getValue();
    if (validate) {
      console.log("Success");
    }

  }

  render (){
    return (
      <BackgroundImage source={require('../../assets/images/login-bg.png')}>
      <View >
        <Card wrapperStyle={{paddingLeft: 10}} title="Iniciar sesion">
          <Form
            ref="form"
            type={this.user}
            options={this.options}
            />
            <AppButton
  						bgColor="rgba(111, 38, 74, 0.7)"
  						title="Login "
  						action={this.login.bind(this)}
  						iconName="sign-in"
  						iconSize={30}
  						iconColor="#fff"
  					/>



        </Card>

      </View>


      </BackgroundImage>
    );
  }
}
