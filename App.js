import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef, } from 'react';
import { View, Icon, KeyboardAvoidingView, Button, Image, TextInput, TouchableOpacity, Text, StyleSheet, Animated, Keyboard, ImageBackground, } from 'react-native';
import { Modalize } from 'react-native-modalize';



export default function App() {

  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 80 }));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({ x: 100, y: 100 }))
  const ModalizeRef = useRef(null);

  function onOpen() {
    ModalizeRef.current?.open();
  };

  






  useEffect(() => {
    KeyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    KeyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
      })

    ]).start();

    function keyboardDidShow() {
      Animated.parallel([
        Animated.timing(logo.x, {
          toValue: 55,
          duration: 100,
        }),
        Animated.timing(logo.y, {
          toValue: 65,
          duration: 100,
        }),


      ]).start();
    }
    function keyboardDidHide() {
      Animated.parallel([
        Animated.timing(logo.x, {
          toValue: 100,
          duration: 100,
        }),
        Animated.timing(logo.y, {
          toValue: 100,
          duration: 100,
        }),


      ]).start();
    }

  })
  return (
    <KeyboardAvoidingView style={Styles.background}>
      <View style={Styles.containerLogo}>

        <Animated.Image 
        style={{
          width: logo.x,
          height: logo.y,
        }}
        source={require('./imagens/favicon.png')}/>
        
      </View>
      <Animated.View style={[Styles.container, opacity: opacity, {transform: [{translateY: offset.y}]}]}>
        <TextInput 
          style={Styles.input}
          placeholder="Email"
          autoCorrect={false}
          onChangeText={()=> {}}
        />
    
        <TextInput 
          style={Styles.input}
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={()=> {}}
          secureTextEntry={true}
          
          
        />

        <TouchableOpacity style={Styles.btnsubmit}>
          <Text style={Styles.submitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onOpen} style={Styles.btnregister}>
          <Text> Criar conta gratuita</Text>
        </TouchableOpacity>

        

        
      </Animated.View>

      <Modalize
        ref={ ModalizeRef }
        snapPoint={570}
        modalHeight={570}
        modalStyle={Styles.color}
        >
          
          
          <View style={[Styles.cadastro, { marginTop:0, backgroundColor: '#30BCED',}]}>
            <Text style={Styles.submitText2}> Cadastre-se </Text>
            
          </View>
          
          <View style={[Styles.containerModal, {marginLeft:10, }]}>
           
           <TextInput 
          style={[Styles.inputModal, {backgroundColor: '#FFF'}]}
          placeholder="Email"
          autoCorrect={false}
          onChangeText={()=> {}}/>
            
            <TextInput 
          style={[Styles.inputModal, {backgroundColor: '#FFF'}]}
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={()=> {}}
          secureTextEntry={true}/>
          
          <TextInput 
          style={[Styles.inputModal, {backgroundColor: '#FFF'}]}
          placeholder="Confirme a Senha"
          autoCorrect={false}
          onChangeText={()=> {}}
          secureTextEntry={true}/>
          </View>
             
            <View>
            <TouchableOpacity style={[Styles.botaomodal, {marginTop:210, marginLeft:25,}]}>
              <Text>Cadastrar</Text>
            </TouchableOpacity>
            </View>
          </Modalize>
          
    </KeyboardAvoidingView >
  );

}
const Styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EA0033'

  },
  botao: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 7,
    width: '70%',
    marginBottom: 80,

  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 50,
  },
  input: {
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },
  btnsubmit: {
    backgroundColor: '#30BCED',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,

  },
  submitText: {
    color: '#FFF',
    fontSize: 18,
    
  },
  submitText2: {
    color: '#000000',
    fontSize: 18,
  },
  btnregister: {
    marginTop: 10,
  },
  registerText: {
    color: '#FFF',
  },
  inputModal: {

    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },
  containerModal: {

    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: 240,
    marginTop: 50,
  },
  botaomodal: {

    backgroundColor: '#30BCED',
    width: '85%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,

  },
  color: {
    backgroundColor: '#CDD7D6'
  },
  cadastro: {
    
    alignItems: 'center',
    justifyContent: 'center',
    
  }
});