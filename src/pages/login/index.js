import React, {useState} from "react";
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-web";
import {auth} from '../../services/firebasecon';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';



export default function Login(){

    const navigation = useNavigation();

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

/*
    function irHome(){
        
        navigation.navigate('home');
    }
*/

    async function loginUsuario(){
        
        await signInWithEmailAndPassword(auth,email,senha).then(value=>{
            alert('Logado com sucesso');
            navigation.navigate('home');
            setEmail('');
            setSenha('');
        }).catch(error=>alert(error));

    }
    //POR SER UMA REQUISIÇÂO, PRECISA DO ASYNC PARA ELE NN TRAVAR A APLICACAO
    async function cadUsuario(){
        await createUserWithEmailAndPassword(auth,email,senha).then(value=>{alert('Cadastrado com sucesso: ' + value.user.uid)}).catch(error=>alert(error));
    }


return(
<View style={styles.container}>
<Text style={styles.texto}>Pagina Login</Text>


    <TextInput style={styles.input}
    placehoder ='digite seu email' placehoderTextColor='grey'
   value={email}
   onChangeText={(value)=>{setEmail(value)}} TextInput/>

    <TextInput style={styles.input}
   placehoder ='digite seu senha' placehoderTextColor='grey' secureTextEntry ={true}
   value={senha}
   onChangeText={(value)=>{setSenha(value)}}

    TextInput/>

<TouchableOpacity style={styles.botao} onPress={()=>loginUsuario()}><Text style={styles.textobotao}>Acessar</Text></TouchableOpacity>
<TouchableOpacity style={styles.botao} onPress={()=>cadUsuario()}><Text style ={styles.textobotao}>Cadastrar</Text></TouchableOpacity>


</View>

    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    },
    texto:{
        fontSize:24
    },
    input:{
        width:'70%', height:54, borderWidth:1, fontSize:20, padding:10, marginTop:10, borderRadius:10,marginBottom:10
    },
    botao:{
        width:'50%',
        height:50,
        backgroundColor: 'blue',
        marginTop:15,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,

    },
    textobotao:{
        fontSize: 20,
        color:'#fff',
        justifyContent:'center'

    }
})




{/*

 const handleLogin = () => {
    if (email === 'admin@example.com' && password === 'password') {
      setMessage('OK');
    } else {
      setMessage('Email ou senha incorretos');
    }
  };
*/}