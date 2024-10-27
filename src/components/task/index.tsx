import { TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Container, TaskText } from "./styles";

type Props = {
  name: string;
  onRemove: () => void;
};

export function Task({ name, onRemove }: Props) {
  return (
    <Container>
      <TaskText>{name}</TaskText>
      <TouchableOpacity onPress={onRemove}>
        <FontAwesome name="trash-o" size={24} />
      </TouchableOpacity>
    </Container>
  );
}
