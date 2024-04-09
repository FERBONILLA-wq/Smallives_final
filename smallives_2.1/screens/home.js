import React, { useState } from 'react';
import { ScrollView, Text, View, StyleSheet, TextInput, Button } from 'react-native';
import { Calendar } from 'react-native-calendars';

const CalendarioScreen = () => {
  const [markedDates, setMarkedDates] = useState({
    '2024-02-10': { marked: true, dotColor: 'green', description: 'Visitar veterinario' },
    '2024-02-15': { marked: true, dotColor: 'green', description: 'Administrar medicamento' },
    '2024-02-20': { marked: true, dotColor: 'green', description: 'Control de plagas' },
  });
  const [selectedDate, setSelectedDate] = useState(null);
  const [inputText, setInputText] = useState('');
  const [registeredData, setRegisteredData] = useState([]);

  const handleDateSelect = (date) => {
    setSelectedDate(date.dateString);
  };

  const handleSaveData = async () => {
    if (selectedDate && inputText.trim() !== '') {
      try {
        // Realizar solicitud POST al servidor
        const response = await fetch('http://192.168.0.104:3000/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fechaSeleccionada: selectedDate,
            descripcion: inputText,
          }),
        });
        if (response.ok) {
          const responseData = await response.json();
          // Actualizar los datos registrados en el estado
          setMarkedDates({
            ...markedDates,
            [selectedDate]: { marked: true, dotColor: 'green', description: inputText },
          });
          setRegisteredData([...registeredData, { date: selectedDate, description: inputText }]);
          setInputText('');
        } else {
          // Manejar errores de la respuesta del servidor
          console.error('Error en la respuesta del servidor:', response.statusText);
        }
      } catch (error) {
        // Manejar errores de la solicitud
        console.error('Error al realizar la solicitud:', error);
      }
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.smallivesText}>Smallives</Text>
      <View style={styles.calendarContainer}>
        <Calendar
          markedDates={markedDates}
          theme={{
            arrowColor: 'black',
            todayTextColor: 'green',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16,
          }}
          onDayPress={handleDateSelect}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ingrese descripción"
          value={inputText}
          onChangeText={setInputText}
        />
        <Button title="Guardar" onPress={handleSaveData} />
      </View>
      <View style={styles.pendientesContainer}>
        <Text style={styles.pendientesText}>Fechas Pendientes</Text>
        {registeredData.map((data, index) => (
          <View key={index} style={styles.pendienteItem}>
            <View style={styles.pendienteBox}>
              <Text style={styles.pendienteDate}>{data.date}</Text>
              <Text style={styles.pendienteDescription}>{data.description}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  smallivesText: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 20,
    color: 'black'
  },
  calendarContainer: {
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  pendientesContainer: {
    paddingHorizontal: 20,
  },
  pendientesText: {
    fontSize: 20,
    marginBottom: 10,
  },
  pendienteItem: {
    marginBottom: 10,
  },
  pendienteBox: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    padding: 10,
  },
  pendienteDate: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  pendienteDescription: {
    fontSize: 16,
  },
});

export default CalendarioScreen;
