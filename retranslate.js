function main() {
    let dna = document.querySelector('.dna-input').value.toUpperCase();
    document.querySelector(".rna-output").value = retranslate(dna);
}

function retranslate(dna) {
    let rna = '';
    for (let i=0; i< dna.length; i++) {
        if (dna[i] === 'G') {
            rna += 'C';
        } else if (dna[i] === 'C') {
            rna += 'G';
        } else if (dna[i] === 'T') {
            rna += 'A';
        } else if (dna[i] === 'A') {
            rna += 'U';
        } else return 'DNA must contain G, C, T, A';
    }
    return rna;
}