import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  const [n1, setN1] = useState('');
  const [n2, setN2] = useState('');
  const [result, setResult] = useState(null);
  const [hist, setHist] = useState('');

  const somar = () => {

    if (n1== '' || n2== ''){
    alert ('Preencha os Campos');
    }
  else {

    const n1Value = parseInt(n1);
    const n2Value = parseInt(n2);
    const resultado = n1Value + n2Value;
    setResult(resultado);

    const historico = hist  + n1Value + ' + ' + n2Value + ' = ' + resultado + '\n';

    setHist(historico);
    setN1('');
    setN2('');
  }
  };

  const subtrair = () => {

    if (n1== '' || n2== ''){
      alert ('Preencha os Campos');
      }
    else {

    const n1Value = parseInt(n1);
    const n2Value = parseInt(n2);
    const resultado = n1Value - n2Value;
    setResult(resultado);

    const historico = hist  + n1Value + ' - ' + n2Value + ' = ' + resultado + '\n';


    setHist(historico);
    setN1('');
    setN2('');

    }
  };

  const multiplicar = () => {

    if (n1== '' || n2== ''){
      alert ('Preencha os Campos');
      }
    else {

    const n1Value = parseInt(n1);
    const n2Value = parseInt(n2);
    const resultado = n1Value * n2Value;
    setResult(resultado);

    const historico = hist  + n1Value + ' - ' + n2Value + ' = ' + resultado + '\n';


    setHist(historico);
    setN1('');
    setN2('');
    }
  };

  const dividir = () => {

    if (n1== '' || n2== ''){
      alert ('Preencha os Campos');
      }
    else {

    const n1Value = parseInt(n1);
    const n2Value = parseInt(n2);
    const resultado = n1Value / n2Value;
    setResult(resultado);

    const historico = hist  + n1Value + ' - ' + n2Value + ' = ' + resultado + '\n';


    setHist(historico);
    setN1('');
    setN2('');
    }
  };

  const potencia = () => {

    if (n1== '' || n2== ''){
      alert ('Preencha os Campos');
      }
    else {

    const n1Value = parseInt(n1);
    const n2Value = parseInt(n2);
    const resultado = (n1Value ** n2Value);
    setResult(resultado);

    const historico = hist  + n1Value + ' - ' + n2Value + ' = ' + resultado + '\n';


    setHist(historico);
    setN1('');
    setN2('');
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Digite os números:</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setN1(text)}
        value={n1}
        keyboardType="numeric"
        placeholder='Digite o primeiro número'
      />

      <TextInput
        style={styles.input}
        onChangeText={text => setN2(text)}
        value={n2}
        keyboardType="numeric"
        placeholder='Digite o segundo número'
      />

<View style={styles.containerButton}>      
      <TouchableOpacity style={styles.button} onPress={somar}>
        <Text style={styles.buttonText}>somar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={subtrair}>
        <Text style={styles.buttonText}>subtrair</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={multiplicar}>
        <Text style={styles.buttonText}>multiplicar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={dividir}>
        <Text style={styles.buttonText}>dividir</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={potencia}>
        <Text style={styles.buttonText}>Potencialização</Text>
      </TouchableOpacity>
</View>



      <Text style={styles.result}>{result}</Text>
      <Text style={styles.title}>Histórico:</Text>
      {hist !== null && (
  <ScrollView style={styles.scrollView}>
    <View style={styles.randomNumberContainer}>

      <Text style={styles.randomNumberText}> {hist}</Text>
    </View>
  </ScrollView>
)}
       <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#993399',
    alignItems: 'center',
    justifyContent: 'center',
  },

  scrollView: {
    maxHeight: 200, // Defina a altura máxima para exibição do histórico antes de rolar
  },

  containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',   
    marginTop: 20, 
    flexWrap: 'wrap',
    width: 300,

  },

  title: {
    fontSize: 35,
    marginBottom: 20,
    color: '#000',
  
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#ffffff',
    color: '#2c3e50',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
      
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 8,
    
  },
  buttonText: {
    fontSize: 18,
    color: '#ffffff',
  },
  result: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  randomNumberContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  randomNumberText: {
    fontSize: 18,
    color: '#ffffff',
  },
  imageContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 200,
  },
});