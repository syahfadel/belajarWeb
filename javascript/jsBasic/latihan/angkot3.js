var jmlAngkot = 10, 
    noAngkot = 1, 
    angkotBeroperasi = 6;


for (noAngkot; noAngkot<= jmlAngkot; noAngkot++){
    if (noAngkot <= angkotBeroperasi){
        console.log("Angkot No. " + noAngkot + " beroperasi dengan baik.")
    } else {
        console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi.");
    }
}