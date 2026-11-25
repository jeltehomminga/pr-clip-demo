import Svg, { Path } from "react-native-svg"

type LeafProps = {
  color: string
  size?: number
}

export const Leaf = ({ color, size = 28 }: LeafProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path d="M20 3C10 3 4 8 4 15c0 2 .6 3.8 1.6 5.2C7 13 11 9 16 7c-4 3-7.4 7.3-8.6 13.4C8.6 20.8 9.8 21 11 21c6 0 9-6 9-18z" fill={color} />
  </Svg>
)
