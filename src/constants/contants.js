import { Dimensions } from "react-native";

const HEIGHT = Dimensions.get("screen").height;
const WIDTH = Dimensions.get("screen").width;

const history = [
  {
    date: "2022-03-07",
    payload: [
      {
        time: "16:30",
        action: "fun",
        temperature: 20,
        status: "success",
      },
      {
        time: "16:15",
        action: "heater",
        temperature: 20,
        status: "failed",
      },
      {
        time: "15:53",
        action: "fun",
        temperature: 20,
        status: "failed",
      },
      {
        time: "15:50",
        action: "heater",
        temperature: 20,
        status: "success",
      },
      {
        time: "15:41",
        action: "fun",
        temperature: 20,
        status: "success",
      },
      {
        time: "15:40",
        action: "fun",
        temperature: 20,
        status: "failed",
      },
      {
        time: "15:33",
        action: "fun",
        temperature: 20,
        status: "failed",
      },
      {
        time: "15:30",
        action: "fun",
        temperature: 20,
        status: "failed",
      },
      {
        time: "11:49",
        action: "fun",
        temperature: 20,
        status: "success",
      },
    ],
  },
  {
    date: "2020-03-12",
    payload: [
      {
        time: "16:30",
        action: "fun",
        temperature: 20,
        status: "success",
      },
      {
        time: "16:15",
        action: "fun",
        temperature: 20,
        status: "success",
      },
      {
        time: "15:53",
        action: "fun",
        temperature: 20,
        status: "failed",
      },
      {
        time: "15:50",
        action: "fun",
        temperature: 20,
        status: "success",
      },
      {
        time: "15:41",
        action: "fun",
        temperature: 20,
        status: "success",
      },
    ],
  },
];
export { HEIGHT, WIDTH, history };
