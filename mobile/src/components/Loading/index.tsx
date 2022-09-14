import { View, ActivityIndicator } from "react-native";
import { THEME } from "../../theme";
import { styles } from "./style";

const index = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={THEME.COLORS.PRIMARY} />
    </View>
  );
};

export default index;
