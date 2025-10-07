import { useState, useEffect } from "react";
import { ethers } from "ethers";

export default function ContractCard({ name, address, abi, actionType }) {
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);
  const [value, setValue] = useState("—");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (window.ethereum) {
      const p = new ethers.BrowserProvider(window.ethereum);
      setProvider(p);
      const c = new ethers.Contract(address, abi, p);
      setContract(c);
    }
  }, [address, abi]);

  async function handleAction() {
    if (!contract) return;
    setLoading(true);
    try {
      if (actionType === "incrementeur") {
        const tx = await contract.connect(await provider.getSigner()).incrementer();
        await tx.wait();
        const newVal = await contract.valeur();
        setValue(newVal.toString());
      } else if (actionType === "decrementeur") {
        const tx = await contract.connect(await provider.getSigner()).decrementer();
        await tx.wait();
        const newVal = await contract.valeur();
        setValue(newVal.toString());
      } else {
        const msg = await contract.dire();
        setValue(msg);
      }
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  }

  async function fetchValue() {
    if (!contract) return;
    try {
      if (actionType === "incrementeur" || actionType === "decrementeur") {
        const v = await contract.valeur();
        setValue(v.toString());
      } else {
        const msg = await contract.dire();
        setValue(msg);
      }
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    fetchValue();
  }, [contract]);

  return (
    <div className="p-4 bg-gray-800 text-white rounded-2xl shadow-md flex flex-col items-center">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-sm text-gray-400 break-all">{address}</p>
      <div className="my-2 text-xl">{value}</div>
      <button
        onClick={handleAction}
        disabled={loading}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg mt-2"
      >
        {loading ? "⏳..." : "Appeler"}
      </button>
    </div>
  );
}
