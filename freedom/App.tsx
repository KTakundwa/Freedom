import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { withoutANSIColorStyles } from "react-native/types_generated/Libraries/LogBox/Data/parseLogBoxLog";

// Row component for each user
const UserItem = ({
  name,
  age,
  favouritecolour,
  onDelete

 
}) => (
  <View style={styles.item}>
    <Text style={styles.name}>Name: {name}</Text>
    <Text style={styles.age}>Age: {age}</Text>
    <Text style={styles.color}>Favourite Colour: {favouritecolour}</Text>
    <TouchableOpacity style={styles.deleteButton} onPress={onDelete}> 
      <Text style= {styles.btnText}>Delete</Text>
    </TouchableOpacity>
  </View>
);

export default function App() {
  // Array of users stored in state
  const [users, setUsers] = useState([
    { id: "1", name: "Siya", age: 25},
    { id: "2", name: "Caryn", age: 30},
    { id: "3", name: "Jaco", age: 22 },
    { id: "4", name: "Mihle", age: 28},
    { id: "5", name: "Koosie", age: 12},
  ]);

  // State for input fields
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState("");
  const [newColour, setNewColour] = useState("");

  // Function to add new user
  const addUser = () => {
    if (!newName || !newAge || !newColour) return; // Require all fields
    const newUser = {
      id: (users.length + 1).toString(),
      name: newName,
      age: parseInt(newAge),
      favouritecolour: newColour,
    };
    setUsers([...users, newUser]); // Adds a new user to array
    setNewName(""); // This is used to clear the user name,age,color after input. 
    setNewAge("");
    setNewColour("");
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user=> user.id !== id))
  }
   

  return (
    <View style={styles.container}>
      <Text style={styles.title}>We UP Here!🦋</Text>

      {/* Input fields */}
      <View style={styles.inputContainer}>
        <Text>Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter name"
          value={newName}
          onChangeText={setNewName}
        />
        <Text>Age:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter age"
          value={newAge}
          onChangeText={setNewAge}
          keyboardType="numeric"
        />
        <Text>Favourite Color:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter favourite colour"
          value={newColour}
          onChangeText={setNewColour}
        />
        <View style={styles.buttonColor}>
        <Button title="Add User"  onPress={addUser}  />
          <Text style= {styles.btnText}>addUser</Text>
        
      </View>
      </View>

      {/* FlatList */}
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <UserItem
            name={item.name}
            age={item.age}
            favouritecolour={item.favouritecolour}
            onDelete={() => deleteUser(item.id)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#555",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  item: {
    backgroundColor: "green",
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    borderWidth:8, 
    borderColor: "pink",
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
  },
  age: {
    fontSize: 14,
    color: "#555",
  },
  color: {
    fontSize: 14,
    color: "#333",
  },
  deleteButton : {
    backgroundColor: "red",
    padding: 10, 
    borderRadius: 5, 
    marginTop: 10,
    alignItems: "center"
  }, 
  btnText:{
    color: "pink",
    fontWeight: "bold",
  },
  buttonColor: {
    backgroundColor: "white",
   
  }


});

