var nama = 'Ulul';
var peran = '';

if(nama == '' && peran == ''){
    console.log('Nama harus diisi!')
}
else if(typeof(nama) == 'string' && peran === 'Ksatria'){
    console.log('Selamat datang di Dunia Proxytia, ' + nama);
    console.log('Halo ' + peran + ' ' + nama + ', kamu dapat menyerang dengan senjatamu!');
}
else if(typeof(nama) == 'string' && peran === 'Tabib'){
    console.log('Selamat datang di Dunia Proxytia, ' + nama);
    console.log('Halo ' + peran + ' ' + nama + ', kamu akan membantu temanmu yang terluka.');
}
else if(typeof(nama) == 'string' && peran === 'Penyihir'){
    console.log('Selamat datang di Dunia Proxytia, ' + nama);
    console.log('Halo ' + peran + ' ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!');
}
else if(typeof(nama) == 'string' && peran !== 'Ksatria' || peran !== 'Tabib' || peran !== 'Penyihir'){
    console.log('Halo ' + nama + ', ' + 'pilih peranmu untuk memulai game')
}

