# 🔍 Logic Gate Neural Network Visualizer

A complete React-based educational tool to help users **understand how neural networks learn logical operations** like AND, OR, XOR, and more — from **truth tables** to **training visualizations**.

---

## 📌 Features

* ✅ Interactive UI to select logic gate type and number of inputs
* ✅ Auto-generate expected output for selected gate
* ✅ Visualize outputs using tables, heatmaps, and tree structures
* ✅ Build a simple neural network from scratch
* ✅ Step-by-step visualization of forward and backward propagation
* ✅ Real-time calculation of output and weight updates
* ✅ Explore learning rate and loss function impact
* ✅ Educational and open-source!

---

## 🚀 Live Preview

> Coming soon...

---

## 🧠 Steps Covered

### ✅ Step 1: Get User Input

* Choose gate type: `AND`, `OR`, `XOR`, etc.
* Select number of binary inputs (from 2 to 5)

### ✅ Step 2: Generate Expected Output Table

* Compute and display truth table
* Logic evaluation is dynamic and uses real binary operations

### ✅ Step 3: Visualize the Output

* Colored truth tables
* Heatmap representation
* Optional: PCA or scatter for input-output clustering
* Binary decision tree view using `react-d3-tree`

### 🚧 Step 4: Neural Network Generation

* Dynamically build neural network structure based on number of inputs
* Input → Hidden → Output layout
* Custom activation (ReLU, Sigmoid, etc.)

### 🚧 Step 5: Forward Propagation Visualization

* Click-through step-by-step node activation
* Show weighted input, bias addition, and activation result
* Color-coded nodes and arrows

### 🚧 Step 6: Backpropagation

* Visualize gradients and weight updates
* Error propagation node by node
* Highlight weight changes in real time

### 🚧 Step 7: Loss & Learning Rate Analysis

* Plot loss graph over epochs
* Show how learning rate affects convergence

### ✅ Step 8: Make It Public

* Publish as a GitHub project
* Optional: Deploy to Vercel / Netlify for free access

---

## 📦 Tech Stack

| Tech          | Purpose                          |
| ------------- | -------------------------------- |
| React         | Frontend UI                      |
| RxJS          | Reactive streams for user inputs |
| Recharts      | Graphs (scatter)                 |

---

## 📁 Project Structure (Planned)

> Not decided yet

---

## 🧪 To Run Locally

```bash
git clone https://github.com/prajwalgangawane/logic-gate-visualizer.git
```
```bash
cd logic-gate-visualizer
```
```bash
npm install
```
```bash
npm start
```

# ✨ Future Ideas
>Save sessions & share logic gates

>Add fuzzy logic / probabilistic gates

>Train on user-generated truth tables

# 🤝Contributing
Pull requests are welcome! Please open an issue first to discuss changes.

# 📜 License
MIT License © [Prajwal Gangawane](https://github.com/prajwalgangawane)