import React, { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import { BsCodeSlash } from "react-icons/bs";
import { MdHttps } from "react-icons/md";
import Graphin, {
  Utils,
  Behaviors,
  GraphinContext,
  Components,
} from "@antv/graphin";
import "./App.css";

const layout = {
  type: "graphin-force",
  minNodeSpacing: 50,
};

const data = {
  nodes: [
    {
      id: "node-0",
      label: "node-0",
      type: "graphin-circle",
      style: {
        label: {
          value: "node-0",
        },
      },
    },
    {
      id: "node-1",
      label: "node-1",
      type: "graphin-circle",
      style: {
        label: {
          value: "node-1",
        },
      },
    },
    {
      id: "node-2",
      label: "node-2",
      type: "graphin-circle",
      style: {
        label: {
          value: "node-2",
        },
      },
    },
    {
      id: "node-3",
      label: "node-3",
      type: "graphin-circle",
      style: {
        label: {
          value: "node-3",
        },
      },
    },
    {
      id: "node-4",
      label: "node-4",
      type: "graphin-circle",
      style: {
        label: {
          value: "node-4",
        },
      },
    },
    {
      id: "node-5",
      label: "node-5",
      type: "graphin-circle",
      style: {
        label: {
          value: "node-5",
        },
      },
    },
    {
      id: "node-6",
      label: "node-6",
      type: "graphin-circle",
      style: {
        label: {
          value: "node-6",
        },
      },
    },
    {
      id: "node-7",
      label: "node-7",
      type: "graphin-circle",
      style: {
        label: {
          value: "node-7",
        },
      },
    },
    {
      id: "node-8",
      label: "node-8",
      type: "graphin-circle",
      style: {
        label: {
          value: "node-8",
        },
      },
    },
    {
      id: "node-9",
      label: "node-9",
      type: "graphin-circle",
      style: {
        label: {
          value: "node-9",
        },
      },
    },
  ],
  edges: [
    {
      source: "node-0",
      target: "node-1",
      style: {
        label: {
          value: "TCP/IP",
          offset: [0, 0],
        },
      },
    },
    {
      source: "node-0",
      target: "node-2",
    },
    {
      source: "node-0",
      target: "node-3",
    },
    {
      source: "node-0",
      target: "node-4",
      label: {
        value: "SMTP",
        offset: [0, 0],
      },
      keyshape: {
        lineDash: [8, 4],
        lineWidth: 2,
      },
      animate: {
        type: "circle-running",
        repeat: true,
      },
    },
    {
      source: "node-0",
      target: "node-5",
    },
    {
      source: "node-0",
      target: "node-6",
    },
    {
      source: "node-0",
      target: "node-7",
    },
    {
      source: "node-0",
      target: "node-8",
    },
    {
      source: "node-2",
      target: "node-0",
      style: {
        label: {
          value: "UDP",
          offset: [0, 0],
        },
      },
    },
    {
      source: "node-3",
      target: "node-0",
      style: {
        label: {
          value: "UDP",
          offset: [0, 0],
        },
      },
    },
    {
      source: "node-4",
      target: "node-0",
      style: {
        label: {
          value: "SMTP",
          offset: [0, 0],
        },
        keyshape: {
          lineDash: [8, 4],
          lineWidth: 2,
        },
        animate: {
          type: "line-dash",
          // repeat: true,
        },
      },
    },
    {
      source: "node-5",
      target: "node-0",
      style: {
        keyshape: {
          lineDash: [8, 4],
          lineWidth: 2,
        },
        animate: {
          type: "circle-running",
          repeat: true,
        },
        label: {
          value: "HTTPS",
          offset: [0, 0],
        },
      },
    },
    {
      source: "node-6",
      target: "node-0",
    },
    {
      source: "node-7",
      target: "node-0",
    },
    {
      source: "node-8",
      target: "node-0",
    },
    {
      source: "node-8",
      target: "node-3",
      style: {
        label: {
          value: "SMTP",
          offset: [0, 0],
        },
      },
    },
    {
      source: "node-9",
      target: "node-0",
    },
  ],
};

const FocusItem = () => {
  const { graph } = React.useContext(GraphinContext);
  useEffect(() => {
    graph.focusItem("node-0", true);
    graph.setItemState("node-0", "selected", true);
  }, []);
  return null;
};

const { FitView, DragCanvas, Hoverable, ClickSelect } = Behaviors;
const { ContextMenu, Hull } = Components;

const shouldBegin = () => {
  return true;
};

function App() {
  const [count, setCount] = useState(0);

  const graphRef = React.createRef(null);

  const hullData = [
    {
      members: ["node-1", "node-9", "node-0", "node-7"],
      type: "round-convex",
      padding: 10,
      style: {
        fill: "#ffedb5",
        stroke: "#b29f7e",
      },
    },
    {
      members: ["node-6", "node-0", "node-9"],
      type: "smooth-convex",
      padding: 25,
    },
    {
      members: ["node-2", "node-3", "node-4"],
      type: "bubble",
      padding: 40,
      style: {
        fill: "lightgreen",
        stroke: "green",
      },
    },
    {
      members: ["node-5", "node-8", "node-4"],
      type: "bubble",
      padding: 30,
      style: {
        fill: "palevioletred",
        stroke: "red",
      },
    },
  ];

  //setting modes
  const [modes] = useState({
    default: ["collapse-expand-group"],
  });

  // refer to: https://antv.vision/graphin-1.x-site/en/docs/manual/main-concepts/events
  //   useEffect(() => {
  //     const { graph } = graphRef.current;

  //     const handleEdgeClick = (e) => {
  //       console.log("Edge Clicked!");
  //       // TODO: Implement Edge Clicks
  //       graph.on("edge:click", handleEdgeClick);
  //       return () => {
  //         //removing event handler when component unmounts
  //         graph.off("edge:click");
  //       };
  //     };
  //   }, []);

  return (
    <div className="App">
      <Graphin
        ref={graphRef}
        modes={modes}
        data={data}
        layout={layout}
        extend={{
          marker: () => {
            return [
              { name: "code", path: <BsCodeSlash /> },
              { name: "", path: <MdHttps /> },
            ];
          },
        }}
      >
        <FitView />
        {/* <ZoomCanvas disabled /> */}
        <FocusItem />
        <DragCanvas shouldBegin={shouldBegin} />
        <Hoverable bindType="node" />
        <Hoverable bindType="edge" />
        <ClickSelect />

        {/* TODO: Add Dynamic Content into the context menu */}
        {/* bindType get attached to the node/edge */}
        <ContextMenu style={{ background: "#fff" }} bindType="edge">
          {(value) => {
            console.log(value);
          }}
        </ContextMenu>

        {/* TODO: Add Dynamic Content into the context menu */}
        <ContextMenu style={{ background: "#fff" }} bindType="node">
          {(value) => {
            console.log(value);
          }}
        </ContextMenu>

        <Hull options={hullData} />
      </Graphin>
    </div>
  );
}

export default App;
