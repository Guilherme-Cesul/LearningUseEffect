import { FlatList, Alert } from "react-native";
import {
  Button,
  ButtonText,
  Container,
  CountdownText,
  Input,
  Tag,
  Wrapper,
} from "./styles";
import { useState, useEffect } from "react";

import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Task } from "../../components/task";

type Task = {
  name: string;
};

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskName, setTaskName] = useState<string>("");
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    const userTime = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown + 1);
    }, 1000);

    return () => clearInterval(userTime);
  }, []);

  function handleProductAdd() {
    if (tasks.filter(({ name }) => name === taskName).length >= 1) {
      return Alert.alert(
        "Tarefa já adicionada!",
        "Já existe uma tarefa no seu cronograma."
      );
    }
    if (taskName.length === 0) {
      return Alert.alert("Adicione uma tarefa!");
    }
    const newTask: Task = {
      name: taskName,
    };
    setTasks((prevState) => [...prevState, newTask]);
    setTaskName("");
  }

  function handleProductRemove(name: string) {
    setTasks(tasks.filter((task) => task.name !== name));
  }

  return (
    <Container>
      <Input
        placeholder="Adicione uma tarefa"
        value={taskName}
        onChangeText={setTaskName}
      />
      <Wrapper>
        <Button onPress={handleProductAdd}>
          <ButtonText>Adicionar</ButtonText>
        </Button>
        <Tag>
          <FontAwesome5 name="user-clock" size={24} color="black" />
          <CountdownText>{countdown} segundos</CountdownText>
        </Tag>
      </Wrapper>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Task
            name={item.name}
            onRemove={() => handleProductRemove(item.name)}
          />
        )}
      />
    </Container>
  );
}
