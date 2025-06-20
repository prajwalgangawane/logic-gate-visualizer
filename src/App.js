import "./App.css";
import { useMemo, useState } from "react";
// import { HeatMapComponent } from "@syncfusion/ej2-react-heatmap";

const defaults = {
  range: { min: 2, max: 5 },
  operator: "AND",
};

const getCharacter = (n) => String.fromCharCode(n + 65);
const generateHeaders = (n) =>
  Array.from({ length: n }, (_, i) => getCharacter(i));
const generateInputData = (n) =>
  Array.from({ length: 2 ** n }, (_, i) =>
    i.toString(2).padStart(n, "0").split("").map(Number)
  );
const generateAutoData = (n, op) =>
  generateInputData(n).map((a1) => {
    a1.push(a1.reduce((a21, a22) => eval(`${a21}${operatorSymbol[op]}${a22}`)));
    return a1;
  });

const operatorSymbol = {
  AND: "&&",
  OR: "||",
  EXOR: "^",
  NOT: "!",
};

function VisualizationSection({ number }) {
  // const [heatmapData] = useMemo(() => {
  //   const iData = generateInputData(number);
  //   console.log(iData);
  //   return [iData];
  // }, [number]);

  // const { xLabels, yLabels, data } = {
  //   xLabels: ["A", "B"],
  //   yLabels: ["00", "01", "10", "11"],
  //   data: [0, 0, 0, 1],
  // };

  return (
    <div style={{ width: "100%", overflowX: "auto" }}>
      <h3 style={{ textAlign: "center", marginBottom: "1rem" }}>
        Gate Input Heatmap (Visualization - {number} inputs)
      </h3>
      {/* <HeatMap xLabels={xLabels} yLabels={yLabels} data={data} /> */}
      {/* <HeatMapComponent dataSource={heatmapData}></HeatMapComponent> */}
    </div>
  );
}

function ExpectedGateTable({ number, operation }) {
  const [headers, databody] = useMemo(() => {
    const columnHeaders = generateHeaders(number);
    columnHeaders.push("Output");
    const dataRow = generateAutoData(number, operation);
    return [columnHeaders, dataRow];
  }, [number, operation]);

  return (
    <div>
      <Heading>{operation} Gate Table (Calculated)</Heading>
      <Table className="table-auto">
        <TableHead>
          <TableRow>
            {headers.map((header, key) => (
              <TableHeader key={key}>{header}</TableHeader>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {databody.map((row, rowKey) => (
            <TableRow key={rowKey}>
              {row.map((colVal, colKey) => (
                <TableData key={colKey}>{colVal}</TableData>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

function Heading({ children = <>NA</>, ...props }) {
  return <h2 {...props}>{children}</h2>;
}

function Table({ children = <>NA</>, ...props }) {
  return <table {...props}>{children}</table>;
}

function TableHead({ children = <>NA</>, ...props }) {
  return <thead {...props}>{children}</thead>;
}

function TableBody({ children = <>NA</>, ...props }) {
  return <tbody {...props}>{children}</tbody>;
}

function TableHeader({ children = <>NA</>, ...props }) {
  return <th {...props}>{children}</th>;
}

function TableRow({ children = <>NA</>, ...props }) {
  return <tr {...props}>{children}</tr>;
}

function TableData({ children = <>NA</>, ...props }) {
  return <td {...props}>{children}</td>;
}

function InputNumber({ value, setValue, disabled }) {
  const handleChange = (e) => {
    const raw = parseInt(e.target.value);
    if (isNaN(raw)) return value;
    const val = Math.max(defaults.range.min, Math.min(defaults.range.max, raw));
    setValue(val);
  };

  return (
    <div className="input-wrapper">
      <label className="input-label">
        Number of Inputs ({defaults.range.min}–{defaults.range.max}):
      </label>
      <input
        step={1}
        type="number"
        disabled={disabled}
        min={defaults.range.min}
        max={defaults.range.max}
        value={value}
        onChange={handleChange}
        className="input-box"
      />
    </div>
  );
}

function InputSelect({ value, setValue, setNumber }) {
  const handleChange = (e) => {
    const raw = e.target.value;
    if (!Object.keys(operatorSymbol).includes(raw)) return value;
    if (raw === "NOT") {
      setNumber(1);
    } else {
      setNumber(defaults.range.min);
    }
    setValue(raw);
  };

  return (
    <div className="input-wrapper">
      <label className="input-label">Select Logic Operation:</label>
      <select
        style={{ width: "100px" }}
        value={value}
        onChange={handleChange}
        className="input-box"
      >
        {Object.entries(operatorSymbol).map(([key, value]) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>
    </div>
  );
}

export default function App() {
  const [number, setNumber] = useState(defaults.range.min);
  const [operation, setOperation] = useState(defaults.operator);
  return (
    <div className="App">
      <header className="App-header">
        <InputSelect
          value={operation}
          setValue={setOperation}
          setNumber={setNumber}
        />
        <InputNumber
          value={number}
          setValue={setNumber}
          disabled={operation === "NOT"}
        />
        <ExpectedGateTable number={number} operation={operation} />
        <VisualizationSection number={number} />
      </header>
    </div>
  );
}
