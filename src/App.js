import { Cip30Wallet as Wallet } from "@helios-lang/tx-utils"
import logo from "./logo.svg"
import "./App.css"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Helios Wallet Connect Demo</p>
        <button
          onClick={async () => {
            try {
              const handle = await window.cardano.nami.enable()
              const wallet = new Wallet(handle)

              // This line throws an error
              await wallet.utxos
              // ----------

              alert("Check console output for error message")
            } catch (e) {
              console.error(e)
            }
          }}
        >
          Connect & Fetch UTxOs
        </button>
      </header>
    </div>
  )
}

export default App
