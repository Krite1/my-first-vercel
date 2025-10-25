function calculateEnergy() {
  const reactants = parseFloat(document.getElementById("reactants").value);
  const products = parseFloat(document.getElementById("products").value);

  if (isNaN(reactants) || isNaN(products)) {
    document.getElementById("result").textContent = "⚠️ Harap masukkan nilai yang valid!";
    return;
  }

  // Rumus: ΔH = Σ(entalpi produk) - Σ(entalpi reaktan)
  const deltaH = products - reactants;

  document.getElementById("result").textContent =
    `Perubahan Energi Reaksi (ΔH): ${deltaH.toLocaleString("id-ID", {
      minimumFractionDigits: 4,
      maximumFractionDigits: 4
    })} kJ/mol`;
}
