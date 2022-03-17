import { Dimensions } from "react-native";

const HEIGHT = Dimensions.get("screen").height;
const WIDTH = Dimensions.get("screen").width;

const history = [
  {
    date: "2022-03-07",
    action: [
      {
        heater: 1,
        fun: 0,
        status: "success",
        _id: "623095b47f83423857cbf293",
        temperature: 30,
        humidity: 30,
        fid: "623093005533f833a0561c5d",
        createdAt: "2022-02-15T14:33:30.001Z",
        updatedAt: "2022-03-15T13:33:41.001Z",
      },
      {
        heater: 1,
        fun: 0,
        status: "success",
        _id: "623095b47f83423857cbf293",
        temperature: 30,
        humidity: 30,
        fid: "623093005533f833a0561c5d",
        createdAt: "2022-01-15T11:35:12.001Z",
        updatedAt: "2022-03-15T13:33:41.001Z",
      },
      {
        heater: 1,
        fun: 0,
        status: "success",
        _id: "623095b47f83423857cbf293",
        temperature: 30,
        humidity: 30,
        fid: "623093005533f833a0561c5d",
        createdAt: "2022-03-15T13:33:41.001Z",
        updatedAt: "2022-03-15T13:33:41.001Z",
      },
      // {
      //   time: "16:15",
      //   action: "heater",
      //   temperature: 20,
      //   status: "failed",
      // },
      // {
      //   time: "15:53",
      //   action: "fun",
      //   temperature: 20,
      //   status: "failed",
      // },
      // {
      //   time: "15:50",
      //   action: "heater",
      //   temperature: 20,
      //   status: "success",
      // },
      // {
      //   time: "15:41",
      //   action: "fun",
      //   temperature: 20,
      //   status: "success",
      // },
      // {
      //   time: "15:40",
      //   action: "fun",
      //   temperature: 20,
      //   status: "failed",
      // },
      // {
      //   time: "15:33",
      //   action: "fun",
      //   temperature: 20,
      //   status: "failed",
      // },
      // {
      //   time: "15:30",
      //   action: "fun",
      //   temperature: 20,
      //   status: "failed",
      // },
      // {
      //   time: "11:49",
      //   action: "fun",
      //   temperature: 20,
      //   status: "success",
      // },
    ],
  },
  {
    date: "2020-03-12",
    action: [
      // {
      //   time: "16:30",
      //   action: "fun",
      //   temperature: 20,
      //   status: "success",
      // },
      // {
      //   time: "16:15",
      //   action: "fun",
      //   temperature: 20,
      //   status: "success",
      // },
      // {
      //   time: "15:53",
      //   action: "fun",
      //   temperature: 20,
      //   status: "failed",
      // },
      // {
      //   time: "15:50",
      //   action: "fun",
      //   temperature: 20,
      //   status: "success",
      // },
      // {
      //   time: "15:41",
      //   action: "fun",
      //   temperature: 20,
      //   status: "success",
      // },
    ],
  },
];


const diseases = [
  {
      id: 1,
      name: 'Africa Mole Cricket',
      type: 'Insect',
      image: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80',
  },
  {
      id: 2,
      name: 'Other deseas',
      type: 'Insect',
      image: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80',
  }
]

export { HEIGHT, WIDTH, history, diseases };
