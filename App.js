import { Text, SafeAreaView, StyleSheet, TextInput, Pressable, ImageBackground, Image } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';
import Datos from './components/Datos';


export default function App() {
  const [Correo, Usuario, Password, TextAprob, Validar] = Datos();
  
  return (
    <SafeAreaView style={styles.container}>
    <ImageBackground source={require('./assets/fondo.jpg')} style={styles.background} >
      <Card style={styles.container2}>
        <Image source={require('./assets/l.png')} style= {styles.logo}>

        </Image>
        <Text style={styles.paragraph}>
          {TextAprob}
        </Text>
        <TextInput style={styles.input} onChangeText={
          (text)=>{
            Correo(text)
          }
          } placeholder="Correo"></TextInput>

        <TextInput style={styles.input} onChangeText={
          (text)=>{
            Usuario(text)
            }
          } placeholder="usuario"></TextInput>

        <TextInput style={styles.input} secureTextEntry={true} onChangeText={
          (text)=>{
            Password(text)
            }
          } placeholder="Contraseña"></TextInput>
        <Pressable style={styles.boton} onPress={Validar}>
          <Text>Subir</Text>
        </Pressable>
      </Card>
    </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  container2: {
    padding: 30,
    borderRadius: 50,
    margin: 90,
    backgroundColor: 'rgb(253,250,250)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    borderColor:'black',
    borderWidth:3,
    margin: 10,
    borderRadius: 20,
    padding: 5,
  },
  boton: {
    margin: "auto",
    borderWidth: 3,
    borderColor: "black",
    borderRadius: 5,
    width: 50,
    padding: 5,
  },
  logo: {
    width: 200,
    height: 200
  }
});
