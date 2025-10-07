import { CONTRACT_ADDRESSES } from "./contracts/addresses";
import ContractCard from "./components/ContractCard";
import ABI from "./contracts/abi.json";

function App() {
  const cards = [
    { name: "Incrementeur", abi: ABI.Incrementeur, address: CONTRACT_ADDRESSES.Incrementeur, actionType: "incrementeur" },
    { name: "Decrementeur", abi: ABI.Decrementeur, address: CONTRACT_ADDRESSES.Decrementeur, actionType: "decrementeur" },
    { name: "Bonjour", abi: ABI.Dire, address: CONTRACT_ADDRESSES.Bonjour },
    { name: "Bonne Nuit", abi: ABI.Dire, address: CONTRACT_ADDRESSES.BonneNuit },
    { name: "Salut", abi: ABI.Dire, address: CONTRACT_ADDRESSES.Salut },
    { name: "TU", abi: ABI.Dire, address: CONTRACT_ADDRESSES.TUContract },
    { name: "Va", abi: ABI.Dire, address: CONTRACT_ADDRESSES.VaContract },
    { name: "Bien", abi: ABI.Dire, address: CONTRACT_ADDRESSES.BienContract },
    { name: "Oui", abi: ABI.Dire, address: CONTRACT_ADDRESSES.OuiContract },
    { name: "Non", abi: ABI.Dire, address: CONTRACT_ADDRESSES.NonContract }
  ];

  async function connectWallet() {
    if (window.ethereum) {
      await window.ethereum.request({ method: "eth_requestAccounts" });
    } else {
      alert("Installe MetaMask !");
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <h1 className="text-3xl font-bold text-center text-white mb-6">
        🔗 Appels des 10 Contrats sur Base Mainnet
      </h1>
      <div className="flex justify-center mb-8">
        <button
          onClick={connectWallet}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-xl shadow-lg"
        >
          Connecter le Wallet
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((c) => (
          <ContractCard key={c.name} {...c} />
        ))}
      </div>
    </div>
  );
}

export default App;


