import Svg, { G, Circle, Line } from "react-native-svg";

const MagnifyGlassIcon = (props) => {
  return (
    <Svg
      class="{pointer ? 'cursor-pointer' : ''}"
      xmlns="http://www.w3.org/2000/svg"
      width={props.width ? props.width : "17.6"}
      height={props.height ? props.height : "20.95"}
      viewBox="0 0 17.6 20.95"
      onPress={props.onPress}
    >
      <G id="Lupa" transform="translate(-55 -26)">
        <G
          id="Elipse_2"
          data-name="Elipse 2"
          transform="translate(55 26)"
          fill="none"
          stroke={props.color ? props.color : "#6b6860"}
          stroke-width={props.strokeWidth ? props.width : "1.5"}
        >
          <Circle cx="8.5" cy="8.5" r="8.5" stroke="none" />
          <Circle cx="8.5" cy="8.5" r="7.75" fill="none" />
        </G>
        <Line
          id="Línea_4"
          data-name="Línea 4"
          x2="4.5"
          y2="6"
          transform="translate(67.5 40.5)"
          fill="none"
          stroke={props.color ? props.color : "#6b6860"}
          stroke-width={props.strokeWidth ? props.width : "1.5"}
        />
      </G>
    </Svg>
  );
};

export default MagnifyGlassIcon;
