
import React from 'react';
import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

function App() {
  const [mensagem, setMensagem] = React.useState('');

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <View style={styles.card}>
        <Text style={styles.tag}>PROJETO JAVASCRIPT</Text>

        <Text style={styles.titulo}>Olá, mundo! 👋</Text>

        <Text style={styles.descricao}>
          Seu projeto Expo está funcionando.
        </Text>

        <TouchableOpacity
          style={styles.botao}
          onPress={() =>
            setMensagem('Tudo funcionando corretamente! 🚀')
          }
        >
          <Text style={styles.textoBotao}>Clique aqui</Text>
        </TouchableOpacity>

        <Text style={styles.mensagem}>{mensagem}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f1f5f9',
    padding: 24,
  },
  card: {
    width: '100%',
    maxWidth: 480,
    padding: 32,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    alignItems: 'center',
    elevation: 4,
  },
  tag: {
    color: '#2563eb',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  titulo: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#0f172a',
    textAlign: 'center',
  },
  descricao: {
    marginTop: 12,
    color: '#64748b',
    fontSize: 16,
    textAlign: 'center',
  },
  botao: {
    marginTop: 24,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 10,
    backgroundColor: '#2563eb',
  },
  textoBotao: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  mensagem: {
    marginTop: 16,
    color: '#2563eb',
    textAlign: 'center',
  },
});

registerRootComponent(App);
