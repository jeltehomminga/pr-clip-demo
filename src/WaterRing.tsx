import { useEffect, useRef } from "react"
import { Animated, Easing } from "react-native"
import Svg, { Circle } from "react-native-svg"

const AnimatedCircle = Animated.createAnimatedComponent(Circle)

type WaterRingProps = {
  /** 1 = just watered, 0 = water now or overdue. */
  fraction: number
  color: string
  track: string
  size?: number
}

const stroke = 5

export const WaterRing = ({ fraction, color, track, size = 44 }: WaterRingProps) => {
  const progress = useRef(new Animated.Value(fraction)).current

  useEffect(() => {
    Animated.timing(progress, {
      toValue: fraction,
      duration: 700,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false, // SVG props can't run on the native driver
    }).start()
  }, [fraction, progress])

  const center = size / 2
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius

  return (
    <Svg width={size} height={size}>
      <Circle cx={center} cy={center} r={radius} stroke={track} strokeWidth={stroke} fill="none" />
      <AnimatedCircle
        cx={center}
        cy={center}
        r={radius}
        stroke={color}
        strokeWidth={stroke}
        fill="none"
        strokeLinecap="round"
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={progress.interpolate({ inputRange: [0, 1], outputRange: [circumference, 0] })}
        transform={`rotate(-90 ${center} ${center})`}
      />
    </Svg>
  )
}
