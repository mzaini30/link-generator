jQuery(function(){
	$('.convert').click(function(){
		if ($('[required]').val() == ''){
			swal('Nomor Whatsapp harus diisi');
		} else {
			nomor_whatsapp = $('#nomor-whatsapp').val();
			isi = $('#isi-pesan').val();
			isi = isi.replace(/ /g, '%20');
			isi = isi.replace(/:/g, '%3A');
			isi = isi.replace(/\n/g, '%0A');
			$('#hasil').val('https://api.whatsapp.com/send?phone='+nomor_whatsapp+'&text='+isi);
		}
	});
	$('.wa-input').on('keyup', function(){
		$('.wa-output').val('')
	})
});