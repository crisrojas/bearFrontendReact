import Svg, { Line, G } from "react-native-svg";
const Burger = (props) => {
  return (
    <Svg
      class="{pointer ? 'cursor-pointer' : ''}"
      xmlns="http://www.w3.org/2000/svg"
      width="18.494"
      height="16.295"
      viewBox="0 0 18.494 16.295"
      onPress={props.onPress}
    >
      <G id="Hamburguesa" transform="translate(-5.5 -8.75)">
        <Line
          id="Línea_1"
          data-name="Línea 1"
          x2="15"
          transform="translate(5.5 9.5)"
          fill="none"
          stroke="#6b6860"
          stroke-width="1.5"
        />
        <Line
          id="Línea_2"
          data-name="Línea 2"
          x2="18.494"
          transform="translate(5.5 16.898)"
          fill="none"
          stroke="#6b6860"
          stroke-width="1.5"
        />
        <Line
          id="Línea_3"
          data-name="Línea 3"
          x2="13.5"
          transform="translate(5.5 24.295)"
          fill="none"
          stroke="#6b6860"
          stroke-width="1.5"
        />
      </G>
    </Svg>
  );
};

export default Burger;
