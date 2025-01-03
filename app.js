async function signPDF() {
    const formData = new FormData();
    formData.append('pdf', document.getElementById('pdfFile').files[0]);
    formData.append('p12', document.getElementById('p12File').files[0]);
    formData.append('password', document.getElementById('p12Password').value);

    try {
        const response = await fetch('/sign', {
            method: 'POST',
            body: formData
        });
        
        if (!response.ok) throw new Error('Signing failed');
        
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'signed.pdf';
        a.click();
        URL.revokeObjectURL(url);
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to sign PDF');
    }
}

// Make signPDF available globally
window.signPDF = signPDF;