import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Colors from "../../UI/colors";
import MaginfyIcon from "../../assets/svgs/magnifyglass.svg.tsx";

const SearchStack = (props) => {
  return (
    <View style={styles.searchStack}>
      <View style={styles.searchBar}>
        <View style={styles.searchBarIcon}>
          <MaginfyIcon width="10" strokeWidth="4" />
        </View>
        <TextInput
          style={styles.searchInput}
          onChangeText={props.onChangeText}
          value={props.value}
          selectionColor={Colors.searchFieldFocusedColor}
          autoFocus={true}
          placeholder="Buscar nota"
        />
      </View>
      <TouchableOpacity onPress={props.onCancelPress}>
        <Text style={styles.cancelButton}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchStack;

const styles = StyleSheet.create({
  searchStack: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  searchBar: {
    width: "80%",
    display: "flex",
    flexDirection: "row",
    backgroundColor: Colors.searchFieldBackground,
    borderRadius: 6,
    paddingLeft: 6,
  },
  searchBarIcon: {
    marginTop: 1,
  },
  searchInput: {
    height: 24,
    width: "90%",
    paddingLeft: 6,
    fontFamily: "Avenir-Regular",
  },
  cancelButton: {
    color: Colors.textBaseColor,
    fontFamily: "Avenir-Regular",
    fontSize: 12,
  },
});
